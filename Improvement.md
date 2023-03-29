# 改善すべき点

## プロジェクト作成時にTypeScript対応

## Eslint、Prettierのインストール

## CSSライブラリはEmotionが良さげ
### next.configをcompiler: {emotion: true}で使える。tsを使っている場合はtsconfigの"jsxImportSource": "@emotion/react"でエディタエラーがなくなる

## パーツコンポーネントはデザインのみに留めた方がよさげ
### ボタン、入力フォームなどのパーツごとのコンポーネントにはロジックを含めず、デザインのみを閉じ込めるまでに留めておいた方が後々後悔しない気がする。（多分）

# 参考
## MUIのstyleを変更する

```
import axios from "axios";
import { memo, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/material/TextField";
import { styled } from "@mui/material";

const ThreadForm = (props) => {
  const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  })
  ```