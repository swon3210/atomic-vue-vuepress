<template>
          <div>
            <!-- 컴포넌트 넣는 곳 -->
            <div class="component-container">
            <!---->
              
  <div class="grid-block-container">

    <div class="grid-block box-shadow" v-for="block in blocks" :key="block.id"
    :style="{'width': blockWidth, 'height': blockHeight}"
    >
      <img class="img" :src="block.imgSrc" alt="">
      <h1 class="heading">{{block.heading}}</h1>
      <p class="text">{{block.text}}</p>
    </div>

  </div>

            </div>
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
                  &nbsp; &nbsp;:{{key}}="{{value | isBoolean}}"
                  <br />
                </span>
                />
              </span>
            </div>
            
            
          </div>
        </template>

        <script>
        import { vueContent } from "./mixin/mixins.js"

export default {
          mixins: [vueContent], 
          props: {
    blockWidth: {
      type: String,
      default: ""
    },
    blockHeight: {
      type: String,
      default: ""
    },
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


        </script>

        <style lang="scss" scoped>
        @import "atoms/atoms.scss";

        
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
        