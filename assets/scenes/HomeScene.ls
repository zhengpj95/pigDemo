{
  "_$ver": 1,
  "_$id": "22qywf8g",
  "_$runtime": "res://ce865771-c4e9-48a1-9575-7be63ddbf0d4",
  "_$type": "Scene",
  "name": "Scene2D",
  "width": 640,
  "height": 1136,
  "_$child": [
    {
      "_$id": "4mta6nnb",
      "_$var": true,
      "_$type": "List",
      "name": "iconList",
      "x": 120,
      "y": 1006,
      "width": 400,
      "height": 120,
      "_mouseState": 2,
      "bottom": 10,
      "centerX": 0,
      "itemTemplate": {
        "_$ref": "0a3634dy",
        "_$tmpl": "itemRender"
      },
      "repeatX": 3,
      "repeatY": 1,
      "spaceX": 20,
      "selectEnable": true,
      "_$child": [
        {
          "_$id": "0a3634dy",
          "_$type": "Box",
          "name": "Box",
          "width": 120,
          "height": 120,
          "_mouseState": 2,
          "_$comp": [
            {
              "_$type": "020dc04d-73a3-4945-8e96-5c0f9856e795",
              "scriptPath": "../src/scripts/ClickScale.ts",
              "mdrCall": "",
              "noScale": false,
              "stopClickPropagation": false,
              "clickInterval": false
            }
          ],
          "_$child": [
            {
              "_$id": "ctg1xxql",
              "_$type": "Sprite",
              "name": "imgSelected",
              "x": -1.4210854715202004e-14,
              "y": -1.1368683772161603e-13,
              "width": 120,
              "height": 120,
              "_gcmds": [
                {
                  "_$type": "DrawRectCmd",
                  "x": 0,
                  "y": 0,
                  "width": 1,
                  "height": 1,
                  "percent": true,
                  "lineWidth": 1,
                  "lineColor": "#000000",
                  "fillColor": "rgba(160, 122, 122, 1)"
                }
              ]
            },
            {
              "_$id": "siv9hxoq",
              "_$type": "Image",
              "name": "icon",
              "width": 120,
              "height": 120,
              "skin": "res://451df2d1-858f-4554-8fe3-b6bf6a44ea2e",
              "color": "#ffffff"
            }
          ]
        }
      ]
    }
  ]
}