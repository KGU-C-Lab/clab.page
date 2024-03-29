/**
 * 연산과 관련된 유틸리티 함수를 모아둔 파일입니다.
 */

/**
 * 주어진 값이 숫자인지 확인합니다.
 * @param {unknown} value - 확인할 값입니다.
 * @returns {boolean} 숫자이면 true, 아니면 false를 반환합니다.
 */
export const isNumber = (value: unknown): boolean => {
  return !isNaN(Number(value));
};

/**
 * 0부터 주어진 최대값 사이의 랜덤한 정수를 반환합니다.
 * @param {number} max - 랜덤 숫자의 최대 범위 (이 값 포함)
 * @return {number} 0부터 max 사이의 랜덤 정수
 */
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * (max + 1));
};

/**
 * 천 단위로 쉼표를 추가하여 숫자를 형식화합니다.
 *
 * @param value 형식화할 숫자입니다.
 * @returns 쉼표가 추가된 형식화된 숫자입니다.
 */
export const formatComma = (value: number | string): string => {
  if (!value) {
    return '';
  }
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
