<template>
  <div>
    <button @click="getInfo">TEST</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      currentDatas: '',
    }
  },
  methods: {
    async getInfo() {
      try {

        // Options.
        const options = {
          chain: "eth",
          address: "",
        };

        // Call.
        let infos = await this.moralis.Web3API.account.getTokenBalances(options)

        this.currentDatas = infos

        console.log(this.currentDatas)

        // Emit the events.
        this.emitter.emit('add-log', `get info from moralis`);

      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
