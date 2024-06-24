{
  "_$ver": 1,
  "_$id": "i49nc41r",
  "_$runtime": "res://f471bf26-01bf-47a3-9482-e4e0a2a3c8bf",
  "_$type": "Scene",
  "name": "Scene2D",
  "width": 640,
  "height": 1136,
  "mouseThrough": true,
  "_$child": [
    {
      "_$id": "qsebcae7",
      "_$type": "Box",
      "name": "boxInfo",
      "width": 640,
      "height": 1000,
      "_mouseState": 2,
      "top": 0,
      "centerX": 0,
      "_$child": [
        {
          "_$id": "u84ait9q",
          "_$var": true,
          "_$type": "Label",
          "name": "labToday",
          "y": 30,
          "width": 250,
          "height": 22,
          "text": "今日获得积分：",
          "fontSize": 22,
          "color": "rgba(35, 158, 90, 1)",
          "align": "center",
          "valign": "top",
          "padding": "0,0,0,0"
        },
        {
          "_$id": "s6lpfz07",
          "_$var": true,
          "_$type": "Label",
          "name": "labTotal",
          "x": 390,
          "y": 29.999999999999982,
          "width": 250,
          "height": 22,
          "right": 0,
          "text": "总积分：",
          "fontSize": 22,
          "color": "rgba(35, 158, 90, 1)",
          "align": "center",
          "valign": "top",
          "padding": "0,0,0,0"
        },
        {
          "_$id": "udxfm6e0",
          "_$type": "Image",
          "name": "Image",
          "x": 10,
          "y": 71.34436986467789,
          "width": 620,
          "height": 862,
          "centerX": 0,
          "skin": "res://3225dc27-5bcb-446e-8b66-27df87624835",
          "color": "#ffffff"
        },
        {
          "_$id": "hysl2jha",
          "_$type": "Label",
          "name": "Label",
          "x": 35,
          "y": 88,
          "width": 120,
          "height": 25,
          "text": "项目",
          "fontSize": 25,
          "color": "#FFFFFF",
          "valign": "top",
          "padding": "0,0,0,0",
          "_$child": [
            {
              "_$id": "odraw5pq",
              "_$type": "Label",
              "name": "Label",
              "x": 235,
              "y": -4.263256414560601e-14,
              "width": 120,
              "height": 25,
              "text": "可获得积分\n",
              "fontSize": 25,
              "color": "#FFFFFF",
              "valign": "top",
              "padding": "0,0,0,0"
            },
            {
              "_$id": "fh4pikwa",
              "_$type": "Label",
              "name": "Label",
              "x": 480,
              "y": -4.263256414560601e-14,
              "width": 100,
              "height": 25,
              "text": "完成情况",
              "fontSize": 25,
              "color": "#FFFFFF",
              "valign": "top",
              "padding": "0,0,0,0"
            }
          ]
        },
        {
          "_$id": "1kzwot1k",
          "_$var": true,
          "_$type": "List",
          "name": "listItem",
          "x": 20,
          "y": 128,
          "width": 600,
          "height": 800,
          "_mouseState": 2,
          "centerX": 0,
          "itemTemplate": {
            "_$ref": "ob8vycbt",
            "_$tmpl": "itemRender"
          },
          "repeatX": 1,
          "repeatY": 20,
          "spaceY": 10,
          "scrollType": 2,
          "selectEnable": true,
          "_$child": [
            {
              "_$id": "ob8vycbt",
              "_$type": "Box",
              "name": "Box",
              "width": 600,
              "height": 50,
              "_mouseState": 2,
              "bgColor": "rgba(255, 255, 255, 1)",
              "_$child": [
                {
                  "_$id": "lu90b5rq",
                  "_$type": "Label",
                  "name": "labDesc",
                  "x": 10,
                  "y": 14,
                  "width": 120,
                  "height": 22,
                  "centerY": 0,
                  "text": "Label",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "valign": "top",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "cyoqw3d1",
                  "_$type": "Label",
                  "name": "labScore",
                  "x": 300,
                  "y": 15,
                  "width": 100,
                  "height": 22,
                  "centerY": 1,
                  "text": "10\n",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "valign": "top",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "erjcf08q",
                  "_$type": "CheckBox",
                  "name": "checkBox",
                  "x": 535,
                  "y": 9,
                  "width": 100,
                  "height": 64,
                  "scaleX": 0.5,
                  "scaleY": 0.5,
                  "_mouseState": 2,
                  "centerY": 0,
                  "skin": "res://f0c051af-cf42-4abc-82e4-59f42ac888ee",
                  "label": "",
                  "labelSize": 20,
                  "labelVAlign": "top"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}