// Méthode évènement directement en javascript
let evenements = [{
    "title": "Live coding - demo",
    "start": "2020-04-16 15:00:00",
    "end": "2020-04-16 16:00:00",
    "backgroundColor": "#839c49"
},{
    "title": "Live coding - demo2",
    "start": "2020-04-16 09:00:00",
    "end": "2020-04-16 12:00:00"
}
]

window.onload = () => {
    let elementCalendrier = document.getElementById("calendrier");

    // On instancie le calendrier
    let calendrier = new FullCalendar.Calendar(elementCalendrier, {
        // On va appeler les composants
        plugins: ['dayGrid', 'timeGrid', 'list', 'interaction'],

        // Affichage par défaut
        defaultView: 'timeGridWeek',

        // Traduction en anglais
        locale: 'fr',

        // En-tête du calendrier avec affichage à gauche, droite et au centre
        header: {
            left: 'prev, next today',
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, list'
        },
        // Traduction des boutons
        buttonText: {
            today: 'Aujourd\'hui',
            month: 'Mois',
            week: 'Semaine',
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