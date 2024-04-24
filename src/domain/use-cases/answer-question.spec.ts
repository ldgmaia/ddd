import { describe, expect, it } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

describe('create an answer', () => {
  it('should be able to answer a question', () => {
    const answerQuestion = new AnswerQuestionUseCase()
    const answer = answerQuestion.execute({
      content: 'New answer',
      questionId: '1',
      instructorId: '1',
    })
    expect(answer.content).toEqual('New answer')
  })

  it('should be able to answer a question3', () => {
    const answerQuestion = new AnswerQuestionUseCase()
    const answer = answerQuestion.execute({
      content: 'New answer',
      questionId: '1',
      instructorId: '1',
    })
    expect(answer.content).toEqual('New answer')
  })
})
