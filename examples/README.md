```HTML<template>
  <div class="grid-block-container">

    <div class="grid-block box-shadow" v-for="block in blocks" :key="block.id">
      <img class="img" :src="block.imgSrc" alt="">
      <h1 class="heading">{{block.heading}}</h1>
      <p class="text">{{block.text}}</p>
    </div>

  </div>
</template>,
  <div class="grid-block-container">

    <div class="grid-block box-shadow" v-for="block in blocks" :key="block.id">
      <img class="img" :src="block.imgSrc" alt="">
      <h1 class="heading">{{block.heading}}</h1>
      <p class="text">{{block.text}}</p>
    </div>

  </div>
,
``````javascript<script>
import { molecule } from '@/assets/vueMixins/localMixins';

export default {
  mixins: [molecule],
  props: {
    blocks: {
      type: Array,
      default: function () {
        return [
          { id: 0, heading: "heading", text: "text", imgSrc: "~/assets/img/avatar.png" }
        ]
      }
    }
  },
  computed: {
    
  }
}
</script>,
import { molecule } from '@/assets/vueMixins/localMixins';

export default {
  mixins: [molecule],
  props: {
    blocks: {
      type: Array,
      default: function () {
        return [
          { id: 0, heading: "heading", text: "text", imgSrc: "~/assets/img/avatar.png" }
        ]
      }
    }
  },
  computed: {
    
  }
}
,
``````SCSS<style lang="scss" scoped>
.grid-block-container {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  .grid-block {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center; 
    padding: 10px;

    .img {
      width: 100px;
    }

    .heading {
      font-size: 24px;
    }

    .text {
      font-size: 15px;
    }

  }
}

.box-shadow {
  @include block-shadow;
}
</style>,
.grid-block-container {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  .grid-block {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center; 
    padding: 10px;

    .img {
      width: 100px;
    }

    .heading {
      font-size: 24px;
    }

    .text {
      font-size: 15px;
    }

  }
}

.box-shadow {
  @include block-shadow;
}
,
```