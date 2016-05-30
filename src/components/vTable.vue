<template>
  <section class="section section-2">
    <p class="rank-title"></p>
    <div class="rank-list">
      <div class="inner">
        <p class="list-title">
          <span class="rank">总排名</span>
          <span class="nickname">昵称</span>
          <span class="grade">积分</span>
        </p>
        <ul>
          <li class="clearfix" v-for="item in tdata">
            <span class="rank" :class="{'r-1': $index == 0, 'r-2': $index == 1, 'r-3': $index == 2}">
              <i v-text="item.iRank"></i>
            </span>
            <span class="nickname">
              <span class="word"  v-text="item.sName"></span>
            </span>
            <span class="grade" v-text="item.lScore"></span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ["tdata"],
    replace: true
  }
</script>
<style lang="scss">
  $base-font-size: 23.4375px;

  @function pxToRem($px) {
    @return $px / $base-font-size /2 * 1rem;
  }
  @mixin bg($url) {
    background:url($url) center no-repeat;
    background-size: 100% 100%;
  }

  @mixin wh($width, $height, $hasLineHeight) {
    width: pxToRem($width);
    height: pxToRem($height);

    @if $hasLineHeight == true {
      line-height: pxToRem($height);
    }
  }
  @mixin colorFont($color, $fontSize) {
    color:$color;
    font-size: pxToRem($fontSize);
  }
  .rank-list{
    position: relative;
    margin:pxToRem(30px) auto 0;
    @include wh(707px, 691px, false);
    @include bg('../assets/img/table_bg.png');
    .inner{
      padding-top:pxToRem(165px);
      padding-left:pxToRem(30px);
      padding-right:pxToRem(25px);
    }
    .list-title{
      @include colorFont(#666, 24px);
      margin-bottom:pxToRem(20px);
    }
    span{
      display:inline-block;
      text-align: center;
    }
    .rank{
      width:pxToRem(94px);
    }
    .nickname{
      width:pxToRem(415px);
    }
    .grade{
      width:pxToRem(125px);
    }
    i{
      display:inline-block;
    }
    li{
      position: relative;
      height:pxToRem(61px);

      .rank,.nickname,.grade{
        float:left;
      }
      .rank{
        @include colorFont(#fff, 24px);
        margin-top:pxToRem(-2px);
        i{
          @include wh(41px, 43px, true);
          text-align: center;
          @include bg('../assets/img/i_rank_n.png');
        }
        &.r-1{
          i{
            @include bg('../assets/img/i_rank_1.png');
          }
        }
        &.r-2{
          i{
            @include bg('../assets/img/i_rank_2.png');
          }
        }
        &.r-3{
          i{
            @include bg('../assets/img/i_rank_3.png');
          }
        }
      }
      .nickname,.grade{
        @include colorFont(#333, 24px);
        margin-top:4px!important;
      }
      .nickname{
        .word{
          width:pxToRem(258px);
        }
      }
    }
  }
  .rank-content{
    position: relative;
    margin: pxToRem(20px) auto 0;
    
    @include wh(704px,529px, false);
    @include bg('../assets/img/i_rec_bg2.png');
    p.r-p{
      text-align: center;
      @include colorFont(#999, 24px);
      padding:pxToRem(22px) 0;
    }
    ul.r-ul{
      padding-left:pxToRem(55px);
      li{
        position: relative;
        margin-bottom:pxToRem(24px);
        @include wh(604px,55px, false);
        @include bg('../assets/img/i_item_bg1.png');
        i{
          display: inline-block;
          position: absolute;
          left:pxToRem(-10px);
          top:0;
          text-align: center;
          @include colorFont(#fff, 40px);
          @include wh(58px,61px, true);
          @include bg('../assets/img/i_rank_big.png');
        }
        h3{
          @include colorFont(#333, 24px);
          padding-top:pxToRem(10px);
          padding-left:pxToRem(70px);
          width:pxToRem(526px);
          span{
            @include colorFont(#999, 24px);
          }
        }
      }
    }
    
    button.normal{
      position: absolute;
      bottom:pxToRem(-30px);
      left:50%;
      margin-left:pxToRem(-80px);
      background-color:#c99c56;
    }
  }
</style>