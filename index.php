<!DOCTYPE html>
<html>
  <head>
    <?php include './include/meta.php'; ?>
    
    <title>p2p系统</title>
  </head>
  <body>
    <?php include './include/header.php'; ?>
    <!-- 加上 ms-controller , 用mvvm 绑定数据 -->
    <div class="content" ms-controller="index">
      <!-- css 必须放在 content 里面 -->
      <link href="/public/css/index.css" rel="stylesheet">

      <div class="slider" id="mySlider">
        <div class="slide-group">
          <div class="slide"><img src="/public/img/banner3.jpg"></div>
          <div class="slide"><img src="/public/img/banner2.jpg"></div>
          <div class="slide"><img src="/public/img/banner1.jpg"></div>
        </div>
      </div>
      <div class="content-padded">
        <h4 class="loan-title">投资新项目周转100万续借最后一标25万</h4>
        <h4 class="loan-money">￥<i class="red">250,000</i></h4>
      </div>
      <div class="ouro-box">
        <canvas class="process" width="180px" height="180px">0%</canvas>  
        <div class="ouro-text">贷款进度</div>
      </div>
      <div class="segmented-control">
        <a class="control-item">
          <span class="item-name">年利率</span>
          <span class="tab-label">21%</span>
        </a>
        <a class="control-item">
          <span class="item-name">期限</span>
          <span class="tab-label">12个月</span>
        </a>
        <a class="control-item">
          <span class="item-name">{{ view.time }}</span>
          <span class="tab-label">2天10小时</span>
        </a>
      </div>
      <a href="##" class="btn btn-negative btn-block">我要投资</a>

      <!-- 必须加 class 为 init, 去掉type属性 必须放在 content 里面 -->
      <script src="/public/js/index.js" class="init"></script>
      <script  class="init">
        
        ;require(["av"],function(av){
            "use strict";
            var vm = av.define({
                $id : "index",
                view : {
                    time : "发标时间v"
                }
            });

            vm.scan();
        });
      </script>
    </div>
    <?php include "./include/settings.php" ?>

  </body>
</html>