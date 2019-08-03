# Quick Start

## 사전 체크사항들

작성 중입니다.



## 페이지 생성

### 그리드 선택

1. 그리드 컴포넌트들 중, 지금 만들고자 하는 페이지에 적용하고 싶은 그리드를 선택

2. 그리드의 그림자 적용 여부, 배경색 등의 설정을 마친 후 페이지에 삽입

```HTML
<template>
  <DesktopGrid
   backgroundColor="'white''" 
   showShadow="'true''" 
  >
  </DesktopGrid>

</template>
```


### 컴포넌트 선택, 위치 지정

```HTML
<template>
  <Basic
    :backgroundColor="'white'" 
    :showShadow="true" 
  >
    <InputBarWithFilter
      slot="top"
      class="InputBarWithFilter"
      :width="'90%'"
    />

    <SelectboxListWithResultText 
      slot="middle"
      class="SelectboxListWithResultText"
      :width="'90%'"
      :resultText="resultText"
      :selectboxs="selectboxs"
    />

    <GridBlocks
      class="GridBlocks"
      slot="middle"
      :width="'90%'"
      :blocks="userBlocks"
    />

  </Basic>

</template>
```

3. 그리드 태그 안에 넣고 싶은 컴포넌트를 삽입. 

4. slot 속성을 통해 그리드 안에서 위치할 지점을 지정. 

5. prop을 통해 컴포넌트를 커스터마이징 시킴. 

6. prop으로 해당 컴포넌트에서 렌더링에 필요한 데이터를 넘기도록 함.


### 데이터 바인딩

7. 페이지에 fetch 속성 부여한 후 REST API를 사용하여 데이터를 GET 한 후, 해당 페이지의 이름을 한 vuex 모듈의 state에 집어넣음

8. computed 속성에 해당 vuex state를 바인딩 한 후, vuex로부터 끌어온 state를 컴포넌트들에 prop으로 바인딩

```javascript
import { mapState, mapMutations } from 'vuex';

export default {
  fetch ({$axios, store}) {
    return $axios.get("URL")
      .then(res => {
        store.commit("vuex 모듈 이름/vuex 모듈의 mutation 이름", res.data);
      }).
      // 체이닝으로 다른 데이터도 한번에 갱신시킬 수 있음
      then(() => {
        return $axios.get("URL")
        .then(res => {
          store.commit("vuex 모듈 이름/vuex 모듈의 mutation 이름", res.data);
        })
      });
  },
  computed: {
    ...mapState('vuex 모듈 이름', {
      categories: state => state.가지고 오고자 하는 state 속성 이름,
    })
  },
}


```


### EXTRA : 클래스를 통한 UI 구성

작성중입니다.


