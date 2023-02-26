export default {

      async loadDietList(context) {
          console.log("BEGIN: action -> menu/loadDiet");

          // const token = 'Bearer ' + context.rootGetters.token;
          const userId = context.rootGetters.userId;

          console.log("request to -> " + process.env.VUE_APP_API_BASE_URL + "/menu?sort=desc&orderBy=creationDate");
          console.log("saved userId " + userId)
          const response = await fetch(
            `${process.env.VUE_APP_API_BASE_URL}/diet?sort=desc&orderBy=creationDate` ,{
              headers: {
                'Content-Type': 'application/json',
                'x-request-id': 'test',
                'x-user-id': userId
                // 'Authorization': token,
              }
            }
          );
          const responseData = await response.json();
          if (!response.ok) {
            console.log("Errore nella richiesta" + response.message);
            throw new Error('Errore nel caricamento della risorsa!');
          }

        
        context.commit('setDietList', responseData.diets);
      },

      async loadDiet(context, request) { 
        console.log("BEGIN: action -> menu/loadDiet");

        // const token = 'Bearer ' + context.rootGetters.token;
        
        const dietId = context.rootGetters['diet/dietId'];

        if (!dietId) {
          throw new Error('impossibile caricare la dieta corrente, selezionarne una');
        }

        console.log("request to -> " + process.env.VUE_APP_API_BASE_URL + "/menu/" + dietId + "/" + request.day + "?group=" + request.group);

        const response = await fetch(
          `${process.env.VUE_APP_API_BASE_URL}/diet/${dietId}/${request.day}?group=${request.group}` ,{
            headers: {
              'Content-Type': 'application/json',
              'x-request-id': 'test',
              'x-user-id': 'vue-app'
              // 'Authorization': token,
            }
          }
        );
        const responseData = await response.json();

        if (!response.ok) {
          console.info("Errore nella richiesta -> errorCode: " + responseData.errorCode + " -> errorDescription: " + responseData.errorDescription );
          throw new Error(responseData.errorDescription);
        }

      context.commit('setDietGroup', responseData);
    },

    async loadCurrentDiet(context) { 
      console.log("BEGIN: action -> menu/loadCurrentDiet");

      // const token = 'Bearer ' + context.rootGetters.token;
      const dietId = context.rootGetters['diet/dietId'];

      if (!dietId) {
        throw new Error('impossibile caricare la dieta corrente, selezionarne una');
      }

      console.log("request to -> " + process.env.VUE_APP_API_BASE_URL + "/menu/" + dietId);

      const response = await fetch(
        `${process.env.VUE_APP_API_BASE_URL}/diet/${dietId}` ,{
          headers: {
            'Content-Type': 'application/json',
            'x-request-id': 'test',
            'x-user-id': 'vue-app'
            // 'Authorization': token,
          }
        }
      );
      const responseData = await response.json();

      if (!response.ok) {
        console.info("Errore nella richiesta -> errorCode: " + responseData.errorCode + " -> errorDescription: " + responseData.errorDescription );
        throw new Error(responseData.errorDescription);
      }

    context.commit('setCurrentDiet', responseData);
  },

    async changeDay (context, day) {
      console.log("BEGIN: action -> menu/changeDay");

      context.commit('setDay', day);
    },

    tryLoadDiet(context) {
      // const name = localStorage.getItem('name');
      const dietId = localStorage.getItem('dietId');

      if (dietId) {
          context.commit('setDietId', dietId);
      }
  },
}