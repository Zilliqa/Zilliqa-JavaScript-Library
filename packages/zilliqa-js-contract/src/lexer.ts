//  Copyright (C) 2020 Zilliqa
//
//  This file is part of Zilliqa-Javascript-Library.
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <https://www.gnu.org/licenses/>.

export class Rule {
  pattern: RegExp;
  global: boolean
  action: () => void;
  start: number[]

  constructor(pattern: RegExp, action: () => void, start: number[]) {
    const global = pattern.global;
    // todo deal with tricky support
    this.pattern = pattern;
    this.global = global;
    this.action = action;
    this.start = start;
  }
}

export class Match {
  result: RegExpExecArray | null;
  action: () => void;
  length: number;
}

export class Token {
  name: string;
  value: string;
}

export class Lexer {
  state: number;
  index: number;
  input: string;
  rules: Rule[];
  tokens: Token[];
  retract: number;

  constructor() {
    this.state = 0;
    this.index = 0;
    this.input = '';
    this.retract = 0;
  }

  addRule() {

  }

  lex() {
    const reject = true;

    while (this.index <= this.input.length) {
      const matches = this.scan().splice(this.retract);
      const index = this.index;

    }

  }

  scan(): Match[]{
    const matches: Match[] = [];
    let index = 0;
    let state = this.state;
    let lastIndex = this.index;
    let input = this.input;

    const length = this.rules.length;

    for (let i = 0; i < length; i++ ) {
      const rule = this.rules[i];
      const start = rule.start;
      const states = start.length;

      if (!states || start.indexOf(state) >= 0) {

      }


    }

    // todo
    return matches;
  }
}
