import { describe, expect, it } from 'vitest'
import type { Answer } from '../entities/answer'
import type { AnswersRepository } from '../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return
  },
}

describe('create an answer', () => {
  it('should be able to answer a question', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)
    const answer = await answerQuestion.execute({
      content: 'New answer',
      questionId: '1',
      instructorId: '1',
    })
    expect(answer.content).toEqual('New answer')
  })

  // it('should be able to answer a question3', () => {
  //   const answerQuestion = new AnswerQuestionUseCase()
  //   const answer = answerQuestion.execute({
  //     content: 'New answer',
  //     questionId: '1',
  //     instructorId: '1',
  //   })
  //   expect(answer.content).toEqual('New answer')
  // })
})
