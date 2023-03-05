import { createStore } from "vuex";

const options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
}

export default createStore({
    state: {
        dates: new Date(2023, 1, 23).toLocaleString('en-US', options),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        instagramLogo: './public/intagram-logo.svg',
        dropdown: './public/logo-dropdown.svg',
        post: './public/user-story.png',
        tegs: './public/Tags.svg',
        bookmark: './public/bookmark.svg',
        headerHomeNavMenu: [
            { id: 1, icon: './public/Icons-1.svg' },
            { id: 2, icon: './public/Icons-2.svg' },
            { id: 3, icon: './public/Icons-3.svg' }
        ],
        sidebarLight: [
            { id: 1, icon: './public/Mobile SignalLight.svg' },
            { id: 2, icon: './public/WifiLight.svg' },
            { id: 3, icon: './public/BatteryLight.svg' },
        ],
        sidebarDark: [
            { id: 1, icon: './public/Mobile SignalDark.svg' },
            { id: 2, icon: './public/WifiDark.svg' },
            { id: 3, icon: './public/BatteryDark.svg' }
        ],
        storyUsers: [
            { id: 1, avatar: './public/story-user-1.png', nickname: 'Ruffles' },
            { id: 2, avatar: './public/story-user-2.png', nickname: 'sabanok...' },
            { id: 3, avatar: './public/story-user-3.png', nickname: 'blue_bouy' },
            { id: 4, avatar: './public/story-user-4.png', nickname: 'waggles' },
            { id: 5, avatar: './public/story-user-1.png', nickname: 'Ruffles' },
            { id: 6, avatar: './public/story-user-2.png', nickname: 'sabanok...' },
            { id: 7, avatar: './public/story-user-3.png', nickname: 'blue_bouy' },
            { id: 8, avatar: './public/story-user-4.png', nickname: 'waggles' },
        ],
        userItems: [
            { id: 1, avatar: './public/story-user-1.png', menu_icon: './public/icon-more.svg' },
        ],
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})