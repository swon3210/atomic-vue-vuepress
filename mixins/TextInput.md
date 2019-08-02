# Input Text

## 기존 텍스트 인풋

```scss

@mixin inputBasic  {
  border: 1px solid rgba($color: #6b6b6b, $alpha: 0.3);
  padding: 10px;
}

```

## 바닥 테두리만 있는 텍스트 인풋

```scss

@mixin inputWithBottomBorder {
  padding: 10px;
  border: none;
  border-bottom: 1px solid $inputBottomBorderColor;
}

```

## 바닥 테두리만 있는 텍스트 에어리어

```scss

@mixin bottomBorderTextarea {
  resize: none;
  padding: 10px;
  border: none;
  height: 200px;
  border-bottom: 1px solid $textareaBottomBorderColor;
}

```