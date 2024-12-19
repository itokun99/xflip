import { getProfileDummy } from "@core/libs";

export const useProfile = () => {
  return getProfileDummy();
};

export type ProfileDataModel = ReturnType<typeof useProfile>;
