
      const modal = document.getElementById("meuModal");

      function abrirModal() {
        modal.showModal(); // ou .show() para sem bloqueio de fundo
      }

      function fecharModal() {
        modal.close();
      }



  window.watsonAssistantChatOptions = {

    integrationID: "82f18b9c-844e-4697-830e-f5bc40fc3504", // The ID of this integration.

    region: "us-south", // The region your integration is hosted in.

    serviceInstanceID: "ba04109b-07dd-469b-bf3a-53a3a71ae680", // The ID of your service instance.

    onLoad: async (instance) => { await instance.render(); }

  };

  setTimeout(function(){

    const t=document.createElement('script');

    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";

    document.head.appendChild(t);

  });

 