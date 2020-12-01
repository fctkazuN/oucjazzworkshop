import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

export type MemberType = {
  name: string;
  kana: string;
  inst: string;
  entry: string;
  role: string;
};

type RoleType = "部長" | "副部長" | "会計" | "PA隊長";

export const roles = ["部長", "副部長", "会計", "PA隊長"];

type NormalLevelType = "４年生" | "３年生" | "２年生" | "１年生";

export type LevelType = "４役" | NormalLevelType;

export const levels: LevelType[] = [
  "４役",
  "４年生",
  "３年生",
  "２年生",
  "１年生",
];

export type Member = {
  "４役": {
    部長: MemberType;
    副部長: MemberType;
    会計: MemberType;
    PA隊長: MemberType;
  };
  "４年生": {
    member: MemberType[];
    memo: string[];
  };
  "３年生": {
    member: MemberType[];
    memo: string[];
  };
  "２年生": {
    member: MemberType[];
    memo: string[];
  };
  "１年生": {
    member: MemberType[];
    memo: string[];
  };
};

type MemberState = {
  set: boolean;
  member: Member;
};

const jazzDow = {
  name: "",
  kana: "",
  inst: "",
  entry: "",
  role: "",
};

const initialState: MemberState = {
  set: false,
  member: {
    "４役": {
      部長: jazzDow,
      副部長: jazzDow,
      会計: jazzDow,
      PA隊長: jazzDow,
    },
    "４年生": {
      member: [],
      memo: [],
    },
    "３年生": {
      member: [],
      memo: [],
    },
    "２年生": {
      member: [],
      memo: [],
    },
    "１年生": {
      member: [],
      memo: [],
    },
  },
};

export type SetMemberPayload = {
  thisYear: number;
  member: MemberType[];
};

// Slice
const memberModule = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action: PayloadAction<SetMemberPayload>) => {
      const { thisYear, member } = action.payload;

      // テンプレートをコピーして中身を入れていく
      let newMember = _.cloneDeep(initialState.member);
      for (let i = 0; i < member.length; i++) {
        if (roles.includes(member[i].role)) {
          // 役職がある人は役職枠に登録
          const role = member[i].role as RoleType;
          newMember["４役"][role] = member[i];
          // (～役職を除く)表示用メモに追加
          // その役職の人の年目に対応するところに役職名を追加する
          const level = thisYear - Number(member[i].entry);
          if (level === 0) {
            newMember["１年生"].memo.push(member[i].role);
          } else if (level === 1) {
            newMember["２年生"].memo.push(member[i].role);
          } else if (level === 2) {
            newMember["３年生"].memo.push(member[i].role);
          } else if (level >= 3) {
            newMember["４年生"].memo.push(member[i].role);
          }
        } else {
          // 役職なしメンバー
          // 年目に応じて配列に入れる
          const level = thisYear - Number(member[i].entry);
          if (level === 0) {
            newMember["１年生"].member.push(member[i]);
          } else if (level === 1) {
            newMember["２年生"].member.push(member[i]);
          } else if (level === 2) {
            newMember["３年生"].member.push(member[i]);
          } else if (level >= 3) {
            newMember["４年生"].member.push(member[i]);
          }
        }
      }

      // ４役以外は名前の昇順で整列
      const normalLevels: NormalLevelType[] = [
        "４年生",
        "３年生",
        "２年生",
        "１年生",
      ];
      for (let i = 0; i < normalLevels.length; i++) {
        newMember[normalLevels[i]].member.sort((a, b) =>
          a.kana.localeCompare(b.kana)
        );
      }

      return {
        set: true,
        member: newMember,
      };
    },
  },
});

// Reducers
export default memberModule.reducer;

// Actions
export const { setMember } = memberModule.actions;
