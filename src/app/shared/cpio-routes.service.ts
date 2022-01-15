import { Injectable } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CpioRoutesService {

  private topics$ = {
    angular: [],
    javascript: [],
    codechallenge : [],
    mft: []
  };

  TopicName = {
    angular: `Angular's Corner`,
    javascript: `JavaScript`,
    codechallenge: `Code Challenge`,
    mft: `Managed File Transfer`,
  }

  getTopicName() {
    return this.TopicName;
  }

  topicsKeys = Object.keys(this.topics$);

  constructor(private scully: ScullyRoutesService) {
    this.createRoutes();
  }

  private createRoutes() {
    this.topicsKeys.forEach(key => {
      this.topics$[key] = this.scully.available$.pipe(
        map((routeList: ScullyRoute[]) => {
          return routeList.filter((route: ScullyRoute) => {
            return (route?.tags?.includes(key));
          });
        })
      );
    });
  }

  getRoutes(pageSize: number = 10): any {
    let requestedTopics$: any = {};
    let topicList = this.topics$;

    // Object.keys(this.topics$).forEach(topic => {
    this.topicsKeys.forEach(topic => {
      requestedTopics$[topic] = topicList[topic]?.pipe(take(pageSize));
    });

    return requestedTopics$;
  }

  getRelatedArticles(url: string, numRelated: number = 5) {

    return this.scully.available$.pipe(
      map((routeList: ScullyRoute[]) => {
        let currentRoute;
        let relatedRoutes = [];

        //Find route and tags under current route
        try {
          currentRoute = routeList.filter((sRoute: ScullyRoute) => sRoute?.route === url)[0];
        } catch (err) {
          console.log(err);
        }

        // match every tag of current route with other routes to list related routes
        if (currentRoute) {
          currentRoute.tags?.forEach(tag => {
            
            if(relatedRoutes.length > numRelated) { return false; }

            let relTags = routeList.filter(route => route?.route !== url 
                                                    && route?.tags?.includes(tag)
                                                    );
            if (relTags.length > 0 ) {
              relatedRoutes = [...relatedRoutes, ...relTags]; 
            }
            
          });
        }
        return new Set(relatedRoutes);
      })
    );
  }

}
