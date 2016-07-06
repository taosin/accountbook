<template>
  <div style="padding: 15px; background-color: #fff;">
    <ul class="discuss_list">
      <li class="discuss_item" v-for="comment in list">
        <div class="discuss_opr">
          <span class="media_tool_meta tips_global meta_praise" :class="{'praised': comment.has_praised}">
            <span class="praise_num">{{comment._serverData.money | currency '¥'}}</span>
          </span>
        </div>

        <div class="user_info">
          <strong class="nickname">{{comment._serverData.name}}</strong>
          <img class="avatar" :src="comment.avatar">
        </div>
        <div class="discuss_message">
          <span class="discuss_status">{{comment._serverData.remark}}</span>
          <div class="discuss_message_content">{{comment.usey}}</div>
        </div>
        <p class="discuss_extra_info">{{comment._serverData.date}}
          <a v-if="comment.is_from_me" class="discuss_del js_del" href="javascript:;" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>">删除</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getArticles } from './../service/accountService'
  export default {
    data () {
      return {
        list: []
      }
    },
    vuex: {
      getters: {
        data: state => state.articles
      },
      actions: {
        getArticles
      }
    },
    created () {
      this.getArticles()
    },
    watch: {
      data () {
        this.list = this.data
      }
    },
    methods: {
      praise (item) {
        if (!item.has_praised) {
          item.like_num++
          item.has_praised = true
          console.log(JSON.stringify(item))
        }
      }
    }
  }
</script>

<style>
  .discuss_btn_wrp {
    display: none;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: right
  }

  .btn_discuss {
    padding-left: 1.5em;
    padding-right: 1.5em
  }

  .discuss_list {
    margin-top: -5px;
    padding-bottom: 20px;
    font-size: 16px
  }

  .discuss_item {
    position: relative;
    padding-left: 45px;
    margin-top: 15px;
    border-bottom: 1px solid #f4f4f4
  }

  .discuss_item:after {
    content: "\200B";
    display: block;
    height: 0;
    clear: both
  }

  .discuss_item .user_info {
    min-height: 20px;
    overflow: hidden
  }

  .discuss_item .nickname {
    display: block;
    font-weight: 400;
    font-style: normal;
    color: #727272;
    width: 9em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal
  }

  .discuss_item .avatar {
    position: absolute;
    top: 0;
    left: 0;
    top: 3px;
    width: 35px;
    height: 35px;
    background-color: #ccc;
    vertical-align: top;
    margin-top: 0;
    border-radius: 2px;
  }

  .discuss_item .discuss_message {
    color: #3e3e3e;
    line-height: 1.5
  }

  .discuss_item .discuss_extra_info {
    color: #8c8c8c;
    font-size: 12px
  }

  .discuss_item .discuss_extra_info a {
    margin-left: .5em
  }

  .discuss_item .discuss_status {
    color: #ff7a21;
    white-space: nowrap
  }

  .discuss_item .discuss_status i {
    font-style: normal;
    margin-right: 2px
  }

  .discuss_item .discuss_opr {
    float: right
  }

  .discuss_item .discuss_opr .meta_praise {
    display: inline-block;
    text-align: right;
    padding-top: 5px;
    margin-top: -5px
  }

  .discuss_item .discuss_del {
    margin-left: .5em
  }

  .discuss_icon_tips {
    margin-bottom: 20px
  }

  .discuss_icon_tips img {
    vertical-align: middle;
    margin-left: 3px;
    margin-top: -4px
  }

  .discuss_icon_tips .icon_edit {
    width: 12px
  }

  .discuss_icon_tips .icon_access {
    width: 13px
  }

  .reply_result {
    position: relative;
    margin-top: .5em;
    padding-top: .5em;
    padding-left: .4em
  }

  .reply_result:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #dadada;
    transform-origin: 0 0;
    transform: scaleY(0.5)
  }

  .reply_result .nickname {
    position: relative;
    overflow: visible
  }

  .reply_result .nickname:before {
    content: " ";
    position: absolute;
    left: -0.4em;
    top: 50%;
    margin-top: -7px;
    width: 3px;
    height: 14px;
    background-color: #02bb00
  }

  .rich_tips.discuss_title_line {
    margin-top: 50px
  }


  .meta_praise {
    tap-highlight-color: rgba(0,0,0,0);
    outline: 0;
    min-width: 3.5em
  }

  .meta_praise .praise_num {
    display: inline-block;
    vertical-align: middle;
    font-size: 13px;
    color: #666;
  }

  .icon_praise_gray {
    height: 13px;
    vertical-align: middle;
    display: inline-block;
    background-size: 100% auto
  }

  .icon_praise_gray.praised {
    background-position: 0 -18px
  }

  .praised .icon_praise_gray {
    background-position: 0 -18px
  }
</style>
