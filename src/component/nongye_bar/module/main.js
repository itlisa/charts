import React, { Component } from "react";
import { AgriPfscnew3dLib } from './AgriPfscnew3dLib.min.js';
import farmProduceCategoryInfo from './farmProduceCategoryInfo';
import img_border from './border.png';
import img_grid from './grid.png';
import img_positive from './positive-flag.png';
import img_negative from './negative-flag.png';

const typeImg = [img_negative, img_positive];
/**
 * switchType 方法可以切换图表正负相关属性，通过 switchLock = true, 不执行 componentDidUpdate()
 * 如需执行 componentDidUpdate(), 需要设置 switchLock = false
 */

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 600,
      height: 800,
      top: 0,
      left: 0,
      dataV: {
        "vertices": [
          {
            "varietyId": "AE01003",
            "varietyName": "油菜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AL01010",
            "varietyName": "羊肉",
            "categoryId": "AL",
            "categoryName": "畜禽产品"
          },
          {
            "varietyId": "AE01002001",
            "varietyName": "洋白菜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AF01002001",
            "varietyName": "鸭梨",
            "categoryId": "AF",
            "categoryName": "果品"
          },
          {
            "varietyId": "AF06001",
            "varietyName": "香蕉",
            "categoryId": "AF",
            "categoryName": "果品"
          },
          {
            "varietyId": "AE02003",
            "varietyName": "土豆",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AE02011",
            "varietyName": "芹菜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AE05001001",
            "varietyName": "平菇",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AL01006",
            "varietyName": "牛肉",
            "categoryId": "AL",
            "categoryName": "畜禽产品"
          },
          {
            "varietyId": "AE04008",
            "varietyName": "南瓜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AA01002",
            "varietyName": "面粉",
            "categoryId": "AA",
            "categoryName": "粮食"
          },
          {
            "varietyId": "AF05001001",
            "varietyName": "蜜桔",
            "categoryId": "AF",
            "categoryName": "果品"
          },
          {
            "varietyId": "AF02001001",
            "varietyName": "巨峰葡萄",
            "categoryId": "AF",
            "categoryName": "果品"
          },
          {
            "varietyId": "AE01019",
            "varietyName": "韭菜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AE04004",
            "varietyName": "茄子",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AL05001",
            "varietyName": "鸡蛋",
            "categoryId": "AL",
            "categoryName": "畜禽产品"
          },
          {
            "varietyId": "AM01004",
            "varietyName": "活鲤鱼",
            "categoryId": "AM",
            "categoryName": "水产品"
          },
          {
            "varietyId": "AM01002",
            "varietyName": "活草鱼",
            "categoryId": "AM",
            "categoryName": "水产品"
          },
          {
            "varietyId": "AJ01002",
            "varietyName": "花生油",
            "categoryId": "AJ",
            "categoryName": "植物油"
          },
          {
            "varietyId": "AE02002",
            "varietyName": "胡萝卜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AF01001001",
            "varietyName": "富士苹果",
            "categoryId": "AF",
            "categoryName": "果品"
          },
          {
            "varietyId": "AE04016",
            "varietyName": "豆角",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AE04009",
            "varietyName": "冬瓜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AA02001",
            "varietyName": "大豆",
            "categoryId": "AA",
            "categoryName": "粮食"
          },
          {
            "varietyId": "AE01001",
            "varietyName": "大白菜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AE01006",
            "varietyName": "菠菜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AL02001016",
            "varietyName": "白条鸡",
            "categoryId": "AL",
            "categoryName": "畜禽产品"
          },
          {
            "varietyId": "AE02001002",
            "varietyName": "白萝卜",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AE05001008",
            "varietyName": "香菇",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AE03009",
            "varietyName": "西兰花",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AE04006",
            "varietyName": "西葫芦",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AE04001",
            "varietyName": "西红柿",
            "categoryId": "AE",
            "categoryName": "蔬菜"
          },
          {
            "varietyId": "AF07001",
            "varietyName": "西瓜",
            "categoryId": "AF",
            "categoryName": "果品"
          }
        ],
        "edges": [
          {
            "source": "AE01003",
            "target": "AF05001001",
            "value": 0.5743771786731878
          },
          {
            "source": "AL01010",
            "target": "AF05001001",
            "value": 0.5743771786731878
          },
          {
            "source": "AE01002001",
            "target": "AF05001001",
            "value": 0.3117253596453842
          },
          {
            "source": "AF01002001",
            "target": "AF05001001",
            "value": 0.6425334625499328
          },
          {
            "source": "AF06001",
            "target": "AF05001001",
            "value": 0.4698216092696984
          },
          {
            "source": "AE02003",
            "target": "AF05001001",
            "value": 0.5275904805061252
          },
          {
            "source": "AE02011",
            "target": "AF05001001",
            "value": 0.5035526205968269
          },
          {
            "source": "AE05001001",
            "target": "AF05001001",
            "value": -0.09692096514933107
          },
          {
            "source": "AL01006",
            "target": "AF05001001",
            "value": 0.5700125104171205
          },
          {
            "source": "AE04008",
            "target": "AF05001001",
            "value": -0.12162496598763047
          },
          {
            "source": "AA01002",
            "target": "AF05001001",
            "value": 0.4902542525357149
          },
          {
            "source": "AF05001001",
            "target": "AF05001001",
            "value": 1
          },
          {
            "source": "AF02001001",
            "target": "AF05001001",
            "value": -0.09901240265018298
          },
          {
            "source": "AE01019",
            "target": "AF05001001",
            "value": 0.21789909100668522
          },
          {
            "source": "AE04004",
            "target": "AF05001001",
            "value": 0.08718670876125564
          },
          {
            "source": "AL05001",
            "target": "AF05001001",
            "value": 0.4912024946537254
          },
          {
            "source": "AM01004",
            "target": "AF05001001",
            "value": 0.6138723447981279
          },
          {
            "source": "AM01002",
            "target": "AF05001001",
            "value": 0.6033749334359827
          },
          {
            "source": "AJ01002",
            "target": "AF05001001",
            "value": 0.5524719011232548
          },
          {
            "source": "AE02002",
            "target": "AF05001001",
            "value": 0.6115411067206026
          },
          {
            "source": "AF01001001",
            "target": "AF05001001",
            "value": 0.6268350293963252
          },
          {
            "source": "AE04016",
            "target": "AF05001001",
            "value": 0.20531041492031343
          },
          {
            "source": "AE04009",
            "target": "AF05001001",
            "value": 0.1642462991663484
          },
          {
            "source": "AA02001",
            "target": "AF05001001",
            "value": 0.46231892100658395
          },
          {
            "source": "AE01001",
            "target": "AF05001001",
            "value": 0.5260959280192803
          },
          {
            "source": "AE01006",
            "target": "AF05001001",
            "value": 0.5839908779890036
          },
          {
            "source": "AL02001016",
            "target": "AF05001001",
            "value": 0.5529504635062327
          },
          {
            "source": "AE02001002",
            "target": "AF05001001",
            "value": 0.500380011913623
          },
          {
            "source": "AE05001008",
            "target": "AF05001001",
            "value": 0.48309030065854536
          },
          {
            "source": "AE03009",
            "target": "AF05001001",
            "value": 0.24681046759987108
          },
          {
            "source": "AE04006",
            "target": "AF05001001",
            "value": 0.024311453350681203
          },
          {
            "source": "AE04001",
            "target": "AF05001001",
            "value": 0.30060255130601893
          },
          {
            "source": "AF07001",
            "target": "AF05001001",
            "value": -0.03701006169769918
          },
          {
            "source": "AE01003",
            "target": "AF02001001",
            "value": -0.18569252748802784
          },
          {
            "source": "AL01010",
            "target": "AF02001001",
            "value": -0.1949382804736411
          },
          {
            "source": "AE01002001",
            "target": "AF02001001",
            "value": -0.047139717003049926
          },
          {
            "source": "AF01002001",
            "target": "AF02001001",
            "value": 0.03962413133502509
          },
          {
            "source": "AF06001",
            "target": "AF02001001",
            "value": -0.0026765922483961498
          },
          {
            "source": "AE02003",
            "target": "AF02001001",
            "value": -0.12469228674411957
          },
          {
            "source": "AE02011",
            "target": "AF02001001",
            "value": -0.16138583467031647
          },
          {
            "source": "AE05001001",
            "target": "AF02001001",
            "value": 0.9998307514732528
          },
          {
            "source": "AL01006",
            "target": "AF02001001",
            "value": -0.17136492109231274
          },
          {
            "source": "AE04008",
            "target": "AF02001001",
            "value": 0.9515992984081505
          },
          {
            "source": "AA01002",
            "target": "AF02001001",
            "value": -0.08123907610405534
          },
          {
            "source": "AF02001001",
            "target": "AF02001001",
            "value": 1
          },
          {
            "source": "AE01019",
            "target": "AF02001001",
            "value": -0.11436104779646683
          },
          {
            "source": "AE04004",
            "target": "AF02001001",
            "value": 0.056983580126574306
          },
          {
            "source": "AL05001",
            "target": "AF02001001",
            "value": 0.04937590324258696
          },
          {
            "source": "AM01004",
            "target": "AF02001001",
            "value": -0.0038907721080089627
          },
          {
            "source": "AM01002",
            "target": "AF02001001",
            "value": -0.009091645602748305
          },
          {
            "source": "AJ01002",
            "target": "AF02001001",
            "value": -0.18651416117280578
          },
          {
            "source": "AE02002",
            "target": "AF02001001",
            "value": -0.039237785422619784
          },
          {
            "source": "AF01001001",
            "target": "AF02001001",
            "value": 0.12078351292603899
          },
          {
            "source": "AE04016",
            "target": "AF02001001",
            "value": -0.03190923650936826
          },
          {
            "source": "AE04009",
            "target": "AF02001001",
            "value": 0.1597892388040513
          },
          {
            "source": "AA02001",
            "target": "AF02001001",
            "value": -0.10886576324235303
          },
          {
            "source": "AE01001",
            "target": "AF02001001",
            "value": -0.06415183257282964
          },
          {
            "source": "AE01006",
            "target": "AF02001001",
            "value": -0.20104985320547777
          },
          {
            "source": "AL02001016",
            "target": "AF02001001",
            "value": 0.035484361990727964
          },
          {
            "source": "AE02001002",
            "target": "AF02001001",
            "value": -0.08125537617816168
          },
          {
            "source": "AE05001008",
            "target": "AF02001001",
            "value": -0.4232535569251855
          },
          {
            "source": "AE03009",
            "target": "AF02001001",
            "value": 0.5365758108786587
          },
          {
            "source": "AE04006",
            "target": "AF02001001",
            "value": 0.11734561835544097
          },
          {
            "source": "AE04001",
            "target": "AF02001001",
            "value": -0.04800394570710228
          },
          {
            "source": "AF07001",
            "target": "AF02001001",
            "value": -0.006436373449743555
          },
          {
            "source": "AE01003",
            "target": "AL02001016",
            "value": 0.7729572291637639
          },
          {
            "source": "AL01010",
            "target": "AL02001016",
            "value": 0.8952881052039954
          },
          {
            "source": "AE01002001",
            "target": "AL02001016",
            "value": 0.6617801234780434
          },
          {
            "source": "AF01002001",
            "target": "AL02001016",
            "value": 0.8212001144714497
          },
          {
            "source": "AF06001",
            "target": "AL02001016",
            "value": 0.6456030725605523
          },
          {
            "source": "AE02003",
            "target": "AL02001016",
            "value": 0.8194302516854494
          },
          {
            "source": "AE02011",
            "target": "AL02001016",
            "value": 0.8114551531912941
          },
          {
            "source": "AE05001001",
            "target": "AL02001016",
            "value": 0.038234844519631155
          },
          {
            "source": "AL01006",
            "target": "AL02001016",
            "value": 0.8769412454093359
          },
          {
            "source": "AE04008",
            "target": "AL02001016",
            "value": -0.0027294465662377016
          },
          {
            "source": "AA01002",
            "target": "AL02001016",
            "value": 0.8075900068211952
          },
          {
            "source": "AE01019",
            "target": "AL02001016",
            "value": 0.6816802397005548
          },
          {
            "source": "AE04004",
            "target": "AL02001016",
            "value": 0.4967728225750152
          },
          {
            "source": "AL05001",
            "target": "AL02001016",
            "value": 0.895723763523887
          },
          {
            "source": "AM01004",
            "target": "AL02001016",
            "value": 0.9089643212634034
          },
          {
            "source": "AM01002",
            "target": "AL02001016",
            "value": 0.8443573272000127
          },
          {
            "source": "AJ01002",
            "target": "AL02001016",
            "value": 0.9079286784056828
          },
          {
            "source": "AE02002",
            "target": "AL02001016",
            "value": 0.7201603951688851
          },
          {
            "source": "AF01001001",
            "target": "AL02001016",
            "value": 0.8532673652309847
          },
          {
            "source": "AE04016",
            "target": "AL02001016",
            "value": 0.6126140168491366
          },
          {
            "source": "AE04009",
            "target": "AL02001016",
            "value": 0.36170083326397606
          },
          {
            "source": "AA02001",
            "target": "AL02001016",
            "value": 0.8476013746335652
          },
          {
            "source": "AE01001",
            "target": "AL02001016",
            "value": 0.644259423517285
          },
          {
            "source": "AE01006",
            "target": "AL02001016",
            "value": 0.7494082895231806
          },
          {
            "source": "AL02001016",
            "target": "AL02001016",
            "value": 1
          },
          {
            "source": "AE02001002",
            "target": "AL02001016",
            "value": 0.7762107183674194
          },
          {
            "source": "AE05001008",
            "target": "AL02001016",
            "value": 0.6449682942951425
          },
          {
            "source": "AE03009",
            "target": "AL02001016",
            "value": 0.47175606230521566
          },
          {
            "source": "AE04006",
            "target": "AL02001016",
            "value": 0.41231447519141917
          },
          {
            "source": "AE04001",
            "target": "AL02001016",
            "value": 0.7193074814133462
          },
          {
            "source": "AF07001",
            "target": "AL02001016",
            "value": 0.3327518112504736
          },
          {
            "source": "AE01003",
            "target": "AE01002001",
            "value": 0.8050752843647639
          },
          {
            "source": "AL01010",
            "target": "AE01002001",
            "value": 0.663629398445925
          },
          {
            "source": "AE01002001",
            "target": "AE01002001",
            "value": 1
          },
          {
            "source": "AF01002001",
            "target": "AE01002001",
            "value": 0.5512497185801745
          },
          {
            "source": "AF06001",
            "target": "AE01002001",
            "value": 0.3581365557746867
          },
          {
            "source": "AE02003",
            "target": "AE01002001",
            "value": 0.7078916279208303
          },
          {
            "source": "AE02011",
            "target": "AE01002001",
            "value": 0.8758335831289478
          },
          {
            "source": "AE05001001",
            "target": "AE01002001",
            "value": -0.04340848433587371
          },
          {
            "source": "AL01006",
            "target": "AE01002001",
            "value": 0.6854104634646901
          },
          {
            "source": "AE04008",
            "target": "AE01002001",
            "value": -0.09532779509528093
          },
          {
            "source": "AA01002",
            "target": "AE01002001",
            "value": 0.5826930392782513
          },
          {
            "source": "AE01019",
            "target": "AE01002001",
            "value": 0.7189735651036648
          },
          {
            "source": "AE04004",
            "target": "AE01002001",
            "value": 0.7444274284314716
          },
          {
            "source": "AL05001",
            "target": "AE01002001",
            "value": 0.5089864356628058
          },
          {
            "source": "AM01004",
            "target": "AE01002001",
            "value": 0.5855709303597174
          },
          {
            "source": "AM01002",
            "target": "AE01002001",
            "value": 0.5082673526515921
          },
          {
            "source": "AJ01002",
            "target": "AE01002001",
            "value": 0.6844729512335272
          },
          {
            "source": "AE02002",
            "target": "AE01002001",
            "value": 0.5723368093803406
          },
          {
            "source": "AF01001001",
            "target": "AE01002001",
            "value": 0.541287439508407
          },
          {
            "source": "AE04016",
            "target": "AE01002001",
            "value": 0.7884687047970406
          },
          {
            "source": "AE04009",
            "target": "AE01002001",
            "value": 0.5376130906057132
          },
          {
            "source": "AA02001",
            "target": "AE01002001",
            "value": 0.5772275017950833
          },
          {
            "source": "AE01001",
            "target": "AE01002001",
            "value": 0.7236002838912778
          },
          {
            "source": "AE01006",
            "target": "AE01002001",
            "value": 0.6355289570674292
          },
          {
            "source": "AE02001002",
            "target": "AE01002001",
            "value": 0.8170080012763875
          },
          {
            "source": "AE05001008",
            "target": "AE01002001",
            "value": 0.4863632953640125
          },
          {
            "source": "AE03009",
            "target": "AE01002001",
            "value": 0.5074812557891143
          },
          {
            "source": "AE04006",
            "target": "AE01002001",
            "value": 0.5957400758670106
          },
          {
            "source": "AE04001",
            "target": "AE01002001",
            "value": 0.8477849107163972
          },
          {
            "source": "AF07001",
            "target": "AE01002001",
            "value": 0.5188026153944262
          },
          {
            "source": "AE01003",
            "target": "AE02001002",
            "value": 0.8108262285019082
          },
          {
            "source": "AL01010",
            "target": "AE02001002",
            "value": 0.7963306060458011
          },
          {
            "source": "AF01002001",
            "target": "AE02001002",
            "value": 0.6955690523105751
          },
          {
            "source": "AF07001",
            "target": "AE02001002",
            "value": 0.29003714034596484
          },
          {
            "source": "AE02003",
            "target": "AE02001002",
            "value": 0.7702826152900931
          },
          {
            "source": "AE02011",
            "target": "AE02001002",
            "value": 0.9029193079867156
          },
          {
            "source": "AE05001001",
            "target": "AE02001002",
            "value": -0.07750530394424414
          },
          {
            "source": "AL01006",
            "target": "AE02001002",
            "value": 0.7994413034999527
          },
          {
            "source": "AE04008",
            "target": "AE02001002",
            "value": -0.13367266869225394
          },
          {
            "source": "AA01002",
            "target": "AE02001002",
            "value": 0.6663207804954481
          },
          {
            "source": "AE01019",
            "target": "AE02001002",
            "value": 0.6176714586589575
          },
          {
            "source": "AE04004",
            "target": "AE02001002",
            "value": 0.5259209413805954
          },
          {
            "source": "AL05001",
            "target": "AE02001002",
            "value": 0.6522994280151065
          },
          {
            "source": "AM01004",
            "target": "AE02001002",
            "value": 0.7408029278351133
          },
          {
            "source": "AM01002",
            "target": "AE02001002",
            "value": 0.7131045124675762
          },
          {
            "source": "AJ01002",
            "target": "AE02001002",
            "value": 0.8190632550921776
          },
          {
            "source": "AE02002",
            "target": "AE02001002",
            "value": 0.7731428847183334
          },
          {
            "source": "AF01001001",
            "target": "AE02001002",
            "value": 0.7406097977232243
          },
          {
            "source": "AE04016",
            "target": "AE02001002",
            "value": 0.6219494941717759
          },
          {
            "source": "AE04009",
            "target": "AE02001002",
            "value": 0.42908556196938646
          },
          {
            "source": "AA02001",
            "target": "AE02001002",
            "value": 0.705414558190825
          },
          {
            "source": "AE01001",
            "target": "AE02001002",
            "value": 0.7884301980388925
          },
          {
            "source": "AE01006",
            "target": "AE02001002",
            "value": 0.7356092158018182
          },
          {
            "source": "AE02001002",
            "target": "AE02001002",
            "value": 1
          },
          {
            "source": "AF06001",
            "target": "AE02001002",
            "value": 0.4937551310065178
          },
          {
            "source": "AE05001008",
            "target": "AE02001002",
            "value": 0.6126897438257616
          },
          {
            "source": "AE03009",
            "target": "AE02001002",
            "value": 0.4157157734133296
          },
          {
            "source": "AE04006",
            "target": "AE02001002",
            "value": 0.3763762819801157
          },
          {
            "source": "AE04001",
            "target": "AE02001002",
            "value": 0.7466278847518667
          },
          {
            "source": "AE01003",
            "target": "AE05001001",
            "value": -0.18103727626404023
          },
          {
            "source": "AL01010",
            "target": "AE05001001",
            "value": -0.18965114915410405
          },
          {
            "source": "AF01002001",
            "target": "AE05001001",
            "value": 0.042620667014243295
          },
          {
            "source": "AF06001",
            "target": "AE05001001",
            "value": -0.006423476629710698
          },
          {
            "source": "AE02003",
            "target": "AE05001001",
            "value": -0.12008586520936779
          },
          {
            "source": "AE02011",
            "target": "AE05001001",
            "value": -0.15685545215758342
          },
          {
            "source": "AE05001001",
            "target": "AE05001001",
            "value": 1
          },
          {
            "source": "AL01006",
            "target": "AE05001001",
            "value": -0.16597110779088256
          },
          {
            "source": "AE04008",
            "target": "AE05001001",
            "value": 0.9461306522325087
          },
          {
            "source": "AA01002",
            "target": "AE05001001",
            "value": -0.07979179338595492
          },
          {
            "source": "AE01019",
            "target": "AE05001001",
            "value": -0.11101885246334793
          },
          {
            "source": "AE04004",
            "target": "AE05001001",
            "value": 0.05838392401467716
          },
          {
            "source": "AL05001",
            "target": "AE05001001",
            "value": 0.050089383711997504
          },
          {
            "source": "AM01004",
            "target": "AE05001001",
            "value": -0.0007964852757650977
          },
          {
            "source": "AM01002",
            "target": "AE05001001",
            "value": -0.008099240428221773
          },
          {
            "source": "AJ01002",
            "target": "AE05001001",
            "value": -0.18056751270294305
          },
          {
            "source": "AE02002",
            "target": "AE05001001",
            "value": -0.034621953307942294
          },
          {
            "source": "AF01001001",
            "target": "AE05001001",
            "value": 0.12428404324108673
          },
          {
            "source": "AE04016",
            "target": "AE05001001",
            "value": -0.029155757414267746
          },
          {
            "source": "AE04009",
            "target": "AE05001001",
            "value": 0.1589615432712453
          },
          {
            "source": "AA02001",
            "target": "AE05001001",
            "value": -0.10708097185229681
          },
          {
            "source": "AE01001",
            "target": "AE05001001",
            "value": -0.062394162383555204
          },
          {
            "source": "AE01006",
            "target": "AE05001001",
            "value": -0.1958787716640068
          },
          {
            "source": "AE05001008",
            "target": "AE05001001",
            "value": -0.4225713252664492
          },
          {
            "source": "AE03009",
            "target": "AE05001001",
            "value": 0.5355671401305934
          },
          {
            "source": "AE04006",
            "target": "AE05001001",
            "value": 0.12145375007542601
          },
          {
            "source": "AE04001",
            "target": "AE05001001",
            "value": -0.04473185147669923
          },
          {
            "source": "AF07001",
            "target": "AE05001001",
            "value": -0.008460523649086867
          },
          {
            "source": "AE01003",
            "target": "AE05001008",
            "value": 0.6680879682985711
          },
          {
            "source": "AL01010",
            "target": "AE05001008",
            "value": 0.771306540111567
          },
          {
            "source": "AF01002001",
            "target": "AE05001008",
            "value": 0.661518079331944
          },
          {
            "source": "AF06001",
            "target": "AE05001008",
            "value": 0.5048558777413348
          },
          {
            "source": "AE02003",
            "target": "AE05001008",
            "value": 0.6777443454340046
          },
          {
            "source": "AE02011",
            "target": "AE05001008",
            "value": 0.672684300393404
          },
          {
            "source": "AL01006",
            "target": "AE05001008",
            "value": 0.7489023928332366
          },
          {
            "source": "AE04008",
            "target": "AE05001008",
            "value": -0.42410519995530904
          },
          {
            "source": "AA01002",
            "target": "AE05001008",
            "value": 0.6220905757650343
          },
          {
            "source": "AE01019",
            "target": "AE05001008",
            "value": 0.5109006791310918
          },
          {
            "source": "AE04004",
            "target": "AE05001008",
            "value": 0.2744923281480348
          },
          {
            "source": "AL05001",
            "target": "AE05001008",
            "value": 0.6308825463166349
          },
          {
            "source": "AM01004",
            "target": "AE05001008",
            "value": 0.6357952441120207
          },
          {
            "source": "AM01002",
            "target": "AE05001008",
            "value": 0.6265113062079588
          },
          {
            "source": "AJ01002",
            "target": "AE05001008",
            "value": 0.7415959440417886
          },
          {
            "source": "AE02002",
            "target": "AE05001008",
            "value": 0.6020785382441736
          },
          {
            "source": "AF01001001",
            "target": "AE05001008",
            "value": 0.6419030169429306
          },
          {
            "source": "AE04016",
            "target": "AE05001008",
            "value": 0.41604697990221934
          },
          {
            "source": "AE04009",
            "target": "AE05001008",
            "value": 0.15426559871131026
          },
          {
            "source": "AA02001",
            "target": "AE05001008",
            "value": 0.667918196855553
          },
          {
            "source": "AE01001",
            "target": "AE05001008",
            "value": 0.5430802855986944
          },
          {
            "source": "AE01006",
            "target": "AE05001008",
            "value": 0.6850288357841657
          },
          {
            "source": "AE05001008",
            "target": "AE05001008",
            "value": 1
          },
          {
            "source": "AE03009",
            "target": "AE05001008",
            "value": 0.09684347793552607
          },
          {
            "source": "AE04006",
            "target": "AE05001008",
            "value": 0.026935853281569496
          },
          {
            "source": "AE04001",
            "target": "AE05001008",
            "value": 0.5263789926519968
          },
          {
            "source": "AF07001",
            "target": "AE05001008",
            "value": 0.2258304457263692
          },
          {
            "source": "AE01003",
            "target": "AF01001001",
            "value": 0.6761698044253006
          },
          {
            "source": "AL01010",
            "target": "AF01001001",
            "value": 0.8555377350773263
          },
          {
            "source": "AF01002001",
            "target": "AF01001001",
            "value": 0.9116247129002653
          },
          {
            "source": "AF06001",
            "target": "AF01001001",
            "value": 0.7012016740484516
          },
          {
            "source": "AE02003",
            "target": "AF01001001",
            "value": 0.7661910369426707
          },
          {
            "source": "AE02011",
            "target": "AF01001001",
            "value": 0.7132539819115536
          },
          {
            "source": "AL01006",
            "target": "AF01001001",
            "value": 0.8379646123508128
          },
          {
            "source": "AE04008",
            "target": "AF01001001",
            "value": 0.06550854093239251
          },
          {
            "source": "AA01002",
            "target": "AF01001001",
            "value": 0.7120311339172315
          },
          {
            "source": "AE01019",
            "target": "AF01001001",
            "value": 0.5291924653689706
          },
          {
            "source": "AE04004",
            "target": "AF01001001",
            "value": 0.3915059869974826
          },
          {
            "source": "AL05001",
            "target": "AF01001001",
            "value": 0.8082222766587105
          },
          {
            "source": "AM01004",
            "target": "AF01001001",
            "value": 0.8594458201205587
          },
          {
            "source": "AM01002",
            "target": "AF01001001",
            "value": 0.8197807494828209
          },
          {
            "source": "AJ01002",
            "target": "AF01001001",
            "value": 0.8050570103549656
          },
          {
            "source": "AE02002",
            "target": "AF01001001",
            "value": 0.7820960766920507
          },
          {
            "source": "AF01001001",
            "target": "AF01001001",
            "value": 1
          },
          {
            "source": "AE04016",
            "target": "AF01001001",
            "value": 0.5066911837430974
          },
          {
            "source": "AE04009",
            "target": "AF01001001",
            "value": 0.3814023532588001
          },
          {
            "source": "AA02001",
            "target": "AF01001001",
            "value": 0.7451595950630702
          },
          {
            "source": "AE01001",
            "target": "AF01001001",
            "value": 0.6283405653465547
          },
          {
            "source": "AE01006",
            "target": "AF01001001",
            "value": 0.6994306393633432
          },
          {
            "source": "AE03009",
            "target": "AF01001001",
            "value": 0.470981915119691
          },
          {
            "source": "AE04006",
            "target": "AF01001001",
            "value": 0.2784459134419171
          },
          {
            "source": "AE04001",
            "target": "AF01001001",
            "value": 0.6165247794636943
          },
          {
            "source": "AF07001",
            "target": "AF01001001",
            "value": 0.23195759153794313
          },
          {
            "source": "AE01003",
            "target": "AF01002001",
            "value": 0.6853695729501128
          },
          {
            "source": "AL01010",
            "target": "AF01002001",
            "value": 0.8693894968322686
          },
          {
            "source": "AF01002001",
            "target": "AF01002001",
            "value": 1
          },
          {
            "source": "AF06001",
            "target": "AF01002001",
            "value": 0.7500213900815963
          },
          {
            "source": "AE02003",
            "target": "AF01002001",
            "value": 0.7847560487357691
          },
          {
            "source": "AE02011",
            "target": "AF01002001",
            "value": 0.7130920353219842
          },
          {
            "source": "AL01006",
            "target": "AF01002001",
            "value": 0.8573892662265337
          },
          {
            "source": "AE04008",
            "target": "AF01002001",
            "value": -0.004893208243335812
          },
          {
            "source": "AA01002",
            "target": "AF01002001",
            "value": 0.7209798139126087
          },
          {
            "source": "AE01019",
            "target": "AF01002001",
            "value": 0.5422351569730598
          },
          {
            "source": "AE04004",
            "target": "AF01002001",
            "value": 0.443727641454019
          },
          {
            "source": "AL05001",
            "target": "AF01002001",
            "value": 0.7842217613792631
          },
          {
            "source": "AM01004",
            "target": "AF01002001",
            "value": 0.8223727207336131
          },
          {
            "source": "AM01002",
            "target": "AF01002001",
            "value": 0.7837467215349463
          },
          {
            "source": "AJ01002",
            "target": "AF01002001",
            "value": 0.7923412895136861
          },
          {
            "source": "AE02002",
            "target": "AF01002001",
            "value": 0.7762437363347466
          },
          {
            "source": "AE04016",
            "target": "AF01002001",
            "value": 0.5618666520563184
          },
          {
            "source": "AE04009",
            "target": "AF01002001",
            "value": 0.42759977899469426
          },
          {
            "source": "AA02001",
            "target": "AF01002001",
            "value": 0.7354333585642991
          },
          {
            "source": "AE01001",
            "target": "AF01002001",
            "value": 0.6051684063902713
          },
          {
            "source": "AE01006",
            "target": "AF01002001",
            "value": 0.6673404039345443
          },
          {
            "source": "AE03009",
            "target": "AF01002001",
            "value": 0.4397989388666267
          },
          {
            "source": "AE04006",
            "target": "AF01002001",
            "value": 0.3111666764778238
          },
          {
            "source": "AE04001",
            "target": "AF01002001",
            "value": 0.6518697078500926
          },
          {
            "source": "AF07001",
            "target": "AF01002001",
            "value": 0.3122431813680929
          },
          {
            "source": "AE01003",
            "target": "AL01006",
            "value": 0.8270565506410478
          },
          {
            "source": "AL01010",
            "target": "AL01006",
            "value": 0.9787984799146384
          },
          {
            "source": "AF06001",
            "target": "AL01006",
            "value": 0.621317604271384
          },
          {
            "source": "AE02003",
            "target": "AL01006",
            "value": 0.8745036026100114
          },
          {
            "source": "AE02011",
            "target": "AL01006",
            "value": 0.8692884647371126
          },
          {
            "source": "AL01006",
            "target": "AL01006",
            "value": 1
          },
          {
            "source": "AE04008",
            "target": "AL01006",
            "value": -0.24932714849092283
          },
          {
            "source": "AA01002",
            "target": "AL01006",
            "value": 0.7978784064153674
          },
          {
            "source": "AE01019",
            "target": "AL01006",
            "value": 0.7029241958210821
          },
          {
            "source": "AE04004",
            "target": "AL01006",
            "value": 0.4928143384379745
          },
          {
            "source": "AL05001",
            "target": "AL01006",
            "value": 0.7600867145364527
          },
          {
            "source": "AM01004",
            "target": "AL01006",
            "value": 0.8237022625958701
          },
          {
            "source": "AM01002",
            "target": "AL01006",
            "value": 0.770392496523585
          },
          {
            "source": "AJ01002",
            "target": "AL01006",
            "value": 0.9420880503866971
          },
          {
            "source": "AE02002",
            "target": "AL01006",
            "value": 0.786595555389244
          },
          {
            "source": "AE04016",
            "target": "AL01006",
            "value": 0.640426540089639
          },
          {
            "source": "AE04009",
            "target": "AL01006",
            "value": 0.342733529884679
          },
          {
            "source": "AA02001",
            "target": "AL01006",
            "value": 0.8006044820062314
          },
          {
            "source": "AE01001",
            "target": "AL01006",
            "value": 0.656515463761348
          },
          {
            "source": "AE01006",
            "target": "AL01006",
            "value": 0.7933410809517034
          },
          {
            "source": "AE03009",
            "target": "AL01006",
            "value": 0.31476296193357994
          },
          {
            "source": "AE04006",
            "target": "AL01006",
            "value": 0.40033792091520265
          },
          {
            "source": "AE04001",
            "target": "AL01006",
            "value": 0.7651980559001893
          },
          {
            "source": "AF07001",
            "target": "AL01006",
            "value": 0.32302030045850777
          },
          {
            "source": "AE01003",
            "target": "AJ01002",
            "value": 0.8194515924359606
          },
          {
            "source": "AL01010",
            "target": "AJ01002",
            "value": 0.9581068315335366
          },
          {
            "source": "AF06001",
            "target": "AJ01002",
            "value": 0.5500294951911487
          },
          {
            "source": "AE02003",
            "target": "AJ01002",
            "value": 0.8590102258813486
          },
          {
            "source": "AE02011",
            "target": "AJ01002",
            "value": 0.8581481092737074
          },
          {
            "source": "AE04008",
            "target": "AJ01002",
            "value": -0.27288949088406983
          },
          {
            "source": "AA01002",
            "target": "AJ01002",
            "value": 0.7773650505524049
          },
          {
            "source": "AE01019",
            "target": "AJ01002",
            "value": 0.6953486471453412
          },
          {
            "source": "AE04004",
            "target": "AJ01002",
            "value": 0.4999506242597585
          },
          {
            "source": "AL05001",
            "target": "AJ01002",
            "value": 0.789291807472063
          },
          {
            "source": "AM01004",
            "target": "AJ01002",
            "value": 0.856558224384708
          },
          {
            "source": "AM01002",
            "target": "AJ01002",
            "value": 0.795603225887499
          },
          {
            "source": "AJ01002",
            "target": "AJ01002",
            "value": 1
          },
          {
            "source": "AE02002",
            "target": "AJ01002",
            "value": 0.7661631318299071
          },
          {
            "source": "AE04016",
            "target": "AJ01002",
            "value": 0.6354465199662375
          },
          {
            "source": "AE04009",
            "target": "AJ01002",
            "value": 0.3320009991206772
          },
          {
            "source": "AA02001",
            "target": "AJ01002",
            "value": 0.8526108231169977
          },
          {
            "source": "AE01001",
            "target": "AJ01002",
            "value": 0.6422054059437083
          },
          {
            "source": "AE01006",
            "target": "AJ01002",
            "value": 0.7820237918222993
          },
          {
            "source": "AE03009",
            "target": "AJ01002",
            "value": 0.30035756795503865
          },
          {
            "source": "AE04006",
            "target": "AJ01002",
            "value": 0.3972992688018798
          },
          {
            "source": "AE04001",
            "target": "AJ01002",
            "value": 0.7475602976876583
          },
          {
            "source": "AF07001",
            "target": "AJ01002",
            "value": 0.33491687341196663
          },
          {
            "source": "AE01003",
            "target": "AA02001",
            "value": 0.704307504815533
          },
          {
            "source": "AL01010",
            "target": "AA02001",
            "value": 0.8206847069084268
          },
          {
            "source": "AF06001",
            "target": "AA02001",
            "value": 0.5522007774600253
          },
          {
            "source": "AE02003",
            "target": "AA02001",
            "value": 0.7555552820934931
          },
          {
            "source": "AE02011",
            "target": "AA02001",
            "value": 0.7250515463110485
          },
          {
            "source": "AE04008",
            "target": "AA02001",
            "value": -0.1315137087230113
          },
          {
            "source": "AA01002",
            "target": "AA02001",
            "value": 0.7329087813251131
          },
          {
            "source": "AE01019",
            "target": "AA02001",
            "value": 0.6064904083183061
          },
          {
            "source": "AE04004",
            "target": "AA02001",
            "value": 0.43653216388195637
          },
          {
            "source": "AL05001",
            "target": "AA02001",
            "value": 0.7725904465401762
          },
          {
            "source": "AM01004",
            "target": "AA02001",
            "value": 0.8132748545467121
          },
          {
            "source": "AM01002",
            "target": "AA02001",
            "value": 0.7850179669383265
          },
          {
            "source": "AE02002",
            "target": "AA02001",
            "value": 0.6692344655603613
          },
          {
            "source": "AE04016",
            "target": "AA02001",
            "value": 0.5384582761614235
          },
          {
            "source": "AE04009",
            "target": "AA02001",
            "value": 0.31476316075168514
          },
          {
            "source": "AA02001",
            "target": "AA02001",
            "value": 1
          },
          {
            "source": "AE01001",
            "target": "AA02001",
            "value": 0.5824215792453968
          },
          {
            "source": "AE01006",
            "target": "AA02001",
            "value": 0.6750007759494935
          },
          {
            "source": "AE03009",
            "target": "AA02001",
            "value": 0.30087673409580207
          },
          {
            "source": "AE04006",
            "target": "AA02001",
            "value": 0.3215894746147459
          },
          {
            "source": "AE04001",
            "target": "AA02001",
            "value": 0.6327618038782035
          },
          {
            "source": "AF07001",
            "target": "AA02001",
            "value": 0.34242542487847266
          },
          {
            "source": "AE01003",
            "target": "AL05001",
            "value": 0.6864286079238733
          },
          {
            "source": "AL01010",
            "target": "AL05001",
            "value": 0.8087862094962752
          },
          {
            "source": "AF06001",
            "target": "AL05001",
            "value": 0.6745497489987946
          },
          {
            "source": "AE02003",
            "target": "AL05001",
            "value": 0.6999810583591125
          },
          {
            "source": "AE02011",
            "target": "AL05001",
            "value": 0.694040774204407
          },
          {
            "source": "AE04008",
            "target": "AL05001",
            "value": 0.04273810259142914
          },
          {
            "source": "AA01002",
            "target": "AL05001",
            "value": 0.7260643898845346
          },
          {
            "source": "AE01019",
            "target": "AL05001",
            "value": 0.5986819540452987
          },
          {
            "source": "AE04004",
            "target": "AL05001",
            "value": 0.33683913390434006
          },
          {
            "source": "AL05001",
            "target": "AL05001",
            "value": 1
          },
          {
            "source": "AM01004",
            "target": "AL05001",
            "value": 0.8178060245457699
          },
          {
            "source": "AM01002",
            "target": "AL05001",
            "value": 0.7757799220608809
          },
          {
            "source": "AE02002",
            "target": "AL05001",
            "value": 0.5888107011952709
          },
          {
            "source": "AE04016",
            "target": "AL05001",
            "value": 0.4588202849656753
          },
          {
            "source": "AE04009",
            "target": "AL05001",
            "value": 0.20114141913245961
          },
          {
            "source": "AE01001",
            "target": "AL05001",
            "value": 0.5516509195524493
          },
          {
            "source": "AE01006",
            "target": "AL05001",
            "value": 0.7085683204856237
          },
          {
            "source": "AE03009",
            "target": "AL05001",
            "value": 0.42964948509342177
          },
          {
            "source": "AE04006",
            "target": "AL05001",
            "value": 0.31755083320413396
          },
          {
            "source": "AE04001",
            "target": "AL05001",
            "value": 0.5615375011994699
          },
          {
            "source": "AF07001",
            "target": "AL05001",
            "value": 0.21312924039738904
          },
          {
            "source": "AE01003",
            "target": "AE01003",
            "value": 1
          },
          {
            "source": "AL01010",
            "target": "AE01003",
            "value": 0.8285556527323017
          },
          {
            "source": "AF06001",
            "target": "AE01003",
            "value": 0.4657780129738451
          },
          {
            "source": "AE02003",
            "target": "AE01003",
            "value": 0.7487661552845957
          },
          {
            "source": "AE02011",
            "target": "AE01003",
            "value": 0.8943329797728896
          },
          {
            "source": "AE04008",
            "target": "AE01003",
            "value": -0.24767787300632066
          },
          {
            "source": "AA01002",
            "target": "AE01003",
            "value": 0.7020183996140215
          },
          {
            "source": "AE01019",
            "target": "AE01003",
            "value": 0.8417324723732545
          },
          {
            "source": "AE04004",
            "target": "AE01003",
            "value": 0.6346494039952055
          },
          {
            "source": "AM01004",
            "target": "AE01003",
            "value": 0.697191661842212
          },
          {
            "source": "AM01002",
            "target": "AE01003",
            "value": 0.6292752966490911
          },
          {
            "source": "AE02002",
            "target": "AE01003",
            "value": 0.6080644574065924
          },
          {
            "source": "AE04016",
            "target": "AE01003",
            "value": 0.7144908165676237
          },
          {
            "source": "AE04009",
            "target": "AE01003",
            "value": 0.33563952780005557
          },
          {
            "source": "AE01001",
            "target": "AE01003",
            "value": 0.6568074548212249
          },
          {
            "source": "AE01006",
            "target": "AE01003",
            "value": 0.8789957500551655
          },
          {
            "source": "AE03009",
            "target": "AE01003",
            "value": 0.3260205266167119
          },
          {
            "source": "AE04006",
            "target": "AE01003",
            "value": 0.5684589592507414
          },
          {
            "source": "AE04001",
            "target": "AE01003",
            "value": 0.7730716286121069
          },
          {
            "source": "AF07001",
            "target": "AE01003",
            "value": 0.36213592115611426
          },
          {
            "source": "AL01010",
            "target": "AL01010",
            "value": 1
          },
          {
            "source": "AF06001",
            "target": "AL01010",
            "value": 0.6546996354588338
          },
          {
            "source": "AE02003",
            "target": "AL01010",
            "value": 0.872570844293661
          },
          {
            "source": "AE02011",
            "target": "AL01010",
            "value": 0.8565399091874519
          },
          {
            "source": "AE04008",
            "target": "AL01010",
            "value": -0.26890474190251035
          },
          {
            "source": "AA01002",
            "target": "AL01010",
            "value": 0.7902833068749422
          },
          {
            "source": "AE01019",
            "target": "AL01010",
            "value": 0.6986028952974527
          },
          {
            "source": "AE04004",
            "target": "AL01010",
            "value": 0.5014438412180106
          },
          {
            "source": "AM01004",
            "target": "AL01010",
            "value": 0.8500450293175581
          },
          {
            "source": "AM01002",
            "target": "AL01010",
            "value": 0.805276098174376
          },
          {
            "source": "AE02002",
            "target": "AL01010",
            "value": 0.7735710180881429
          },
          {
            "source": "AE04016",
            "target": "AL01010",
            "value": 0.6469272409799578
          },
          {
            "source": "AE04009",
            "target": "AL01010",
            "value": 0.3414287069074764
          },
          {
            "source": "AE01001",
            "target": "AL01010",
            "value": 0.644641382860433
          },
          {
            "source": "AE01006",
            "target": "AL01010",
            "value": 0.791185533248912
          },
          {
            "source": "AE03009",
            "target": "AL01010",
            "value": 0.3065668890713735
          },
          {
            "source": "AE04006",
            "target": "AL01010",
            "value": 0.4007215345464179
          },
          {
            "source": "AE04001",
            "target": "AL01010",
            "value": 0.7585407556221996
          },
          {
            "source": "AF07001",
            "target": "AL01010",
            "value": 0.3426926379534655
          },
          {
            "source": "AF06001",
            "target": "AM01002",
            "value": 0.675761498400107
          },
          {
            "source": "AE02003",
            "target": "AM01002",
            "value": 0.7277844554103361
          },
          {
            "source": "AE02011",
            "target": "AM01002",
            "value": 0.6892229743899667
          },
          {
            "source": "AE04008",
            "target": "AM01002",
            "value": 0.00204568839752241
          },
          {
            "source": "AA01002",
            "target": "AM01002",
            "value": 0.7556508402500803
          },
          {
            "source": "AE01019",
            "target": "AM01002",
            "value": 0.4586152757349995
          },
          {
            "source": "AE04004",
            "target": "AM01002",
            "value": 0.35382520056504296
          },
          {
            "source": "AM01004",
            "target": "AM01002",
            "value": 0.8977389762751439
          },
          {
            "source": "AM01002",
            "target": "AM01002",
            "value": 1
          },
          {
            "source": "AE02002",
            "target": "AM01002",
            "value": 0.7417759187769204
          },
          {
            "source": "AE04016",
            "target": "AM01002",
            "value": 0.46350751401759954
          },
          {
            "source": "AE04009",
            "target": "AM01002",
            "value": 0.3192210506564467
          },
          {
            "source": "AE01001",
            "target": "AM01002",
            "value": 0.6348189226838121
          },
          {
            "source": "AE01006",
            "target": "AM01002",
            "value": 0.6367206955314444
          },
          {
            "source": "AE03009",
            "target": "AM01002",
            "value": 0.4689714050697444
          },
          {
            "source": "AE04006",
            "target": "AM01002",
            "value": 0.18003199806411907
          },
          {
            "source": "AE04001",
            "target": "AM01002",
            "value": 0.5774472226156795
          },
          {
            "source": "AF07001",
            "target": "AM01002",
            "value": 0.22043547003712666
          },
          {
            "source": "AF06001",
            "target": "AM01004",
            "value": 0.6288334321156412
          },
          {
            "source": "AE02003",
            "target": "AM01004",
            "value": 0.7492455607508154
          },
          {
            "source": "AE02011",
            "target": "AM01004",
            "value": 0.7608868157775156
          },
          {
            "source": "AE04008",
            "target": "AM01004",
            "value": -0.034820877474872995
          },
          {
            "source": "AA01002",
            "target": "AM01004",
            "value": 0.7642688372112393
          },
          {
            "source": "AE01019",
            "target": "AM01004",
            "value": 0.54184368523634
          },
          {
            "source": "AE04004",
            "target": "AM01004",
            "value": 0.3938649658795814
          },
          {
            "source": "AM01004",
            "target": "AM01004",
            "value": 1
          },
          {
            "source": "AE02002",
            "target": "AM01004",
            "value": 0.7520737882079928
          },
          {
            "source": "AE04016",
            "target": "AM01004",
            "value": 0.5042797652453346
          },
          {
            "source": "AE04009",
            "target": "AM01004",
            "value": 0.3702978044009011
          },
          {
            "source": "AE01001",
            "target": "AM01004",
            "value": 0.6489509795416243
          },
          {
            "source": "AE01006",
            "target": "AM01004",
            "value": 0.7155491086008857
          },
          {
            "source": "AE03009",
            "target": "AM01004",
            "value": 0.4508847432759508
          },
          {
            "source": "AE04006",
            "target": "AM01004",
            "value": 0.2765996483812243
          },
          {
            "source": "AE04001",
            "target": "AM01004",
            "value": 0.6143681053684229
          },
          {
            "source": "AF07001",
            "target": "AM01004",
            "value": 0.21887222635692985
          },
          {
            "source": "AF06001",
            "target": "AF06001",
            "value": 1
          },
          {
            "source": "AE02003",
            "target": "AF06001",
            "value": 0.5871382734592864
          },
          {
            "source": "AE02011",
            "target": "AF06001",
            "value": 0.48846460701755523
          },
          {
            "source": "AE04008",
            "target": "AF06001",
            "value": 0.06944463900357926
          },
          {
            "source": "AA01002",
            "target": "AF06001",
            "value": 0.6019038738610719
          },
          {
            "source": "AE01019",
            "target": "AF06001",
            "value": 0.3792728844051668
          },
          {
            "source": "AE04004",
            "target": "AF06001",
            "value": 0.41241555644798994
          },
          {
            "source": "AE02002",
            "target": "AF06001",
            "value": 0.5092685387814033
          },
          {
            "source": "AE04016",
            "target": "AF06001",
            "value": 0.4947785398005959
          },
          {
            "source": "AE04009",
            "target": "AF06001",
            "value": 0.4386395095380274
          },
          {
            "source": "AE01001",
            "target": "AF06001",
            "value": 0.4275012738670316
          },
          {
            "source": "AE01006",
            "target": "AF06001",
            "value": 0.4149801527811463
          },
          {
            "source": "AE03009",
            "target": "AF06001",
            "value": 0.40608167047690064
          },
          {
            "source": "AE04006",
            "target": "AF06001",
            "value": 0.23331846254422542
          },
          {
            "source": "AE04001",
            "target": "AF06001",
            "value": 0.5025466173076206
          },
          {
            "source": "AF07001",
            "target": "AF06001",
            "value": 0.3850528206165088
          },
          {
            "source": "AE02003",
            "target": "AF07001",
            "value": 0.46263281257739364
          },
          {
            "source": "AE02011",
            "target": "AF07001",
            "value": 0.31319496109603806
          },
          {
            "source": "AE04008",
            "target": "AF07001",
            "value": 0.016485495308259133
          },
          {
            "source": "AA01002",
            "target": "AF07001",
            "value": 0.3373855637657163
          },
          {
            "source": "AE01019",
            "target": "AF07001",
            "value": 0.5506301063231119
          },
          {
            "source": "AE04004",
            "target": "AF07001",
            "value": 0.8572709895003379
          },
          {
            "source": "AE02002",
            "target": "AF07001",
            "value": 0.17159293463238676
          },
          {
            "source": "AE04016",
            "target": "AF07001",
            "value": 0.8247349076000394
          },
          {
            "source": "AE04009",
            "target": "AF07001",
            "value": 0.678323072812433
          },
          {
            "source": "AE01001",
            "target": "AF07001",
            "value": 0.09556747648387998
          },
          {
            "source": "AE01006",
            "target": "AF07001",
            "value": 0.03402273133395212
          },
          {
            "source": "AE03009",
            "target": "AF07001",
            "value": 0.25683601358983127
          },
          {
            "source": "AE04006",
            "target": "AF07001",
            "value": 0.5646574128615522
          },
          {
            "source": "AE04001",
            "target": "AF07001",
            "value": 0.7118822895030004
          },
          {
            "source": "AF07001",
            "target": "AF07001",
            "value": 1
          },
          {
            "source": "AE02003",
            "target": "AA01002",
            "value": 0.7277802494874668
          },
          {
            "source": "AE02011",
            "target": "AA01002",
            "value": 0.7276119744400392
          },
          {
            "source": "AE04008",
            "target": "AA01002",
            "value": -0.08814137374972193
          },
          {
            "source": "AA01002",
            "target": "AA01002",
            "value": 1
          },
          {
            "source": "AE01019",
            "target": "AA01002",
            "value": 0.6401215807062702
          },
          {
            "source": "AE04004",
            "target": "AA01002",
            "value": 0.4559369938540495
          },
          {
            "source": "AE02002",
            "target": "AA01002",
            "value": 0.6226206999413834
          },
          {
            "source": "AE04016",
            "target": "AA01002",
            "value": 0.5669788232117671
          },
          {
            "source": "AE04009",
            "target": "AA01002",
            "value": 0.31215193908508954
          },
          {
            "source": "AE01001",
            "target": "AA01002",
            "value": 0.537626177400506
          },
          {
            "source": "AE01006",
            "target": "AA01002",
            "value": 0.6532054863433155
          },
          {
            "source": "AE03009",
            "target": "AA01002",
            "value": 0.39122222837338616
          },
          {
            "source": "AE04006",
            "target": "AA01002",
            "value": 0.3447964377365639
          },
          {
            "source": "AE04001",
            "target": "AA01002",
            "value": 0.6592210277426506
          },
          {
            "source": "AE02003",
            "target": "AE03009",
            "value": 0.39415001237987685
          },
          {
            "source": "AE02011",
            "target": "AE03009",
            "value": 0.41732895353910143
          },
          {
            "source": "AE04008",
            "target": "AE03009",
            "value": 0.5567581789239663
          },
          {
            "source": "AE01019",
            "target": "AE03009",
            "value": 0.2637121492532814
          },
          {
            "source": "AE04004",
            "target": "AE03009",
            "value": 0.4290156066315513
          },
          {
            "source": "AE02002",
            "target": "AE03009",
            "value": 0.3956738974342996
          },
          {
            "source": "AE04016",
            "target": "AE03009",
            "value": 0.4134462447132326
          },
          {
            "source": "AE04009",
            "target": "AE03009",
            "value": 0.4846546096975426
          },
          {
            "source": "AE01001",
            "target": "AE03009",
            "value": 0.4879985966086085
          },
          {
            "source": "AE01006",
            "target": "AE03009",
            "value": 0.28148341163578366
          },
          {
            "source": "AE03009",
            "target": "AE03009",
            "value": 1
          },
          {
            "source": "AE04006",
            "target": "AE03009",
            "value": 0.3249524203517547
          },
          {
            "source": "AE04001",
            "target": "AE03009",
            "value": 0.4340364942982369
          },
          {
            "source": "AE02003",
            "target": "AE04001",
            "value": 0.8004161766334118
          },
          {
            "source": "AE02011",
            "target": "AE04001",
            "value": 0.7902945273350656
          },
          {
            "source": "AE04008",
            "target": "AE04001",
            "value": -0.09897858690681961
          },
          {
            "source": "AE01019",
            "target": "AE04001",
            "value": 0.7998454845427511
          },
          {
            "source": "AE04004",
            "target": "AE04001",
            "value": 0.8506417478001379
          },
          {
            "source": "AE02002",
            "target": "AE04001",
            "value": 0.5969999226257054
          },
          {
            "source": "AE04016",
            "target": "AE04001",
            "value": 0.9231974493844067
          },
          {
            "source": "AE04009",
            "target": "AE04001",
            "value": 0.6289527982346312
          },
          {
            "source": "AE01001",
            "target": "AE04001",
            "value": 0.5505259618442901
          },
          {
            "source": "AE01006",
            "target": "AE04001",
            "value": 0.5208130572393168
          },
          {
            "source": "AE04006",
            "target": "AE04001",
            "value": 0.6404362725668566
          },
          {
            "source": "AE04001",
            "target": "AE04001",
            "value": 1
          },
          {
            "source": "AE02003",
            "target": "AE04004",
            "value": 0.5933810534104936
          },
          {
            "source": "AE02011",
            "target": "AE04004",
            "value": 0.566357330892298
          },
          {
            "source": "AE04008",
            "target": "AE04004",
            "value": 0.03193948466721868
          },
          {
            "source": "AE01019",
            "target": "AE04004",
            "value": 0.7115072535746412
          },
          {
            "source": "AE04004",
            "target": "AE04004",
            "value": 1
          },
          {
            "source": "AE02002",
            "target": "AE04004",
            "value": 0.3249671592797926
          },
          {
            "source": "AE04016",
            "target": "AE04004",
            "value": 0.9437902422817963
          },
          {
            "source": "AE04009",
            "target": "AE04004",
            "value": 0.7600640688789957
          },
          {
            "source": "AE01001",
            "target": "AE04004",
            "value": 0.3410530539263739
          },
          {
            "source": "AE01006",
            "target": "AE04004",
            "value": 0.28823686808532467
          },
          {
            "source": "AE04006",
            "target": "AE04004",
            "value": 0.7373481139283453
          },
          {
            "source": "AE02003",
            "target": "AE04006",
            "value": 0.39185340268553265
          },
          {
            "source": "AE02011",
            "target": "AE04006",
            "value": 0.47744685719232405
          },
          {
            "source": "AE04008",
            "target": "AE04006",
            "value": 0.05599466461210545
          },
          {
            "source": "AE01019",
            "target": "AE04006",
            "value": 0.694750017928925
          },
          {
            "source": "AE02002",
            "target": "AE04006",
            "value": 0.15277359823950892
          },
          {
            "source": "AE04016",
            "target": "AE04006",
            "value": 0.7063708175659729
          },
          {
            "source": "AE04009",
            "target": "AE04006",
            "value": 0.4307855690525622
          },
          {
            "source": "AE01001",
            "target": "AE04006",
            "value": 0.1655365139527206
          },
          {
            "source": "AE01006",
            "target": "AE04006",
            "value": 0.3383138932597324
          },
          {
            "source": "AE04006",
            "target": "AE04006",
            "value": 1
          },
          {
            "source": "AE02003",
            "target": "AE04008",
            "value": -0.1981475891803598
          },
          {
            "source": "AE02011",
            "target": "AE04008",
            "value": -0.2202845931099707
          },
          {
            "source": "AE04008",
            "target": "AE04008",
            "value": 1
          },
          {
            "source": "AE01019",
            "target": "AE04008",
            "value": -0.15884094388872172
          },
          {
            "source": "AE02002",
            "target": "AE04008",
            "value": -0.10525907555894362
          },
          {
            "source": "AE04016",
            "target": "AE04008",
            "value": -0.07760460210173849
          },
          {
            "source": "AE04009",
            "target": "AE04008",
            "value": 0.16233649422936514
          },
          {
            "source": "AE01001",
            "target": "AE04008",
            "value": -0.08566466723465996
          },
          {
            "source": "AE01006",
            "target": "AE04008",
            "value": -0.2632936930716741
          },
          {
            "source": "AE02003",
            "target": "AE04009",
            "value": 0.5024728445143007
          },
          {
            "source": "AE02011",
            "target": "AE04009",
            "value": 0.37640168254892903
          },
          {
            "source": "AE01019",
            "target": "AE04009",
            "value": 0.3110818842410958
          },
          {
            "source": "AE02002",
            "target": "AE04009",
            "value": 0.4278145882708932
          },
          {
            "source": "AE04016",
            "target": "AE04009",
            "value": 0.7029107245908999
          },
          {
            "source": "AE04009",
            "target": "AE04009",
            "value": 1
          },
          {
            "source": "AE01001",
            "target": "AE04009",
            "value": 0.3463135414218502
          },
          {
            "source": "AE01006",
            "target": "AE04009",
            "value": 0.09208514806178374
          },
          {
            "source": "AE02003",
            "target": "AE04016",
            "value": 0.7117236794432533
          },
          {
            "source": "AE02011",
            "target": "AE04016",
            "value": 0.6639476163145704
          },
          {
            "source": "AE01019",
            "target": "AE04016",
            "value": 0.7704179671543369
          },
          {
            "source": "AE02002",
            "target": "AE04016",
            "value": 0.44639222779993326
          },
          {
            "source": "AE04016",
            "target": "AE04016",
            "value": 1
          },
          {
            "source": "AE01001",
            "target": "AE04016",
            "value": 0.4213698815169446
          },
          {
            "source": "AE01006",
            "target": "AE04016",
            "value": 0.39861881648742914
          },
          {
            "source": "AE02003",
            "target": "AE01001",
            "value": 0.6838300801276028
          },
          {
            "source": "AE02011",
            "target": "AE01001",
            "value": 0.7822352317867147
          },
          {
            "source": "AE01019",
            "target": "AE01001",
            "value": 0.3379981697994819
          },
          {
            "source": "AE02002",
            "target": "AE01001",
            "value": 0.7013114409511818
          },
          {
            "source": "AE01001",
            "target": "AE01001",
            "value": 1
          },
          {
            "source": "AE01006",
            "target": "AE01001",
            "value": 0.668310926816738
          },
          {
            "source": "AE02003",
            "target": "AE01006",
            "value": 0.6434346388413357
          },
          {
            "source": "AE02011",
            "target": "AE01006",
            "value": 0.8310482255235454
          },
          {
            "source": "AE01019",
            "target": "AE01006",
            "value": 0.6379504846014181
          },
          {
            "source": "AE02002",
            "target": "AE01006",
            "value": 0.6196922547980387
          },
          {
            "source": "AE01006",
            "target": "AE01006",
            "value": 1
          },
          {
            "source": "AE02003",
            "target": "AE01019",
            "value": 0.6478735101753683
          },
          {
            "source": "AE02011",
            "target": "AE01019",
            "value": 0.7249323816839349
          },
          {
            "source": "AE01019",
            "target": "AE01019",
            "value": 1
          },
          {
            "source": "AE02002",
            "target": "AE01019",
            "value": 0.39035161824484804
          },
          {
            "source": "AE02003",
            "target": "AE02002",
            "value": 0.8092309132158284
          },
          {
            "source": "AE02011",
            "target": "AE02002",
            "value": 0.7305082039730182
          },
          {
            "source": "AE02002",
            "target": "AE02002",
            "value": 1
          },
          {
            "source": "AE02003",
            "target": "AE02003",
            "value": 1
          },
          {
            "source": "AE02011",
            "target": "AE02003",
            "value": 0.8078463091260255
          },
          {
            "source": "AE02011",
            "target": "AE02011",
            "value": 1
          }
        ]
      },
      color: [
        {
          "id": "AA",
          "name": "粮食",
          "color": "#982BB0"
        },
        {
          "id": "AB",
          "name": "油料",
          "color": "#6735D4"
        },
        {
          "id": "AD",
          "name": "糖烟茶",
          "color": "#2E64F5"
        },
        {
          "id": "AE",
          "name": "蔬菜",
          "color": "#35B8F6"
        },
        {
          "id": "AF",
          "name": "果品",
          "color": "#30C8C1"
        },
        {
          "id": "AI",
          "name": "药材",
          "color": "#41C976"
        },
        {
          "id": "AJ",
          "name": "植物油",
          "color": "#8BC847"
        },
        {
          "id": "AL",
          "name": "畜禽产品",
          "color": "#ECF04F"
        },
        {
          "id": "AM",
          "name": "水产品",
          "color": "#F5C846"
        }
      ],
      isDev: false, // 是否不允许鼠标事件
      tooltipFontSise: 16,
      tooltipFontColor: '#fff',
      cameraPosition: [300, 550, 400], // 视角
      positive: true // 默认显示正相关
    };

    this.switchType = this.switchType.bind(this);
  };

  switchType() {
    this.switchLock = true;
    let positive = !this.state.positive
    this.setState({ positive });
    this.matrix.flip(positive);
  }

  componentDidUpdate() {
    if (this.switchLock) { return false; }
    this.matrix.stop();
    this.matrix = null;
    this.chartDom.querySelector('canvas').remove();
    this.componentDidMount();
  }

  componentDidMount() {
    const me = this;
    this.switchLock = false;
    const width = this.props.width || this.state.width;
    const height = this.props.height || this.state.height;
    const color = this.props.color || this.state.color;
    const allowPointer = this.props.isDev || this.state.isDev;
    const cameraPosition = this.props.cameraPosition || this.state.cameraPosition;
    let dataTemp = JSON.stringify(this.props.dataV || this.state.dataV);
    let data = JSON.parse(dataTemp);
    let matrix = this.matrix;

    data.vertices.forEach(function (item) {
      item.id = item.varietyId;
      item.name = item.varietyName;
      item.group = item.categoryId;
      item.count = 1;
    });
    data.edges.forEach(function (item, i) {
      item.id = i + 1;
    });

    farmProduceCategoryInfo.categories = color;
    const palette = farmProduceCategoryInfo.getPalette();

    if (!matrix) {
      matrix = new AgriPfscnew3dLib.AdjacencyMatrix({
        cameraPosition,
        data,
        border: img_border,
        grid: img_grid,
        palette
      });
      me.chartDom.appendChild(matrix.domElement);
    }
    this.matrix = matrix;
    matrix.resize(width, height);
    matrix.start();
    matrix.appear();

    matrix.on("itemMouseOver", function (event) {
      var data = event.data;
      me.tooltipDom.innerHTML = [
        "条目1：",
        "<span style='color: " + farmProduceCategoryInfo.numberToHex(palette[data.source.group]) + ";'>",
        data.source.name,
        "</span>",
        "<br/>",
        "条目2：",
        "<span style='color: " + farmProduceCategoryInfo.numberToHex(palette[data.target.group]) + ";'>",
        data.target.name,
        "</span>",
        "<br/>",
        "相关性：" + data.edge.value.toFixed(3)
      ].join("");
      me.tooltipDom.style.visibility = 'visible';
      me.tooltipDom.style.left = event.mouseEvent.offsetX + 5 + 'px';
      me.tooltipDom.style.top = event.mouseEvent.offsetY + 5 + 'px';
    });
    matrix.on("itemMouseOut", function () {
      me.tooltipDom.style.visibility = 'hidden';
    });
    matrix.on("itemClick", function (event) {
    });

    if (!allowPointer) {
      matrix.domElement.style.pointerEvents = 'all';
    } else {
      matrix.domElement.style.pointerEvents = 'none';
    }

    setTimeout(() => {
      matrix.flip(true)
    }, 1000);
  }

  render() {
    return (
      <div style={{
        width: this.props.width || this.state.width,
        height: this.props.height || this.state.height,
        top: this.props.top || this.state.top,
        left: this.state.lfet || this.state.left
      }} ref={(ref) => { this.chartDom = ref; }}>
        <div ref={(ref) => { this.tooltipDom = ref; }} style={{
          position: 'absolute',
          background: 'rgba(0,0,0,.8)',
          padding: '6px 10px 10px',
          borderRadius: 4,
          color: this.props.tooltipFontColor || this.state.tooltipFontColor,
          fontSize: this.props.tooltipFontSise || this.state.tooltipFontSise,
          whiteSpace: "nowrap",
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 131,
          height: 72,
          backgroundSize: ' 100% 100%',
          cursor: 'pointer',
          backgroundImage: `url(${typeImg[Number(this.state.positive)]})`
        }} onClick={this.switchType} />
      </div>
    );
  }

  componentWillUnmount() {
    this.matrix.stop();
  }
}
export default Page;
