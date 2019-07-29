<template>
  <div>
    <!-- 컴포넌트 넣는 곳 -->
    <div class="component-container">
      <ul class="sidebar-list-container">
        <li class="list" v-for="list in sidebarLists" :key="list.title">
          <nuxt-link :to="list.component">{{list.title}}</nuxt-link>
        </li>
      </ul>
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
        야 아직 '' 처리 안했다.
        <br />
        <span
          class="prop"
          v-for="(value, key) in $props"
          v-if="type_check(value)"
          :key="key"
        >
          <!--불린일 경우 ''없애줘야 한다.-->
          &nbsp; &nbsp;{{key}}="'{{value}}''"
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
    sidebarLists: {
      type: Array,
      default: function () {
        return [
          {id: 1, title: "링크1", compoent: "컴포넌트"},
          {id: 2, title: "링크2", compoent: "컴포넌트"},
          {id: 3, title: "링크3", compoent: "컴포넌트"},
          {id: 4, title: "링크4", compoent: "컴포넌트"},
          {id: 5, title: "링크5", compoent: "컴포넌트"}
        ]
      }
    },
    clickEvent: {
      type: Function,
      default: () => console.log('nothing happened')
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

.sidebar-list-container {
  margin-top: 20px;
  height: 70%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 14px;
  @include anchor-list-dark;
  .list {
    padding: 10px;
    width: 100%;
    @include background-color-transition($subsidebarHoverColor)
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
