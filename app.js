const app =  Vue.createApp({
    
    data() {

      return {
       
      dcolor:'', 
                 
        logs: [
             {
               date: '03-02-22',
               day: 'Thursday',
               sections: '1',
               repo : 'https://github.com/ShahIshita/Vuejs_session-1',
               progress:  '50' ,
               topics: ['Overview', 'Lifecycle', 'Directives'],
             },
        
        {
               date: '04-02-22',
               day: 'Friday',
               sections: '2',
               repo: 'https://github.com/ShahIshita/Vue-session-2',
               progress:'70' ,
               topics: ['Methods', 'Computed', 'Watch', 'Events', 'Props'],
             },
         ],
      }
   },
   methods: {
    Topiccol()
    {
      const size = 0;
      this.logs.forEach( val=> {
        if(val.topics.length > size){
           size = val.topics.length;
        }
      });
      return size;
    }
  }



 
  });

  app.mount('#app');