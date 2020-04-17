// Méthode évènement directement en javascript
let evenements = [{
    "title": "Aquagym",
    "start": "2020-04-16 15:00:00",
    "end": "2020-04-16 16:00:00",
    "backgroundColor": "#839c49"
},{
    "title": "Aquabike",
    "start": "2020-04-16 09:00:00",
    "end": "2020-04-16 12:00:00"
}
]

window.onload = () => {
    let elementCalendrier = document.getElementById("calendrier");

    // On instancie le calendrier
    let calendrier = new FullCalendar.Calendar(elementCalendrier, {
        // Hauteur de tout le calendrier
        height: 800,

        // La semaine commence le lundi et on affiche pas le dimanche
        firstDay: 1,
        hiddenDays: [0],

        // Affichage heure minimum, maximum
        minTime: "08:00:00",
        maxTime: "19:00:00",

        // On va appeler les composants
        plugins: ['dayGrid', 'timeGrid', 'list', 'interaction', 'bootstrap'],

        // Theme bootstrap par défaut
        themeSystem: 'bootstrap',

        // FontAwesome pour les icones avec le theme bootstrap
        bootstrapFontAwesome: {
          close: 'fa-times',
            prev: 'fa-arrow-left',
            next: 'fa-arrow-right'
        },

        // Affichage par défaut
        defaultView: 'timeGridWeek',

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
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, timeGridDay, list'
        },

        // footer
        footer: {
          left: 'prev, next today',
            right: 'dayGridMonth, timeGridWeek, timeGridDay, list'
        },

        // Traduction des boutons
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

        // On lache un évènement pour avoir des informations défaut : infos
        eventDrop: (infos) => {
            // Demander la confirmation
            if(!confirm("Etes-vous sûr de vouloir déplacer cet évènement ?")){
                infos.revert(); // Annuler
            }
            console.log(infos.event.start);
        },

        // On augmente ou diminu la taille
        eventResize: (infos) => {
            if(!confirm("Etes-vous sûr de bien vouloir changer les horaires ?")) {
                infos.revert(); // Annuler
            }
            console.log(infos.event.end);
        },

    })

    calendrier.render();
}