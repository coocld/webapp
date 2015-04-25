<!DOCTYPE html>
<html>
  <head>
    <?php include '../include/meta.php'; ?>
    <title>个人中心</title>
  </head>
  <body>
<?php include '../include/header.php'; ?>
<div class="content">
  <ul class="table-view">
    <li class="table-view-cell media">
      <a class="navigate-right">
        <span class="media-object pull-left icon icon-person"></span>
        <div class="media-body">个人中心</div>
      </a>
    </li>
    <li class="table-view-cell media">
      <a class="navigate-right">
        <span class="media-object pull-left icon icon-star-filled"></span>
        <div class="media-body">我的收藏</div>
      </a>
    </li>
    <li class="table-view-cell media">
      <a class="navigate-right">
        <span class="media-object pull-left icon icon-info"></span>
        <div class="media-body">未读信息</div>
      </a>
    </li>
    <li class="table-view-cell media">
      <a class="navigate-right">
        <span class="media-object pull-left icon icon-share"></span>
        <div class="media-body">我的分享</div>
      </a>
    </li>
    <li class="table-view-cell media">
      <a class="navigate-right">
        <span class="media-object pull-left icon icon-gear"></span>
        <div class="media-body">个人设置</div>
      </a>
    </li>
  </ul>
</div>
<?php include "../include/settings.php" ?>
  </body>
</html>