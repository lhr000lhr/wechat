import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { WingBlank, WhiteSpace } from 'antd-mobile-rn'
import _ from 'lodash'

const { height, width } = Dimensions.get('window')
const fixedEdge = 80
const picWidth = (width - fixedEdge) / 3

import Touchable from '../../../components/Touchable'

// const comments = [
//   {
//     content: 'Good.',
//     sender: {
//       username: 'outman',
//       nick: 'Super hero',
//       avatar:
//         'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlJRALAf-76JPOLohBKzBg8Ab4Q5pWeQhF5igSfBflE_UYbqu7'
//     }
//   },
//   {
//     content: 'Like it too',
//     sender: {
//       username: 'inman',
//       nick: 'Doggy Over',
//       avatar:
//         'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlJRALAf-76JPOLohBKzBg8Ab4Q5pWeQhF5igSfBflE_UYbqu7'
//     }
//   }
// ]

export const CommentModule = props => {
  const { comments } = props

  if (comments.length == 0) {
    return <View />
  }
  debugger
  return (
    <View {...props}>
      {/* <Image
        style={{ width: 75, height: 75 }}
        source={{
          uri: 'https://avatars1.githubusercontent.com/u/10321883?s=88&v=4'
        }}
      /> */}
      <View style={styles.containerStyle}>
        <WhiteSpace size="xs" />
        <WingBlank size="sm">
          {_.map(comments, (comment, index) => {
            return <CommentCell {...comment} key={index} />
          })}
        </WingBlank>
        <WhiteSpace size="xs" />
      </View>
    </View>
  )
}

const CommentCell = ({ sender, content }) => {
  return (
    <WingBlank size="md">
      <View style={commentCellstyles.containerStyle}>
        <Text
          style={commentCellstyles.senderNickname}
          onPress={() => {
            alert()
          }}
        >
          {/* 用户昵称 */}
          {sender.nick}
        </Text>

        <Text style={commentCellstyles.comment}>
          {/* 用户评论 */}
          {`: ${content}`}
        </Text>

        <WhiteSpace size="xs" />
      </View>
    </WingBlank>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,

    backgroundColor: '#f3f3f5',
    paddingTop: 2,
    paddingBottom: 2
  },

  avatarStyle: {
    width: 40,
    height: 40
  }
})

const commentCellstyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  senderNickname: {
    color: '#516794',
    fontWeight: 'bold'
  },
  comment: {
    flex: 1
  }
})

export default CommentModule
