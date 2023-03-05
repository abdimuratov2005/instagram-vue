<template>
  <main class="main">
    <the-body>
      <the-sidebar/>
      
      <router-view/>

      <the-homeIndecator/>
    </the-body>
  </main>
</template>

<style lang="scss">
  .main {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: #FFFFFF;
    user-select: none;
}
</style>