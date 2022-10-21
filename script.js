const markRead = document.querySelector('#mark-read');
const unread = document.querySelectorAll('.unread-post');
const numberOfNotifications = document.querySelector('#number-notifications');

markRead.addEventListener('click', () => {
    numberOfNotifications.textContent = '0';
    const redDots = document.querySelectorAll('.red-dot');
    for (let i = 0; i < unread.length; i++) {

        unread[i].classList.remove('unread-post');
        unread[i].classList.add('read-post');
        unread[i].style.transitionDuration = '500ms';
        redDots[i].style.transitionDuration = '500ms';
        redDots[i].style.opacity = '0';

    }
})
