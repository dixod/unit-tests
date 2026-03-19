import { expect } from 'chai';

import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('studentKnowledgeCheckerUtil', () => {
  it('returns true when answers match', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'B',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.equal(true);
  });

  it('returns false when number of answers is different', () => {
    const studentAnswers = {
      question1: 'A',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.equal(false);
  });

  it('returns false when one answer is wrong', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'C',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.equal(false);
  });

  it('returns false for different key order', () => {
    expect(
      checkStudentKnowledge(
        { b: 2, a: 1 },
        { a: 1, b: 2 },
      ),
    ).to.equal(false);
  });
});
