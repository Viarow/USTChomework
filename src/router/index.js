import Vue from 'vue'
import Router from 'vue-router'
import homework from'@/components/page/Homework.vue'


Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      redirect: '/login'
    },

    {
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children:[
        {
          path: '/homework',
          component: resolve => require(['../components/page/Homework.vue'], resolve),
          meta: { title: '批改作业' },
        },

        {
          path:'/task',
          component: resolve => require(['../components/page/Task.vue'], resolve),
          meta: { title: '作业一' },
        },

        {
          path: '/members',
          component: resolve => require(['../components/page/Members.vue'], resolve),
          meta: { title: '班级成员' }
        },

        {
          path: '/files',
          component: resolve => require(['../components/page/Files.vue'], resolve),
          meta: { title: '共享文件' }
        },

        {
          path: '/notice',
          component: resolve => require(['../components/page/Notice.vue'], resolve),
          meta: { title: '班级公告' }
        },
        {
          path: '/classes',
          component: resolve => require(['../components/page/Classes.vue'], resolve),

        },
        {
          path: '/giveScores',
          component: resolve => require(['../components/page/GiveScores.vue'], resolve),

        }
      ]
    },
    {
      path: '/StudentHome',
      component: resolve => require(['../components/common/StuHome.vue'], resolve),
      meta: { title: '自述文件' },
      children:[
        {
          path: '/myHomework',
          component: resolve => require(['../components/page/StudentPort/myHomework.vue'], resolve),
          meta: { title: '我的作业' },
        },
        {
          path: '/classFiles',
          component: resolve => require(['../components/page/StudentPort/classFiles.vue'], resolve),
          meta: { title: '共享文件' }
        },

        {
          path: '/classNotice',
          component: resolve => require(['../components/page/StudentPort/classNotice.vue'], resolve),
          meta: { title: '班级公告' }
        },
        {
          path:'/myScores',
          component:resolve => require(['../components/page/StudentPort/Scores.vue'], resolve),
          meta: { title: '我的成绩' }
        },
        {
          path: '/submitHomework',
          component: resolve => require(['../components/page/StudentPort/SubmitPage.vue'], resolve),
          meta: { title: '提交作业' }
        },
      ]
    },

    {
      path: '/login',
      component: resolve => require(['../components/login/LoginForm.vue'], resolve)
    },

    {
      path: '/messages',
      component: resolve => require(['../components/page/Messages.vue'], resolve),

    },
    {
      path: '/teacherProfile',
      component: resolve => require(['../components/page/FileSetUp.vue'], resolve),

    },
    {
      path: '/studentProfile',
      component: resolve => require(['../components/page/StudentPort/myProfile.vue'], resolve),

    },
    {
      path: '/teacherRegister',
      component: resolve => require(['../components/login/RegisterForTeacher.vue'], resolve)
    },
    {
      path: '/studentRegister',
      component: resolve => require(['../components/login/RegisterForStudent.vue'], resolve)
    }

  ]
})
