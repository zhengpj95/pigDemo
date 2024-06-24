{
  "_$ver": 1,
  "_$id": "i49nc41r",
  "_$runtime": "res://e1b33701-aa7a-405f-aa60-29418178524a",
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
          "_$id": "qxwe9kp0",
          "_$type": "Image",
          "name": "Image",
          "width": 640,
          "height": 150,
          "left": 0,
          "right": 0,
          "top": 0,
          "skin": "res://b86ab1e4-4348-47f0-96e7-771387714bfc",
          "color": "#ffffff",
          "_$child": [
            {
              "_$id": "1g92jtns",
              "_$type": "Text",
              "name": "Text",
              "width": 640,
              "height": 150,
              "text": "123\n你对美好生活的向往",
              "font": "Algerian",
              "fontSize": 23,
              "color": "#FFFFFF",
              "bold": true,
              "align": "center",
              "valign": "middle",
              "leading": 2,
              "stroke": 3
            }
          ]
        },
        {
          "_$id": "inczdnvk",
          "_$type": "Image",
          "name": "Image",
          "y": 157,
          "width": 640,
          "height": 730,
          "_mouseState": 2,
          "top": 157,
          "skin": "res://1fc7a268-7071-4e5d-88be-a125afa0e2c8",
          "color": "#ffffff",
          "_$child": [
            {
              "_$id": "l35hlafc",
              "_$var": true,
              "_$type": "List",
              "name": "listItem",
              "x": 20,
              "y": 10,
              "width": 600,
              "height": 700,
              "_mouseState": 2,
              "itemTemplate": {
                "_$ref": "cgsw4k3y",
                "_$tmpl": "itemRender"
              },
              "repeatX": 1,
              "repeatY": 12,
              "spaceY": 10,
              "scrollType": 2,
              "selectEnable": true,
              "_$child": [
                {
                  "_$id": "cgsw4k3y",
                  "_$type": "Box",
                  "name": "Box",
                  "width": 600,
                  "height": 50,
                  "bgColor": "rgba(255, 255, 255, 1)",
                  "_$child": [
                    {
                      "_$id": "2y3dd2az",
                      "_$type": "Label",
                      "name": "labDesc",
                      "x": 10.00000000000001,
                      "y": 16.000000000000085,
                      "width": 250,
                      "height": 25,
                      "text": "描述\n",
                      "fontSize": 25,
                      "color": "rgba(0, 0, 0, 1)",
                      "bold": true,
                      "valign": "middle",
                      "padding": "0,0,0,0"
                    },
                    {
                      "_$id": "3xn3comn",
                      "_$type": "Label",
                      "name": "labDay",
                      "x": 380,
                      "y": 16.000000000000085,
                      "width": 220,
                      "height": 25,
                      "right": 0,
                      "text": "n天\n",
                      "fontSize": 25,
                      "color": "rgba(0, 0, 0, 1)",
                      "bold": true,
                      "ubb": true,
                      "html": true,
                      "align": "center",
                      "valign": "middle",
                      "padding": "0,0,0,0"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}