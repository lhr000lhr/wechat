import { createAction, NavigationActions, Storage, delay } from '../utils'

const fakeData = [
  {
    content: '沙发！',
    images: [
      {
        url:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDy7HZaHxn15wWj6pXE4uMKAqHTC_uBgBlIzeeQSj2QaGgUzUmHg'
      },
      {
        url:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlJRALAf-76JPOLohBKzBg8Ab4Q5pWeQhF5igSfBflE_UYbqu7'
      },
      {
        url: 'http://i.ytimg.com/vi/rGWI7mjmnNk/hqdefault.jpg'
      }
    ],
    sender: {
      username: 'jport',
      nick: 'Joe Portman',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    },
    comments: [
      {
        content: 'Good.',
        sender: {
          username: 'outman',
          nick: 'Super hero',
          avatar:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
        }
      },
      {
        content: 'Like it too',
        sender: {
          username: 'inman',
          nick: 'Doggy Over',
          avatar:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
        }
      }
    ]
  },
  {
    sender: {
      username: 'snowman',
      nick: 'Coolzzz',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    images: [
      {
        url:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbXBEBAB_x5YzWUYt2o2e8Er0uLuJKmlTM-rRf0832owN-ppqVHw'
      }
    ],
    sender: {
      username: 'snowman',
      nick: 'Coolzzz',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    images: [
      {
        url:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbXBEBAB_x5YzWUYt2o2e8Er0uLuJKmlTM-rRf0832owN-ppqVHw'
      }
    ],
    sender: {
      username: 'snowman',
      nick: 'Coolzzz',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    error: 'losted'
  },
  {
    content:
      'Unlike many proprietary big data processing platform different, Spark is built on a unified abstract RDD, making it possible to deal with different ways consistent with large data processing scenarios, including MapReduce, Streaming, SQL, Machine Learning and Graph so on. To understand the Spark, you have to understand the RDD. ',
    images: [
      {
        url:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3AqhlL_Ubqa8G_usBmy3q8z0cg8JieuVb1pV2nie4vikVEP5U'
      }
    ],
    sender: {
      username: 'snowman',
      nick: 'Coolzzz',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    content: '这是第二页第一条',
    images: [
      {
        url:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDy7HZaHxn15wWj6pXE4uMKAqHTC_uBgBlIzeeQSj2QaGgUzUmHg'
      },
      {
        url:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlJRALAf-76JPOLohBKzBg8Ab4Q5pWeQhF5igSfBflE_UYbqu7'
      },
      {
        url: 'http://i.ytimg.com/vi/rGWI7mjmnNk/hqdefault.jpg'
      },
      {
        url:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQW0S4wK02z4QilNvGE9YFtoJDJtbTsoZavc3INxbD9ZvdRgfxy'
      }
    ],
    sender: {
      username: 'jport',
      nick: 'Joe Portman',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    },
    comments: [
      {
        content: 'Good.',
        sender: {
          username: 'outman',
          nick: 'Super hero',
          avatar:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
        }
      },
      {
        content: 'Like it too',
        sender: {
          username: 'inman',
          nick: 'Doggy Over',
          avatar:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
        }
      }
    ]
  },
  {
    sender: {
      username: 'snowman',
      nick: 'Coolzzz',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    images: [
      {
        url:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbXBEBAB_x5YzWUYt2o2e8Er0uLuJKmlTM-rRf0832owN-ppqVHw'
      }
    ],
    sender: {
      username: 'ceoceo',
      nick: 'Chris',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR807eOfbkuyv4N5rGGqnEUckhWZSylozxvO7HA82VzRYUVxkvv'
    }
  },
  {
    images: [
      {
        url:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbXBEBAB_x5YzWUYt2o2e8Er0uLuJKmlTM-rRf0832owN-ppqVHw'
      }
    ],
    sender: {
      username: 'snowman',
      nick: 'Coolzzz',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    error: 'illegal'
  },
  {
    error: 'WTF'
  },
  {
    error: 'WOW'
  },
  {
    content:
      "As a programmer, we should as far as possible away from the Windows system. However, the most a professional programmer, and very difficult to bypass Windows this wretched existence but in fact very real, then how to quickly build a simple set of available windows based test environment? See Qiu Juntao's blog. ",
    images: [
      {
        url:
          'https://mail.google.com/mail/u/1/?ui=2&ik=573a5ca95f&view=att&th=14878f4660e51a86&attid=0.1&disp=emb&realattid=ii_146c85172c506890&zw&atsh=1'
      }
    ],
    sender: {
      username: 'cfo',
      nick: 'Rebecca',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ70sXmZUxrBeVb7V24ilJG2EApZ60UMPFxB5WGsSlIUxxLnyaZXw'
    },
    comments: [
      {
        content: 'Good.',
        sender: {
          username: 'linkman',
          nick: 'Who am I',
          avatar:
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaXCeM5qX-v322Fkdjnjyl6PswPnEgUOlwxBFxVgnzXP1sm4m5rA'
        }
      }
    ]
  },
  {
    content: '第9条！',
    images: [
      {
        url:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDy7HZaHxn15wWj6pXE4uMKAqHTC_uBgBlIzeeQSj2QaGgUzUmHg'
      },
      {
        url:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlJRALAf-76JPOLohBKzBg8Ab4Q5pWeQhF5igSfBflE_UYbqu7'
      },
      {
        url: 'http://i.ytimg.com/vi/rGWI7mjmnNk/hqdefault.jpg'
      }
    ],
    sender: {
      username: 'jhua',
      nick: 'Joe Huang',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    },
    comments: []
  },
  {
    content: '第10条！',
    sender: {
      username: 'jhua',
      nick: 'Joe Huang',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    },
    comments: []
  },
  {
    content: '楼下保持队形，第11条',
    sender: {
      username: 'jhua',
      nick: 'Joe Huang',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    content: '第12条',
    sender: {
      username: 'jhua',
      nick: 'Joe Huang',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    content: '第13条',
    sender: {
      username: 'jhua',
      nick: 'Joe Huang',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    content: '第14条',
    sender: {
      username: 'jhua',
      nick: 'Joe Huang',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w'
    }
  },
  {
    'unknown error': 'STARCRAFT2'
  },
  {
    content:
      "- The data json will be hosted in http://thoughtworks-ios.herokuapp.com/- Nibs or storyboards are prohibited- Implement cache mechanism by you own if needed- Unit tests is appreciated.- Functional programming is appreciated- Deployment Target should be 7.0- Utilise Git for source control, for git log is the directly evidence of the development process- Utilise GCD for multi-thread operation- Only binary, framework or cocopods dependency is allowed. do not copy other developer's source code(*.h, *.m) into your project- Keep your code clean as much as possible",
    sender: {
      username: 'qsuo',
      nick: 'Louis',
      avatar: 'http://farm1.staticflickr.com/134/325376313_4ed1988001.jpg'
    }
  }
]

export default {
  namespace: 'moment',
  state: {
    refreshing: false,
    data: []
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
    refreshingStart(state, { payload }) {
      return {
        ...state,
        ...payload,
        refreshing: true
      }
    },
    refreshingEnd(state, { payload }) {
      return {
        ...state,
        ...payload,
        refreshing: false
      }
    }
  },
  effects: {
    //获取所有频道
    *allMoment({ payload }, { call, put, select }) {
      //   try {
      yield put(createAction('refreshingStart')({}))

      yield call(delay, 500)

      const data = fakeData
      yield put(createAction('updateState')({ data: data }))

      yield put(createAction('refreshingEnd')({}))
      //   } catch (error) {

      console.log(data)

      //   }
    }
  }
}
