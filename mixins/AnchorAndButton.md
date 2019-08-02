# AnchorAndButton

## 배경없이 텍스트만 있는 버튼

```scss
@mixin text-anchor-button($color) {
  background: none;
  display: inline-block;
  color: $color;
  text-decoration: none;
  border: none;
  text-align: center; 
  font-size: 15px;
  cursor: pointer;
}
```

## 마우스 올리면 배경화면 트랜지션 효과가 발동되는 버튼

```scss
@mixin border-transition-button($color) {
  background: $color;
  color:#fff;
  border:none;
  position:relative;
  font-size:1.6em;
  padding: 10px;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  &:hover{
    background:#fff;
    color: $color;

    &:before, &:after {
      width:100%;
      transition:800ms ease all;
    }

  }
  &:before, &:after {
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: $color;
    transition:400ms ease all;
  }

  &:after {
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }
}
``

