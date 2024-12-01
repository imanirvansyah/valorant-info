export interface IGameMode {
    uuid: string;
    displayName: string;
    description: string;
    duration: string;
    economyType: string;
    allowsMatchTimeouts: string;
    isTeamVoiceAllowed: string;
    isMinimapHidden: string;
    orbCount: number;
    roundsPerHalf: number;
    teamRoles: string;
    gameFeatureOverrides: string;
    gameRuleBoolOverrides: {
        ruleName: string;
        state: boolean;
    }[];
    displayIcon: string;
    listViewIconTall: string;
    assetPath: string;
}