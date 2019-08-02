<template>
  <div>
    <!-- 컴포넌트 넣는 곳 -->
    <div class="component-container">
      <div 
        :style="{'width': width, 'height': height}"
        class = "thumnail-blocks-container"
      >
        <div v-for = "block in blocks" :key = "block.id" class="thumnail-block"
          @click="clickEvent"
          :style="{'height': blockHeight, 'width': blockWidth}"
          :class="{'horizontal': isHorizontal, 'vertical': !isHorizontal}"
        >
          <div class="thumnail" :style="{'width': thumnailSectorSize, 'flex-basis': thumnailSectorMinSize}">
            <i :class="'fas fa-' + thumnailIcon"></i>
            <img :src="thumnailImgSrc"/>
          </div>

          <div class="text" :style="{'width': textSectorSize, 'flex-basis': textSectorMinSize}">
            <h4>
              <b>{{block.title}}</b>
            </h4>
            <p>
              {{block.text}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!---->

    <div class="controller-container">
      <div
        v-for="(value, key) in $props"
        v-if="type_check(value)"
        :key="key"
        class="controller"
      >
        <label class="controller-label">{{key}}</label>
        <input
          class="controller-input"
          type="text"
          :value="value"
          @keyup.enter="change_prop(key, $event)"
        />
        <!-- 이 부분은 재귀를 해야겠는데 재귀컴포넌트 만들어서 이 배열을 그쪽에 넘겨서 렌더링해야겠다. 근데 그러면 데이터 변경은 어떻하지...귀찮아지겠는데
        그냥 이 컴포넌트 자체를 설명 컴포넌트로 하고 컴포넌트 이름은 그냥 내려받아서 is로 렌더링하면 되겠네
        완전히 자동화하기는 어렵나 흠
        -->
      </div>
    </div>

    <div class="code">
      <span class="props"><{{fileName}}
        <br />
        <span
          class="prop"
          v-for="(value, key) in $props"
          v-if="type_check(value)"
          :key="key"
        >
          <!--불린일 경우 ''없애줘야 한다.-->
          &nbsp; &nbsp;:{{key}}="{{value | isBoolean}}"
          <br />
        </span>
        />
      </span>
    </div>
    
    
  </div>
</template>

<script>
// 여긴 건들지 마시오 : 믹스인
// -----------------

export default {
  data() {
    return {
      fileName: ''
    }
  },
  props: {
    width: {
      type: String,
      default: '70%'
    },
    height: {
      type: String,
      default: ''
    },
    isHorizontal: {
      type: Boolean,
      default: false
    },
    clickEvent: {
      type: Function,
      default: function () { console.log('nothing happened'); }
    },
    thumnailSectorSize: {
      type: String,
      default: ''
    },
    thumnailSectorMinSize: {
      type: String,
      default: ''
    },
    thumnailImgSrc: {
      type: String,
      default: ''
    },
    thumnailIcon: {
      type: String,
      default: ''
    },
    blockHeight: {
      type: String,
      default: ''
    },
    blockWidth: {
      type: String,
      default: ''
    },
    textSectorSize: {
      type: String,
      default: ''
    },
    textSectorMinSize: {
      type: String,
      default: ''
    },
    blocks: {
      type: Array,
      default: function () {
        return [
          {title: 'person1', text: '프론트엔드', id: 0 },
          {title: 'person2', text: '백엔드', id: 1 },
          {title: 'person1', text: '프론트엔드', id: 2 },
          {title: 'person2', text: '백엔드', id: 3 },
          {title: 'person1', text: '프론트엔드', id: 4 },
          {title: 'person2', text: '백엔드', id: 5 }
        ]
      }
    }
  },
  filters: {
    isBoolean (val) {
      if (typeof(val) === "boolean") {
        return val
      } else {
        return `'${val}'`
      }
    }
  },
  mounted() {
    const parsing1 = this.$el.baseURI.split('/');
    const parsing2 = parsing1[parsing1.length - 1].split('.');
    const result = parsing2[0][0].toUpperCase() + parsing2[0].substring(1);
    this.fileName = result;
  },
  methods: {
    testMethod () {
      console.log(this);
    },
    change_prop (key, event) {
      console.log(this[key]);
      if (typeof(this[key]) === "boolean") {
        this[key] = event.target.value === "true";
      } else {
        this[key] = event.target.value;
      }
      
      console.log(this[key]);
    },
    type_check(val) {
      if (typeof(val) === "object") {
        return false;
        
      } else {
        return true;
      }
    },
    // 빈 value 값은 안 보이게 하는 걸로
    display_check(val) {
      if (typeof(val) === "object" || val) {
        alert('nothing!')
        return false;
        
      } else {
        return true;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "atoms/atoms.scss";

.thumnail-blocks-container {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;

  .horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-flow: row;

    .thumnail {

      // ratio 곱하기 %
      // @media screen and (max-width: 960px) {
      //   min-width: 30%;
      // }

      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $blockMatchColor;
      i {
        color: white;
        font-size: 50px;
      }
      img {
        width: 50px;
      }
    }

    .text {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;      
      padding: 10px 20px 10px 20px;
      h4 {
        margin-bottom: 10px;
      }
      p {      
        font-size: 12px;
      }
    }
  }

  .vertical {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    margin: 10px;

    .thumnail {

      // ratio 곱하기 %
      // @media screen and (max-width: 960px) {
      //   min-width: 30%;
      // }

      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $blockMatchColor;
      i {
        color: white;
        font-size: 50px;
      }
      img {
        width: 50px;
      }
    }

    .text {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: center;
      
      padding: 10px 20px 10px 20px;
      h4 {
        margin-bottom: 10px;
      }
      p {      
        font-size: 12px;
      }
    }
  }  

  .thumnail-block {
    display: flex;
    cursor: pointer;
    @include block-shadow;
    background-color: white;
    width: 100%;
    margin-bottom: 20px;
    transition: 0.3s;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 10px solid $blockCategoryColor;
    &:hover {
      box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
    }
  }
}

// ------ 여기 코드 모듈화해서 임포트 하자

.controller-container {
  margin-top: 50px;
  display: flex;
  width: 100%;
  flex-flow: column;

  .controller {
    display: flex;
    margin-bottom: 10px;
    justify-content: center;

    .controller-label {
      
      width: 30%;
    }

    .controller-input {
      width: 50%;
    }
  }
}

.code {
  margin-top: 50px;
  display: flex;
  width: 100%;
  flex-flow: column;
  padding: 20px;
  background-color: #eee;
  border-radius: 10px;
  .props {
    display: flex;
    flex-flow: column;
    margin-bottom: 10px;

    .prop {

    }
  }
}

.component-container {
  border-radius: 10px;
  background-color: #eee;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

</style>
