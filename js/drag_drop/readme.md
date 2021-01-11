# 字节H5面试题之Drag and Drop

1. 基础好 细节 能力增长梯度
2. 复杂特效

##  github 拖拽上传功能
1. 要给拖拽的元素,加dragable
2. 拖拽元素改变
3. drag 三个事件
    js基于事件
    on + 495(红皮书) DOM Event level
    - dragstart
    - drag
    - dragend

    drop 异步
    - dropenter 进入
    dashed ClassList.add/remove
    - dropover ->border dashed
    - dropleave 离开  

- drap + drop 良好用户体验模拟的API 比较复杂
  draggable = true 

  dragstart/drag/dragend
  dragenter/dragover/dragleave/drop