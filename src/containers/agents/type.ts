export interface IAgent {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: any;
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    assetPath: string;
    isFullPortraitRightFacing: false,
    isPlayableCharacter: true,
    isAvailableForTest: false,
    isBaseContent: false,
    role: {
        uuid: string;
        displayName: string;
        description: string;
        displayIcon: string;
        assetPath: string;
    },
    recruitmentData: any,
    abilities: {
        slot: string;
        displayName: string;
        description: string;
        displayIcon: string;
    }[]
    voiceLine: string;
}