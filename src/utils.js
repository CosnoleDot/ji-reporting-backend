const {
  MaqamModel,
  DivisionModel,
  DistrictModel,
  TehsilModel,
  HalqaModel,
} = require('./model');

export const getImmediateUser = async (userAreaId, userAreaType) => {
  let req = undefined;
  switch (userAreaType) {
    case 'Province':
      return null;
    case 'Maqam':
      req = await MaqamModel.findOne({ _id: userAreaId });
      return req?.province;
    case 'Division':
      req = await DivisionModel.findOne({ _id: userAreaId });
      return req?.province;
    case 'District':
      req = await DistrictModel.findOne({ _id: userAreaId });
      return req?.division;
    case 'Tehsil':
      req = await TehsilModel.findOne({ _id: userAreaId });
      return req?.district;
    case 'Halqa':
      req = await HalqaModel.findOne({ _id: userAreaId });
      return req?.parent;
    default:
      return null;
  }
};
