<template>
    <header class="home__header header-home">
        <div class="header-home__logo">
            <img :src="instagramLogo">
            <div class="dropdown">
                <img :src="dropdown">
            </div>
        </div>
        <nav class="header-home__navbar navbar">
            <ul class="navbar__list">
                <li class="navbar__item" v-for="item in headerHomeNavMenu" :key="item.id">
                    <img :src="item.icon">
                </li>
            </ul>
        </nav>
    </header>
    <main class="story">
        <div class="story__container">
            <nav class="story__users users">
                <ul class="users__list">
                    <li v-for="user in storyUsers" :key="user.id">
                        <img :src="user.avatar">
                        {{ user.nickname }}
                    </li>
                </ul>
            </nav>
            <main class="user">
                <header class="header__user">
                    <nav class="user__navbar">
                        <ul class="user__list">
                            <li v-for="user in userItems" :key="user.id">
                                <div class="user__item">
                                    <img class="user__avatar" :src="user.avatar">
                                    <div class="user__name">
                                        <span>Ruffles</span>
                                        <p>Sponsored</p>
                                    </div>
                                </div>
                                <img class="user__menu" :src="user.menu_icon">
                            </li>
                        </ul>
                    </nav>
                </header>
                <div class="user__post post">
                    <img class="post__img" :src="post">
                    <div class="post__info">
                        <nav>
                            <ul>
                                <!-- <li v-for="icon in ">

                                </li> -->
                            </ul>
                            <div class="post__bookmark">
                                <img :src="bookmark">
                            </div>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            bookmark: state => state.bookmark,
            instagramLogo: state => state.instagramLogo,
            headerHomeNavMenu: state => state.headerHomeNavMenu,
            storyUsers: state => state.storyUsers,
            dropdown: state => state.dropdown,
            userItems: state => state.userItems,
            post: state => state.post,
            tegs: state => state.tegs
        })
    }
}
</script>

<style lang="scss" scoped>
.story {
    margin: 8px 0 8px 12px;
}

.header-home {
    &__logo {
        display: flex;
        .dropdown {
            position: relative;
            top: -5px;
            cursor: pointer;

            &:target {
                transform: rotate(180deg);
            }
        }
    }
}

.user {
    padding: 7px 0 7px 0;
    &__menu {
        margin: 0px 12px 0px 0px;
        cursor: pointer;
    }
    &__post{
        margin-top: 6px;
        position: relative;
        left: -12px;
        z-index: 1;
        img{
            height: 390px;
            width: 390px;
            object-fit: cover;
        }
        &::before{
            position: absolute;
            left: 12px;
            content: '';
            cursor: pointer;
            bottom: 20px;
            width: 24px;
            height: 24px;
            background: url("./public/Tags.svg");
        }
    }

    &__name {
        font-size: 12px;
        cursor: pointer;
        margin: 0px 0px 0px 8px;
    }


    &__list {
        li {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                font-weight: 800;
            }

            p {
                margin: 2px 0px 0px 0px;
            }
        }
    }

    &__avatar {
        width: 30px;
        height: 30px;
        padding: 3px;
        background: linear-gradient(#C913B9, #F9373F, #FECD00);
        border: solid 2.5px none;
        border-radius: 50%;
        cursor: pointer;

    }

    &__item {
        display: flex;
        align-items: center;
    }
}

.users {
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        display: none;
    }

    & {
        -ms-overflow-style: none;
        scrollbar-width: none
    }
    &__list {
        display: flex;

        li {
            &:not(:last-child) {
                margin: 0px 12px 0 0;
            }

            cursor: pointer;
            text-align: center;

            img {
                padding: 3px;
                background: linear-gradient(#C913B9, #F9373F, #FECD00);
                border: solid 2.5px none;
                border-radius: 50%;
            }
        }
    }
}

.header-home {
    display: flex;
    padding: 5px 12px;
    justify-content: space-between;
    align-items: center;
}

.navbar {
    &__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__item {
        &:not(:last-child) {
            margin: 0px 24px 0 0;
        }

        cursor: pointer;
    }
}
</style>