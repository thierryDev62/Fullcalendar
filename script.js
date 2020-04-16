// Méthode évènement directement en javascript
let evenements = [{
    "title": "Live coding - demo",
    "start": "2020-04-16 15:00:00",
    "end": "2020-04-16 16:00:00"
}]

window.onload = () => {
    let elementCalendrier = document.getElementById("calendrier");

    // On instancie le calendrier
    let calendrier = new FullCalendar.Calendar(elementCalendrier, {
        // On va appeler les composants
        plugins: ['dayGrid', 'timeGrid', 'list'],

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
        events: evenements
    })

    calendrier.render();
}