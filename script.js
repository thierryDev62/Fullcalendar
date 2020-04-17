// Méthode évènement directement en javascript
let evenements = [{
    "title": "Aquagym",
    "start": "2020-04-17 15:00:00",
    "end": "2020-04-17 16:00:00",
    "description": "Jacques Ternier",
    "backgroundColor": "#839c49",
},{
    "title": "Aquabike",
    "start": "2020-04-16",
    "end": "2020-04-16",
}
]

window.onload = () => {
    let elementCalendrier = document.getElementById("calendrier");
    let Draggable = FullCalendarInteraction.Draggable;

    let containerEl = document.getElementById('external-events');
    let checkBox = document.getElementById('drop-remove');

    // Initialisation de la sidebar
    new Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function(eventEl) {
            return {
                title: eventEl.innerText
            };
        }
    });



    // On instancie le calendrier
    let calendrier = new FullCalendar.Calendar(elementCalendrier, {
        // On va appeler les composants
        plugins: ['dayGrid', 'timeGrid', 'list', 'interaction', 'bootstrap'],
        // Hauteur de tout le calendrier
        height: 800,

        // La semaine commence le lundi et on affiche pas le dimanche
        firstDay: 1,
        hiddenDays: [0],

        // Noms de jour et de semaine cliquables
        navLinks: true,

        // Affichage des jours en entier
        columnHeaderFormat: {
            weekday: 'long'
        },

        // Affichage heure minimum, maximum
        minTime: "08:00:00",
        maxTime: "19:00:00",


        // Theme bootstrap par défaut
        themeSystem: 'bootstrap',

        // FontAwesome pour les icones avec le theme bootstrap
        bootstrapFontAwesome: {
          close: 'fa-times',
            prev: 'fa-arrow-left',
            next: 'fa-arrow-right'
        },

        // Affichage par défaut + mettre en évidence au clic
        defaultView: 'timeGridWeek',
        selectable: true,

        // Traduction en français
        locale: 'fr',

        // Format du titre
        titleFormat: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },

        // En-tête du calendrier avec affichage à gauche, droite et au centre
        header: {
            left: 'prev, next today',
            center: 'title, addEventButton',
            right: 'dayGridMonth, timeGridWeek, timeGridDay, list'
        },

        // Ajouter un évènement

        customButtons: {
          addEventButton: {
              text: 'Ajouter une activité',
              click: function() {
                  let dateJ = prompt("Saisir le jour en chiffre");
                  let dateM = prompt("Saisir le mois en chiffre");
                  let dateA = prompt("Saisir l'année en chiffre");

                  let dateEntiere = dateA + "-" + dateM + "-" + dateJ;

                  let date = new Date(dateEntiere + 'T00:00:00');
                    console.log(date);
                  // Test si la date est valide
                  if(!isNaN(date.valueOf())) {
                      calendrier.addEvent({
                          title: 'Mon activité',
                          start: date,
                          allDay: true
                      });
                      alert('Super. Maintenant mettez à jour la base de données');
                  } else {
                      alert('La date n\'est pas valide');
                  }
              }
          }
        },

        // footer
        footer: {
          left: 'prev, next today',
            right: 'dayGridMonth, timeGridWeek, timeGridDay, list'
        },

        // Traduction des boutons et du texte
        allDayText: 'Semaine',
        buttonText: {
            today: 'Aujourd\'hui',
            month: 'Mois',
            week: 'Semaine',
            day: 'Journée',
            list: 'liste'
        },
        // Injection des évènements
        events: evenements,


        //Savoir à quel moment on est - Affiche un trait rouge à l'endroit où on se situe
        nowIndicator: true,

        // Pour pouvoir déplacer les évènements et les redimensionner
        editable: true,
        droppable: true,
        drop: function(info) {
            console.log(info);
            if(checkBox.checked) {

                info.draggedEl.parentNode.removeChild(info.draggedEl);
            }
        },

        // On lache un évènement pour avoir des informations défaut : infos
        eventDrop: (infos) => {
            // Demander la confirmation
            /*if(!confirm("Etes-vous sûr de vouloir déplacer cet évènement ?")){
                infos.revert(); // Annuler
            }*/
            console.log(infos);
            console.log("Départ" + infos.event.start + " " + "Fin" + infos.event.end);
        },

        // On augmente ou diminu la taille
        eventResize: (infos) => {
            /*if(!confirm("Etes-vous sûr de bien vouloir changer les horaires ?")) {
                infos.revert(); // Annuler
            }*/
            console.log("Départ " + infos.event.start + " " + "Fin " + infos.event.end);
        },

    })

    calendrier.render();
}