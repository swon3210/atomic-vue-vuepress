# Icon

## 배경색이 없는 기본 아이콘

```scss

@mixin inputBasic  {
  border: 1px solid rgba($color: #6b6b6b, $alpha: 0.3);
  padding: 10px;
}

```

## 배경색이 있는 아이콘

```scss

@mixin inputIconWithBackgroundColor ($backgroundColor) {
  background-color: $backgroundColor;
  color: white;
  padding: 10px;
  border: none;
}

```