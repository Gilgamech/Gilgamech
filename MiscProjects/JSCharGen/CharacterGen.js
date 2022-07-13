
var armor_check_penalty=0;
var shield_check_penalty=0;
var ac_hp=0;
var ac_species_name="";
var ac_strength=0;
var ac_constitution=0;
var ac_dexterity=0;
var ac_intelligence=0;
var ac_wisdom=0;
var ac_charisma=0;
var ac_large=false;
var ac_small=false;
var ac_speed_string="0";
var ac_natural_armor=0;
var  ac_hd=0;
var  ac_bab=0;
var  ac_fort=0;
var  ac_reflex=0;
var  ac_will=0; 
var  ac_skill_points=0;
var  ac_feat_entitlement=0;
var ac_attacks="";
var ac_special="";

var  ac_strength=0;
var  ac_dexterity=0;
var  ac_tricks=0;
var animal_companion_level=0;
var favored_for_hp=0;
var favored_for_skill=0;
var prestige_bonus_feat_entitlement=0;
var rt_cold=0;
var rt_desert=0;
var rt_forest=0;
var rt_jungle=0;
var rt_mountain=0;
var rt_plains=0;
var rt_planeabyss=0;
var rt_planeair=0;
var rt_planeaxis=0;
var rt_planeabaddon=0;
var rt_planeastral=0;
var rt_planeearth=0;
var rt_planeelysium=0;
var rt_planeethereal=0;
var rt_planefire=0;
var rt_planeheaven=0;
var rt_planehell=0;
var rt_planemaelstrom=0;
var rt_planenirvana=0;
var rt_planeshadow=0;
var rt_planewater=0;
var rt_swamp=0;
var rt_other1=0;
var rt_other2=0;
var rt_underground=0;
var rt_urban=0;
var rt_water=0;
var rf_aberration=0;
var rf_animal=0; 
var rf_construct=0; 
var rf_dragon=0; 
var rf_humanoidothersubtype=0; 
var rf_fey=0; 
var rf_giant=0; 
var rf_aquatic=0; 
var rf_dwarf=0; 
var rf_elf=0; 
var rf_goblinoid=0; 
var rf_gnoll=0; 
var rf_gnome=0; 
var rf_halfling=0; 
var rf_human=0; 
var rf_orc=0; 
var rf_reptilian=0; 
var rf_magicalbeast=0; 
var rf_monstroushumanoid=0; 
var rf_ooze=0; 
var rf_air=0; 
var rf_chaotic=0; 
var rf_earth=0; 
var rf_evil=0; 
var rf_fire=0; 
var rf_good=0; 
var rf_lawful=0; 
var rf_native=0; 
var rf_water=0; 
var rf_plant=0; 
var rf_undead=0; 
var rf_vermin=0; 
var ranger_foe_length=0; 
var ranger_terrain_length=0;
var dexterity_A_string=""; 
var dexterity_0_string=""; 

var abyssal_nativespeaker=false;
var celestial_nativespeaker=false;
var darkelfsilent_nativespeaker=false;
var infernal_nativespeaker=false;
var ignan_nativespeaker=false;
var sahuagin_nativespeaker=false;
var aklo_nativespeaker=false; 
var aquan_nativespeaker=false; 
var auran_nativespeaker=false; 
var undercommon_nativespeaker=false;
var otherlanguage1_nativespeaker=false;
var otherlanguage2_nativespeaker=false;
var otherlanguage3_nativespeaker=false;
var otherlanguage4_nativespeaker=false;
var otherlanguage5_nativespeaker=false;
var otherlanguage6_nativespeaker=false;
var otherlanguage1_friendly=true;
var otherlanguage2_friendly=true;
var otherlanguage3_friendly=true;
var otherlanguage4_friendly=true;
var otherlanguage5_friendly=true;
var otherlanguage6_friendly=true;
var terran_nativespeaker=false;
var draconic_nativespeaker=false; 
var dwarven_nativespeaker=false; 
var common_nativespeaker=false; 
var elven_nativespeaker=false; 
var giant_nativespeaker=false; 
var gith_nativespeaker=false; 
var gnoll_nativespeaker=false; 
var gnome_nativespeaker=false; 
var goblin_nativespeaker=false; 
var halfling_nativespeaker=false; 
var aboleth_nativespeaker=false; 
var orc_nativespeaker=false; 
var sylvan_nativespeaker=false; 
var thrikreen_nativespeaker=false; 
var aarakocra_nativespeaker=false; 
var pterran_nativespeaker=false; 
var xeph_nativespeaker=false; 
var every_language_friendly=false; 
var abyssal_friendly=false; 
var aklo_friendly=false; 
var aquan_friendly=false; 
var auran_friendly=false; 
var celestial_friendly=false; 
var draconic_friendly=false; 
var dwarven_friendly=false; 
var common_friendly=false; 
var elven_friendly=false; 
var darkelfsilent_friendly=false; 
var giant_friendly=false; 
var gith_friendly=false; 
var gnoll_friendly=false; 
var gnome_friendly=false; 
var goblin_friendly=false; 
var halfling_friendly=false; 
var ignan_friendly=false; 
var infernal_friendly=false; 
var aboleth_friendly=false; 
var orc_friendly=false; 
var sylvan_friendly=false; 
var terran_friendly=false; 
var thrikreen_friendly=false; 
var aarakocra_friendly=false; 
var pterran_friendly=false; 
var sahuagin_friendly=false; 
var undercommon_friendly=false; 
var xeph_friendly=false; 
var every_language_friendly=false; 
 var my_character_is_done=false; 
 var final_speed=0; 
 var top_ability_score; 
 var prestige_class_name="Prestige Class"; 
 var prestige_hit_point_dice=0; 
 var prestige_attack_bonus_progress=0; 
 var prestige_fortitude_save_bonus=0; 
 var prestige_reflex_save_bonus=0; 
 var prestige_will_save_bonus=0; 
 var prestige_skill_points_per_level=0; 
 var prestige_spellcasting_as=0; 
 var prestige_any_spell_levels=0; 
 var prestige_bard_spell_levels=0
 var prestige_cleric_spell_levels=0; 
 var prestige_druid_spell_levels=0; 
 var prestige_paladin_spell_levels=0; 
 var prestige_ranger_spell_levels=0; 
 var prestige_sorcerer_spell_levels=0; 
 var prestige_wizard_spell_levels=0; 
 var heft=0; 
 var ideal_weight=0; 
 var wt=0; 
 var wizard_specialty_name="Wizard"; 

 var  skillbought_bonus_languages=0; 
 var  total_bonus_languages=0; 
 var  racial_bonus_language_entitlement=0; 
 var  skillbought_bonus_language_entitlement=0; 
 var  total_bonus_language_entitlement=0; 
 var unarmored=false; 


 var no_specialist=true; 
 var abjuration_specialist=false; 
 var conjuration_specialist=false; 
 var divination_specialist=false; 
 var enchantment_specialist=false; 
 var evocation_specialist=false; 
 var illusion_specialist=false; 
 var necromancy_specialist=false; 
 var transmutation_specialist=false; 
 var gave_up_abjuration=false; 
 var gave_up_conjuration=false; 
 var gave_up_divination=false; 
 var gave_up_enchantment=false; 
 var gave_up_evocation=false; 
 var gave_up_illusion=false; 
 var gave_up_necromancy=false; 
 var gave_up_transmutation=false; 

 var rangercombattrack=0; 
 var no_druid_domain=false;
 var air_druid_domain=false;
 var animal_druid_domain=false;
 var earth_druid_domain=false;
 var fire_druid_domain=false;
 var plant_druid_domain=false;
 var water_druid_domain=false;
 var weather_druid_domain=false;

 var no_familiar=true; 
 var bat_familiar=false; 
 var cat_familiar=false; 
 var hawk_familiar=false; 
 var lizard_familiar=false; 
 var monkey_familiar=false; 
 var rat_familiar=false; 
 var raven_familiar=false; 
 var snake_familiar=false; 
 var toad_familiar=false; 
 var weasel_familiar=false; 
 var already_knows_simple_weapons=false; 
 var already_knows_martial_weapons=false; 
 var already_knows_light_armor=false; 
 var already_knows_medium_armor=false; 
 var already_knows_heavy_armor=false; 
 var already_knows_shields=false; 
 var already_knows_tower_shield=false; 
 var FeatsAreLocked=false; 
 var total_fighter_feats=0; 
 var total_halfelf_feats=0;
 var high_level_rogue_count=0; 
 var skill_points_spent=0; 
 var total_wizard_feats=0; 
 var total_r1_feats=0;
 var total_r2_feats=0;
 var total_monk_feats=0;

 var WizardSpells0=""; 
 var WizardSpells1=""; 
 var WizardSpells2=""; 
 var WizardSpells3=""; 
 var WizardSpells4=""; 
 var WizardSpells5=""; 
 var WizardSpells6=""; 
 var WizardSpells7=""; 
 var WizardSpells8=""; 
 var WizardSpells9=""; 
 var DruidSpells0=""; 
 var DruidSpells1=""; 
 var DruidSpells2=""; 
 var DruidSpells3=""; 
 var DruidSpells4=""; 
 var DruidSpells5=""; 
 var DruidSpells6=""; 
 var DruidSpells7=""; 
 var DruidSpells8=""; 
 var DruidSpells9=""; 
 var ClericSpells0=""; 
 var ClericSpells1=""; 
 var ClericSpells2=""; 
 var ClericSpells3=""; 
 var ClericSpells4=""; 
 var ClericSpells5=""; 
 var ClericSpells6=""; 
 var ClericSpells7=""; 
 var ClericSpells8=""; 
 var ClericSpells9=""; 
 var SorcererSpells0=""; 
 var SorcererSpells1=""; 
 var SorcererSpells2=""; 
 var SorcererSpells3=""; 
 var SorcererSpells4=""; 
 var SorcererSpells5=""; 
 var SorcererSpells6=""; 
 var SorcererSpells7=""; 
 var SorcererSpells8=""; 
 var SorcererSpells9=""; 
 var PaladinSpells0=""; 
 var PaladinSpells1=""; 
 var PaladinSpells2=""; 
 var PaladinSpells3=""; 
 var PaladinSpells4=""; 
 var PaladinSpells5=""; 
 var PaladinSpells6=""; 
 var PaladinSpells7=""; 
 var PaladinSpells8=""; 
 var PaladinSpells9=""; 
 var RangerSpells0=""; 
 var RangerSpells1=""; 
 var RangerSpells2=""; 
 var RangerSpells3=""; 
 var RangerSpells4=""; 
 var RangerSpells5=""; 
 var RangerSpells6=""; 
 var RangerSpells7=""; 
 var RangerSpells8=""; 
 var RangerSpells9=""; 
 var BardSpells0=""; 
 var BardSpells1=""; 
 var BardSpells2=""; 
 var BardSpells3=""; 
 var BardSpells4=""; 
 var BardSpells5=""; 
 var BardSpells6=""; 
 var BardSpells7=""; 
 var BardSpells8=""; 
 var BardSpells9=""; 
var base_attack_bonus=0; 
var base_fortitude_bonus=0; 
var base_will_bonus=0; 
var base_reflex_bonus=0; 
var missile_attack_string_1=""
var finesse_attack_string_1=""
var CMB_string_1=""
var CMD_string_1=""
var ac_CMB_string_1=""
var ac_CMD_string_1=""
var handheld_attack_string_1=""
var flurry_of_blows_string_1=""
var fortitude_string_1=""
var will_string_1=""
var reflex_string_1=""
var fear_save=0; 
var horror_save=0; 
var madness_save=0; 
var fear_string_1=""; 
var horror_string_1=""; 
var madness_string_1=""; 
var fear_string_2=""; 
var horror_string_2=""; 
var madness_string_2=""; 
var initiative_string_1=""
var missile_attack_string_2=""
var finesse_attack_string_2=""
var CMB_string_2=""
var CMD_string_2=""
var ac_CMB_string_2=""
var ac_CMD_string_2=""
var handheld_attack_string_2=""
var fortitude_string_2=""
var will_string_2=""
var reflex_string_2=""
var initiative_string_2=""
var missile_attack=0; 
var finesse_attack=0; 
var CMB_attack=0; 
var ac_CMB_attack=0; 
var handheld_attack=0; 
var fortitude_save=0; 
var reflex_save=0; 
var will_save=0; 
var initiative_modifier=0; 




var small=false; 
var large=false;
var has_uncanny_dodge=false; 
var total_hit_points=0; 
var total_armor_class=0; 
var touch_armor_class=0; 
var dexterity_bonus_in_this_armor=0; 
var armor_string=""; 
var speed_string=""; 
var shield_string=""; 
var armor_class_string=""; 
var stringy=""; 
var class_string=""
var genderandrace_string="";

var has_acrobatic=false
var has_agilemaneuvers=false
var has_alertness=false
var has_animalaffinity=false
var has_arcanestrike=false
var has_armorproficiencylight=false
var has_armorproficiencymedium=false
var has_armorproficiencyheavy=false
var has_athletic=false
var has_augmentsummoning=false
var has_blindfight=false
var has_combatcasting=false
var has_combatexpertise=false
var has_improveddisarm=false
var has_improvedfeint=false
var has_improvedtrip=false
var has_whirlwindattack=false
var has_combatreflexes=false
var has_deceitful=false
var has_defthands=false
var has_dodge=false
var has_mobility=false
var has_springattack=false
var has_endurance=false
var has_diehard=false
var has_eschewmaterials=false
var has_exoticweaponproficiency=false
var has_extrachannel=0
var has_extraki=0
var has_extralayonhands=0
var has_extramercy=0
var has_extraperformance=0
var has_extrarage=0
var has_greatfortitude=false
var has_improvedcounterspell=false
var has_improvedcritical=0
var has_improvedinitiative=false
var has_improvedunarmedstrike=false
var has_improvedgrapple=false
var has_deflectarrows=false
var has_snatcharrows=false
var has_stunningfist=false
var has_ironwill=false
var has_leadership=false
var has_lightningreflexes=false
var has_magicalaptitude=false
var has_martialweaponproficiency=false
var has_mountedcombat=false
var has_mountedarchery=false
var has_ridebyattack=false
var has_spiritedcharge=false
var has_trample=false
var has_naturalspell=false
var has_persuasive=false
var has_pointblankshot=false
var has_farshot=false
var has_preciseshot=false
var has_rapidshot=false
var has_manyshot=false
var has_shotontherun=false
var has_improvedpreciseshot=false
var has_powerattack=false
var has_cleave=false
var has_greatcleave=false
var has_improvedbullrush=false
var has_improvedoverrun=false
var has_improvedsunder=false
var has_quickdraw=false
var has_rapidreload=false
var has_run=false
var has_selfsufficient=false
var has_shieldproficiency=false
var has_improvedshieldbash=false
var has_towershieldproficiency=false
var has_simpleweaponproficiency=false
var has_skillfocusappraise=false
var has_skillfocusbluff=false
var has_skillfocusclimb=false
var has_skillfocusacrobatics=false
var has_skillfocuscraft_1=false
var has_skillfocuscraft_2=false
var has_skillfocuscraft_3=false
var has_skillfocusdiplomacy=false
var has_skillfocusdisabledevice=false
var has_skillfocusdisguise=false
var has_skillfocusescapeartist=false
var has_skillfocusfly=false
var has_skillfocushandleanimal=false
var has_skillfocusheal=false
var has_skillfocusstealth=false
var has_skillfocusintimidate=false
var has_skillfocusknowledgearcana=false
var has_skillfocusknowledgeengineering=false
var has_skillfocusknowledgedungeoneering=false
var has_skillfocusknowledgegeography=false
var has_skillfocusknowledgehistory=false
var has_skillfocusknowledgelocal=false
var has_skillfocusknowledgenature=false
var has_skillfocusknowledgenobility=false
var has_skillfocusknowledgereligion=false
var has_skillfocusknowledgeplanes=false
var has_skillfocuslinguistics=false
var has_skillfocusperception=false
var has_skillfocusperform_1=false
var has_skillfocusperform_2=false
var has_skillfocusperform_3=false
var has_skillfocusperform_4=false
var has_skillfocusperform_5=false
var has_skillfocusprofession=false
var has_skillfocusride=false
var has_skillfocussensemotive=false
var has_skillfocussleightofhand=false
var has_skillfocusspellcraft=false
var has_skillfocussurvival=false
var has_skillfocusswim=false
var has_skillfocususemagicdevice=false
var has_spellfocus=false
var has_greaterspellfocus=false
var has_spellfocusabjuration=false; 
var has_spellfocusconjuration=false; 
var has_spellfocusdivination=false; 
var has_spellfocusevocation=false; 
var has_spellfocusenchantment=false; 
var has_spellfocusillusion=false; 
var has_spellfocusnecromancy=false; 
var has_spellfocustransmutation=false; 
var has_greaterspellfocusabjuration=false; 
var has_greaterspellfocusconjuration=false; 
var has_greaterspellfocusdivination=false; 
var has_greaterspellfocusevocation=false; 
var has_greaterspellfocusenchantment=false; 
var has_greaterspellfocusillusion=false; 
var has_greaterspellfocusnecromancy=false; 
var has_greaterspellfocustransmutation=false; 
var has_spellmastery=0
var has_spellpenetration=false
var has_greaterspellpenetration=false
var has_stealthy=false
var has_stepup=false
var has_strikeback=false
var has_throwanything=false
var has_toughness=false
var has_twoweaponfighting=false
var has_twoweapondefense=false
var has_improvedtwoweaponfighting=false
var has_greatertwoweaponfighting=false
var has_weaponfinesse=false
var has_otherfeat1=false
var has_otherfeat2=false
var has_otherfeat3=false
var has_otherfeat4=false
var has_otherfeat5=false
var has_otherfeat6=false
var has_otherfeat7=false
var has_otherfeat8=false
var has_otherfeat9=false
var has_otherfeat10=false
var has_weaponfocus=0
var has_weaponspecialization=0
var has_greaterweaponfocus=0
var has_greaterweaponspecialization=0
var has_brewpotion=false
var has_craftmaa=false
var has_craftrod=false
var has_craftstaff=false
var has_craftwand=false
var has_craftwondrousitem=false
var has_forgering=false
var has_scribescroll=false
var has_empowerspell=false
var has_enlargespell=false
var has_extendspell=false
var has_heightenspell=false
var has_maximizespell=false
var has_quickenspell=false
var has_silentspell=false
var has_stillspell=false
var has_widenspell=false
var has_alignmentchannel=false;
var has_arcanearmortraining=false;
var has_arcanearmormastery=false;
var has_catchoffguard=false;
var has_channelsmite=false;
var has_greaterdisarm=false;
var has_greaterfeint=false;
var has_greatertrip=false;
var has_standstill=false;
var has_commandundead=false;
var has_criticalfocus=false;
var has_bleedingcritical=false;
var has_blindingcritical=false;
var has_criticalmastery=false;
var has_deafeningcritical=false;
var has_sickeningcritical=false;
var has_staggeringcritical=false;
var has_stunningcritical=false;
var has_tiringcritical=false;
var has_exhaustingcritical=false;
var has_deadlyaim=false;
var has_defensivecombattraining=false;
var has_disruptive=false;
var has_spellbreaker=false;
var has_windstance=false;
var has_lightningstance=false;
var has_elementalchannel=false;
var has_fleet=false;
var has_improvedgreatfortitude=false;
var has_improvedchannel=false;
var has_improvedfamiliar=false;
var has_greatergrapple=false;
var has_scorpionstyle=false;
var has_gorgonsfist=false;
var has_medusaswrath=false;
var has_improvisedweaponmastery=false;
var has_intimidatingprowess=false;
var has_improvedironwill=false;
var has_improvedlightningreflexes=false;
var has_lunge=false;
var has_mastercraftsman=false;
var has_unseat=false;
var has_nimblemoves=false;
var has_acrobaticsteps=false;

var has_pinpointtargeting=false;
var has_greaterbullrush=false;
var has_greateroverrun=false;
var has_greatersunder=false;
var has_selectivechanneling=false;
var has_shieldslam=false;
var has_shieldmaster=false;
var has_shieldfocus=false;
var has_greatershieldfocus=false;

var has_turnundead=false;
var has_doubleslice=false;
var has_twoweaponrend=false;
var has_vitalstrike=false;
var has_improvedvitalstrike=false;
var has_greatervitalstrike=false;
var has_dazzlingdisplay=false;
var has_shatterdefenses=false;
var has_deadlystroke=false;
var has_penetratingstrike=false;
var has_greaterpenetratingstrike=false;


var has_air_domain=false
var has_animal_domain=false
var has_chaos_domain=false
var has_death_domain=false
var has_destruction_domain=false
var has_earth_domain=false
var has_evil_domain=false
var has_fire_domain=false
var has_good_domain=false
var has_healing_domain=false
var has_knowledge_domain=false
var has_law_domain=false
var has_luck_domain=false
var has_magic_domain=false
var has_plant_domain=false
var has_protection_domain=false
var has_strength_domain=false
var has_sun_domain=false
var has_travel_domain=false
var has_trickery_domain=false
var has_war_domain=false
var has_water_domain=false
var has_artifice_domain=false;
var has_charm_domain=false;
var has_community_domain=false;
var has_darkness_domain=false;
var has_glory_domain=false;
var has_liberation_domain=false;
var has_madness_domain=false;
var has_nobility_domain=false;
var has_repose_domain=false;
var has_rune_domain=false;
var has_weather_domain=false;
var channels_energy=0; 

var has_aberrant_bloodline=false;
var has_abyssal_bloodline=false;
var has_arcane_bloodline=false;
var has_celestial_bloodline=false;
var has_destined_bloodline=false;
var has_draconic_bloodline=false;
var has_elemental_bloodline=false;
var has_fey_bloodline=false;
var has_infernal_bloodline=false;
var has_undead_bloodline=false;




 var fighterfeatentitlement=0; 
 var halfelffeatentitlement=0; 
 var sorcererfeatentitlement=0; 
 var r1featentitlement=0; 
 var r2featentitlement=0; 
 var monkfeatentitlement=0;
 var wizardfeatentitlement=0; 
 var genericfeatentitlement=0; 
 var barbarian_levels=0; 
 var bard_levels=0; 
 var cleric_levels=0; 
 var druid_levels=0; 
 var fighter_levels=0; 
 var monk_levels=0; 
 var paladin_levels=0; 
 var ranger_levels=0; 
 var rogue_levels=0; 
 var sorcerer_levels=0; 
 var wizard_levels=0; 
 var prestige_levels=0; 
 var total_skill_points=0; 
 var skill_points_spent=0; 
 var upitat00=0; 
 var upitat04=0; 
 var upitat08=0; 
 var upitat12=0; 
 var upitat16=0; 
 var upitat20=0; 
 var appraise=0; 
 var bluff=0; 
 var climb=0; 
 var acrobatics=0; 
 var craft_1=0; 
 var craft_2=0; 
 var craft_3=0; 
 var diplomacy=0; 
 var disabledevice=0; 
 var disguise=0; 
 var escapeartist=0; 
 var fly=0; 
 var handleanimal=0; 
 var heal=0; 
 var stealth=0; 
// var hypnosis=0; 
 var intimidate=0; 
 var knowledgearcana=0; 
 var knowledgeengineering=0; 
 var knowledgedungeoneering=0; 
 var knowledgegeography=0; 
 var knowledgehistory=0; 
 var knowledgelocal=0; 
 var knowledgenature=0; 
 var knowledgenobility=0; 
 var knowledgereligion=0; 
 var knowledgeplanes=0; 
 var perception=0; 
 var about=0; 
 var perform_1=0; 
 var perform_2=0; 
 var perform_3=0; 
 var perform_4=0; 
 var perform_5=0; 
 var profession=0; 
 var ride=0; 
 var sensemotive=0; 
 var sleightofhand=0; 
 var linguistics=0; 
 var spellcraft=0; 
 var survival=0; 
 var swim=0; 
 var usemagicdevice=0; 
 var otherskill1=0; 
 var otherskill2=0; 
 var otherskill3=0; 

 var otherskill1_class=1; 
 var otherskill2_class=1; 
 var otherskill3_class=1; 
 var alignment=0; 
 var rayce=0; 
 var gender=0; 
 var total_levels=0; 
 var stat1=0
 var stat2=0
 var stat3=0
 var stat4=0
 var stat5=0
 var stat6=0
 var class01=0; 
 var class02=0; 
 var class03=0; 
 var class04=0; 
 var class05=0; 
 var class06=0; 
 var class07=0; 
 var class08=0; 
 var class09=0; 
 var class10=0; 
 var class11=0; 
 var class12=0; 
 var class13=0; 
 var class14=0; 
 var class15=0; 
 var class16=0; 
 var class17=0; 
 var class18=0; 
 var class19=0; 
 var class20=0; 
 var strength01=0; 
 var strength02=0; 
 var strength03=0; 
 var strength04=0; 
 var strength05=0; 
 var strength06=0; 
 var strength07=0; 
 var strength08=0; 
 var strength09=0; 
 var strength10=0; 
 var strength11=0; 
 var strength12=0; 
 var strength13=0; 
 var strength14=0; 
 var strength15=0; 
 var strength16=0; 
 var strength17=0; 
 var strength18=0; 
 var strength19=0; 
 var strength20=0; 
 var newHP01=0; 
 var newHP02=0; 
 var newHP03=0; 
 var newHP04=0; 
 var newHP05=0; 
 var newHP06=0; 
 var newHP07=0; 
 var newHP08=0; 
 var newHP09=0; 
 var newHP10=0; 
 var newHP11=0; 
 var newHP12=0; 
 var newHP13=0; 
 var newHP14=0; 
 var newHP15=0; 
 var newHP16=0; 
 var newHP17=0; 
 var newHP18=0; 
 var newHP19=0; 
 var newHP20=0; 
 var intelligence01=0; 
 var intelligence04=0; 
 var intelligence08=0; 
 var intelligence12=0; 
 var intelligence16=0; 
 var intelligence20=0; 
 var SWD="<html><head><style type=text/css media-screen><!--  body {font-family: Arial; font-size: 12 pt;}  --></style><title>My Other Window</title></head><body>"
 var x=0;
 var y=0;
 var q=0; 
 var z=0; 
 var d1=0; 
 var d2=0; 
 var d3=0; 
 var d4=0; 
 var d5=0; 
// var strength=new Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
 var strength=0; 
 var intelligence=0; 
 var wisdom=0; 
 var constitution=0; 
 var charisma=0; 
 var dexterity=0; 
 var statwentto=0; 
 var secondstatwentto=0; 
 var thirdstatwentto=0; 
 var fourthstatwentto=0; 
 var fifthstatwentto=0; 
 var sixthstatwentto=0; 
 var CharacterTypeHasBeenEstablished=false; 
 var AbilitiesHaveBeenEstablished=false; 
 var ClassesHaveBeenEstablished=false; 
 var AbilitiesAreProperlyAssigned=false; 
 var DiceHaveBeenRolled=false; 
 var SkillPointsAreLocked=false; 
 var AbilityIncreasesAreLocked=false; 
 var FighterFeatsEtcFrozen=false;
 var total_animal_feats=0;
 var age_adjustment=0;
 function recall_age(){
 if ((AbilityIncreasesAreLocked==true)|(FighterFeatsEtcFrozen==true))
   {document.form1.age_radio[age_adjustment].checked=true;}
  }

  
function Spellcaster(){
 if (cleric_levels>0){return true;}
 if (bard_levels>0){return true;}
 if (druid_levels>0){return true;}
 if (paladin_levels>0){return true;}
 if (rogue_levels>0){return true;}
 if (ranger_levels>0){return true;}
 if (sorcerer_levels>0){return true;}
 if (wizard_levels>0){return true;}
 }

function DwarfArmorSpeed(){
 if (rayce==4){return true;}
 if (rayce==211){return true;}
 }

function Cults(){
 if (cleric_levels==0){document.form1.cult_weapons.checked=false;}
 }

function totalknowledgebase(){
 return knowledgearcana + knowledgeengineering + knowledgedungeoneering
  + knowledgegeography + knowledgehistory + knowledgelocal
  + knowledgenature + knowledgenobility + knowledgereligion
   + knowledgeplanes; 
 }




function enuff(i){
 if (i==0){return false; }
 if (i<(total_levels-prestige_levels)/2){return false; }
 return true; 
 }

function howmanyclasses(){
 x=0; 
 if (barbarian_levels>0){x++; }
 if (cleric_levels>0){x++; }
 if (druid_levels>0){x++; }
 if (fighter_levels>0){x++; }
 if (monk_levels>0){x++; }
 if (paladin_levels>0){x++; }
 if (ranger_levels>0){x++; }
 if (rogue_levels>0){x++; }
 if (sorcerer_levels>0){x++; }
 if (wizard_levels>0){x++; }
 if (bard_levels>0){x++; }
 return x; 
 }


function add_a_title(){
 z++; 
 document.form1.title_list.options[z]=new Option(stringy); 
 document.form1.title_list.options[z].value=stringy; 
 document.form1.title_list.options[z].text=stringy; 
 }



function suggest_titles(){
  document.form1.title_list.length=0; 


 
  if (document.form1.moniker.value=="")
   {
     document.form1.title_list.options[0]=new Option(stringy); 
     document.form1.title_list.options[0].value="[you need a name]"; 
     document.form1.title_list.options[0].text="[you need a name]"; 
    return; 
   }
  if (total_levels==0)
   {
     document.form1.title_list.options[0]=new Option(stringy); 
     document.form1.title_list.options[0].value="[you need an identity]"; 
     document.form1.title_list.options[0].text="[you need an identity]"; 
    return; 
   }
 
//zzzzzzzzzzzzz

  document.form1.title_list.options[0]=new Option("--------------------"); 
  z=0; 
  if (rayce==28){stringy=" the Aasimar "; add_a_title(); }
  if (abjuration_specialist==true){stringy=" the Abjurer "; add_a_title(); }
  if (has_acrobatic==true){stringy=" the Acrobatic "; add_a_title(); }
  if (enuff(cleric_levels)==true){stringy=" the Adept "; add_a_title(); }
  if ((has_agilemaneuvers==true)&(dexterity>=12)){stringy=" the Agile "; add_a_title(); }
  if (has_alertness==true){stringy=" the Alert "; add_a_title(); }
  if (enuff(wizard_levels)==true){stringy=" the Aloof "; add_a_title(); }
  if (alignment<4){stringy=" the Altruistic "; add_a_title(); }
  if (alignment==5){stringy=" the Amoral "; add_a_title(); }
  if (has_animalaffinity){stringy=" the Animal Lover "; add_a_title(); }
  if ((ride>=2)&&(handleanimal>=2)){stringy=" the Animal Trainer "; add_a_title(); }
  if (handleanimal>=total_levels){stringy=" the Animal Handler "; add_a_title(); }
  if (appraise>=total_levels){stringy=" the Appraiser "; add_a_title(); }
  if (enuff(wizard_levels + sorcerer_levels)==true){stringy=" the Arcane "; add_a_title(); }
  if (rangercombattrack==1){stringy=" the Archer "; add_a_title(); }
  if (wisdom>14){stringy=" the Astute "; add_a_title(); }
  if ((has_athletic==true)|((climb>=2)&&(swim>=2))){stringy=" the Athletic "; add_a_title(); }
  if (dexterity<6){stringy=" the Awkward "; add_a_title(); }
  if (alignment>5){stringy=" the Bad-Tempered "; add_a_title(); }
  if (enuff(barbarian_levels)==true){stringy=" the Barbarian "; add_a_title(); }
  if (enuff(bard_levels)==true){stringy=" the Bard "; add_a_title(); }
  if (bat_familiar==true){stringy=" the Bat "; add_a_title(); }
  if (alignment==3){stringy=" the Beautific "; add_a_title(); }
  if ((charisma>14)&&(gender==2)){stringy=" the Beautiful "; add_a_title(); }
  if (alignment<4){stringy=" the Blessed "; add_a_title(); }
  if (has_blindfight){stringy=" the Blind-Fighter "; add_a_title(); }
  if (has_improvedunarmedstrike==true){stringy=" the Boxer "; add_a_title(); }
  if (rangercombattrack==3){stringy=" the Beast Wrestler "; add_a_title(); }
  if (strength>14){stringy=" the Brawny "; add_a_title(); }
  if (intelligence>14){stringy=" the Bright "; add_a_title(); }
  if (enuff(barbarian_levels)==true){stringy=" the Brute "; add_a_title(); }
  if (enuff(rogue_levels)==true){stringy=" the Burglar "; add_a_title(); }
  if (alignment==7){stringy=" the Calculating "; add_a_title(); }
  if (alignment>6){stringy=" the Callous "; add_a_title(); }
  if (enuff(cleric_levels)==true){stringy=" the Canon "; add_a_title(); }
  if (total_levels>4){stringy=" the Capable "; add_a_title(); }
  if ((alignment==6)|(alignment==9)){stringy=" the Capricious "; add_a_title(); }
  if ((alignment==3)|(alignment==6)|(alignment==9)){stringy=" the Carefree "; add_a_title(); }
  if (cat_familiar==true){stringy=" the Cat "; add_a_title(); }
  if (enuff(fighter_levels +paladin_levels)==true){stringy=" the Champion "; add_a_title(); }
  if ((alignment==3)|(alignment==6)|(alignment==9)){stringy=" the Chaotic "; add_a_title(); }
  if (charisma>=14){stringy=" the Charismatic "; add_a_title(); }
  if (alignment<4){stringy=" the Cheerful "; add_a_title(); }
  if (enuff(cleric_levels)==true){stringy=" the Cleric "; add_a_title(); }
  if (intelligence>14){stringy=" the Clever "; add_a_title(); }
  if (dexterity<6){stringy=" the Clumsy "; add_a_title(); }
  if (enuff(barbarian_levels)==true){stringy=" the Coarse "; add_a_title(); }
  if (alignment<4){stringy=" the Compassionate "; add_a_title(); }
  if (alignment==6){stringy=" the Confusing "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Conscientious "; add_a_title(); }
  if ((alignment<4)&&(paladin_levels +cleric_levels>0)){stringy=" the Consecrated "; add_a_title(); }
  if (alignment<3){stringy=" the Considerate "; add_a_title(); }
  if (conjuration_specialist==true){stringy=" the Conjuror "; add_a_title(); }
  if (enuff(cleric_levels)==true){stringy=" the Contemplative "; add_a_title(); }
  if (alignment>7){stringy=" the Corrupt "; add_a_title(); }
  if (alignment<3){stringy=" the Courteous "; add_a_title(); }
  if (intelligence>14){stringy=" the Crafty "; add_a_title(); }
  if (enuff(barbarian_levels)==true){stringy=" the Crude "; add_a_title(); }
  if (alignment>6){stringy=" the Cruel "; add_a_title(); }
  if (enuff(cleric_levels)==true){stringy=" the Curate "; add_a_title(); }
  if ((has_deceitful)&&(alignment>4)){stringy=" the Deceitful "; add_a_title(); }
  if (enuff(cleric_levels +paladin_levels)==true){stringy=" the Dedicated "; add_a_title(); }
  if (wisdom>14){stringy=" the Deep "; add_a_title(); }
  if (has_deceitful==true){stringy=" the Deceitful "; add_a_title(); }
  if (enuff(paladin_levels)==true){stringy=" the Defender "; add_a_title(); }
  if ((alignment>7)&&(enuff(cleric_levels)==true)){stringy=" the Defiled "; add_a_title(); }
  if (has_defthands==true){stringy=" the Deft "; add_a_title(); }
  if (alignment==9){stringy=" the Demonic "; add_a_title(); }
  if (intelligence<6){stringy=" the Dense "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Dependable "; add_a_title(); }
  if (alignment==9){stringy=" the Destructive "; add_a_title(); }
  if (rayce==9){stringy=" the Dhampir "; add_a_title(); }
  if (alignment==7){stringy=" the Diabolic "; add_a_title(); }
  if (intelligence<6){stringy=" the Dim "; add_a_title(); }
  if (diplomacy>=total_levels){stringy=" the Diplomatic "; add_a_title(); }
  if (wisdom>14){stringy=" the Discerning "; add_a_title(); }
  if ((alignment==6)|(alignment==9)){stringy=" the Discourteous "; add_a_title(); }
  if ((alignment==6)){stringy=" the Disorderly "; add_a_title(); }
  if (divination_specialist==true){stringy=" the Diviner "; add_a_title(); }
  if (enuff(druid_levels)==true){stringy=" the Druid "; add_a_title(); }
  if (intelligence<6){stringy=" the Dumb "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Dutiful "; add_a_title(); }
  if ((rayce==4)){stringy=" the Dwarf "; add_a_title(); }
  if (alignment==1){stringy=" the Earnest "; add_a_title(); }
  if (alignment==3){stringy=" the Easy-Going "; add_a_title(); }
  if (enuff(wizard_levels + bard_levels)==true){stringy=" the Educated "; add_a_title(); }
  if (alignment>6){stringy=" the Egotistical "; add_a_title(); }
  if ((rayce==3)){stringy=" the Elf "; add_a_title(); }
  if ((enchantment_specialist==true)&&(gender==1)){stringy=" the Enchanter "; add_a_title(); }
  if ((enchantment_specialist==true)&&(gender==1)){stringy=" the Enchantress "; add_a_title(); }
  if (constitution>14){stringy=" the Enduring "; add_a_title(); }
  if (enuff(wizard_levels + sorcerer_levels)){stringy=" the Enigmatic "; add_a_title(); }
  if ((totalknowledgebase()>2*total_levels)|(enuff(wizard_levels)==true)){stringy=" the Erudite "; add_a_title(); }
  if (enuff(wizard_levels)==true){stringy=" the Esoteric "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Ethical "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Even-Handed "; add_a_title(); }
  if (has_evil_domain==true){stringy=" the Evil "; add_a_title(); }
  if (evocation_specialist==true){stringy=" the Evoker "; add_a_title(); }
  if (constitution>14){stringy=" the Fit "; add_a_title(); }
  if (strength>15){stringy=" the Forceful "; add_a_title(); }
  if (constitution<6){stringy=" the Fragile "; add_a_title(); }
  if ((alignment==3)|(alignment==6)){stringy=" the Free-Spirited "; add_a_title(); }
  if (alignment<4){stringy=" the Friendly "; add_a_title(); }
  if (enuff(paladin_levels)==true){stringy=" the Gallant "; add_a_title(); }
  if (alignment<4){stringy=" the Generous "; add_a_title(); }
  if (alignment<4){stringy=" the Gentle "; add_a_title(); }
  if ((rayce==5)){stringy=" the Gnome "; add_a_title(); }
  if (alignment<4){stringy=" the Good "; add_a_title(); }
  if (charisma>15){stringy=" the Gorgeous "; add_a_title(); }
  if (alignment==1){stringy=" the Gracious "; add_a_title(); }
  if (has_improvedgrapple==true){stringy=" the Grappler "; add_a_title(); }
  if (alignment>7){stringy=" the Greedy "; add_a_title(); }
  if (enuff(paladin_levels)==true){stringy=" the Guardian "; add_a_title(); }
  if (enuff(ranger_levels)==true){stringy=" the Guide "; add_a_title(); }
  if ((gender==1)&&(document.form1.beard_type[3].checked==true)){stringy=" the Hairy "; add_a_title(); }
  if ((rayce==2)){stringy=" the Half-Elf "; add_a_title(); }
  if ((rayce==7)){stringy=" the Half-Orc "; add_a_title(); }
  if ((rayce==6)){stringy=" the Halfling "; add_a_title(); }
  if (alignment==1){stringy=" the Hallowed "; add_a_title(); }
  if (
     (document.form1.lighthammer.checked==true)
     |(document.form1.warhammer.checked==true)
     |(document.form1.hammer.checked==true)
     ){stringy=" the Hammer "; add_a_title(); }
  if ((gender==1)&&(charisma>14)){stringy=" the Handsome "; add_a_title(); }
  if (constitution>14){stringy=" the Hardy "; add_a_title(); }
  if (hawk_familiar==true){stringy=" the Hawk "; add_a_title(); }
  if ((heal>=total_levels)|(has_healing_domain==true)){stringy=" the Healer "; add_a_title(); }
  if (constitution>14){stringy=" the Healthy "; add_a_title(); }
  if (alignment>6){stringy=" the Heartless "; add_a_title(); }
  if (alignment<4){stringy=" the Helpful "; add_a_title(); }
  if (charisma<5){stringy=" the Hideous "; add_a_title(); }
  if ((alignment<4)&&(cleric_levels +paladin_levels>0)){stringy=" the Holy "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Honest "; add_a_title(); }
  if ((alignment==1)|(alignment==4)|(alignment==7)){stringy=" the Honorable "; add_a_title(); }
  if ((enuff(ranger_levels)==true)|(survival>=total_levels)){stringy=" the Hunter "; add_a_title(); }
  if ((alignment<4)){stringy=" the Humane "; add_a_title(); }
  if (rayce==31){stringy=" the Ifrit "; add_a_title(); }
  if (illusion_specialist==true){stringy=" the Illusionist "; add_a_title(); }
  if ((alignment==6)|(alignment==8)|(alignment==9)){stringy=" the Immoral "; add_a_title(); }
  if ((alignment==4)){stringy=" the Impartial "; add_a_title(); }
  if (wisdom<6){stringy=" the Imprudent "; add_a_title(); }
  if (alignment==6){stringy=" the Inconsistent "; add_a_title(); }
  if (alignment==9){stringy=" the Indecent "; add_a_title(); }
  if ((alignment==3)|(alignment==6)){stringy=" the Independent "; add_a_title(); }
  if ((alignment==5)|(alignment==6)){stringy=" the Indifferent "; add_a_title(); }
  if (alignment==4){stringy=" the Judicious "; add_a_title(); }
  if (alignment==1){stringy=" the Just "; add_a_title(); }
  if (enuff(paladin_levels)==true){stringy=" the Keeper "; add_a_title(); }
  if (alignment<3){stringy=" the Kind-Hearted "; add_a_title(); }
  if ((alignment==6)|(alignment==8)|(alignment==9)){stringy=" the Knave "; add_a_title(); }
  if ((enuff(rogue_levels)==true)&&(alignment>4)){stringy=" the Larcenous "; add_a_title(); }
  if (has_law_domain==true){stringy=" the Lawful "; add_a_title(); }
  if ((totalknowledgebase()>2*total_levels)|(enuff(wizard_levels)==true)){stringy=" the Learned "; add_a_title(); }
  if ((cleric_levels>0)&&((alignment==4)|(alignment==7))){stringy=" the Legalistic "; add_a_title(); }
  if (lizard_familiar==true){stringy=" the Lizard "; add_a_title(); }
  if (enuff(bard_levels)==true){stringy=" the Lorist "; add_a_title(); }
  if (has_luck_domain==true){stringy=" the Lucky "; add_a_title(); }
  if (has_magic_domain==true){stringy=" the Magical "; add_a_title(); }
  if (charisma>14){stringy=" the Magnetic "; add_a_title(); }
  if (charisma>14){stringy=" the Magnificent "; add_a_title(); }
  if (alignment>6){stringy=" the Malevolent "; add_a_title(); }
  if (alignment>7){stringy=" the Malicious "; add_a_title(); }
  if (enuff(monk_levels)==true){stringy=" the Martial Artist "; add_a_title(); }
  if (alignment>6){stringy=" the Mean "; add_a_title(); }
  if (alignment>6){stringy=" the Mean-Spirited "; add_a_title(); }
  if (alignment<4){stringy=" the Merciful "; add_a_title(); }
  if (alignment>6){stringy=" the Merciless "; add_a_title(); }
  if (alignment==4){stringy=" the Meticulous "; add_a_title(); }
  if (strength>14){stringy=" the Mighty "; add_a_title(); }
  if (enuff(bard_levels)==true){stringy=" the Minstrel "; add_a_title(); }
  if (enuff(monk_levels)==true){stringy=" the Monk "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Moral "; add_a_title(); }
  if (howmanyclasses()>2){stringy=" the Multi-Talented "; add_a_title(); }
  if (strength>15){stringy=" the Muscular "; add_a_title(); }
  if (enuff(bard_levels)==true){stringy=" the Musician "; add_a_title(); }
  if (enuff(fighter_levels)==true){stringy=" the Myrmidon "; add_a_title(); }
  if (enuff(wizard_levels)==true){stringy=" the Mysterious "; add_a_title(); }
  if (enuff(wizard_levels +cleric_levels +druid_levels)){stringy=" the Mystical "; add_a_title(); }
  if (alignment>6){stringy=" the Nasty "; add_a_title(); }
  if (necromancy_specialist==true){stringy=" the Necromancer "; add_a_title(); }
  if (alignment<3){stringy=" the Noble "; add_a_title(); }
  if (rayce==22){stringy=" the Orc "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Orderly "; add_a_title(); }
  if (rayce==30){stringy=" the Oread "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Organized "; add_a_title(); }
  if (owl_familiar==true){stringy=" the Owl "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Painstaking "; add_a_title(); }
  if (enuff(paladin_levels)==true){stringy=" the Paladin "; add_a_title(); }
  if (enuff(cleric_levels)==true){stringy=" the Parson "; add_a_title(); }
  if (enuff(cleric_levels)==true){stringy=" the Pastor "; add_a_title(); }
  if (enuff(ranger_levels)==true){stringy=" the Pathfinder "; add_a_title(); }
  if ((has_persuasive==true)|((bluff>=2)&&(intimidate>=2))){stringy=" the Persuasive "; add_a_title(); }
  if (illusion_specialist==true){stringy=" the Phantasmist "; add_a_title(); }
  if ((alignment<4)&&(charisma>11)){stringy=" the Pleasant "; add_a_title(); }
  if ((alignment==1)|(alignment==4)|(alignment==7)){stringy=" the Polite "; add_a_title(); }
  if (enuff(cleric_levels)==true){stringy=" the Prefect "; add_a_title(); }
  if ((enuff(paladin_levels)==true)|(has_protection_domain==true)){stringy=" the Protector "; add_a_title(); }
  if (alignment>6){stringy=" the Proud "; add_a_title(); }
  if (wisdom>14){stringy=" the Prudent "; add_a_title(); }
  if (alignment==1){stringy=" the Pure "; add_a_title(); }
  if (dexterity>14){stringy=" the Quick "; add_a_title(); }
  if (intelligence>14){stringy=" the Quick-Thinking "; add_a_title(); }
  if (enuff(ranger_levels)==true){stringy=" the Ranger "; add_a_title(); }
  if (alignment==6){stringy=" the Rascal "; add_a_title(); }
  if (rat_familiar==true){stringy=" the Rat "; add_a_title(); }
  if (raven_familiar==true){stringy=" the Raven "; add_a_title(); }
  if ((alignment==1)|(alignment==7)|(alignment==4)){stringy=" the Refined "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Reliable "; add_a_title(); }
  if (charisma<5){stringy=" the Repugnant "; add_a_title(); }
  if (charisma<5){stringy=" the Repulsive "; add_a_title(); }
  if (constitution>14){stringy=" the Resiliant "; add_a_title(); }
  if ((alignment==1)|(alignment==4)|(alignment==2)){stringy=" the Respectable "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Responsible "; add_a_title(); }
  if (rangercombattrack==4){stringy=" the Rider "; add_a_title(); }
  if (alignment==4){stringy=" the Rigid "; add_a_title(); }
  if ((enuff(rogue_levels)==true)&&(alignment>2)){stringy=" the Robber "; add_a_title(); }
  if (constitution>14){stringy=" the Robust "; add_a_title(); }
  if (enuff(rogue_levels)==true){stringy=" the Rogue "; add_a_title(); }
  if (has_run==true){stringy=" the Runner "; add_a_title(); }
  if (wisdom>14){stringy=" the Sagacious "; add_a_title(); }
  if ((cleric_levels +paladin_levels>0)&&(alignment==1)){stringy=" the Sanctified "; add_a_title(); }
  if (totalknowledgebase()>2*total_levels){stringy=" the Scholar "; add_a_title(); }
  if (enuff(rogue_levels)){stringy=" the Scoundrel "; add_a_title(); }
  if (constitution<6){stringy=" the Scrawny "; add_a_title(); }
  if (enuff(ranger_levels)==true){stringy=" the Scout "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Scrupulous "; add_a_title(); }
  if ((alignment==7)|(alignment==4)){stringy=" the Severe "; add_a_title(); }
  if (enuff(rogue_levels)==true){stringy=" the Sharper "; add_a_title(); }
  if (intelligence<6){stringy=" the Simple "; add_a_title(); }
  if (strength>14){stringy=" the Sinewy "; add_a_title(); }
  if (intelligence<6){stringy=" the Slow-Witted "; add_a_title(); }
  if (intelligence>14){stringy=" the Sly "; add_a_title(); }
  if (intelligence>14){stringy=" the Smart "; add_a_title(); }
  if (snake_familiar==true){stringy=" the Snake "; add_a_title(); }
  if (enuff(fighter_levels)==true){stringy=" the Soldier "; add_a_title(); }
  if ((enuff(sorcerer_levels)==true)&&(gender==1)){stringy=" the Sorcerer "; add_a_title(); }
  if ((enuff(sorcerer_levels)==true)&&(gender==2)){stringy=" the Sorceress "; add_a_title(); }
  if (spellcraft>=total_levels){stringy=" the Spellcrafter "; add_a_title(); }
  if (illusion_specialist==true){stringy=" the Spellbinder "; add_a_title(); }
  if (alignment>6){stringy=" the Spiteful "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Steady "; add_a_title(); }
  if ((has_stealthy==true)|(stealth>2)){stringy=" the Stealthy "; add_a_title(); }
  if (enuff(ranger_levels)==true){stringy=" the Strider "; add_a_title(); }
  if (strength>14){stringy=" the Strong "; add_a_title(); }
  if ((gender==1)&&(charisma>14)){stringy=" the Studly "; add_a_title(); }
  if (intelligence<6){stringy=" the Stupid "; add_a_title(); }
  if (constitution>14){stringy=" the Sturdy "; add_a_title(); }
  if (intelligence>14){stringy=" the Subtle "; add_a_title(); }
  if (has_sun_domain==true){stringy=" the Sunny "; add_a_title(); }
  if (survival>=total_levels){stringy=" the Survivalist "; add_a_title(); }
  if (enuff(fighter_levels)==true){stringy=" the Swashbckler "; add_a_title(); }
  if (dexterity>14){stringy=" the Swift "; add_a_title(); }
  if (swim>=total_levels){stringy=" the Swimmer "; add_a_title(); }
  if ((enuff(fighter_levels)==true)&&(gender==1)){stringy=" the Swordsman "; add_a_title(); }
  if ((enuff(fighter_levels)==true)&&(gender==2)){stringy=" the Swordwoman "; add_a_title(); }
  if (rayce==29){stringy=" the Sylph "; add_a_title(); }
  if (rayce==33){stringy=" the Tiefling "; add_a_title(); }
  if (intelligence>14){stringy=" the Thinker "; add_a_title(); }
  if (toad_familiar==true){stringy=" the Toad "; add_a_title(); }
  if ((has_toughness)&(constitution>=16)){stringy=" the Too-Tough "; add_a_title(); }
  if (constitution>14){stringy=" the Tough "; add_a_title(); }
  if (transmutation_specialist==true){stringy=" the Transmuter "; add_a_title(); }
  if (has_travel_domain==true){stringy=" the Traveler "; add_a_title(); }
  if ((has_deceitful)|((disguise>=2)&&(forgery>=2))){stringy=" the Tricky "; add_a_title(); }
  if (enuff(fighter_levels)>0){stringy=" the Trooper "; add_a_title(); }
  if (enuff(bard_levels)==true){stringy=" the Troubadour "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Trustworthy "; add_a_title(); }
  if ((alignment==1)|(alignment==4)){stringy=" the Truthful "; add_a_title(); }
  if (charisma<7){stringy=" the Ugly "; add_a_title(); }
  if (alignment>4){stringy=" the Uncaring "; add_a_title(); }
  if (rayce==32){stringy=" the Undine "; add_a_title(); }
  if (alignment>6){stringy=" the Unfeeling "; add_a_title(); }
  if (alignment==6){stringy=" the Unpredictable "; add_a_title(); }
  if (alignment==6){stringy=" the Unreliable "; add_a_title(); }
  if (wisdom<7){stringy=" the Unwise "; add_a_title(); }
  if (alignment==1){stringy=" the Upright "; add_a_title(); }
  if (alignment>6){stringy=" the Vengeful "; add_a_title(); }
  if (alignment>7){stringy=" the Vicious "; add_a_title(); }
  if (constitution>14){stringy=" the Vigorous "; add_a_title(); }
  if (alignment>6){stringy=" the Villain "; add_a_title(); }
  if (alignment>5){stringy=" the Violent "; add_a_title(); }
  if (alignment<3){stringy=" the Virtuous "; add_a_title(); }
  if (alignment==6){stringy=" the Volatile "; add_a_title(); }
  if (has_war_domain==true){stringy=" the Warlike "; add_a_title(); }
  if (weasel_familiar==true){stringy=" the Weasel "; add_a_title(); }
  if ((charisma>14)|(enuff(bard_levels)==true)){stringy=" the Well-Spoken "; add_a_title(); }
  if (wisdom>14){stringy=" the Wise "; add_a_title(); }
  if (wisdom<6){stringy=" the Witless "; add_a_title(); }
  if (enuff(wizard_levels)==true){stringy=" the Wizard "; add_a_title(); }
  if (has_improvedgrapple){stringy=" the Wrestler "; add_a_title(); }
  if ((alignment==1)|(alignment==3)){stringy=" the Zealous "; add_a_title(); }

  y=1+Math.ceil((z-1)*Math.random()); 
  document.form1.title_list.options[y].selected=true; 
 }




function pigmentation(){
 if (gender==2){document.form1.beard_type[0].checked=true;document.form1.beard_type[0].checked=false;}
 if (document.form1.hair_color[11].checked){document.form1.hair_type[0].checked=true;document.form1.hair_type[0].checked=false;}
 }

function DruidDomainAddition(){
 if (air_druid_domain){return " + 1 from the air domain "}
 if (animal_druid_domain){return " + 1 from the animal domain "}
 if (earth_druid_domain){return " + 1 from the fire domain "}
 if (fire_druid_domain){return " + 1 from the earth domain "}
 if (plant_druid_domain){return " + 1 from the plant domain "}
 if (water_druid_domain){return " + 1 from the water domain "}
 if (weather_druid_domain){return " + 1 from the weather domain "}
 return "";
 }

function NegateAnimalCompanionStuff(){
  document.form1.ac_acrobatics_list.length=1; 
  document.form1.ac_climb_list.length=1; 
  document.form1.ac_escapeartist_list.length=1; 
  document.form1.ac_fly_list.length=1; 
  document.form1.ac_intimidate_list.length=1; 
  document.form1.ac_perception_list.length=1; 
  document.form1.ac_stealth_list.length=1; 
  document.form1.ac_survival_list.length=1; 
  document.form1.ac_swim_list.length=1; 
document.form1.ac_acrobatic_box.checked=false;
document.form1.ac_agilemaneuvers_box.checked=false;
document.form1.ac_armorproficiencylight_box.checked=false;
document.form1.ac_armorproficiencymedium_box.checked=false;
document.form1.ac_armorproficiencyheavy_box.checked=false;
document.form1.ac_athletic_box.checked=false;
document.form1.ac_blindfight_box.checked=false;
document.form1.ac_combatreflexes_box.checked=false;
document.form1.ac_diehard_box.checked=false;
document.form1.ac_dodge_box.checked=false;
document.form1.ac_endurance_box.checked=false;
document.form1.ac_greatfortitude_box.checked=false;
document.form1.ac_improvedbullrush_box.checked=false;
document.form1.ac_improvedinitiative_box.checked=false;
document.form1.ac_improvednaturalarmor_list.selectedIndex=0;
document.form1.ac_improvednaturalattack_box.checked=false;
document.form1.ac_improvedoverrun_box.checked=false;
document.form1.ac_intimidatingprowess_box.checked=false;
document.form1.ac_ironwill_box.checked=false;
document.form1.ac_lightningreflexes_box.checked=false;
document.form1.ac_mobility_box.checked=false;
document.form1.ac_powerattack_box.checked=false;
document.form1.ac_run_box.checked=false;
document.form1.ac_skillfocusacrobatics_box.checked=false;
document.form1.ac_skillfocusclimb_box.checked=false;
document.form1.ac_skillfocusescapeartist_box.checked=false;
document.form1.ac_skillfocusfly_box.checked=false;
document.form1.ac_skillfocusintimidate_box.checked=false;
document.form1.ac_skillfocusperception_box.checked=false;
document.form1.ac_skillfocusstealth_box.checked=false;
document.form1.ac_skillfocussurvival_box.checked=false;
document.form1.ac_skillfocusswim_box.checked=false;
document.form1.ac_springattack_box.checked=false;
document.form1.ac_stealthy_box.checked=false;
document.form1.ac_toughness_box.checked=false;
document.form1.ac_weaponfinesse_box.checked=false;
document.form1.ac_weaponfocus_box.checked=false;
document.form1.ac_species[0].checked=true;
document.form1.ac_species[0].checked=false;
document.form1.ac_upat04[0].checked=true;
document.form1.ac_upat04[0].checked=false;
document.form1.ac_upat09[0].checked=true;
document.form1.ac_upat09[0].checked=false;
document.form1.ac_upat14[0].checked=true;
document.form1.ac_upat14[0].checked=false;
document.form1.ac_upat20[0].checked=true;
document.form1.ac_upat20[0].checked=false;
document.form1.AnimalCompanionBox.value="";
 }

function AnimalCompanion0(){
 if (((druid_levels==0)|(no_druid_domain==false))&(ranger_levels<3)){NegateAnimalCompanionStuff();document.form1.AnimalCompanionBox.value="You don't have an animal companion.";return;}
 else {document.form1.AnimalCompanionBox.value="You may take an animal companion if you wish.";}
}

function AnimalCompanion(){
//alert("Under development!  Sorry."); NegateAnimalCompanionStuff();
//alert("no_druid_domain="+no_druid_domain);
ac_species_name="";
if (((druid_levels==0)|(no_druid_domain==false))&(ranger_levels<3)){NegateAnimalCompanionStuff();document.form1.AnimalCompanionBox.value="You don't have an animal companion.";return;}
if (document.form1.ac_species[0].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose an ape. "
  ac_species_name="Ape";
  ac_strength=13;
  ac_dexterity=17;
  ac_constitution=10;
  ac_intelligence=2;
  ac_wisdom=12;
  ac_charisma=7;
  ac_large=false;
  ac_small=false;
  ac_speed="30, climb 30";
  ac_natural_armor=1;
  ac_attacks="bite (1d4) 2 claws (1d4)";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=4)
   {
    ac_large=true
    ac_strength+=8;
    ac_dexterity-=2;
    ac_constitution+=4;
    ac_natural_armor+=2;
    ac_attacks="bite (1d6) 2 claws(1d6)"
   }
 }
else if (document.form1.ac_species[1].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a badger / wolverine. "
  ac_species_name="Badger / Wolverine";
  ac_strength=10;
  ac_dexterity=17;
  ac_constitution=15;
  ac_intelligence=2;
  ac_wisdom=12;
  ac_charisma=10;
  ac_large=false;
  ac_small=true;
  ac_speed="30, burrow 10";
  ac_natural_armor=2;
  ac_attacks="bite (1d4) 2 claws (1d3)";
  ac_special="rage as barbarian 6 rounds per day, low-light vision, scent";
  if (animal_companion_level>=4)
   {
    ac_small=false;
    ac_strength+=4;
    ac_dexterity-=2;
    ac_constitution+=2;
    ac_attacks="bite (1d6) 2 claws(1d4)"
   }
 }
else if (document.form1.ac_species[2].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a bear. "
  ac_species_name="Bear";
  ac_strength=15;
  ac_dexterity=15;
  ac_constitution=13;
  ac_intelligence=2;
  ac_wisdom=12;
  ac_charisma=6;
  ac_large=false;
  ac_small=true;
  ac_speed="40";
  ac_natural_armor=2;
  ac_attacks="bite (1d4) 2 claws (1d3)";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=4)
   {
    ac_small=false;
    ac_strength+=4;
    ac_dexterity-=2;
    ac_constitution+=2;
    ac_attacks="bite (1d6) 2 claws(1d4)"
   }
 }
else if (document.form1.ac_species[3].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a bird (eagle / hawk / owl). "
  ac_species_name="Bird (eagle / hawk / owl)";
  ac_strength=10;
  ac_dexterity=15;
  ac_constitution=12;
  ac_intelligence=2;
  ac_wisdom=14;
  ac_charisma=6;
  ac_large=false;
  ac_small=true;
  ac_speed="10, fly 80";
  ac_natural_armor=1;
  ac_attacks="bite (1d4) 2 talons (1d4)";
  ac_special="low-light vision";
  if (animal_companion_level>=4)
   {
    ac_strength+=2;
    ac_constitution+=2;
   }
 }
else if (document.form1.ac_species[4].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a boar. "
  ac_species_name="Boar";
  ac_strength=13;
  ac_dexterity=12;
  ac_constitution=15;
  ac_intelligence=2;
  ac_wisdom=13;
  ac_charisma=4;
  ac_large=false;
  ac_small=true;
  ac_speed="40";
  ac_natural_armor=6;
  ac_attacks="gore (1d6) ";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=4)
   {
    ac_small=false;
    ac_strength+=4;
    ac_dexterity-=2;
    ac_constitution+=2;
    ac_attacks="gore (1d8)"
   }
 }
else if (document.form1.ac_species[5].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a camel. "
  ac_species_name="Camel";
  ac_strength=18;
  ac_dexterity=16;
  ac_constitution=14;
  ac_intelligence=2;
  ac_wisdom=11;
  ac_charisma=4;
  ac_large=true;
  ac_small=false;
  ac_speed="40";
  ac_natural_armor=1;
  ac_attacks="bite (1d4) or ranged attack spit (sicken 1d4 rounds range 10 feet)";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=4)
   {
    ac_strength+=4;
    ac_constitution+=2;
    ac_attacks="gore (1d8)"
   }
 }
else if (document.form1.ac_species[6].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a Big Cat (lion / tiger). "
  ac_species_name="Big Cat (lion / tiger)";
  ac_strength=13;
  ac_dexterity=17;
  ac_constitution=13;
  ac_intelligence=2;
  ac_wisdom=15;
  ac_charisma=10;
  ac_large=false;
  ac_small=false;
  ac_speed="40";
  ac_natural_armor=1;
  ac_attacks="bite (1d6), 2 claws (1d4); rake (1d4)";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=7)
   {
    ac_large=true;
    ac_natural_armor=2;
    ac_strength+=8;
    ac_dexterity-=2;
    ac_constitution+=4;
    ac_attacks="bite (1d8), 2 claws (1d6); grab, pounce, rake (1d6)"
   }
 }
else if (document.form1.ac_species[7].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a Small Cat (cheetah / leopard). "
  ac_species_name="Small Cat (cheetah / leopard)";
  ac_strength=12;
  ac_dexterity=21;
  ac_constitution=13;
  ac_intelligence=2;
  ac_wisdom=12;
  ac_charisma=6;
  ac_large=false;
  ac_small=true;
  ac_speed="50";
  ac_natural_armor=1;
  ac_attacks="bite (1d4) + trip; 2 claws (1d2)";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=4)
   {
    ac_small=false;
    ac_strength+=4;
    ac_dexterity-=2;
    ac_constitution+=2;
    ac_attacks="bite (1d6) + trip, 2 claws (1d3)"
    ac_special="low-light vision, scent; sprint";
   }
 }
else if (document.form1.ac_species[8].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a crocodile / alligator. "
  ac_species_name="Crocodile / Alligator";
  ac_strength=15;
  ac_dexterity=14;
  ac_constitution=15;
  ac_intelligence=1;
  ac_wisdom=12;
  ac_charisma=2;
  ac_large=false;
  ac_small=true;
  ac_speed="20 swim 30";
  ac_natural_armor=4;
  ac_attacks="bite (1d6)";
  ac_special="low-light vision";
  if (animal_companion_level>=4)
   {
    ac_small=false;
    ac_strength+=4;
    ac_dexterity-=2;
    ac_constitution+=2;
    ac_attacks="bite (1d8) or tail slap (1d12)"
    ac_special="low-light vision, grab, death roll, sprint";
   }
 }
else if (document.form1.ac_species[9].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a deinonychus / velociraptor. "
  ac_species_name="Deinonychus / Velociraptor";
  ac_strength=11;
  ac_dexterity=17;
  ac_constitution=17;
  ac_intelligence=2;
  ac_wisdom=12;
  ac_charisma=14;
  ac_large=false;
  ac_small=true;
  ac_speed="60";
  ac_natural_armor=1;
  ac_attacks="2 talons (1d6), bite (1d4)";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=7)
   {
    ac_natural_armor=2;
    ac_small=false;
    ac_strength+=4;
    ac_dexterity-=2;
    ac_constitution+=2;
    ac_attacks="2 talons (1d8), bite (1d6), 2 claws (1d4)"
    ac_special="low-light vision, scent, pounce";
   }
 }
else if (document.form1.ac_species[10].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a dog. "
  ac_species_name="Dog";
  ac_strength=13;
  ac_dexterity=17;
  ac_constitution=15;
  ac_intelligence=2;
  ac_wisdom=12;
  ac_charisma=6;
  ac_large=false;
  ac_small=true;
  ac_speed="40";
  ac_natural_armor=2;
  ac_attacks="bite (1d4)";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=4)
   {
    ac_natural_armor=2;
    ac_small=false;
    ac_strength+=4;
    ac_dexterity-=2;
    ac_constitution+=2;
    ac_attacks="bite (1d6)"
   }
 }
else if (document.form1.ac_species[11].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a horse. "
  ac_species_name="Horse";
  ac_strength=16;
  ac_dexterity=13;
  ac_constitution=15;
  ac_intelligence=2;
  ac_wisdom=12;
  ac_charisma=6;
  ac_large=true;
  ac_small=false;
  ac_speed="50";
  ac_natural_armor=0;
  ac_attacks="bite (1d4), 2 hooves (1d6) -- hooves are secondary";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=4)
   {
 
    ac_small=false;
    ac_strength+=2;
    ac_constitution+=2;
    ac_special="low-light vision, scent, combat trained";
   }
 }
else if (document.form1.ac_species[12].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a pony. "
  ac_species_name="Pony";
  ac_strength=13;
  ac_dexterity=13;
  ac_constitution=12;
  ac_intelligence=2;
  ac_wisdom=11;
  ac_charisma=4;
  ac_large=false;
  ac_small=false;
  ac_speed="40";
  ac_natural_armor=2;
  ac_attacks="2 hooves (1d3)";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=4)
   {
    ac_strength+=2;
    ac_constitution+=2;
    ac_special="low-light vision, scent, combat trained";
   }
 }
else if (document.form1.ac_species[13].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a shark. "
  ac_species_name="Shark";
  ac_strength=13;
  ac_dexterity=15;
  ac_constitution=15;
  ac_intelligence=1;
  ac_wisdom=12;
  ac_charisma=2;
  ac_large=false;
  ac_small=true;
  ac_speed="swim 60";
  ac_natural_armor=4;
  ac_attacks="bite (1d4)";
  ac_special="low-light vision, scent";
  if (animal_companion_level>=4)
   {
   ac_attacks="bite (1d6)";
    ac_small=false;
    ac_strength+=2;
    ac_constitution+=2;
    ac_dexterity-=2;
    ac_special="low-light vision, scent, blindsense";
   }
 }
else if (document.form1.ac_species[14].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a constrictor snake. "
  ac_species_name="Constrictor Snake";
  ac_strength=15;
  ac_dexterity=17;
  ac_constitution=13;
  ac_intelligence=1;
  ac_wisdom=12;
  ac_charisma=2;
  ac_large=false;
  ac_small=false;
  ac_speed="20, climb 20, swim 20";
  ac_natural_armor=2;
  ac_attacks="bite (1d3)";
  ac_special="grab attack low-light vision, scent";
  if (animal_companion_level>=4)
   {
   ac_attacks="bite (1d4)";
    ac_large=true;
    ac_strength+=8;
    ac_constitution+=4;
    ac_dexterity-=2;
    ac_special="grab attack, constrict 1d4. low-light vision, scent";
   }
 }
else if (document.form1.ac_species[15].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a viper. "
  ac_species_name="Viper";
  ac_strength=8;
  ac_dexterity=17;
  ac_constitution=11;
  ac_intelligence=1;
  ac_wisdom=12;
  ac_charisma=2;
  ac_large=false;
  ac_small=true;
  ac_speed="20, climb 20, swim 20";
  ac_natural_armor=2;
  ac_attacks="bite (1d3) plus poison 1 round (6)";
  ac_special="grab attacl. low-light vision, scent";
  if (animal_companion_level>=4)
   {
   ac_attacks="bite (1d4)";
    ac_small=false;
    ac_strength+=4;
    ac_constitution+=2;
    ac_dexterity-=2;
    ac_attacks="bite (1d4) plus poison 1 round (6)";
    ac_special="constrict 1d4. low-light vision, scent";
   }
 }
else if (document.form1.ac_species[16].checked)
 {
  document.form1.AnimalCompanionBox.value="You chose a wolf. "
  ac_species_name="Wolf";
  ac_strength=13;
  ac_dexterity=15;
  ac_constitution=15;
  ac_intelligence=2;
  ac_wisdom=12;
  ac_charisma=6;
  ac_large=false;
  ac_small=false;
  ac_speed="50";
  ac_natural_armor=2;
  ac_attacks="bite (1d6) plus trip";
  ac_special="scent";
  if (animal_companion_level>=4)
   {
   ac_attacks="bite (1d8) plus trip";
    ac_large=true;
    ac_strength+=8;
    ac_constitution+=4;
    ac_dexterity-=2;
    
   }
 }
else {document.form1.AnimalCompanionBox.value="Please choose your species. "}


if (animal_companion_level==1)
 {
  ac_hd=2;
  ac_bab=1;
  ac_fort=3;
  ac_reflex=3;
  ac_will=0; 
  ac_skill_points=2;
  ac_feat_entitlement=2;
  ac_natural_armor+=0;
  ac_strength+=0;
  ac_dexterity+=0;
  ac_tricks+=1;
 }
if (animal_companion_level==2)
 {
  ac_hd=3;
  ac_bab=2;
  ac_fort=3;
  ac_reflex=3;
  ac_will=1; 
  ac_skill_points=3;
  ac_feat_entitlement=2;
  ac_natural_armor+=0;
  ac_strength+=0;
  ac_dexterity+=0;
  ac_tricks+=1;
 }
if (animal_companion_level==3)
 {
  ac_hd=3;
  ac_bab=2;
  ac_fort=3;
  ac_reflex=3;
  ac_will=1; 
  ac_skill_points=3;
  ac_feat_entitlement=2;
  ac_natural_armor+=2;
  ac_strength+=1;
  ac_dexterity+=1;
  ac_tricks+=2;
 }
if (animal_companion_level==4)
 {
  ac_hd=4;
  ac_bab=3;
  ac_fort=4;
  ac_reflex=4;
  ac_will=1; 
  ac_skill_points=4;
  ac_feat_entitlement=2;
  ac_natural_armor+=2;
  ac_strength+=1;
  ac_dexterity+=1;
  ac_tricks+=2;
 }
if (animal_companion_level==5)
 {
  ac_hd=5;
  ac_bab=3;
  ac_fort=4;
  ac_reflex=4;
  ac_will=1; 
  ac_skill_points=5;
  ac_feat_entitlement=3;
  ac_natural_armor+=2;
  ac_strength+=1;
  ac_dexterity+=1;
  ac_tricks+=2;
 }
if (animal_companion_level==6)
 {
  ac_hd=6;
  ac_bab=4;
  ac_fort=5;
  ac_reflex=5;
  ac_will=2; 
  ac_skill_points=6;
  ac_feat_entitlement=3;
  ac_natural_armor+=4;
  ac_strength+=2;
  ac_dexterity+=2;
  ac_tricks+=3;
 }
if (animal_companion_level==7)
 {
  ac_hd=6;
  ac_bab=4;
  ac_fort=5;
  ac_reflex=5;
  ac_will=2; 
  ac_skill_points=6;
  ac_feat_entitlement=3;
  ac_natural_armor+=4;
  ac_strength+=2;
  ac_dexterity+=2;
  ac_tricks+=3;
 }
if (animal_companion_level==8)
 {
  ac_hd=7;
  ac_bab=5;
  ac_fort=5;
  ac_reflex=5;
  ac_will=2; 
  ac_skill_points=7;
  ac_feat_entitlement=4;
  ac_natural_armor+=4;
  ac_strength+=2;
  ac_dexterity+=2;
  ac_tricks+=3;
 }
if (animal_companion_level==9)
 {
  ac_hd=8;
  ac_bab=6;
  ac_fort=6;
  ac_reflex=6;
  ac_will=2; 
  ac_skill_points=8;
  ac_feat_entitlement=4;
  ac_natural_armor+=6;
  ac_strength+=3;
  ac_dexterity+=3;
  ac_tricks+=4;
 }
if ((animal_companion_level==10)|(animal_companion_level==11))
 {
  ac_hd=9;
  ac_bab=6;
  ac_fort=6;
  ac_reflex=6;
  ac_will=3; 
  ac_skill_points=9;
  ac_feat_entitlement=5;
  ac_natural_armor+=6;
  ac_strength+=4;
  ac_dexterity+=4;
  ac_tricks+=5;
 }
if (animal_companion_level==12)
 {
  ac_hd=10;
  ac_bab=7;
  ac_fort=7;
  ac_reflex=7;
  ac_will=3; 
  ac_skill_points=10;
  ac_feat_entitlement=5;
  ac_natural_armor+=8;
  ac_strength+=4;
  ac_dexterity+=4;
  ac_tricks+=5;
 }
if (animal_companion_level==13)
 {
  ac_hd=11;
  ac_bab=8;
  ac_fort=7;
  ac_reflex=7;
  ac_will=3; 
  ac_skill_points=11;
  ac_feat_entitlement=6;
  ac_natural_armor+=8;
  ac_strength+=4;
  ac_dexterity+=4;
  ac_tricks+=5;
 }
if (animal_companion_level==14)
 {
  ac_hd=12;
  ac_bab=9;
  ac_fort=8;
  ac_reflex=8;
  ac_will=4; 
  ac_skill_points=12;
  ac_feat_entitlement=6;
  ac_natural_armor+=8;
  ac_strength+=4;
  ac_dexterity+=4;
  ac_tricks+=5;
 }
if (animal_companion_level==15)
 {
  ac_hd=12;
  ac_bab=9;
  ac_fort=8;
  ac_reflex=8;
  ac_will=4; 
  ac_skill_points=12;
  ac_feat_entitlement=6;
  ac_natural_armor+=8;
  ac_strength+=4;
  ac_dexterity+=4;
  ac_tricks+=5;
 }
if (animal_companion_level==16)
 {
  ac_hd=13;
  ac_bab=9;
  ac_fort=8;
  ac_reflex=8;
  ac_will=4; 
  ac_skill_points=13;
  ac_feat_entitlement=7;
  ac_natural_armor+=10;
  ac_strength+=5;
  ac_dexterity+=5;
  ac_tricks+=6;
 }
if (animal_companion_level==17)
 {
  ac_hd=14;
  ac_bab=10;
  ac_fort=9;
  ac_reflex=9;
  ac_will=4; 
  ac_skill_points=14;
  ac_feat_entitlement=7;
  ac_natural_armor+=5;
  ac_strength+=5;
  ac_dexterity+=5;
  ac_tricks+=6;
 }
if (animal_companion_level==18)
 {
  ac_hd=15;
  ac_bab=11;
  ac_fort=9;
  ac_reflex=9;
  ac_will=5; 
  ac_skill_points=15;
  ac_feat_entitlement=8;
  ac_natural_armor+=12;
  ac_strength+=6;
  ac_dexterity+=6;
  ac_tricks+=71;
 }
if (animal_companion_level==19)
 {
  ac_hd=15;
  ac_bab=11;
  ac_fort=9;
  ac_reflex=9;
  ac_will=5; 
  ac_skill_points=15;
  ac_feat_entitlement=8;
  ac_natural_armor+=12;
  ac_strength+=6;
  ac_dexterity+=6;
  ac_tricks+=7;
 }
if (animal_companion_level==20)
 {
  ac_hd=16;
  ac_bab=12;
  ac_fort=10;
  ac_reflex=10;
  ac_will=5; 
  ac_skill_points=16;
  ac_feat_entitlement=8;
  ac_natural_armor+=12;
  ac_strength+=6;
  ac_dexterity+=6;
  ac_tricks+=7;
 }
//ac_fort+=modifier_number(ac_constitution);
//ac_reflex+=modifier_number(ac_dexterity);
//ac_will+=modifier_number(ac_wisdom);
ac_hp=8+modifier_number(ac_constitution);
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=2){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=3){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=4){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=5){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=6){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=7){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=8){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=9){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=10){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=11){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=12){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=13){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=14){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=15){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=16){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=17){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=18){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=19){ac_hp+=x;}
x=1+Math.floor (8*Math.random())+modifier_number(ac_constitution);if (x<1){x=1;}if (ac_hd>=20){ac_hp+=x;}
if (document.form1.ac_toughness_box.checked){ac_hp+=3; if (ac_hd>3){ac_hp+=ac_hd-3;}}
if (animal_companion_level<4){document.form1.ac_upat04[0].checked=true;document.form1.ac_upat04[0].checked=false;}
if (animal_companion_level<9){document.form1.ac_upat09[0].checked=true;document.form1.ac_upat09[0].checked=false;}
if (animal_companion_level<14){document.form1.ac_upat14[0].checked=true;document.form1.ac_upat14[0].checked=false;}
if (animal_companion_level<20){document.form1.ac_upat20[0].checked=true;document.form1.ac_upat20[0].checked=false;}
if (document.form1.ac_upat04[0].checked){ac_strength++;}
if (document.form1.ac_upat04[1].checked){ac_constitution++;}
if (document.form1.ac_upat04[2].checked){ac_dexterity++;}
if (document.form1.ac_upat04[3].checked){ac_intelligence++;}
if (document.form1.ac_upat04[4].checked){ac_wisdom++;}
if (document.form1.ac_upat04[5].checked){ac_charisma++;}
if (document.form1.ac_upat09[0].checked){ac_strength++;}
if (document.form1.ac_upat09[1].checked){ac_constitution++;}
if (document.form1.ac_upat09[2].checked){ac_dexterity++;}
if (document.form1.ac_upat09[3].checked){ac_intelligence++;}
if (document.form1.ac_upat09[4].checked){ac_wisdom++;}
if (document.form1.ac_upat09[5].checked){ac_charisma++;}
if (document.form1.ac_upat14[0].checked){ac_strength++;}
if (document.form1.ac_upat14[1].checked){ac_constitution++;}
if (document.form1.ac_upat14[2].checked){ac_dexterity++;}
if (document.form1.ac_upat14[3].checked){ac_intelligence++;}
if (document.form1.ac_upat14[4].checked){ac_wisdom++;}
if (document.form1.ac_upat14[5].checked){ac_charisma++;}
if (document.form1.ac_upat20[0].checked){ac_strength++;}
if (document.form1.ac_upat20[1].checked){ac_constitution++;}
if (document.form1.ac_upat20[2].checked){ac_dexterity++;}
if (document.form1.ac_upat20[3].checked){ac_intelligence++;}
if (document.form1.ac_upat20[4].checked){ac_wisdom++;}
if (document.form1.ac_upat20[5].checked){ac_charisma++;}
x=0;
x+=document.form1.ac_acrobatics_list.selectedIndex;
x+=document.form1.ac_climb_list.selectedIndex;
x+=document.form1.ac_escapeartist_list.selectedIndex;
x+=document.form1.ac_fly_list.selectedIndex;
x+=document.form1.ac_intimidate_list.selectedIndex;
x+=document.form1.ac_perception_list.selectedIndex;
x+=document.form1.ac_stealth_list.selectedIndex;
x+=document.form1.ac_survival_list.selectedIndex;
x+=document.form1.ac_swim_list.selectedIndex;

document.form1.AnimalCompanionBox.value+="  You may spend "+ac_skill_points+" points on skills.  You have spent "+x+".  ";

animal_feat_count=0;
if (document.form1.ac_acrobatic_box.checked){animal_feat_count++;}
if (strength>=dexterity){document.form1.ac_agilemaneuvers_box.checked=false;}
if (document.form1.ac_agilemaneuvers_box.checked){animal_feat_count++;}
if (document.form1.ac_armorproficiencylight_box.checked){animal_feat_count++;}
  else {document.form1.ac_armorproficiencymedium_box.checked=false}
if (document.form1.ac_armorproficiencymedium_box.checked){animal_feat_count++;}
  else {document.form1.ac_armorproficiencyheavy_box.checked=false}
if (document.form1.ac_armorproficiencyheavy_box.checked){animal_feat_count++;}
if (document.form1.ac_athletic_box.checked){animal_feat_count++;}
if (document.form1.ac_blindfight_box.checked){animal_feat_count++;}
if (document.form1.ac_combatreflexes_box.checked){animal_feat_count++;}
if (document.form1.ac_dodge_box.checked){animal_feat_count++;}
if (document.form1.ac_endurance_box.checked){animal_feat_count++;}
  else {document.form1.ac_diehard_box.checked=false;}
if (document.form1.ac_diehard_box.checked){animal_feat_count++;}
if (document.form1.ac_greatfortitude_box.checked){animal_feat_count++;}
if (document.form1.ac_improvedbullrush_box.checked){animal_feat_count++;}
if (document.form1.ac_improvedinitiative_box.checked){animal_feat_count++;}
animal_feat_count+=document.form1.ac_improvednaturalarmor_list.selectedIndex;
if (document.form1.ac_improvednaturalattack_box.checked){animal_feat_count++;}
if (document.form1.ac_improvedoverrun_box.checked){animal_feat_count++;}
if (document.form1.ac_intimidatingprowess_box.checked){animal_feat_count++;}
if (document.form1.ac_ironwill_box.checked){animal_feat_count++;}
if (document.form1.ac_lightningreflexes_box.checked){animal_feat_count++;}
if (document.form1.ac_mobility_box.checked){animal_feat_count++;}
if (document.form1.ac_powerattack_box.checked){animal_feat_count++;}
if (document.form1.ac_run_box.checked){animal_feat_count++;}
if (document.form1.ac_skillfocusacrobatics_box.checked){animal_feat_count++;}
if (document.form1.ac_skillfocusclimb_box.checked){animal_feat_count++;}
if (document.form1.ac_skillfocusescapeartist_box.checked){animal_feat_count++;}
if (document.form1.ac_skillfocusfly_box.checked){animal_feat_count++;}
if (document.form1.ac_skillfocusintimidate_box.checked){animal_feat_count++;}
if (document.form1.ac_skillfocusperception_box.checked){animal_feat_count++;}
if (document.form1.ac_skillfocusstealth_box.checked){animal_feat_count++;}
if (document.form1.ac_skillfocussurvival_box.checked){animal_feat_count++;}
if (document.form1.ac_skillfocusswim_box.checked){animal_feat_count++;}
if (document.form1.ac_springattack_box.checked){animal_feat_count++;}
if (document.form1.ac_stealthy_box.checked){animal_feat_count++;}
if (document.form1.ac_toughness_box.checked){animal_feat_count++;}
if (document.form1.ac_weaponfinesse_box.checked){animal_feat_count++;}
if (document.form1.ac_weaponfocus_box.checked){animal_feat_count++;} 

document.form1.AnimalCompanionBox.value+="  You are allowed "+ac_feat_entitlement+" feats. You have "+animal_feat_count+".  ";




  

  ac_CMB_attack=ac_bab + modifier_number(ac_strength);
  if (document.form1.ac_agilemaneuvers_box.checked){ac_CMB_attack=ac_bab + modifier_number(ac_dexterity);}
  if (ac_small==true){ac_CMB_attack=ac_CMB_attack-1; }
  if (ac_large==true){ac_CMB_attack=ac_CMB_attack+1; }
  ac_CMB_string_1=ac_CMB_attack; 
  if (ac_CMB_attack>=0){ac_CMB_string_1=" + " + ac_CMB_string_1; }
  ac_CMB_string_2=""; 
  ac_CMB_string_2 +=" = " + ac_bab + " [base] "; 
  if (!document.form1.ac_agilemaneuvers_box.checked)
  {
  if (modifier_number(ac_strength)>0){ac_CMB_string_2 +=" + " + modifier_number(ac_strength) + " [strength] "}
  if (modifier_number(ac_strength)<0){ac_CMB_string_2 +=modifier_number(ac_strength) + " [strength] "}
  }
  if (document.form1.ac_agilemaneuvers_box.checked)
  {
  if (modifier_number(ac_dexterity)>0){ac_CMB_string_2 +=" + " + modifier_number(ac_dexterity) + " [dexterity] "}
  if (modifier_number(ac_dexterity)<0){ac_CMB_string_2 +=modifier_number(ac_dexterity) + " [dexterity] "}
  }
  if (ac_small==true){ac_CMB_string_2 +="-1 [small] "}
  if (ac_large==true){ac_CMB_string_2 +="+1 [large] "}

  x=20+ac_bab+modifier_number(ac_strength)+modifier_number(ac_dexterity);
  if (ac_small){x--;}
  if (ac_large){x++;}
  ac_CMD_string_1=x; if (x>0){ac_CMD_string_1=" + "+x;} 
  ac_CMD_string_2=" = 20 +"+ac_bab+" [base] ";
  if (modifier_number(ac_strength)>0){ac_CMD_string_2 +=" + " + modifier_number(ac_strength) + " [strength] "}
  if (modifier_number(ac_strength)<0){ac_CMD_string_2 +=modifier_number(ac_strength) + " [strength] "}
  if (modifier_number(ac_dexterity)>0){ac_CMD_string_2 +=" + " + modifier_number(ac_dexterity) + " [dexterity] "}
  if (modifier_number(ac_dexterity)<0){ac_CMD_string_2 +=modifier_number(ac_dexterity) + " [dexterity] "}
  if (ac_small==true){ac_CMD_string_2 +="-1 [small] "}
  if (ac_large==true){ac_CMD_string_2 +="+1 [large] "}


}

function SorcererFeatRecommendations(){
if (has_aberrant_bloodline){document.form1.feat.value+="\rWith your aberrant bloodline, try to choose combat casting, improved disarm, improved grapple, improved initiative, improved unarmed strike, iron will, silent spell, skill focus knowledge dungeoneering, as you qualify.\r\r"}
if (has_abyssal_bloodline){document.form1.feat.value+="\rWith your abyssal bloodline, try to choose augment summoning, cleave, empower spell, great fortitude, improved bull rush, improved sunder, power attack, skill focus knowledge planes as you qualify.\r\r"}
if (has_arcane_bloodline){document.form1.feat.value+="\rWith your arcane bloodline, try to choose combat casting, improved counterspell, improved initiative, iron will, scribe scroll, skill focus knowledge arcana, spell focus, still spell as you qualify.\r\r"}
if (has_celestial_bloodline){document.form1.feat.value+="\rWith your celestial bloodline, try to choose dodge, extend spell, iron will, mobility, mounted combat, ride-by attack, skill focus knowledge religion, weapon finesse as you qualify.\r\r"}
if (has_destined_bloodline){document.form1.feat.value+="\rWith your destined bloodline, try to choose arcane strike, diehard, endurance, leadership, lighting reflexes, maximize spel, skill focus knowledge history, weapon focus as you qualify.\r\r"}
if (has_draconic_bloodline){document.form1.feat.value+="\rWith your draconic bloodline, try to choose blindfight, great fortitude, improved initiative, power attack, quicken spell, skill focus fly, skill focus knowledge arcana, toughness as you qualify.\r\r"}
if (has_elemental_bloodline){document.form1.feat.value+="\rWith your elemental bloodline, try to choose dodge, empower speoo, great fortitude, improved initiative, lightning reflexes, power attack, skill focus knowledge planes, weapon finesse as you qualify.\r\r"}
if (has_fey_bloodline){document.form1.feat.value+="\rWith your fey bloodling, try to choose dodge, improved initiative, lightning reflexes, mobility, point blank shot, precise shot, quicken spell, skil focus knowledge nature as you qualify.\r\r"}
if (has_infernal_bloodline){document.form1.feat.value+="\rWith your infernal bloodline, try to choose blindfight, combat expertise, deceitful, extend spell, improved disarm, iron will, skill focus knowledge planes, spell penetration as you qualify.\r\r"}
if (has_undead_bloodline){document.form1.feat.value+="\rWith your undead bloodline, try to choose combat casting, diehard, endurance, iron will, skill focus knowledge religion, spell focus, still spell, toughness as you qualify.\r\r"}
}

function LightArmsAndArmorStars(){ 
   if ((already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.gauntlet_star.src="asterisk.gif"; }

   if ((wizard_levels>0)|(monk_levels>0)|(druid_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.dagger_star.src="asterisk.gif"; }

   if ((already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.punchingdagger_star.src="asterisk.gif"; }

   if ((already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.spikedgauntlet_star.src="asterisk.gif"; }

   if ((already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.lightmace_star.src="asterisk.gif"; }

   if ((druid_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.sickle_star.src="asterisk.gif"; }

   if ((monk_levels>0)|(druid_levels>0)|(wizard_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.club_star.src="asterisk.gif"; }

   if ((already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.heavymace_star.src="asterisk.gif"; }

   if ((already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.morningstar_star.src="asterisk.gif"; }

   if ((druid_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.shortspear_star.src="asterisk.gif"; }

   if ((already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.longspear_star.src="asterisk.gif"; }

   if ((wizard_levels>0)|(monk_levels>0)|(druid_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.quarterstaff_star.src="asterisk.gif"; }

   if ((druid_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.spear_star.src="asterisk.gif"; }

   if ((wizard_levels>0)|(monk_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.heavycrossbow_star.src="asterisk.gif"; }

   if ((wizard_levels>0)|(monk_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.lightcrossbow_star.src="asterisk.gif"; }

   if ((already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.dart_star.src="asterisk.gif"; }

   if ((monk_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.javelin_star.src="asterisk.gif"; }

   if ((monk_levels>0)|(druid_levels>0)|(already_knows_simple_weapons)|(has_simpleweaponproficiency))
     {document.form1.sling_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.throwingaxe_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.lighthammer_star.src="asterisk.gif"; }

   if ((monk_levels>0)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.handaxe_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.kukri_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.lightpick_star.src="asterisk.gif"; }

   if ((bard_levels>0)|(rogue_levels>0)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.sap_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.lightshield_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.spikedarmor_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.lightspikedshield_star.src="asterisk.gif"; }

   if ((rogue_levels>0)|(bard_levels>0)|(rayce==12)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.shortsword_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.battleaxe_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.flail_star.src="asterisk.gif"; }

   if ((rayce==3)|(bard_levels>0)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.longsword_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.heavypick_star.src="asterisk.gif"; }

   if ((rayce==3)|(rayce==12)|(rogue_levels>0)|(bard_levels>0)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.rapier_star.src="asterisk.gif"; }

   if ((druid_levels>0)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.scimitar_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.heavyshield_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.trident_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.warhammer_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency)|(rayce==7)|(rayce==22))
     {document.form1.falchion_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.glaive_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency)|(rayce==7)|(rayce==22))
     {document.form1.greataxe_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.greatclub_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.heavyflail_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.greatsword_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.guisarme_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.halberd_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.lance_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.ranseur_star.src="asterisk.gif"; }

   if ((already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.scythe_star.src="asterisk.gif"; }

   if ((rayce==3)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.longbow_star.src="asterisk.gif"; }

   if ((rayce==3)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.compositelongbow_star.src="asterisk.gif"; }

   if ((rayce==3)|(rogue_levels>0)|(bard_levels>0)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.shortbow_star.src="asterisk.gif"; }

   if ((rayce==3)|(already_knows_martial_weapons)|(has_martialweaponproficiency))
     {document.form1.compositeshortbow_star.src="asterisk.gif"; }

   if ((monk_levels>0)|(has_exoticweaponproficiency))
     {document.form1.kama_star.src="asterisk.gif"; }

   if ((monk_levels>0)|(has_exoticweaponproficiency))
     {document.form1.nanchaku_star.src="asterisk.gif"; }

   if ((monk_levels>0)|(has_exoticweaponproficiency))
     {document.form1.sai_star.src="asterisk.gif"; }

   if ((monk_levels>0)|(has_exoticweaponproficiency))
     {document.form1.siangham_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.bastardsword_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency)|(rayce==4))
     {document.form1.dwarvenwaraxe_star.src="asterisk.gif"; }

   if ((bard_levels>0)||(has_exoticweaponproficiency))
     {document.form1.whip_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency)|(rayce==7))
     {document.form1.orcdoubleaxe_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.spikedchain_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.direflail_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency)|(rayce==5))
     {document.form1.gnomehookedhammer_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.twobladedsword_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency)|(rayce==4))
     {document.form1.dwarvenurgrosh_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.bolas_star.src="asterisk.gif"; }

   if ((rogue_levels>0)|(rayce==12)|(has_exoticweaponproficiency))
     {document.form1.handcrossbow_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.repeatingheavycrossbow_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.repeatinglightcrossbow_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.net_star.src="asterisk.gif"; }

   if ((monk_levels>0)|(has_exoticweaponproficiency))
     {document.form1.shuriken_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.pistol_star.src="asterisk.gif"; }

   if ((has_exoticweaponproficiency))
     {document.form1.musket_star.src="asterisk.gif"; }

   document.form1.no_armor_star.src="asterisk.gif";

   if ((already_knows_light_armor)|(has_armorproficiencylight))
     {document.form1.padded_armor_star.src="asterisk.gif"; }

   if ((already_knows_light_armor)|(has_armorproficiencylight))
     {document.form1.leather_armor_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_light_armor)|(has_armorproficiencylight)))
     {document.form1.studdedleather_armor_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_light_armor)|(has_armorproficiencylight)))
     {document.form1.chain_shirt_armor_star.src="asterisk.gif"; }

   if ((already_knows_medium_armor)|(has_armorproficiencymedium))
     {document.form1.hide_armor_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_medium_armor)|(has_armorproficiencymedium)))
     {document.form1.scale_armor_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_medium_armor)|(has_armorproficiencymedium)))
     {document.form1.chainmail_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_medium_armor)|(has_armorproficiencymedium)))
     {document.form1.breastplate_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_heavy_armor)|(has_armorproficiencyheavy)))
     {document.form1.splintmail_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_heavy_armor)|(has_armorproficiencyheavy)))
     {document.form1.bandedmail_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_heavy_armor)|(has_armorproficiencyheavy)))
     {document.form1.halfplate_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_heavy_armor)|(has_armorproficiencyheavy)))
     {document.form1.fullplate_star.src="asterisk.gif"; }

   document.form1.no_shield_star.src="asterisk.gif";

   if ((druid_levels==0)&((already_knows_shields)|(has_shieldproficiency)))
     {document.form1.buckler_star.src="asterisk.gif"; }

   if ((already_knows_shields)|(has_shieldproficiency))
     {document.form1.lightwoodenshield_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_shields)|(has_shieldproficiency)))
     {document.form1.lightsteelshield_star.src="asterisk.gif"; }

   if ((already_knows_shields)|(has_shieldproficiency))
     {document.form1.heavywoodenshield_star.src="asterisk.gif"; }

   if ((druid_levels==0)&((already_knows_shields)|(has_shieldproficiency)))
     {document.form1.heavysteelshield_star.src="asterisk.gif"; }

   if ((already_knows_tower_shield)|(has_towershieldproficiency))
     {document.form1.towershield_star.src="asterisk.gif"; }
 }

function ArmorTrain(){
 if (fighter_levels>=15){return 4;}
 if (fighter_levels>=11){return 3;}
 if (fighter_levels>=7){return 2;}
 if (fighter_levels>=3){return 1;}
 return 0;
 }

function BardKnow(){
 if (bard_levels==0){return 0;}
 if (bard_levels==1){return 1;}
 return (Math.floor(bard_levels/2));
 }

function CasterLevel(){
 z=0;
 if (cleric_levels>z){z=cleric_levels;}
 if (druid_levels>z){z=druid_levels;}
 if (sorcerer_levels>z){z=sorcerer_levels;}
 if (wizard_levels>z){z=wizard_levels;}
 if (ranger_levels-3>z){z=ranger_levels-3;}
 if (paladin_levels-3>z){z=paladin_levels-3;}
 if (bard_levels>z){z=bard_levels;}
 return z;
 }

function CrafterLevel(){
 if (!document.form1.mastercraftsman.checked){return 0;}
 z=0;
 if (craft_1>z){z=craft_1;}
 if (craft_2>z){z=craft_2;}
 if (craft_3>z){z=craft_3;}
 if (profession>z){z=profession;}
 return z;
 }

function TwoToSix(i){
 if (i>=20){return 6;}
 if (i>=15){return 5;}
 if (i>=10){return 6;}
 if (i>=5){return 3;}
 return 2;
 }

function SixOrThree(i){
 if (i>=10){return 6;}
 return 3;
 }

function TurnOffFeatStars(){
  document.form1.acrobatic_star.src="no_asterisk.gif";
  document.form1.agilemaneuvers_star.src="no_asterisk.gif";
  document.form1.alertness_star.src="no_asterisk.gif";
  document.form1.animalaffinity_star.src="no_asterisk.gif";
  document.form1.arcanestrike_star.src="no_asterisk.gif";
  document.form1.athletic_star.src="no_asterisk.gif";
  document.form1.augmentsummoning_star.src="no_asterisk.gif";
  document.form1.blindfight_star.src="no_asterisk.gif";
  document.form1.combatcasting_star.src="no_asterisk.gif";
  document.form1.combatreflexes_star.src="no_asterisk.gif";
  document.form1.deceitful_star.src="no_asterisk.gif";
  document.form1.defthands_star.src="no_asterisk.gif";
  document.form1.eschewmaterials_star.src="no_asterisk.gif";
  document.form1.exoticweaponproficiency_star.src="no_asterisk.gif";
  document.form1.extrachannel_list_star.src="no_asterisk.gif";
  document.form1.extraki_list_star.src="no_asterisk.gif";
  document.form1.extralayonhands_list_star.src="no_asterisk.gif";
  document.form1.extramercy_list_star.src="no_asterisk.gif";
  document.form1.extraperformance_list_star.src="no_asterisk.gif";
  document.form1.extrarage_list_star.src="no_asterisk.gif";
  document.form1.greatfortitude_star.src="no_asterisk.gif";
  document.form1.improvedcounterspell_star.src="no_asterisk.gif";
  document.form1.improvedcritical_list_star.src="no_asterisk.gif";
  document.form1.improvedinitiative_star.src="no_asterisk.gif";
  document.form1.ironwill_star.src="no_asterisk.gif";
  document.form1.leadership_star.src="no_asterisk.gif";
  document.form1.lightningreflexes_star.src="no_asterisk.gif";
  document.form1.magicalaptitude_star.src="no_asterisk.gif";
  document.form1.martialweaponproficiency_star.src="no_asterisk.gif";
  document.form1.naturalspell_star.src="no_asterisk.gif";
  document.form1.persuasive_star.src="no_asterisk.gif";
  document.form1.quickdraw_star.src="no_asterisk.gif";
  document.form1.rapidreload_star.src="no_asterisk.gif";
  document.form1.run_star.src="no_asterisk.gif";
  document.form1.selfsufficient_star.src="no_asterisk.gif";
  document.form1.simpleweaponproficiency_star.src="no_asterisk.gif";
  document.form1.spellmastery_list_star.src="no_asterisk.gif";
  document.form1.spellpenetration_star.src="no_asterisk.gif";
  document.form1.greaterspellpenetration_star.src="no_asterisk.gif";
  document.form1.stealthy_star.src="no_asterisk.gif";
  document.form1.stepup_star.src="no_asterisk.gif";
  document.form1.strikeback_star.src="no_asterisk.gif";
  document.form1.throwanything_star.src="no_asterisk.gif";
  document.form1.toughness_star.src="no_asterisk.gif";
  document.form1.weaponfinesse_star.src="no_asterisk.gif";
  document.form1.armorproficiencylight_star.src="no_asterisk.gif";
  document.form1.armorproficiencymedium_star.src="no_asterisk.gif";
  document.form1.armorproficiencyheavy_star.src="no_asterisk.gif";
  document.form1.combatexpertise_star.src="no_asterisk.gif";
  document.form1.improveddisarm_star.src="no_asterisk.gif";
  document.form1.improvedfeint_star.src="no_asterisk.gif";
  document.form1.improvedtrip_star.src="no_asterisk.gif";
  document.form1.whirlwindattack_star.src="no_asterisk.gif";
  document.form1.dodge_star.src="no_asterisk.gif";
  document.form1.mobility_star.src="no_asterisk.gif";
  document.form1.springattack_star.src="no_asterisk.gif";
  document.form1.endurance_star.src="no_asterisk.gif";
  document.form1.diehard_star.src="no_asterisk.gif";
  document.form1.improvedunarmedstrike_star.src="no_asterisk.gif";
  document.form1.improvedgrapple_star.src="no_asterisk.gif";
  document.form1.deflectarrows_star.src="no_asterisk.gif";
  document.form1.snatcharrows_star.src="no_asterisk.gif";
  document.form1.stunningfist_star.src="no_asterisk.gif";
  document.form1.mountedcombat_star.src="no_asterisk.gif";
  document.form1.mountedarchery_star.src="no_asterisk.gif";
  document.form1.ridebyattack_star.src="no_asterisk.gif";
  document.form1.spiritedcharge_star.src="no_asterisk.gif";
  document.form1.trample_star.src="no_asterisk.gif";
  document.form1.pointblankshot_star.src="no_asterisk.gif";
  document.form1.farshot_star.src="no_asterisk.gif";
  document.form1.preciseshot_star.src="no_asterisk.gif";
  document.form1.rapidshot_star.src="no_asterisk.gif";
  document.form1.manyshot_star.src="no_asterisk.gif";
  document.form1.shotontherun_star.src="no_asterisk.gif";
  document.form1.improvedpreciseshot_star.src="no_asterisk.gif";
  document.form1.powerattack_star.src="no_asterisk.gif";
  document.form1.cleave_star.src="no_asterisk.gif";
  document.form1.greatcleave_star.src="no_asterisk.gif";
  document.form1.improvedbullrush_star.src="no_asterisk.gif";
  document.form1.improvedoverrun_star.src="no_asterisk.gif";
  document.form1.improvedsunder_star.src="no_asterisk.gif";
  document.form1.shieldproficiency_star.src="no_asterisk.gif";
  document.form1.improvedshieldbash_star.src="no_asterisk.gif";
  document.form1.towershieldproficiency_star.src="no_asterisk.gif";
  document.form1.twoweaponfighting_star.src="no_asterisk.gif";
  document.form1.twoweapondefense_star.src="no_asterisk.gif";
  document.form1.improvedtwoweaponfighting_star.src="no_asterisk.gif";
  document.form1.greatertwoweaponfighting_star.src="no_asterisk.gif";
  document.form1.weaponfocus_list_star.src="no_asterisk.gif";
  document.form1.weaponspecialization_list_star.src="no_asterisk.gif";
  document.form1.greaterweaponfocus_list_star.src="no_asterisk.gif";
  document.form1.greaterweaponspecialization_list_star.src="no_asterisk.gif";
  document.form1.brewpotion_star.src="no_asterisk.gif";
  document.form1.craftmaa_star.src="no_asterisk.gif";
  document.form1.craftrod_star.src="no_asterisk.gif";
  document.form1.craftstaff_star.src="no_asterisk.gif";
  document.form1.craftwand_star.src="no_asterisk.gif";
  document.form1.craftwondrousitem_star.src="no_asterisk.gif";
  document.form1.forgering_star.src="no_asterisk.gif";
  document.form1.scribescroll_star.src="no_asterisk.gif";
  document.form1.empowerspell_star.src="no_asterisk.gif";
  document.form1.enlargespell_star.src="no_asterisk.gif";
  document.form1.extendspell_star.src="no_asterisk.gif";
  document.form1.heightenspell_star.src="no_asterisk.gif";
  document.form1.maximizespell_star.src="no_asterisk.gif";
  document.form1.quickenspell_star.src="no_asterisk.gif";
  document.form1.silentspell_star.src="no_asterisk.gif";
  document.form1.stillspell_star.src="no_asterisk.gif";
  document.form1.widenspell_star.src="no_asterisk.gif";
  document.form1.skillfocusappraise_star.src="no_asterisk.gif";
  document.form1.skillfocusbluff_star.src="no_asterisk.gif";
  document.form1.skillfocusclimb_star.src="no_asterisk.gif";
  document.form1.skillfocusacrobatics_star.src="no_asterisk.gif";
  document.form1.skillfocuscraft_1_star.src="no_asterisk.gif";
  document.form1.skillfocuscraft_2_star.src="no_asterisk.gif";
  document.form1.skillfocuscraft_3_star.src="no_asterisk.gif";
  document.form1.skillfocusdecipherscript_star.src="no_asterisk.gif";
  document.form1.skillfocusdiplomacy_star.src="no_asterisk.gif";
  document.form1.skillfocusdisabledevice_star.src="no_asterisk.gif";
  document.form1.skillfocusdisguise_star.src="no_asterisk.gif";
  document.form1.skillfocusescapeartist_star.src="no_asterisk.gif";
  document.form1.skillfocusfly_star.src="no_asterisk.gif";
  document.form1.skillfocushandleanimal_star.src="no_asterisk.gif";
  document.form1.skillfocusheal_star.src="no_asterisk.gif";
  document.form1.skillfocusstealth_star.src="no_asterisk.gif";
  document.form1.skillfocusintimidate_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgearcana_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgeengineering_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgedungeoneering_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgegeography_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgehistory_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgelocal_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgenature_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgenobility_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgeplanes_star.src="no_asterisk.gif";
  document.form1.skillfocusknowledgereligion_star.src="no_asterisk.gif";
  document.form1.skillfocusperception_star.src="no_asterisk.gif";
  document.form1.skillfocuslinguistics_star.src="no_asterisk.gif";
  document.form1.skillfocusperform_1_star.src="no_asterisk.gif";
  document.form1.skillfocusperform_2_star.src="no_asterisk.gif";
  document.form1.skillfocusperform_3_star.src="no_asterisk.gif";
  document.form1.skillfocusperform_4_star.src="no_asterisk.gif";
  document.form1.skillfocusperform_5_star.src="no_asterisk.gif";
  document.form1.skillfocusprofession_star.src="no_asterisk.gif";
  document.form1.skillfocusride_star.src="no_asterisk.gif";
  document.form1.skillfocussensemotive_star.src="no_asterisk.gif";
  document.form1.skillfocussleightofhand_star.src="no_asterisk.gif";
  document.form1.skillfocusspellcraft_star.src="no_asterisk.gif";
  document.form1.skillfocussurvival_star.src="no_asterisk.gif";
  document.form1.skillfocusswim_star.src="no_asterisk.gif";
  document.form1.skillfocususemagicdevice_star.src="no_asterisk.gif";
  document.form1.spellfocusabjuration_star.src="no_asterisk.gif";
  document.form1.spellfocusconjuration_star.src="no_asterisk.gif";
  document.form1.spellfocusdivination_star.src="no_asterisk.gif";
  document.form1.spellfocusenchantment_star.src="no_asterisk.gif";
  document.form1.spellfocusevocation_star.src="no_asterisk.gif";
  document.form1.spellfocusillusion_star.src="no_asterisk.gif";
  document.form1.spellfocusnecromancy_star.src="no_asterisk.gif";
  document.form1.spellfocustransmutation_star.src="no_asterisk.gif";
  document.form1.greaterspellfocusabjuration_star.src="no_asterisk.gif";
  document.form1.greaterspellfocusconjuration_star.src="no_asterisk.gif";
  document.form1.greaterspellfocusdivination_star.src="no_asterisk.gif";
  document.form1.greaterspellfocusenchantment_star.src="no_asterisk.gif";
  document.form1.greaterspellfocusevocation_star.src="no_asterisk.gif";
  document.form1.greaterspellfocusillusion_star.src="no_asterisk.gif";
  document.form1.greaterspellfocusnecromancy_star.src="no_asterisk.gif";
  document.form1.greaterspellfocustransmutation_star.src="no_asterisk.gif";
  document.form1.other_feat_1_star.src="no_asterisk.gif";
  document.form1.other_feat_2_star.src="no_asterisk.gif";
  document.form1.other_feat_3_star.src="no_asterisk.gif";
  document.form1.other_feat_4_star.src="no_asterisk.gif";
  document.form1.other_feat_5_star.src="no_asterisk.gif";
  document.form1.other_feat_6_star.src="no_asterisk.gif";
  document.form1.other_feat_7_star.src="no_asterisk.gif";
  document.form1.other_feat_8_star.src="no_asterisk.gif";
  document.form1.other_feat_9_star.src="no_asterisk.gif";
  document.form1.other_feat_10_star.src="no_asterisk.gif";
  document.form1.alignmentchannel_star.src="no_asterisk.gif";
  document.form1.arcanearmortraining_star.src="no_asterisk.gif";
  document.form1.arcanearmormastery_star.src="no_asterisk.gif";
  document.form1.catchoffguard_star.src="no_asterisk.gif";
  document.form1.channelsmite_star.src="no_asterisk.gif";
  document.form1.greaterdisarm_star.src="no_asterisk.gif";
  document.form1.greaterfeint_star.src="no_asterisk.gif";
  document.form1.greatertrip_star.src="no_asterisk.gif";
  document.form1.standstill_star.src="no_asterisk.gif";
  document.form1.commandundead_star.src="no_asterisk.gif";
  document.form1.criticalfocus_star.src="no_asterisk.gif";
  document.form1.bleedingcritical_star.src="no_asterisk.gif";
  document.form1.blindingcritical_star.src="no_asterisk.gif";
  document.form1.criticalmastery_star.src="no_asterisk.gif";
  document.form1.deafeningcritical_star.src="no_asterisk.gif";
  document.form1.sickeningcritical_star.src="no_asterisk.gif";
  document.form1.staggeringcritical_star.src="no_asterisk.gif";
  document.form1.stunningcritical_star.src="no_asterisk.gif";
  document.form1.tiringcritical_star.src="no_asterisk.gif";
  document.form1.exhaustingcritical_star.src="no_asterisk.gif";
  document.form1.deadlyaim_star.src="no_asterisk.gif";
  document.form1.defensivecombattraining_star.src="no_asterisk.gif";
  document.form1.disruptive_star.src="no_asterisk.gif";
  document.form1.spellbreaker_star.src="no_asterisk.gif";
  document.form1.windstance_star.src="no_asterisk.gif";
  document.form1.lightningstance_star.src="no_asterisk.gif";
  document.form1.elementalchannel_star.src="no_asterisk.gif";
  document.form1.extraki_list_star.src="no_asterisk.gif";
  document.form1.extralayonhands_list_star.src="no_asterisk.gif";
  document.form1.extramercy_list_star.src="no_asterisk.gif";
  document.form1.extraperformance_list_star.src="no_asterisk.gif";
  document.form1.extrarage_list_star.src="no_asterisk.gif";
  document.form1.fleet_star.src="no_asterisk.gif";
  document.form1.improvedgreatfortitude_star.src="no_asterisk.gif";
  document.form1.improvedchannel_star.src="no_asterisk.gif";
  document.form1.improvedfamiliar_star.src="no_asterisk.gif";
  document.form1.greatergrapple_star.src="no_asterisk.gif";
  document.form1.scorpionstyle_star.src="no_asterisk.gif";
  document.form1.gorgonsfist_star.src="no_asterisk.gif";
  document.form1.medusaswrath_star.src="no_asterisk.gif";
  document.form1.improvisedweaponmastery_star.src="no_asterisk.gif";
  document.form1.intimidatingprowess_star.src="no_asterisk.gif";
  document.form1.improvedironwill_star.src="no_asterisk.gif";
  document.form1.improvedlightningreflexes_star.src="no_asterisk.gif";
  document.form1.lunge_star.src="no_asterisk.gif";
  document.form1.mastercraftsman_star.src="no_asterisk.gif";
  document.form1.unseat_star.src="no_asterisk.gif";
  document.form1.nimblemoves_star.src="no_asterisk.gif";
  document.form1.acrobaticsteps_star.src="no_asterisk.gif";

  document.form1.pinpointtargeting_star.src="no_asterisk.gif";
  document.form1.greaterbullrush_star.src="no_asterisk.gif";
  document.form1.greateroverrun_star.src="no_asterisk.gif";
  document.form1.greatersunder_star.src="no_asterisk.gif";
  document.form1.selectivechanneling_star.src="no_asterisk.gif";
  document.form1.shieldslam_star.src="no_asterisk.gif";
  document.form1.shieldmaster_star.src="no_asterisk.gif";
  document.form1.shieldfocus_star.src="no_asterisk.gif";
  document.form1.greatershieldfocus_star.src="no_asterisk.gif";
  document.form1.turnundead_star.src="no_asterisk.gif";
  document.form1.doubleslice_star.src="no_asterisk.gif";
  document.form1.twoweaponrend_star.src="no_asterisk.gif";
  document.form1.vitalstrike_star.src="no_asterisk.gif";
  document.form1.vitalstrike_star.src="no_asterisk.gif";
  document.form1.vitalstrike_star.src="no_asterisk.gif";
  document.form1.dazzlingdisplay_star.src="no_asterisk.gif";
  document.form1.shatterdefenses_star.src="no_asterisk.gif";
  document.form1.deadlystroke_star.src="no_asterisk.gif";
  document.form1.penetratingstrike_star.src="no_asterisk.gif";
  document.form1.greaterpenetratingstrike_star.src="no_asterisk.gif";
 document.form1.mstar01.src="no_asterisk.gif";
 document.form1.mstar02.src="no_asterisk.gif";
 document.form1.mstar03.src="no_asterisk.gif";
 document.form1.mstar04.src="no_asterisk.gif";
 document.form1.mstar05.src="no_asterisk.gif";
 document.form1.mstar06.src="no_asterisk.gif";
 document.form1.mstar07.src="no_asterisk.gif";
 document.form1.mstar08.src="no_asterisk.gif";
 document.form1.mstar09.src="no_asterisk.gif";
 document.form1.mstar10.src="no_asterisk.gif";
 document.form1.mstar11.src="no_asterisk.gif";
 document.form1.mstar12.src="no_asterisk.gif";
 document.form1.mstar13.src="no_asterisk.gif";
 document.form1.mstar14.src="no_asterisk.gif";
 document.form1.mstar15.src="no_asterisk.gif";
 document.form1.mstar16.src="no_asterisk.gif";
 document.form1.mstar17.src="no_asterisk.gif";
 document.form1.fstar01.src="no_asterisk.gif";
 document.form1.fstar02.src="no_asterisk.gif";
 document.form1.fstar03.src="no_asterisk.gif";
 document.form1.fstar04.src="no_asterisk.gif";
 document.form1.fstar05.src="no_asterisk.gif";
 document.form1.fstar06.src="no_asterisk.gif";
 document.form1.fstar07.src="no_asterisk.gif";
 document.form1.fstar08.src="no_asterisk.gif";
 document.form1.fstar09.src="no_asterisk.gif";
 document.form1.fstar10.src="no_asterisk.gif";
 document.form1.fstar11.src="no_asterisk.gif";
 document.form1.fstar12.src="no_asterisk.gif";
 document.form1.fstar13.src="no_asterisk.gif";
 document.form1.fstar14.src="no_asterisk.gif";
 document.form1.fstar15.src="no_asterisk.gif";
 document.form1.fstar16.src="no_asterisk.gif";
 document.form1.fstar17.src="no_asterisk.gif";
 document.form1.fstar18.src="no_asterisk.gif";
 document.form1.fstar19.src="no_asterisk.gif";
 document.form1.fstar20.src="no_asterisk.gif";
 document.form1.fstar21.src="no_asterisk.gif";
 document.form1.fstar22.src="no_asterisk.gif";
 document.form1.fstar23.src="no_asterisk.gif";
 document.form1.fstar24.src="no_asterisk.gif";
 document.form1.fstar25.src="no_asterisk.gif";
 document.form1.fstar26.src="no_asterisk.gif";
 document.form1.fstar27.src="no_asterisk.gif";
 document.form1.fstar28.src="no_asterisk.gif";
 document.form1.fstar29.src="no_asterisk.gif";
 document.form1.fstar30.src="no_asterisk.gif";
 document.form1.fstar31.src="no_asterisk.gif";
 document.form1.fstar32.src="no_asterisk.gif";
 document.form1.fstar33.src="no_asterisk.gif";
 document.form1.fstar34.src="no_asterisk.gif";
 document.form1.fstar35.src="no_asterisk.gif";
 document.form1.fstar36.src="no_asterisk.gif";
 document.form1.fstar37.src="no_asterisk.gif";
 document.form1.fstar38.src="no_asterisk.gif";
 document.form1.fstar39.src="no_asterisk.gif";
 document.form1.fstar40.src="no_asterisk.gif";
 document.form1.fstar41.src="no_asterisk.gif";
 document.form1.fstar42.src="no_asterisk.gif";
 document.form1.fstar43.src="no_asterisk.gif";
 document.form1.fstar44.src="no_asterisk.gif";
 document.form1.fstar45.src="no_asterisk.gif";
 document.form1.fstar46.src="no_asterisk.gif";
 document.form1.fstar47.src="no_asterisk.gif";
 document.form1.fstar48.src="no_asterisk.gif";
 document.form1.fstar49.src="no_asterisk.gif";
 document.form1.fstar50.src="no_asterisk.gif";
 document.form1.fstar51.src="no_asterisk.gif";
 document.form1.fstar52.src="no_asterisk.gif";
 document.form1.fstar53.src="no_asterisk.gif";
 document.form1.fstar54.src="no_asterisk.gif";
 document.form1.fstar55.src="no_asterisk.gif";
 document.form1.fstar56.src="no_asterisk.gif";
 document.form1.fstar57.src="no_asterisk.gif";
 document.form1.fstar58.src="no_asterisk.gif";
 document.form1.fstar59.src="no_asterisk.gif";
 document.form1.fstar60.src="no_asterisk.gif";
 document.form1.fstar61.src="no_asterisk.gif";
 document.form1.fstar62.src="no_asterisk.gif";
 document.form1.fstar63.src="no_asterisk.gif";
 document.form1.fstar64.src="no_asterisk.gif";
 document.form1.fstar65.src="no_asterisk.gif";
 document.form1.fstar66.src="no_asterisk.gif";
 document.form1.fstar67.src="no_asterisk.gif";
 document.form1.fstar68.src="no_asterisk.gif";
 document.form1.fstar69.src="no_asterisk.gif";
 document.form1.fstar70.src="no_asterisk.gif";
 document.form1.fstar71.src="no_asterisk.gif";
 document.form1.fstar72.src="no_asterisk.gif";
 document.form1.fstar73.src="no_asterisk.gif";
 document.form1.fstar74.src="no_asterisk.gif";
 document.form1.fstar75.src="no_asterisk.gif";
 document.form1.fstar76.src="no_asterisk.gif";
 document.form1.fstar77.src="no_asterisk.gif";
 document.form1.fstar78.src="no_asterisk.gif";
 document.form1.fstar79.src="no_asterisk.gif";
 document.form1.fstar80.src="no_asterisk.gif";
 document.form1.fstar81.src="no_asterisk.gif";
 document.form1.fstar82.src="no_asterisk.gif";
 document.form1.fstar83.src="no_asterisk.gif";
 document.form1.fstar84.src="no_asterisk.gif";
 document.form1.fstar85.src="no_asterisk.gif";
 document.form1.fstar86.src="no_asterisk.gif";
 document.form1.fstar87.src="no_asterisk.gif";
 document.form1.fstar88.src="no_asterisk.gif";
 document.form1.fstar89.src="no_asterisk.gif";
 document.form1.fstar90.src="no_asterisk.gif";
 document.form1.fstar91.src="no_asterisk.gif";
 document.form1.fstar92.src="no_asterisk.gif";
 document.form1.fstar93.src="no_asterisk.gif";
 document.form1.fstar94.src="no_asterisk.gif";
 document.form1.fstar95.src="no_asterisk.gif";
 document.form1.fstar96.src="no_asterisk.gif";
 document.form1.fstar97.src="no_asterisk.gif";
 document.form1.fstar98.src="no_asterisk.gif";
 document.form1.fstar99.src="no_asterisk.gif";
 document.form1.fstar100.src="no_asterisk.gif";
 document.form1.fstar101.src="no_asterisk.gif";
 document.form1.fstar102.src="no_asterisk.gif";
 document.form1.r1star01.src="no_asterisk.gif";
 document.form1.r1star02.src="no_asterisk.gif";
 document.form1.r1star03.src="no_asterisk.gif";
 document.form1.r1star04.src="no_asterisk.gif";
 document.form1.r1star05.src="no_asterisk.gif";
 document.form1.r1star06.src="no_asterisk.gif";
 document.form1.r1star07.src="no_asterisk.gif";
 document.form1.r1star08.src="no_asterisk.gif";
 document.form1.r2star01.src="no_asterisk.gif";
 document.form1.r2star02.src="no_asterisk.gif";
 document.form1.r2star03.src="no_asterisk.gif";
 document.form1.r2star04.src="no_asterisk.gif";
 document.form1.r2star05.src="no_asterisk.gif";
 document.form1.r2star06.src="no_asterisk.gif";
 document.form1.r2star07.src="no_asterisk.gif";
 document.form1.r2star08.src="no_asterisk.gif";
 document.form1.wstar01.src="no_asterisk.gif";
 document.form1.wstar02.src="no_asterisk.gif";
 document.form1.wstar03.src="no_asterisk.gif";
 document.form1.wstar04.src="no_asterisk.gif";
 document.form1.wstar05.src="no_asterisk.gif";
 document.form1.wstar06.src="no_asterisk.gif";
 document.form1.wstar07.src="no_asterisk.gif";
 document.form1.wstar08.src="no_asterisk.gif";
 document.form1.wstar09.src="no_asterisk.gif";
 document.form1.wstar10.src="no_asterisk.gif";
 document.form1.wstar11.src="no_asterisk.gif";
 document.form1.wstar12.src="no_asterisk.gif";
 document.form1.wstar13.src="no_asterisk.gif";
 document.form1.wstar14.src="no_asterisk.gif";
 document.form1.wstar15.src="no_asterisk.gif";
 document.form1.wstar16.src="no_asterisk.gif";
 document.form1.wstar17.src="no_asterisk.gif";
 document.form1.wstar18.src="no_asterisk.gif";
 }

function LightMonkFeatStars(){
 document.form1.mstar01.src="needmonkfeat.gif";
 document.form1.mstar02.src="needmonkfeat.gif";
 document.form1.mstar03.src="needmonkfeat.gif";
 document.form1.mstar04.src="needmonkfeat.gif";
 document.form1.mstar05.src="needmonkfeat.gif";
 if (monk_levels>=6)
 {
 document.form1.mstar06.src="needmonkfeat.gif";
 document.form1.mstar07.src="needmonkfeat.gif";
 document.form1.mstar08.src="needmonkfeat.gif";
 document.form1.mstar09.src="needmonkfeat.gif";
 document.form1.mstar10.src="needmonkfeat.gif";
 document.form1.mstar11.src="needmonkfeat.gif";
 document.form1.mstar12.src="needmonkfeat.gif";
 document.form1.mstar13.src="needmonkfeat.gif";
 }
 if (monk_levels>=10)
 {
 document.form1.mstar14.src="needmonkfeat.gif";
 document.form1.mstar15.src="needmonkfeat.gif";
 document.form1.mstar16.src="needmonkfeat.gif";
 document.form1.mstar17.src="needmonkfeat.gif";
 }
 }

function LightWizardFeatStars(){
 document.form1.wstar01.src="needwizardfeat.gif";
 document.form1.wstar02.src="needwizardfeat.gif";
 document.form1.wstar03.src="needwizardfeat.gif";
 document.form1.wstar04.src="needwizardfeat.gif";
 document.form1.wstar05.src="needwizardfeat.gif";
 document.form1.wstar06.src="needwizardfeat.gif";
 document.form1.wstar07.src="needwizardfeat.gif";
 document.form1.wstar08.src="needwizardfeat.gif";
 document.form1.wstar09.src="needwizardfeat.gif";
 document.form1.wstar10.src="needwizardfeat.gif";
 document.form1.wstar11.src="needwizardfeat.gif";
 document.form1.wstar12.src="needwizardfeat.gif";
 document.form1.wstar13.src="needwizardfeat.gif";
 document.form1.wstar14.src="needwizardfeat.gif";
 document.form1.wstar15.src="needwizardfeat.gif";
 document.form1.wstar16.src="needwizardfeat.gif";
 document.form1.wstar17.src="needwizardfeat.gif";
 document.form1.wstar18.src="needwizardfeat.gif";
 }

function LightR1FeatStars(){
 document.form1.r1star01.src="needrangerfeat.gif";
 document.form1.r1star02.src="needrangerfeat.gif";
 document.form1.r1star03.src="needrangerfeat.gif";
 document.form1.r1star04.src="needrangerfeat.gif";
 document.form1.r1star05.src="needrangerfeat.gif";
 document.form1.r1star06.src="needrangerfeat.gif";
 document.form1.r1star07.src="needrangerfeat.gif";
 document.form1.r1star08.src="needrangerfeat.gif";
}


function LightR2FeatStars(){
 document.form1.r2star01.src="needrangerfeat.gif";
 document.form1.r2star02.src="needrangerfeat.gif";
 document.form1.r2star03.src="needrangerfeat.gif";
 document.form1.r2star04.src="needrangerfeat.gif";
 document.form1.r2star05.src="needrangerfeat.gif";
 document.form1.r2star06.src="needrangerfeat.gif";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 document.form1.r2star07.src="needrangerfeat.gif";
 document.form1.r2star08.src="needrangerfeat.gif";
}


function LightFighterFeatStars(){
 document.form1.fstar01.src="needfighterfeat.gif";
 document.form1.fstar02.src="needfighterfeat.gif";
 document.form1.fstar03.src="needfighterfeat.gif";
 document.form1.fstar04.src="needfighterfeat.gif";
 document.form1.fstar05.src="needfighterfeat.gif";
 document.form1.fstar06.src="needfighterfeat.gif";
 document.form1.fstar07.src="needfighterfeat.gif";
 document.form1.fstar08.src="needfighterfeat.gif";
 document.form1.fstar09.src="needfighterfeat.gif";
 document.form1.fstar10.src="needfighterfeat.gif";
 document.form1.fstar11.src="needfighterfeat.gif";
 document.form1.fstar12.src="needfighterfeat.gif";
 document.form1.fstar13.src="needfighterfeat.gif";
 document.form1.fstar14.src="needfighterfeat.gif";
 document.form1.fstar15.src="needfighterfeat.gif";
 document.form1.fstar16.src="needfighterfeat.gif";
 document.form1.fstar17.src="needfighterfeat.gif";
 document.form1.fstar18.src="needfighterfeat.gif";
 document.form1.fstar19.src="needfighterfeat.gif";
 document.form1.fstar20.src="needfighterfeat.gif";
 document.form1.fstar21.src="needfighterfeat.gif";
 document.form1.fstar22.src="needfighterfeat.gif";
 document.form1.fstar23.src="needfighterfeat.gif";
 document.form1.fstar24.src="needfighterfeat.gif";
 document.form1.fstar25.src="needfighterfeat.gif";
 document.form1.fstar26.src="needfighterfeat.gif";
 document.form1.fstar27.src="needfighterfeat.gif";
 document.form1.fstar28.src="needfighterfeat.gif";
 document.form1.fstar29.src="needfighterfeat.gif";
 document.form1.fstar30.src="needfighterfeat.gif";
 document.form1.fstar31.src="needfighterfeat.gif";
 document.form1.fstar32.src="needfighterfeat.gif";
 document.form1.fstar33.src="needfighterfeat.gif";
 document.form1.fstar34.src="needfighterfeat.gif";
 document.form1.fstar35.src="needfighterfeat.gif";
 document.form1.fstar36.src="needfighterfeat.gif";
 document.form1.fstar37.src="needfighterfeat.gif";
 document.form1.fstar38.src="needfighterfeat.gif";
 document.form1.fstar39.src="needfighterfeat.gif";
 document.form1.fstar40.src="needfighterfeat.gif";
 document.form1.fstar41.src="needfighterfeat.gif";
 document.form1.fstar42.src="needfighterfeat.gif";
 document.form1.fstar43.src="needfighterfeat.gif";
 document.form1.fstar44.src="needfighterfeat.gif";
 document.form1.fstar45.src="needfighterfeat.gif";
 document.form1.fstar46.src="needfighterfeat.gif";
 document.form1.fstar47.src="needfighterfeat.gif";
 document.form1.fstar48.src="needfighterfeat.gif";
 document.form1.fstar49.src="needfighterfeat.gif";
 document.form1.fstar50.src="needfighterfeat.gif";
 document.form1.fstar51.src="needfighterfeat.gif";
 document.form1.fstar52.src="needfighterfeat.gif";
 document.form1.fstar53.src="needfighterfeat.gif";
 document.form1.fstar54.src="needfighterfeat.gif";
 document.form1.fstar55.src="needfighterfeat.gif";
 document.form1.fstar56.src="needfighterfeat.gif";
 document.form1.fstar57.src="needfighterfeat.gif";
 document.form1.fstar58.src="needfighterfeat.gif";
 document.form1.fstar59.src="needfighterfeat.gif";
 document.form1.fstar60.src="needfighterfeat.gif";
 document.form1.fstar61.src="needfighterfeat.gif";
 document.form1.fstar62.src="needfighterfeat.gif";
 document.form1.fstar63.src="needfighterfeat.gif";
 document.form1.fstar64.src="needfighterfeat.gif";
 document.form1.fstar65.src="needfighterfeat.gif";
 document.form1.fstar66.src="needfighterfeat.gif";
 document.form1.fstar67.src="needfighterfeat.gif";
 document.form1.fstar68.src="needfighterfeat.gif";
 document.form1.fstar69.src="needfighterfeat.gif";
 document.form1.fstar70.src="needfighterfeat.gif";
 document.form1.fstar71.src="needfighterfeat.gif";
 document.form1.fstar72.src="needfighterfeat.gif";
 document.form1.fstar73.src="needfighterfeat.gif";
 document.form1.fstar74.src="needfighterfeat.gif";
 document.form1.fstar75.src="needfighterfeat.gif";
 document.form1.fstar76.src="needfighterfeat.gif";
 document.form1.fstar77.src="needfighterfeat.gif";
 document.form1.fstar78.src="needfighterfeat.gif";
 document.form1.fstar79.src="needfighterfeat.gif";
 document.form1.fstar80.src="needfighterfeat.gif";
 document.form1.fstar81.src="needfighterfeat.gif";
 document.form1.fstar82.src="needfighterfeat.gif";
 document.form1.fstar83.src="needfighterfeat.gif";
 document.form1.fstar84.src="needfighterfeat.gif";
 document.form1.fstar85.src="needfighterfeat.gif";
 document.form1.fstar86.src="needfighterfeat.gif";
 document.form1.fstar87.src="needfighterfeat.gif";
 document.form1.fstar88.src="needfighterfeat.gif";
 document.form1.fstar89.src="needfighterfeat.gif";
 document.form1.fstar90.src="needfighterfeat.gif";
 document.form1.fstar91.src="needfighterfeat.gif";
 document.form1.fstar92.src="needfighterfeat.gif";
 document.form1.fstar93.src="needfighterfeat.gif";
 document.form1.fstar94.src="needfighterfeat.gif";
 document.form1.fstar95.src="needfighterfeat.gif";
 document.form1.fstar96.src="needfighterfeat.gif";
 document.form1.fstar97.src="needfighterfeat.gif";
 document.form1.fstar98.src="needfighterfeat.gif";
 document.form1.fstar99.src="needfighterfeat.gif";
 document.form1.fstar100.src="needfighterfeat.gif";
 document.form1.fstar101.src="needfighterfeat.gif";
 document.form1.fstar102.src="needfighterfeat.gif";
 }

function LightConstantFeatStars(){

  if (fighter_levels>0){LightFighterFeatStars();}
  if (ranger_levels>1)
  {
  if (rangercombattrack==1){LightR1FeatStars();}
  if (rangercombattrack==2){LightR2FeatStars();}
  } 
  if (wizard_levels>0){LightWizardFeatStars();}
  if (monk_levels>0){LightMonkFeatStars();}
  document.form1.acrobatic_star.src="asterisk.gif";
  if (dexterity>strength){document.form1.agilemaneuvers_star.src="asterisk.gif";}
  document.form1.alertness_star.src="asterisk.gif";
  if (handleanimal>0){document.form1.animalaffinity_star.src="asterisk.gif";}
  if (sorcerer_levels+bard_levels+wizard_levels>0){document.form1.arcanestrike_star.src="asterisk.gif";}
  document.form1.athletic_star.src="asterisk.gif";
  if (!has_darkness_domain){document.form1.blindfight_star.src="asterisk.gif";}
  if (Spellcaster())
   {document.form1.combatcasting_star.src="asterisk.gif";}
  document.form1.combatreflexes_star.src="asterisk.gif";
  document.form1.deceitful_star.src="asterisk.gif";
  if ((disabledevice>0)&(sleightofhand>0)){document.form1.defthands_star.src="asterisk.gif";}
  if (bard_levels + druid_levels + cleric_levels + paladin_levels + ranger_levels + wizard_levels==0){document.form1.eschewmaterials_star.src="asterisk.gif";}  // sorcerers do not need
  document.form1.exoticweaponproficiency_star.src="asterisk.gif";
  if ((cleric_levels>0)|(paladin_levels>3)|(wizard_specialty_name=="Necromancer")){document.form1.extrachannel_list_star.src="asterisk.gif"; }
  if (monk_levels>=4){document.form1.extraki_list_star.src="asterisk.gif"; }
  if (paladin_levels>=2){document.form1.extralayonhands_list_star.src="asterisk.gif"; }
  if (paladin_levels>=3){document.form1.extramercy_list_star.src="asterisk.gif"; }
  if (bard_levels>=3){document.form1.extraperformance_list_star.src="asterisk.gif"; }
  if (barbarian_levels>0){document.form1.extrarage_list_star.src="asterisk.gif"; }
  document.form1.greatfortitude_star.src="asterisk.gif";
  if (Spellcaster()){document.form1.improvedcounterspell_star.src="asterisk.gif";}
  if ((base_attack_bonus>=8)|(monk_levels>=10)){document.form1.improvedcritical_list_star.src="asterisk.gif";}
  document.form1.improvedinitiative_star.src="asterisk.gif";
  document.form1.ironwill_star.src="asterisk.gif";
  if ((total_levels>=7)|(!has_nobility_domain)){document.form1.leadership_star.src="asterisk.gif";}
  document.form1.lightningreflexes_star.src="asterisk.gif";
  if ((spellcraft>0)&(usemagicdevice>0)){document.form1.magicalaptitude_star.src="asterisk.gif";}

  if (!already_knows_martial_weapons){document.form1.martialweaponproficiency_star.src="asterisk.gif";}
  if ((wisdom>=13)&(druid_levels>=14)){document.form1.naturalspell_star.src="asterisk.gif";}
  document.form1.persuasive_star.src="asterisk.gif";
  document.form1.quickdraw_star.src="asterisk.gif";
  document.form1.rapidreload_star.src="asterisk.gif";
  document.form1.run_star.src="asterisk.gif";
  document.form1.selfsufficient_star.src="asterisk.gif";
  document.form1.simpleweaponproficiency_star.src="asterisk.gif";
  if (wizard_levels>0){document.form1.spellmastery_list_star.src="asterisk.gif";}
  if (CasterLevel()>0){document.form1.spellpenetration_star.src="asterisk.gif";}
  document.form1.stealthy_star.src="asterisk.gif";
  if (base_attack_bonus>0){document.form1.stepup_star.src="asterisk.gif";}
  if (base_attack_bonus>=11){document.form1.strikeback_star.src="asterisk.gif";}
  document.form1.throwanything_star.src="asterisk.gif";
  document.form1.toughness_star.src="asterisk.gif";
  document.form1.weaponfinesse_star.src="asterisk.gif";
 if (!already_knows_light_armor){document.form1.armorproficiencylight_star.src="asterisk.gif";}
  if (intelligence>=13){document.form1.combatexpertise_star.src="asterisk.gif";}

  
  if ((dexterity>=13)|(monk_levels>0)){document.form1.dodge_star.src="asterisk.gif";}
  document.form1.endurance_star.src="asterisk.gif";
  if (monk_levels==0){document.form1.improvedunarmedstrike_star.src="asterisk.gif";}
  if (ride>0){document.form1.mountedcombat_star.src="asterisk.gif";}
  document.form1.pointblankshot_star.src="asterisk.gif";
  if ((strength>=13)&(base_attack_bonus>0)){document.form1.powerattack_star.src="asterisk.gif";}
  if (!already_knows_shields){document.form1.shieldproficiency_star.src="asterisk.gif";}
  if (base_attack_bonus>0){document.form1.weaponfocus_list_star.src="asterisk.gif";}
  if (CasterLevel()>=3){document.form1.brewpotion_star.src="asterisk.gif";}
  if (CasterLevel()>=9){document.form1.craftrod_star.src="asterisk.gif";}
  if (CasterLevel()>=11){document.form1.craftstaff_star.src="asterisk.gif";}
  if (CasterLevel()>=5){document.form1.craftwand_star.src="asterisk.gif";}
  if (CasterLevel()>=7){document.form1.forgering_star.src="asterisk.gif";}
  if ((CasterLevel()>=1)&(wizard_levels==0)&(!has_rune_domain)){document.form1.scribescroll_star.src="asterisk.gif";}
  if (CasterLevel()>0)
  {
  document.form1.empowerspell_star.src="asterisk.gif";
  document.form1.enlargespell_star.src="asterisk.gif";
  document.form1.extendspell_star.src="asterisk.gif";
  document.form1.heightenspell_star.src="asterisk.gif";
  document.form1.maximizespell_star.src="asterisk.gif";
  document.form1.quickenspell_star.src="asterisk.gif";
  document.form1.silentspell_star.src="asterisk.gif";
  document.form1.stillspell_star.src="asterisk.gif";
  document.form1.widenspell_star.src="asterisk.gif";
  }
  document.form1.skillfocusappraise_star.src="asterisk.gif";
  document.form1.skillfocusbluff_star.src="asterisk.gif";
  document.form1.skillfocusclimb_star.src="asterisk.gif";
  document.form1.skillfocusacrobatics_star.src="asterisk.gif";
  document.form1.skillfocuscraft_1_star.src="asterisk.gif";
  document.form1.skillfocuscraft_2_star.src="asterisk.gif";
  document.form1.skillfocuscraft_3_star.src="asterisk.gif";
  document.form1.skillfocusdecipherscript_star.src="asterisk.gif";
  document.form1.skillfocusdiplomacy_star.src="asterisk.gif";
  document.form1.skillfocusdisabledevice_star.src="asterisk.gif";
  document.form1.skillfocusdisguise_star.src="asterisk.gif";
  document.form1.skillfocusescapeartist_star.src="asterisk.gif";
  document.form1.skillfocusfly_star.src="asterisk.gif";
  document.form1.skillfocushandleanimal_star.src="asterisk.gif";
  document.form1.skillfocusheal_star.src="asterisk.gif";
  document.form1.skillfocusstealth_star.src="asterisk.gif";
  document.form1.skillfocusintimidate_star.src="asterisk.gif";
  document.form1.skillfocusknowledgearcana_star.src="asterisk.gif";
  document.form1.skillfocusknowledgeengineering_star.src="asterisk.gif";
  document.form1.skillfocusknowledgedungeoneering_star.src="asterisk.gif";
  document.form1.skillfocusknowledgegeography_star.src="asterisk.gif";
  document.form1.skillfocusknowledgehistory_star.src="asterisk.gif";
  document.form1.skillfocusknowledgelocal_star.src="asterisk.gif";
  document.form1.skillfocusknowledgenature_star.src="asterisk.gif";
  document.form1.skillfocusknowledgenobility_star.src="asterisk.gif";
  document.form1.skillfocusknowledgeplanes_star.src="asterisk.gif";
  document.form1.skillfocusknowledgereligion_star.src="asterisk.gif";
  document.form1.skillfocuslinguistics_star.src="asterisk.gif";
  document.form1.skillfocusperception_star.src="asterisk.gif";
  document.form1.skillfocusperform_1_star.src="asterisk.gif";
  document.form1.skillfocusperform_2_star.src="asterisk.gif";
  document.form1.skillfocusperform_3_star.src="asterisk.gif";
  document.form1.skillfocusperform_4_star.src="asterisk.gif";
  document.form1.skillfocusperform_5_star.src="asterisk.gif";
  document.form1.skillfocusprofession_star.src="asterisk.gif";
  document.form1.skillfocusride_star.src="asterisk.gif";
  document.form1.skillfocussensemotive_star.src="asterisk.gif";
  document.form1.skillfocussleightofhand_star.src="asterisk.gif";
  document.form1.skillfocusspellcraft_star.src="asterisk.gif";
  document.form1.skillfocussurvival_star.src="asterisk.gif";
  document.form1.skillfocusswim_star.src="asterisk.gif";
  document.form1.skillfocususemagicdevice_star.src="asterisk.gif";
  if ((CasterLevel()>0)&(!gave_up_abjuration)){document.form1.spellfocusabjuration_star.src="asterisk.gif";}
  if ((CasterLevel()>0)&(!gave_up_conjuration)){document.form1.spellfocusconjuration_star.src="asterisk.gif";}
  if ((CasterLevel()>0)&(!gave_up_divination)){document.form1.spellfocusdivination_star.src="asterisk.gif";}
  if ((CasterLevel()>0)&(!gave_up_enchantment)){document.form1.spellfocusenchantment_star.src="asterisk.gif";}
  if ((CasterLevel()>0)&(!gave_up_evocation)){document.form1.spellfocusevocation_star.src="asterisk.gif";}
  if ((CasterLevel()>0)&(!gave_up_illusion)){document.form1.spellfocusillusion_star.src="asterisk.gif";}
  if ((CasterLevel()>0)&(!gave_up_necromancy)){document.form1.spellfocusnecromancy_star.src="asterisk.gif";}
  if ((CasterLevel()>0)&(!gave_up_transmutation)){document.form1.spellfocustransmutation_star.src="asterisk.gif";}
  document.form1.other_feat_1_star.src="asterisk.gif";
  document.form1.other_feat_2_star.src="asterisk.gif";
  document.form1.other_feat_3_star.src="asterisk.gif";
  document.form1.other_feat_4_star.src="asterisk.gif";
  document.form1.other_feat_5_star.src="asterisk.gif";
  document.form1.other_feat_6_star.src="asterisk.gif";
  document.form1.other_feat_7_star.src="asterisk.gif";
  document.form1.other_feat_8_star.src="asterisk.gif";
  document.form1.other_feat_9_star.src="asterisk.gif";
  document.form1.other_feat_10_star.src="asterisk.gif";
  if ((cleric_levels>0)|(paladin_levels>3)){document.form1.alignmentchannel_star.src="asterisk.gif";}
  document.form1.catchoffguard_star.src="asterisk.gif";
  if ((cleric_levels>0)|(paladin_levels>3)){document.form1.channelsmite_star.src="asterisk.gif";}
  if (channels_energy==2){document.form1.commandundead_star.src="asterisk.gif";}
  if (base_attack_bonus>=9){document.form1.criticalfocus_star.src="asterisk.gif";}
  if ((dexterity>=13)&(base_attack_bonus>=1)){document.form1.deadlyaim_star.src="asterisk.gif";}
  if (base_attack_bonus<total_levels){document.form1.defensivecombattraining_star.src="asterisk.gif";}
  if (fighter_levels>=6){document.form1.disruptive_star.src="asterisk.gif";}
  if ((cleric_levels>0)|(paladin_levels>3)){document.form1.elementalchannel_star.src="asterisk.gif";}
  document.form1.fleet_star.src="asterisk.gif";
  if ((cleric_levels>0)|(paladin_levels>3)|(wizard_specialty_name=="Necromancer")){document.form1.improvedchannel_star.src="asterisk.gif";}
  if (wizard_levels>0){document.form1.improvedfamiliar_star.src="asterisk.gif";}
  if (strength>=12){document.form1.intimidatingprowess_star.src="asterisk.gif";}
  if (base_attack_bonus>=6){document.form1.lunge_star.src="asterisk.gif";}
  if ((craft_1>=5)|(craft_2>=5)|(craft_3>=5)|(profession>=5)){document.form1.mastercraftsman_star.src="asterisk.gif";}
  if (dexterity>=13){document.form1.nimblemoves_star.src="asterisk.gif";}

  if (((cleric_levels>0)|(paladin_levels>3)|(wizard_specialty_name=="Necromancer"))&(charisma>=13))document.form1.selectivechanneling_star.src="asterisk.gif";
  if ((cleric_levels>0)|(paladin_levels>3))document.form1.turnundead_star.src="asterisk.gif";
  if (base_attack_bonus>=6){document.form1.vitalstrike_star.src="asterisk.gif";}


 }


function LightVariableFeatStars(){

  if (((already_knows_light_armor)|(document.form1.armorproficiencylight.checked))&((bard_levels>=3)|(wizard_levels>=3)|(sorcerer_levels>=3))){document.form1.arcanearmortraining_star.src="asterisk.gif";}
    else {document.form1.arcanearmortraining_star.src="no_asterisk.gif";}
  if (((already_knows_medium_armor)|(document.form1.armorproficiencymedium))&((bard_levels>=7)|(wizard_levels>=7)|(sorcerer_levels>=7))){document.form1.arcanearmormastery_star.src="asterisk.gif";}
    else {document.form1.arcanearmormastery_star.src="no_asterisk.gif";}
  if ((rangercombattrack==1)|(document.form1.pointblankshot.checked)){document.form1.farshot_star.src="asterisk.gif";}
    else {document.form1.farshot_star.src="no_asterisk.gif";}
  if ((document.form1.pointblankshot.checked)|(rangercombattrack==1)){document.form1.preciseshot_star.src="asterisk.gif";}
    else {document.form1.preciseshot_star.src="no_asterisk.gif";}
  if ((rangercombattrack==1)|((dexterity>=13)&(document.form1.pointblankshot.checked)))  {document.form1.rapidshot_star.src="asterisk.gif";}
    else {document.form1.rapidshot_star.src="no_asterisk.gif";}
  if (((rangercombattrack==1)&(ranger_levels>=6))|((document.form1.pointblankshot.checked)&(dexterity>=19)&(base_attack_bonus>=11))){document.form1.improvedpreciseshot_star.src="asterisk.gif";}
    else {document.form1.improvedpreciseshot_star.src="no_asterisk.gif";}

  if (((rangercombattrack==1)&(ranger_levels>=6))|((document.form1.rapidshot.checked)&(dexterity>=17)&(base_attack_bonus>=6))){document.form1.manyshot_star.src="asterisk.gif";}
    else {document.form1.manyshot_star.src="no_asterisk.gif";}
  if (((rangercombattrack==1)&(ranger_levels>=10))|((document.form1.improvedpreciseshot.checked)&(base_attack_bonus>=16))){document.form1.pinpointtargeting_star.src="asterisk.gif";}
    else {document.form1.pinpointtargeting_star.src="no_asterisk.gif";}
  if (((rangercombattrack==1)&(ranger_levels>=10))|((document.form1.pointblankshot.checked)&(document.form1.mobility.checked)&(base_attack_bonus>=4))){document.form1.shotontherun_star.src="asterisk.gif";}
    else {document.form1.shotontherun_star.src="no_asterisk.gif";}
  if ((rangercombattrack==2)|(dexterity>=15)){document.form1.twoweaponfighting_star.src="asterisk.gif";}
    else {document.form1.twoweaponfighting_star.src="no_asterisk.gif";}
  if (((rangercombattrack==2)&(ranger_levels>=6))|(document.form1.twoweaponfighting.checked)){document.form1.twoweapondefense_star.src="asterisk.gif";}
    else {document.form1.twoweapondefense_star.src="no_asterisk.gif";}
  if (((rangercombattrack==2)&(ranger_levels>=6))|((dexterity>=17)&(document.form1.twoweaponfighting.checked)&(base_attack_bonus>=6))){document.form1.improvedtwoweaponfighting_star.src="asterisk.gif";}
    else {document.form1.improvedtwoweaponfighting_star.src="no_asterisk.gif";}
  if (((rangercombattrack==2)&(ranger_levels>=10))|((dexterity>=19)&(document.form1.improvedtwoweaponfighting.checked)&(base_attack_bonus>=11))){document.form1.greatertwoweaponfighting_star.src="asterisk.gif";}
    else {document.form1.greatertwoweaponfighting_star.src="no_asterisk.gif";}
  if ((rangercombattrack==2)|(document.form1.twoweaponfighting.checked)){document.form1.doubleslice_star.src="asterisk.gif";}
    else {document.form1.doubleslice_star.src="no_asterisk.gif";}
  if ((rangercombattrack==2)|(already_knows_shields)|(document.form1.shieldproficiency)){document.form1.improvedshieldbash_star.src="asterisk.gif";}
    else {document.form1.improvedshieldbash_star.src="no_asterisk.gif";}
  if (((rangercombattrack==2)&(ranger_levels>=10))|((base_attack_bonus>=11)&(document.form1.twoweaponrend.checked)&(document.form1.improvedtwoweaponfighting.checked))){document.form1.twoweaponrend_star.src="asterisk.gif";}
    else {document.form1.twoweaponrend_star.src="no_asterisk.gif";}

  if (document.form1.spellfocusconjuration.checked){document.form1.augmentsummoning_star.src="asterisk.gif";}
  else {document.form1.augmentsummoning_star.src="no_asterisk.gif";}

  if ((document.form1.combatexpertise.checked)|(monk_levels>=6)){document.form1.improveddisarm_star.src="asterisk.gif";}
   else {document.form1.improveddisarm_star.src="no_asterisk.gif";}
  if ((base_attack_bonus>=6)&(document.form1.improveddisarm.checked)){document.form1.greaterdisarm_star.src="asterisk.gif";}
   else {document.form1.greaterdisarm_star.src="no_asterisk.gif";}

  if ((document.form1.combatexpertise.checked)|(monk_levels>=6)){document.form1.improvedfeint_star.src="asterisk.gif";}
    else {document.form1.improvedfeint_star.src="no_asterisk.gif";}

  if ((base_attack_bonus>=6)&(document.form1.improvedfeint.checked)){document.form1.greaterfeint_star.src="asterisk.gif";}
   else {document.form1.greaterfeint_star.src="no_asterisk.gif";}


  if ((document.form1.combatexpertise.checked)|(monk_levels>=6)){document.form1.improvedtrip_star.src="asterisk.gif";}
   else {document.form1.improvedtrip_star.src="no_asterisk.gif";}

  if ((!already_knows_medium_armor)&((document.form1.armorproficiencylight.checked)|(already_knows_light_armor))){document.form1.armorproficiencymedium_star.src="asterisk.gif";}
    else {document.form1.armorproficiencymedium_star.src="no_asterisk.gif";}

  if ((!already_knows_heavy_armor)&((document.form1.armorproficiencymedium.checked)|(already_knows_medium_armor))){document.form1.armorproficiencyheavy_star.src="asterisk.gif";}
    else {document.form1.armorproficiencyheavy_star.src="no_asterisk.gif";}

  if ((base_attack_bonus>=6)&(document.form1.improvedtrip.checked)){document.form1.greatertrip_star.src="asterisk.gif";}
    else {document.form1.greatertrip_star.src="no_asterisk.gif";}

  if ((base_attack_bonus>=4)&(document.form1.combatexpertise.checked)&(document.form1.springattack.checked)&(dexterity>=13)){document.form1.whirlwindattack_star.src="asterisk.gif";}
    else {document.form1.whirlwindattack_star.src="no_asterisk.gif";}

  if (document.form1.combatreflexes.checked){document.form1.standstill_star.src="asterisk.gif";}
   else {document.form1.standstill_star.src="no_asterisk.gif";}

  if ((document.form1.criticalfocus.checked)&(base_attack_bonus>=11)){document.form1.bleedingcritical_star.src="asterisk.gif";}
   else {document.form1.bleedingcritical_star.src="no_asterisk.gif";}
  if ((document.form1.criticalfocus.checked)&(base_attack_bonus>=15)){document.form1.blindingcritical_star.src="asterisk.gif";}
   else {document.form1.blindingcritical_star.src="no_asterisk.gif";}
  if ((document.form1.criticalfocus.checked)&(fighter_levels>=14)){document.form1.criticalmastery_star.src="asterisk.gif";}
   else {document.form1.criticalmastery_star.src="no_asterisk.gif";}
  if ((document.form1.criticalfocus.checked)&(base_attack_bonus>=13)){document.form1.deafeningcritical_star.src="asterisk.gif";}
   else {document.form1.deafeningcritical_star.src="no_asterisk.gif";}
  if ((document.form1.criticalfocus.checked)&(base_attack_bonus>=11)){document.form1.sickeningcritical_star.src="asterisk.gif";}
   else {document.form1.sickeningcritical_star.src="no_asterisk.gif";}
  if ((document.form1.criticalfocus.checked)&(base_attack_bonus>=13)){document.form1.staggeringcritical_star.src="asterisk.gif";}
   else {document.form1.staggeringcritical_star.src="no_asterisk.gif";}
  if ((document.form1.staggeringcritical.checked)&(base_attack_bonus>=17)){document.form1.stunningcritical_star.src="asterisk.gif";}
   else {document.form1.stunningcritical_star.src="no_asterisk.gif";}
  if ((document.form1.criticalfocus.checked)&(base_attack_bonus>=13)){document.form1.tiringcritical_star.src="asterisk.gif";}
   else {document.form1.tiringcritical_star.src="no_asterisk.gif";}
  if ((document.form1.tiringcritical.checked)&(base_attack_bonus>=15)){document.form1.exhaustingcritical_star.src="asterisk.gif";}
   else {document.form1.exhaustingcritical_star.src="no_asterisk.gif";}
  if ((fighter_levels>=10)&(document.form1.disruptive.checked)){document.form1.spellbreaker_star.src="asterisk.gif";}
    else {document.form1.spellbreaker_star.src="no_asterisk.gif";}
  if ((document.form1.dodge.checked)|(monk_levels>=6)){document.form1.mobility_star.src="asterisk.gif";}
    else {document.form1.mobility_star.src="no_asterisk.gif";}
  if (((document.form1.mobility.checked)&(base_attack_bonus>=4))|(monk_levels>=10)){document.form1.springattack_star.src="asterisk.gif";}
    else {document.form1.springattack_star.src="no_asterisk.gif";}
  if ((document.form1.dodge.checked)&(dexterity>=15)&(base_attack_bonus>=6)){document.form1.windstance_star.src="asterisk.gif";}
    else {document.form1.windstance_star.src="no_asterisk.gif";}
  if ((document.form1.windstance.checked)&(dexterity>=17)&(base_attack_bonus>=11)){document.form1.lightningstance_star.src="asterisk.gif";}
    else {document.form1.lightningstance_star.src="no_asterisk.gif";}
  if ((document.form1.disruptive.checked)&(fighter_levels>=10)){document.form1.spellbreaker_star.src="asterisk.gif";}
    else {document.form1.spellbreaker_star.src="no_asterisk.gif";}
  if ((document.form1.endurance.checked)|(ranger_levels>=3)){document.form1.diehard_star.src="asterisk.gif";}
    else {document.form1.diehard_star.src="no_asterisk.gif";}
  if (document.form1.greatfortitude.checked){document.form1.improvedgreatfortitude_star.src="asterisk.gif";}
   else {document.form1.improvedgreatfortitude_star.src="no_asterisk.gif";}
  
  if (((document.form1.catchoffguard.checked)|(document.form1.throwanything.checked))&(base_attack_bonus>=8)){document.form1.improvisedweaponmastery_star.src="asterisk.gif";}
    else {document.form1.improvisedweaponmastery_star.src="no_asterisk.gif";}
  if (document.form1.ironwill.checked){document.form1.improvedironwill_star.src="asterisk.gif";}
    else {document.form1.improvedironwill_star.src="no_asterisk.gif";}
  if (document.form1.lightningreflexes.checked){document.form1.improvedlightningreflexes_star.src="asterisk.gif";}
    else {document.form1.improvedlightningreflexes_star.src="no_asterisk.gif";}

  if (document.form1.mountedcombat.checked){document.form1.mountedarchery_star.src="asterisk.gif";}
   else {document.form1.mountedarchery_star.src="no_asterisk.gif";}
  if (document.form1.mountedcombat.checked)  {document.form1.ridebyattack_star.src="asterisk.gif";}
   else {document.form1.ridebyattack_star.src="no_asterisk.gif";}
  if (document.form1.ridebyattack.checked)  {document.form1.spiritedcharge_star.src="asterisk.gif";}
   else {document.form1.spiritedcharge_star.src="no_asterisk.gif";}
  if (document.form1.mountedcombat.checked)  {document.form1.trample_star.src="asterisk.gif";}
   else {document.form1.trample_star.src="no_asterisk.gif";}
  if ((document.form1.mountedcombat.checked)&(document.form1.improvedbullrush.checked)){document.form1.unseat_star.src="asterisk.gif";}
   else {document.form1.unseat_star.src="no_asterisk.gif";}



  if ((CasterLevel()>=5)|(CrafterLevel()>=5)){document.form1.craftmaa_star.src="asterisk.gif";}
   else {document.form1.craftmaa_star.src="no_asterisk.gif";}
  if ((CasterLevel()>=3)|(CrafterLevel()>=3)){document.form1.craftwondrousitem_star.src="asterisk.gif";}
   else {document.form1.craftwondrousitem_star.src="no_asterisk.gif";}

  if ((dexterity>=15)&(document.form1.nimblemoves.checked)){document.form1.acrobaticsteps_star.src="asterisk.gif";}
    else {document.form1.acrobaticsteps_star.src="no_asterisk.gif";}

  if (document.form1.powerattack.checked){document.form1.cleave_star.src="asterisk.gif";}
    else {document.form1.cleave_star.src="no_asterisk.gif";}
  if ((document.form1.cleave.checked)&(base_attack_bonus>=4)){document.form1.greatcleave_star.src="asterisk.gif";}
    else {document.form1.greatcleave_star.src="no_asterisk.gif";}
  if ((document.form1.powerattack.checked)|(monk_levels>=6)){document.form1.improvedbullrush_star.src="asterisk.gif";}
    else {document.form1.improvedbullrush_star.src="no_asterisk.gif";}
  if (document.form1.powerattack.checked){document.form1.improvedoverrun_star.src="asterisk.gif";}
    else {document.form1.improvedoverrun_star.src="no_asterisk.gif";}
  if (document.form1.powerattack.checked){document.form1.improvedsunder_star.src="asterisk.gif";}
    else {document.form1.improvedsunder_star.src="no_asterisk.gif";}
  if ((base_attack_bonus>=6)&(document.form1.improvedbullrush.checked)){document.form1.greaterbullrush_star.src="asterisk.gif";}
    else {document.form1.greaterbullrush_star.src="no_asterisk.gif";}
  if ((base_attack_bonus>=6)&(document.form1.improvedoverrun.checked)){document.form1.greateroverrun_star.src="asterisk.gif";}
    else {document.form1.greateroverrun_star.src="no_asterisk.gif";}
  if ((base_attack_bonus>=6)&(document.form1.improvedsunder.checked)){document.form1.greatersunder_star.src="asterisk.gif";}
    else {document.form1.greatersunder_star.src="no_asterisk.gif";}
  if ((document.form1.improvedshieldbash.checked)&(document.form1.twoweaponfighting)&(base_attack_bonus>=6)){document.form1.shieldslam_star.src="asterisk.gif";}
    else {document.form1.shieldslam_star.src="no_asterisk.gif";}
  if ((document.form1.shieldslam.checked)&(base_attack_bonus>=11)){document.form1.shieldmaster_star.src="asterisk.gif";}
    else {document.form1.shieldmaster_star.src="no_asterisk.gif";}
  if (((already_knows_shields)|(document.form1.shieldproficiency.checked))|(base_attack_bonus>0)){document.form1.shieldfocus_star.src="asterisk.gif";}
    else {document.form1.shieldfocus_star.src="no_asterisk.gif";}
  if ((fighter_levels>=8)&(document.form1.shieldfocus.checked)){document.form1.greatershieldfocus_star.src="asterisk.gif";}
    else {document.form1.greatershieldfocus_star.src="no_asterisk.gif";}

 
 if (((already_knows_shields)|(document.form1.shieldproficiency.checked))&(!already_knows_tower_shield)){document.form1.towershieldproficiency_star.src="asterisk.gif";}
   else {document.form1.towershieldproficiency_star.src="no_asterisk.gif";}
  if (document.form1.spellpenetration.checked){document.form1.greaterspellpenetration_star.src="asterisk.gif";}
   else {document.form1.greaterspellpenetration_star.src="no_asterisk.gif";}

  if ((document.form1.vitalstrike.checked)&(base_attack_bonus>=11)){document.form1.improvedvitalstrike_star.src="asterisk.gif";}
   else {document.form1.improvedvitalstrike_star.src="no_asterisk.gif";}
  if ((document.form1.improvedvitalstrike.checked)&(base_attack_bonus>=16)){document.form1.greatervitalstrike_star.src="asterisk.gif";}
   else {document.form1.greatervitalstrike_star.src="no_asterisk.gif";}

  if (document.form1.weaponfocus_list.selectedIndex>0){document.form1.dazzlingdisplay_star.src="asterisk.gif";}
  else {document.form1.dazzlingdisplay_star.src="no_asterisk.gif";}
  if ((document.form1.dazzlingdisplay.checked)&(base_attack_bonus>=6)){document.form1.shatterdefenses_star.src="asterisk.gif";}
  else {document.form1.shatterdefenses_star.src="no_asterisk.gif";}
  if ((document.form1.greaterweaponfocus_list.selectedIndex>0)&(document.form1.shatterdefenses.checked)&(base_attack_bonus>=11)){document.form1.deadlystroke_star.src="asterisk.gif";}
  else {document.form1.deadlystroke_star.src="no_asterisk.gif";}
  if ((document.form1.weaponfocus_list.selectedIndex>0)&(fighter_levels>=12)){document.form1.penetratingstrike_star.src="asterisk.gif";}
  else {document.form1.penetratingstrike_star.src="no_asterisk.gif";}
  if ((document.form1.penetratingstrike.checked)&(fighter_levels>=16)){document.form1.greaterpenetratingstrike_star.src="asterisk.gif";}
  else {document.form1.greaterpenetratingstrike_star.src="no_asterisk.gif";}

  if ((document.form1.weaponfocus_list.selectedIndex>0)&(fighter_levels>=4)){document.form1.weaponspecialization_list_star.src="asterisk.gif";}
  else {document.form1.weaponspecialization_list_star.src="no_asterisk.gif";}
  if ((document.form1.weaponfocus_list.selectedIndex>0)&(fighter_levels>=12)){document.form1.greaterweaponfocus_list_star.src="asterisk.gif";}
  else {document.form1.greaterweaponfocus_list_star.src="no_asterisk.gif";}
  if ((document.form1.weaponspecialization_list.selectedIndex>0)&(fighter_levels>=12)){document.form1.greaterweaponspecialization_list_star.src="asterisk.gif";}
  else {document.form1.greaterweaponspecialization_list_star.src="no_asterisk.gif";}

  if (document.form1.spellfocusabjuration.checked){document.form1.greaterspellfocusabjuration_star.src="asterisk.gif";}
   else {document.form1.greaterspellfocusabjuration_star.src="no_asterisk.gif";}
  if (document.form1.spellfocusconjuration.checked){document.form1.greaterspellfocusconjuration_star.src="asterisk.gif";}
   else {document.form1.greaterspellfocusconjuration_star.src="no_asterisk.gif";}
  if (document.form1.spellfocusdivination.checked){document.form1.greaterspellfocusdivination_star.src="asterisk.gif";}
   else {document.form1.greaterspellfocusdivination_star.src="no_asterisk.gif";}
  if (document.form1.spellfocusenchantment.checked){document.form1.greaterspellfocusenchantment_star.src="asterisk.gif";}
  else {document.form1.greaterspellfocusenchantment_star.src="no_asterisk.gif";}
  if (document.form1.spellfocusevocation.checked){document.form1.greaterspellfocusevocation_star.src="asterisk.gif";}
   else {document.form1.greaterspellfocusevocation_star.src="no_asterisk.gif";}
  if (document.form1.spellfocusillusion.checked){document.form1.greaterspellfocusillusion_star.src="asterisk.gif";}
   else {document.form1.greaterspellfocusillusion_star.src="no_asterisk.gif";}
  if (document.form1.spellfocusnecromancy.checked){document.form1.greaterspellfocusnecromancy_star.src="asterisk.gif";}
   else {document.form1.greaterspellfocusnecromancy_star.src="no_asterisk.gif";}
  if (document.form1.spellfocustransmutation.checked){document.form1.greaterspellfocustransmutation_star.src="asterisk.gif";}
   else {document.form1.greaterspellfocustransmutation_star.src="no_asterisk.gif";}


 }


function DoFavoredClassPoints(){
  document.form1.favored_for_hit_points.length=0; 
  for (x=0; x<=favored_class_point_total; x++ ){
    document.form1.favored_for_hit_points.options[x]=new Option(x); }
      document.form1.favored_for_hit_points.options[favored_class_point_total].selected=true; 
  document.form1.favored_for_skill_points.length=0; 
  for (x=0; x<=favored_class_point_total; x++ ){
    document.form1.favored_for_skill_points.options[x]=new Option(x); }
      document.form1.favored_for_skill_points.options[0].selected=true; 
 }


function favored_class_points(i){
 if (FighterFeatsEtcFrozen) 
  {
   document.form1.favored_for_hit_points.selectedIndex=favored_for_hp;
   document.form1.favored_for_skill_points.selectedIndex=favored_for_skill;
   return;
  }
 if (i==1){document.form1.favored_for_skill_points.selectedIndex=favored_class_point_total-document.form1.favored_for_hit_points.selectedIndex;}
 if (i==2){document.form1.favored_for_hit_points.selectedIndex=favored_class_point_total-document.form1.favored_for_skill_points.selectedIndex;}
 }


function whichabilityup(){
 if (upitat00==1){return "strength";}
 if (upitat00==2){return "dexterity";}
 if (upitat00==3){return "constitution";}
 if (upitat00==4){return "intelligence";}
 if (upitat00==5){return "wisdom";}
 if (upitat00==6){return "charisma";}
 return "awesomeness";
 }
 

function RangerFoesA(){
 if ((ranger_levels==0)|(ClassesHaveBeenEstablished==false)){NegateRangerFoes();  }
 else if (FighterFeatsEtcFrozen==true)
  {RememberRangerFoes();  }
 else
  {
   ArrowShow();  
  }
 }

function RangerTerrainsA(){
 if ((ranger_levels<3)|(ClassesHaveBeenEstablished==false)){NegateRangerTerrains();  }
 else if (FighterFeatsEtcFrozen==true)
  {RememberRangerTerrains();  }
 else
  {
   ArrowShow();  
  }
 }

function RecordRangerFoes(){
  rf_aberration=document.form1.rf_aberration_list.selectedIndex; 
  rf_animal=document.form1.rf_animal_list.selectedIndex; 
  rf_construct=document.form1.rf_construct_list.selectedIndex; 
  rf_dragon=document.form1.rf_dragon_list.selectedIndex; 
  rf_humanoidothersubtype=document.form1.rf_humanoidothersubtype_list.selectedIndex; 
  rf_fey=document.form1.rf_fey_list.selectedIndex; 
  rf_giant=document.form1.rf_giant_list.selectedIndex; 
  rf_aquatic=document.form1.rf_aquatic_list.selectedIndex; 
  rf_dwarf=document.form1.rf_dwarf_list.selectedIndex; 
  rf_elf=document.form1.rf_elf_list.selectedIndex; 
  rf_goblinoid=document.form1.rf_goblinoid_list.selectedIndex; 
  rf_gnoll=document.form1.rf_gnoll_list.selectedIndex; 
  rf_gnome=document.form1.rf_gnome_list.selectedIndex; 
  rf_halfling=document.form1.rf_halfling_list.selectedIndex; 
  rf_human=document.form1.rf_human_list.selectedIndex; 
  rf_orc=document.form1.rf_orc_list.selectedIndex; 
  rf_reptilian=document.form1.rf_reptilian_list.selectedIndex; 
  rf_magicalbeast=document.form1.rf_magicalbeast_list.selectedIndex; 
  rf_monstroushumanoid=document.form1.rf_monstroushumanoid_list.selectedIndex; 
  rf_ooze=document.form1.rf_ooze_list.selectedIndex; 
  rf_air=document.form1.rf_air_list.selectedIndex; 
  rf_chaotic=document.form1.rf_chaotic_list.selectedIndex; 
  rf_earth=document.form1.rf_earth_list.selectedIndex; 
  rf_evil=document.form1.rf_evil_list.selectedIndex; 
  rf_fire=document.form1.rf_fire_list.selectedIndex; 
  rf_good=document.form1.rf_good_list.selectedIndex; 
  rf_lawful=document.form1.rf_lawful_list.selectedIndex; 
  rf_native=document.form1.rf_native_list.selectedIndex; 
  rf_water=document.form1.rf_water_list.selectedIndex; 
  rf_plant=document.form1.rf_plant_list.selectedIndex; 
  rf_undead=document.form1.rf_undead_list.selectedIndex; 
  rf_vermin=document.form1.rf_vermin_list.selectedIndex; 
 }


function RecordRangerTerrains(){
 rt_cold=document.form1.rt_cold_list.selectedIndex;
 rt_desert=document.form1.rt_desert_list.selectedIndex;
 rt_forest=document.form1.rt_forest_list.selectedIndex;
 rt_jungle=document.form1.rt_jungle_list.selectedIndex;
 rt_mountain=document.form1.rt_mountain_list.selectedIndex;
 rt_plains=document.form1.rt_plains_list.selectedIndex;
 rt_planeabyss=document.form1.rt_planeabyss_list.selectedIndex;
 rt_planeair=document.form1.rt_planeair_list.selectedIndex;
 rt_planeaxis=document.form1.rt_planeaxis_list.selectedIndex;
 rt_planeabaddon=document.form1.rt_planeabaddon_list.selectedIndex;
 rt_planeastral=document.form1.rt_planeastral_list.selectedIndex;
 rt_planeearth=document.form1.rt_planeearth_list.selectedIndex;
 rt_planeelysium=document.form1.rt_planeelysium_list.selectedIndex;
 rt_planeethereal=document.form1.rt_planeethereal_list.selectedIndex;
 rt_planefire=document.form1.rt_planefire_list.selectedIndex;
 rt_planeheaven=document.form1.rt_planeheaven_list.selectedIndex;
 rt_planehell=document.form1.rt_planehell_list.selectedIndex;
 rt_planemaelstrom=document.form1.rt_planemaelstrom_list.selectedIndex;
 rt_planenirvana=document.form1.rt_planenirvana_list.selectedIndex;
 rt_planeshadow=document.form1.rt_planeshadow_list.selectedIndex;
 rt_planewater=document.form1.rt_planewater_list.selectedIndex;
 rt_swamp=document.form1.rt_swamp_list.selectedIndex;
 rt_other1=document.form1.rt_other1_list.selectedIndex;
 rt_other2=document.form1.rt_other2_list.selectedIndex;
 rt_underground=document.form1.rt_underground_list.selectedIndex;
 rt_urban=document.form1.rt_urban_list.selectedIndex;
 rt_water=document.form1.rt_water_list.selectedIndex;
 }

function RememberRangerFoes(){
  document.form1.rf_aberration_list.selectedIndex=rf_aberration; 
  document.form1.rf_animal_list.selectedIndex=rf_animal; 
  document.form1.rf_construct_list.selectedIndex=rf_construct; 
  document.form1.rf_dragon_list.selectedIndex=rf_dragon; 
  document.form1.rf_humanoidothersubtype_list.selectedIndex=rf_humanoidothersubtype; 
  document.form1.rf_fey_list.selectedIndex=rf_fey; 
  document.form1.rf_giant_list.selectedIndex=rf_giant; 
  document.form1.rf_aquatic_list.selectedIndex=rf_aquatic; 
  document.form1.rf_dwarf_list.selectedIndex=rf_dwarf; 
  document.form1.rf_elf_list.selectedIndex=rf_elf; 
  document.form1.rf_goblinoid_list.selectedIndex=rf_goblinoid; 
  document.form1.rf_gnoll_list.selectedIndex=rf_gnoll; 
  document.form1.rf_gnome_list.selectedIndex=rf_gnome; 
  document.form1.rf_halfling_list.selectedIndex=rf_halfling; 
  document.form1.rf_human_list.selectedIndex=rf_human; 
  document.form1.rf_orc_list.selectedIndex=rf_orc; 
  document.form1.rf_reptilian_list.selectedIndex=rf_reptilian; 
  document.form1.rf_magicalbeast_list.selectedIndex=rf_magicalbeast; 
  document.form1.rf_monstroushumanoid_list.selectedIndex=rf_monstroushumanoid; 
  document.form1.rf_ooze_list.selectedIndex=rf_ooze; 
  document.form1.rf_air_list.selectedIndex=rf_air; 
  document.form1.rf_chaotic_list.selectedIndex=rf_chaotic; 
  document.form1.rf_earth_list.selectedIndex=rf_earth; 
  document.form1.rf_evil_list.selectedIndex=rf_evil; 
  document.form1.rf_fire_list.selectedIndex=rf_fire; 
  document.form1.rf_good_list.selectedIndex=rf_good; 
  document.form1.rf_lawful_list.selectedIndex=rf_lawful; 
  document.form1.rf_native_list.selectedIndex=rf_native; 
  document.form1.rf_water_list.selectedIndex=rf_water; 
  document.form1.rf_plant_list.selectedIndex=rf_plant; 
  document.form1.rf_undead_list.selectedIndex=rf_undead; 
  document.form1.rf_vermin_list.selectedIndex=rf_vermin; 
 }

function RememberRangerTerrains(){ 
 rt_cold=document.form1.rt_cold_list.selectedIndex;
 rt_desert=document.form1.rt_desert_list.selectedIndex;
 rt_forest=document.form1.rt_forest_list.selectedIndex;
 rt_jungle=document.form1.rt_jungle_list.selectedIndex;
 rt_mountain=document.form1.rt_mountain_list.selectedIndex;
 rt_plains=document.form1.rt_plains_list.selectedIndex;
 rt_planeabyss=document.form1.rt_planeabyss_list.selectedIndex;
 rt_planeair=document.form1.rt_planeair_list.selectedIndex;
 rt_planeaxis=document.form1.rt_planeaxis_list.selectedIndex;
 rt_planeabaddon=document.form1.rt_planeabaddon_list.selectedIndex;
 rt_planeastral=document.form1.rt_planeastral_list.selectedIndex;
 rt_planeearth=document.form1.rt_planeearth_list.selectedIndex;
 rt_planeelysium=document.form1.rt_planeelysium_list.selectedIndex;
 rt_planeethereal=document.form1.rt_planeethereal_list.selectedIndex;
 rt_planefire=document.form1.rt_planefire_list.selectedIndex;
 rt_planeheaven=document.form1.rt_planeheaven_list.selectedIndex;
 rt_planehell=document.form1.rt_planehell_list.selectedIndex;
 rt_planemaelstrom=document.form1.rt_planemaelstrom_list.selectedIndex;
 rt_planenirvana=document.form1.rt_planenirvana_list.selectedIndex;
 rt_planeshadow=document.form1.rt_planeshadow_list.selectedIndex;
 rt_planewater=document.form1.rt_planewater_list.selectedIndex;
 rt_swamp=document.form1.rt_swamp_list.selectedIndex;
 rt_other1=document.form1.rt_other1_list.selectedIndex;
 rt_other2=document.form1.rt_other2_list.selectedIndex;
 rt_underground=document.form1.rt_underground_list.selectedIndex;
 rt_urban=document.form1.rt_urban_list.selectedIndex;
 rt_water=document.form1.rt_water_list.selectedIndex;
 }

function NegateRangerFoes(){
  rf_aberration=0; 
  rf_animal=0; 
  rf_construct=0; 
  rf_dragon=0; 
  rf_humanoidothersubtype=0; 
  rf_fey=0; 
  rf_giant=0; 
  rf_aquatic=0; 
  rf_dwarf=0; 
  rf_elf=0; 
  rf_goblinoid=0; 
  rf_gnoll=0; 
  rf_gnome=0; 
  rf_halfling=0; 
  rf_human=0; 
  rf_orc=0; 
  rf_reptilian=0; 
  rf_magicalbeast=0; 
  rf_monstroushumanoid=0; 
  rf_ooze=0; 
  rf_air=0; 
  rf_chaotic=0; 
  rf_earth=0; 
  rf_evil=0; 
  rf_fire=0; 
  rf_good=0; 
  rf_lawful=0; 
  rf_native=0; 
  rf_water=0; 
  rf_plant=0; 
  rf_undead=0; 
  rf_vermin=0; 
 }

function NegateRangerTerrains(){
 rt_cold=0;
 rt_desert=0;
 rt_forest=0;
 rt_jungle=0;
 rt_mountain=0;
 rt_plains=0;
 rt_planeabyss=0;
 rt_planeair=0;
 rt_planeaxis=0;
 rt_planeabaddon=0;
 rt_planeastral=0;
 rt_planeearth=0;
 rt_planeelysium=0;
 rt_planeethereal=0;
 rt_planefire=0;
 rt_planeheaven=0;
 rt_planehell=0;
 rt_planemaelstrom=0;
 rt_planenirvana=0;
 rt_planeshadow=0;
 rt_planewater=0;
 rt_swamp=0;
 rt_other1=0;
 rt_other2=0;
 rt_underground=0;
 rt_urban=0;
 rt_water=0;

 }

function RangerFoes(){
 if (ranger_levels==0){return true; }
 ranger_foe_length=RangerFavoredEnemyCount(); 
 x=0; y=0; 
 if (x==ranger_foe_length){document.form1.rf_aberration_list[0].selected=true; }
 if (document.form1.rf_aberration_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_aberration_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_aberration_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_aberration_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_animal_list[0].selected=true; }
 if (document.form1.rf_animal_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_animal_list.selectedIndex> ranger_foe_length-1-y + x)
  {document.form1.rf_animal_list[ranger_foe_length-1-y + x].selected=true; }
 y +=document.form1.rf_animal_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_construct_list[0].selected=true; }
 if (document.form1.rf_construct_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_construct_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_construct_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_construct_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_dragon_list[0].selected=true; }
 if (document.form1.rf_dragon_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_dragon_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_dragon_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_dragon_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_humanoidothersubtype_list[0].selected=true; }
 if (document.form1.rf_humanoidothersubtype_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_humanoidothersubtype_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_humanoidothersubtype_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_humanoidothersubtype_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_fey_list[0].selected=true; }
 if (document.form1.rf_fey_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_fey_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_fey_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_fey_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_giant_list[0].selected=true; }
 if (document.form1.rf_giant_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_giant_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_giant_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_giant_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_aquatic_list[0].selected=true; }
 if (document.form1.rf_aquatic_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_aquatic_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_aquatic_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_aquatic_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_dwarf_list[0].selected=true; }
 if (document.form1.rf_dwarf_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_dwarf_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_dwarf_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_dwarf_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_elf_list[0].selected=true; }
 if (document.form1.rf_elf_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_elf_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_elf_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_elf_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_goblinoid_list[0].selected=true; }
 if (document.form1.rf_goblinoid_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_goblinoid_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_goblinoid_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_goblinoid_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_gnoll_list[0].selected=true; }
 if (document.form1.rf_gnoll_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_gnoll_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_gnoll_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_gnoll_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_gnome_list[0].selected=true; }
 if (document.form1.rf_gnome_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_gnome_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_gnome_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_gnome_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_halfling_list[0].selected=true; }
 if (document.form1.rf_halfling_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_halfling_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_halfling_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_halfling_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_human_list[0].selected=true; }
 if (document.form1.rf_human_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_human_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_human_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_human_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_orc_list[0].selected=true; }
 if (document.form1.rf_orc_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_orc_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_orc_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_orc_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_reptilian_list[0].selected=true; }
 if (document.form1.rf_reptilian_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_reptilian_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_reptilian_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_reptilian_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_magicalbeast_list[0].selected=true; }
 if (document.form1.rf_magicalbeast_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_magicalbeast_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_magicalbeast_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_magicalbeast_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_monstroushumanoid_list[0].selected=true; }
 if (document.form1.rf_monstroushumanoid_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_monstroushumanoid_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_monstroushumanoid_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_monstroushumanoid_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_ooze_list[0].selected=true; }
 if (document.form1.rf_ooze_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_ooze_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_ooze_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_ooze_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_air_list[0].selected=true; }
 if (document.form1.rf_air_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_air_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_air_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_air_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_chaotic_list[0].selected=true; }
 if (document.form1.rf_chaotic_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_chaotic_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_chaotic_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_chaotic_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_earth_list[0].selected=true; }
 if (document.form1.rf_earth_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_earth_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_earth_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_earth_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_evil_list[0].selected=true; }
 if (document.form1.rf_evil_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_evil_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_evil_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_evil_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_fire_list[0].selected=true; }
 if (document.form1.rf_fire_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_fire_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_fire_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_fire_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_good_list[0].selected=true; }
 if (document.form1.rf_good_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_good_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_good_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_good_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_lawful_list[0].selected=true; }
 if (document.form1.rf_lawful_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_lawful_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_lawful_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_lawful_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_native_list[0].selected=true; }
 if (document.form1.rf_native_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_native_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_native_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_native_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_water_list[0].selected=true; }
 if (document.form1.rf_water_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_water_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_water_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_water_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_plant_list[0].selected=true; }
 if (document.form1.rf_plant_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_plant_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_plant_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_plant_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_undead_list[0].selected=true; }
 if (document.form1.rf_undead_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_undead_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_undead_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_undead_list.selectedIndex; 

 if (x==ranger_foe_length){document.form1.rf_vermin_list[0].selected=true; }
 if (document.form1.rf_vermin_list.selectedIndex>0){x++ ; }
 if (document.form1.rf_vermin_list.selectedIndex>ranger_foe_length-1 + x-y)
  {document.form1.rf_vermin_list[ranger_foe_length-1 + x-y].selected=true; }
 y +=document.form1.rf_vermin_list.selectedIndex; 

 if (x!=ranger_foe_length){return false; }
 if (y!=2*ranger_foe_length-1){return false; }
 return true; 
 }

function RangerTerrains(){
 if (ranger_levels<3){return true; }
 ranger_terrain_length=RangerFavoredTerrainCount(); 
 x=0; y=0; 
 if (x==ranger_terrain_length){document.form1.rt_cold_list[0].selected=true; }
 if (document.form1.rt_cold_list.selectedIndex>0){x++ ; }
 if (document.form1.rt_cold_list.selectedIndex>ranger_terrain_length-1 + x-y)
  {document.form1.rt_cold_list[ranger_terrain_length-1 + x-y].selected=true; }
 y +=document.form1.rt_cold_list.selectedIndex; 

 if (x==ranger_terrain_length){document.form1.rt_desert_list[0].selected=true;}
 if (document.form1.rt_desert_list.selectedIndex>0){x++;}
 if (document.form1.rt_desert_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_desert_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_desert_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_forest_list[0].selected=true;}
 if (document.form1.rt_forest_list.selectedIndex>0){x++;}
 if (document.form1.rt_forest_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_forest_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_forest_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_jungle_list[0].selected=true;}
 if (document.form1.rt_jungle_list.selectedIndex>0){x++;}
 if (document.form1.rt_jungle_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_jungle_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_jungle_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_mountain_list[0].selected=true;}
 if (document.form1.rt_mountain_list.selectedIndex>0){x++;}
 if (document.form1.rt_mountain_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_mountain_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_mountain_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_plains_list[0].selected=true;}
 if (document.form1.rt_plains_list.selectedIndex>0){x++;}
 if (document.form1.rt_plains_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_plains_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_plains_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeabyss_list[0].selected=true;}
 if (document.form1.rt_planeabyss_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeabyss_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeabyss_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeabyss_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeair_list[0].selected=true;}
 if (document.form1.rt_planeair_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeair_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeair_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeair_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeaxis_list[0].selected=true;}
 if (document.form1.rt_planeaxis_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeaxis_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeaxis_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeaxis_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeabaddon_list[0].selected=true;}
 if (document.form1.rt_planeabaddon_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeabaddon_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeabaddon_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeabaddon_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeastral_list[0].selected=true;}
 if (document.form1.rt_planeastral_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeastral_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeastral_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeastral_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeearth_list[0].selected=true;}
 if (document.form1.rt_planeearth_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeearth_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeearth_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeearth_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeelysium_list[0].selected=true;}
 if (document.form1.rt_planeelysium_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeelysium_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeelysium_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeelysium_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeethereal_list[0].selected=true;}
 if (document.form1.rt_planeethereal_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeethereal_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeethereal_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeethereal_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planefire_list[0].selected=true;}
 if (document.form1.rt_planefire_list.selectedIndex>0){x++;}
 if (document.form1.rt_planefire_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planefire_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planefire_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeheaven_list[0].selected=true;}
 if (document.form1.rt_planeheaven_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeheaven_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeheaven_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeheaven_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planehell_list[0].selected=true;}
 if (document.form1.rt_planehell_list.selectedIndex>0){x++;}
 if (document.form1.rt_planehell_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planehell_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planehell_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planemaelstrom_list[0].selected=true;}
 if (document.form1.rt_planemaelstrom_list.selectedIndex>0){x++;}
 if (document.form1.rt_planemaelstrom_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planemaelstrom_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planemaelstrom_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planenirvana_list[0].selected=true;}
 if (document.form1.rt_planenirvana_list.selectedIndex>0){x++;}
 if (document.form1.rt_planenirvana_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planenirvana_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planenirvana_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planeshadow_list[0].selected=true;}
 if (document.form1.rt_planeshadow_list.selectedIndex>0){x++;}
 if (document.form1.rt_planeshadow_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planeshadow_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planeshadow_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_planewater_list[0].selected=true;}
 if (document.form1.rt_planewater_list.selectedIndex>0){x++;}
 if (document.form1.rt_planewater_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_planewater_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_planewater_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_underground_list[0].selected=true;}
 if (document.form1.rt_underground_list.selectedIndex>0){x++;}
 if (document.form1.rt_underground_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_underground_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_underground_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_urban_list[0].selected=true;}
 if (document.form1.rt_urban_list.selectedIndex>0){x++;}
 if (document.form1.rt_urban_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_urban_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_urban_list.selectedIndex;

 if (x==ranger_terrain_length){document.form1.rt_water_list[0].selected=true;}
 if (document.form1.rt_water_list.selectedIndex>0){x++;}
 if (document.form1.rt_water_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_water_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_water_list.selectedIndex;


 if (x==ranger_terrain_length){document.form1.rt_other1_list[0].selected=true;}
 if (document.form1.rt_other1_list.selectedIndex>0){x++;}
 if (document.form1.rt_other1_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_other1_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_other1_list.selectedIndex;



 if (x==ranger_terrain_length){document.form1.rt_other2_list[0].selected=true;}
 if (document.form1.rt_other2_list.selectedIndex>0){x++;}
 if (document.form1.rt_other2_list.selectedIndex>ranger_terrain_length-1+x-y)
  {document.form1.rt_other2_list[ranger_terrain_length-1+x-y].selected=true;}
  y+=document.form1.rt_other2_list.selectedIndex;


 if (x!=ranger_terrain_length){return false; }
 if (y!=2*ranger_terrain_length-1){return false; }
 return true; 
 }

function RangerFavoredEnemyCount(){
 if (ranger_levels==0){return 0; }
 return (1 + Math.floor(ranger_levels/5)); 
 }

function RangerFavoredTerrainCount(){
 if (ranger_levels<3){return 0; }
 return (Math.floor((ranger_levels+2)/5)); 
 }

function AdjustRangerFoes(){
 ranger_foe_length=RangerFavoredEnemyCount(); 
 document.form1.rf_aberration_list.length=0; 
 document.form1.rf_animal_list.length=0; 
 document.form1.rf_construct_list.length=0; 
 document.form1.rf_dragon_list.length=0; 
 document.form1.rf_humanoidothersubtype_list.length=0; 
 document.form1.rf_fey_list.length=0; 
 document.form1.rf_giant_list.length=0; 
 document.form1.rf_aquatic_list.length=0; 
 document.form1.rf_dwarf_list.length=0; 
 document.form1.rf_elf_list.length=0; 
 document.form1.rf_goblinoid_list.length=0; 
 document.form1.rf_gnoll_list.length=0; 
 document.form1.rf_gnome_list.length=0; 
 document.form1.rf_halfling_list.length=0; 
 document.form1.rf_human_list.length=0; 
 document.form1.rf_orc_list.length=0; 
 document.form1.rf_reptilian_list.length=0; 
 document.form1.rf_magicalbeast_list.length=0; 
 document.form1.rf_monstroushumanoid_list.length=0; 
 document.form1.rf_ooze_list.length=0; 
 document.form1.rf_air_list.length=0; 
 document.form1.rf_chaotic_list.length=0; 
 document.form1.rf_earth_list.length=0; 
 document.form1.rf_evil_list.length=0; 
 document.form1.rf_fire_list.length=0; 
 document.form1.rf_good_list.length=0; 
 document.form1.rf_lawful_list.length=0; 
 document.form1.rf_native_list.length=0; 
 document.form1.rf_water_list.length=0; 
 document.form1.rf_plant_list.length=0; 
 document.form1.rf_undead_list.length=0; 
 document.form1.rf_vermin_list.length=0; 
 for (x=0; x<=ranger_foe_length; x++ ){
  stringy=" + " + (2*x);  if (x==0){stringy="--"}
  document.form1.rf_aberration_list.options[x]=new Option(stringy); 
  document.form1.rf_animal_list.options[x]=new Option(stringy); 
  document.form1.rf_construct_list.options[x]=new Option(stringy); 
  document.form1.rf_dragon_list.options[x]=new Option(stringy); 
  document.form1.rf_humanoidothersubtype_list.options[x]=new Option(stringy); 
  document.form1.rf_fey_list.options[x]=new Option(stringy); 
  document.form1.rf_giant_list.options[x]=new Option(stringy); 
  document.form1.rf_aquatic_list.options[x]=new Option(stringy); 
  document.form1.rf_dwarf_list.options[x]=new Option(stringy); 
  document.form1.rf_elf_list.options[x]=new Option(stringy); 
  document.form1.rf_goblinoid_list.options[x]=new Option(stringy); 
  document.form1.rf_gnoll_list.options[x]=new Option(stringy); 
  document.form1.rf_gnome_list.options[x]=new Option(stringy); 
  document.form1.rf_halfling_list.options[x]=new Option(stringy); 
  document.form1.rf_human_list.options[x]=new Option(stringy); 
  document.form1.rf_orc_list.options[x]=new Option(stringy); 
  document.form1.rf_reptilian_list.options[x]=new Option(stringy); 
  document.form1.rf_magicalbeast_list.options[x]=new Option(stringy); 
  document.form1.rf_monstroushumanoid_list.options[x]=new Option(stringy); 
  document.form1.rf_ooze_list.options[x]=new Option(stringy); 
  document.form1.rf_air_list.options[x]=new Option(stringy); 
  document.form1.rf_chaotic_list.options[x]=new Option(stringy); 
  document.form1.rf_earth_list.options[x]=new Option(stringy); 
  document.form1.rf_evil_list.options[x]=new Option(stringy); 
  document.form1.rf_fire_list.options[x]=new Option(stringy); 
  document.form1.rf_good_list.options[x]=new Option(stringy); 
  document.form1.rf_lawful_list.options[x]=new Option(stringy); 
  document.form1.rf_native_list.options[x]=new Option(stringy); 
  document.form1.rf_water_list.options[x]=new Option(stringy); 
  document.form1.rf_plant_list.options[x]=new Option(stringy); 
  document.form1.rf_undead_list.options[x]=new Option(stringy); 
  document.form1.rf_vermin_list.options[x]=new Option(stringy); 
  }
  document.form1.rf_aberration_list[0].selected=true; 
  document.form1.rf_animal_list[0].selected=true; 
  document.form1.rf_construct_list[0].selected=true; 
  document.form1.rf_dragon_list[0].selected=true; 
  document.form1.rf_humanoidothersubtype_list[0].selected=true; 
  document.form1.rf_fey_list[0].selected=true; 
  document.form1.rf_giant_list[0].selected=true; 
  document.form1.rf_aquatic_list[0].selected=true; 
  document.form1.rf_dwarf_list[0].selected=true; 
  document.form1.rf_elf_list[0].selected=true; 
  document.form1.rf_goblinoid_list[0].selected=true; 
  document.form1.rf_gnoll_list[0].selected=true; 
  document.form1.rf_gnome_list[0].selected=true; 
  document.form1.rf_halfling_list[0].selected=true; 
  document.form1.rf_human_list[0].selected=true; 
  document.form1.rf_orc_list[0].selected=true; 
  document.form1.rf_reptilian_list[0].selected=true; 
  document.form1.rf_magicalbeast_list[0].selected=true; 
  document.form1.rf_monstroushumanoid_list[0].selected=true; 
  document.form1.rf_ooze_list[0].selected=true; 
  document.form1.rf_air_list[0].selected=true; 
  document.form1.rf_chaotic_list[0].selected=true; 
  document.form1.rf_earth_list[0].selected=true; 
  document.form1.rf_evil_list[0].selected=true; 
  document.form1.rf_fire_list[0].selected=true; 
  document.form1.rf_good_list[0].selected=true; 
  document.form1.rf_lawful_list[0].selected=true; 
  document.form1.rf_native_list[0].selected=true; 
  document.form1.rf_water_list[0].selected=true; 
  document.form1.rf_plant_list[0].selected=true; 
  document.form1.rf_undead_list[0].selected=true; 
  document.form1.rf_vermin_list[0].selected=true; 
 }

function AdjustRangerTerrains(){
 ranger_terrain_length=RangerFavoredTerrainCount(); 
 document.form1.rt_cold_list.length=0; 
 document.form1.rt_desert_list.length=0;
 document.form1.rt_forest_list.length=0;
 document.form1.rt_jungle_list.length=0;
 document.form1.rt_mountain_list.length=0;
 document.form1.rt_plains_list.length=0;
 document.form1.rt_planeabyss_list.length=0;
 document.form1.rt_planeair_list.length=0;
 document.form1.rt_planeaxis_list.length=0;
 document.form1.rt_planeabaddon_list.length=0;
 document.form1.rt_planeastral_list.length=0;
 document.form1.rt_planeearth_list.length=0;
 document.form1.rt_planeelysium_list.length=0;
 document.form1.rt_planeethereal_list.length=0;
 document.form1.rt_planefire_list.length=0;
 document.form1.rt_planeheaven_list.length=0;
 document.form1.rt_planehell_list.length=0;
 document.form1.rt_planemaelstrom_list.length=0;
 document.form1.rt_planenirvana_list.length=0;
 document.form1.rt_planeshadow_list.length=0;
 document.form1.rt_planewater_list.length=0;
 document.form1.rt_swamp_list.length=0;
 document.form1.rt_other1_list.length=0;
 document.form1.rt_other2_list.length=0;
 document.form1.rt_underground_list.length=0;
 document.form1.rt_urban_list.length=0;
 document.form1.rt_water_list.length=0;

 for (x=0; x<=ranger_terrain_length; x++ ){
  stringy=" + " + (2*x);  if (x==0){stringy="--"}
  document.form1.rt_cold_list.options[x]=new Option(stringy); 
 document.form1.rt_desert_list.options[x]=new Option(stringy);
 document.form1.rt_forest_list.options[x]=new Option(stringy);
 document.form1.rt_jungle_list.options[x]=new Option(stringy);
 document.form1.rt_mountain_list.options[x]=new Option(stringy);
 document.form1.rt_plains_list.options[x]=new Option(stringy);
 document.form1.rt_planeabyss_list.options[x]=new Option(stringy);
 document.form1.rt_planeair_list.options[x]=new Option(stringy);
 document.form1.rt_planeaxis_list.options[x]=new Option(stringy);
 document.form1.rt_planeabaddon_list.options[x]=new Option(stringy);
 document.form1.rt_planeastral_list.options[x]=new Option(stringy);
 document.form1.rt_planeearth_list.options[x]=new Option(stringy);
 document.form1.rt_planeelysium_list.options[x]=new Option(stringy);
 document.form1.rt_planeethereal_list.options[x]=new Option(stringy);
 document.form1.rt_planefire_list.options[x]=new Option(stringy);
 document.form1.rt_planeheaven_list.options[x]=new Option(stringy);
 document.form1.rt_planehell_list.options[x]=new Option(stringy);
 document.form1.rt_planemaelstrom_list.options[x]=new Option(stringy);
 document.form1.rt_planenirvana_list.options[x]=new Option(stringy);
 document.form1.rt_planeshadow_list.options[x]=new Option(stringy);
 document.form1.rt_planewater_list.options[x]=new Option(stringy);
 document.form1.rt_swamp_list.options[x]=new Option(stringy);
 document.form1.rt_other1_list.options[x]=new Option(stringy);
 document.form1.rt_other2_list.options[x]=new Option(stringy);
 document.form1.rt_underground_list.options[x]=new Option(stringy);
 document.form1.rt_urban_list.options[x]=new Option(stringy);
 document.form1.rt_water_list.options[x]=new Option(stringy);
  }
  document.form1.rt_cold_list[0].selected=true; 
 document.form1.rt_desert_list[0].selected=true;
 document.form1.rt_forest_list[0].selected=true;
 document.form1.rt_jungle_list[0].selected=true;
 document.form1.rt_mountain_list[0].selected=true;
 document.form1.rt_plains_list[0].selected=true;
 document.form1.rt_planeabyss_list[0].selected=true;
 document.form1.rt_planeair_list[0].selected=true;
 document.form1.rt_planeaxis_list[0].selected=true;
 document.form1.rt_planeabaddon_list[0].selected=true;
 document.form1.rt_planeastral_list[0].selected=true;
 document.form1.rt_planeearth_list[0].selected=true;
 document.form1.rt_planeelysium_list[0].selected=true;
 document.form1.rt_planeethereal_list[0].selected=true;
 document.form1.rt_planefire_list[0].selected=true;
 document.form1.rt_planeheaven_list[0].selected=true;
 document.form1.rt_planehell_list[0].selected=true;
 document.form1.rt_planemaelstrom_list[0].selected=true;
 document.form1.rt_planenirvana_list[0].selected=true;
 document.form1.rt_planeshadow_list[0].selected=true;
 document.form1.rt_planewater_list[0].selected=true;
 document.form1.rt_swamp_list[0].selected=true;
 document.form1.rt_other1_list[0].selected=true;
 document.form1.rt_other2_list[0].selected=true;
 document.form1.rt_underground_list[0].selected=true;
 document.form1.rt_urban_list[0].selected=true;
 document.form1.rt_water_list[0].selected=true;

 }

function DoYourFeatEntitlements(){
   fighterfeatentitlement=0; 
   if (fighter_levels>0){fighterfeatentitlement++ ; }
   if (fighter_levels>1){fighterfeatentitlement++ ; }
   if (fighter_levels>3){fighterfeatentitlement++ ; }
   if (fighter_levels>5){fighterfeatentitlement++ ; }
   if (fighter_levels>7){fighterfeatentitlement++ ; }
   if (fighter_levels>9){fighterfeatentitlement++ ; }
   if (fighter_levels>11){fighterfeatentitlement++ ; }
   if (fighter_levels>13){fighterfeatentitlement++ ; }
   if (fighter_levels>15){fighterfeatentitlement++ ; }
   if (fighter_levels>17){fighterfeatentitlement++ ; }
   if (fighter_levels>19){fighterfeatentitlement++ ; }

   halfelffeatentitlement=0; if (rayce==2){halfelffeatentitlement=1;}

   r1featentitlement=0;
   if (rangercombattrack==1)
    {
     if (ranger_levels>=2){r1featentitlement++;}
     if (ranger_levels>=6){r1featentitlement++;}
     if (ranger_levels>=10){r1featentitlement++;}
     if (ranger_levels>=14){r1featentitlement++;}
     if (ranger_levels>=18){r1featentitlement++;}
    }

   r2featentitlement=0;
   if (rangercombattrack==2)
    {
     if (ranger_levels>=2){r2featentitlement++;}
     if (ranger_levels>=6){r2featentitlement++;}
     if (ranger_levels>=10){r2featentitlement++;}
     if (ranger_levels>=14){r2featentitlement++;}
     if (ranger_levels>=18){r2featentitlement++;}
    }

   sorcererfeatentitlement=0;
   if (sorcerer_levels>=7){sorcererfeatentitlement++;}
   if (sorcerer_levels>=13){sorcererfeatentitlement++;}
   if (sorcerer_levels>=20){sorcererfeatentitlement++;}

   wizardfeatentitlement=0; 
   if (wizard_levels>4){wizardfeatentitlement++ ; }
   if (wizard_levels>9){wizardfeatentitlement++ ; }
   if (wizard_levels>14){wizardfeatentitlement++ ; }
   if (wizard_levels>19){wizardfeatentitlement++ ; }


   monkfeatentitlement=0;
   if (monk_levels>=1){monkfeatentitlement++;}
   if (monk_levels>=2){monkfeatentitlement++;}
   if (monk_levels>=6){monkfeatentitlement++;}
   if (monk_levels>=10){monkfeatentitlement++;}
   if (monk_levels>=14){monkfeatentitlement++;}
   if (monk_levels>=18){monkfeatentitlement++;}

   genericfeatentitlement=1;
   genericfeatentitlement+=prestige_bonus_feat_entitlement; //qqq

   if (total_levels>2){genericfeatentitlement++ ; }
   if (total_levels>4){genericfeatentitlement++ ; }
   if (total_levels>6){genericfeatentitlement++ ; }
   if (total_levels>8){genericfeatentitlement++ ; }
   if (total_levels>10){genericfeatentitlement++ ; }
   if (total_levels>12){genericfeatentitlement++ ; }
   if (total_levels>14){genericfeatentitlement++ ; }
   if (total_levels>16){genericfeatentitlement++ ; }
   if (total_levels>18){genericfeatentitlement++ ; }
   if (rayce==1){genericfeatentitlement++ ; }


 }




function LookForPrestigeClassName(){
 prestige_class_name=document.form1.prestige_name.value;  GenerateClassString(); 
 }

function ArrowShow(){
 if ((stat1==0)||(my_character_is_done==true))
  {document.form1.rollthedicearrow.src="dragonarrowleft.gif"; }
  else if ((AbilitiesHaveBeenEstablished==false))
   {document.form1.rollthedicearrow.src="dragongrayleft.gif"; }
    else {document.form1.rollthedicearrow.src="dragonblank.gif"; }

 if ((stat1==0)||(stat2==0)||(stat3==0)||(stat4==0)||(stat5==0)||(stat6==0)||(my_character_is_done==true))
  {
   if (strength==0)
    {
     if (AbilitiesAreProperlyAssigned==true){document.form1.changemhere.src="adjustyourscoresgray.gif"; }
     else {document.form1.changemhere.src="adjustyourscoreshere.gif"; }
    }
   else {document.form1.changemhere.src="startoverred.gif"; }
  }
  else if ((AbilitiesHaveBeenEstablished==false))
   {document.form1.changemhere.src="adjustyourscoresgray.gif"; }
    else {document.form1.changemhere.src="startoverblack.gif"; }



 if ((stat1>0)&&(AbilitiesHaveBeenEstablished==false)
     &&(document.form1.firststat[0].checked==false)
     &&(document.form1.firststat[1].checked==false)
     &&(document.form1.firststat[2].checked==false)
     &&(document.form1.firststat[3].checked==false)
     &&(document.form1.firststat[4].checked==false)
     &&(document.form1.firststat[5].checked==false)
     )
  {document.form1.stat1arrow.src="dragonarrowright.gif"; }
  else if ((stat1>0)&&(AbilitiesHaveBeenEstablished==false))
   {document.form1.stat1arrow.src="dragongrayright.gif"; }
    else {document.form1.stat1arrow.src="dragonblank.gif"; }

 if ((stat2>0)&&(AbilitiesHaveBeenEstablished==false)
     &&(document.form1.secondstat[0].checked==false)
     &&(document.form1.secondstat[1].checked==false)
     &&(document.form1.secondstat[2].checked==false)
     &&(document.form1.secondstat[3].checked==false)
     &&(document.form1.secondstat[4].checked==false)
     &&(document.form1.secondstat[5].checked==false)
     )
  {document.form1.stat2arrow.src="dragonarrowright.gif"; }
  else if ((stat2>0)&&(AbilitiesHaveBeenEstablished==false))
   {document.form1.stat2arrow.src="dragongrayright.gif"; }
    else {document.form1.stat2arrow.src="dragonblank.gif"; }

 if ((stat3>0)&&(AbilitiesHaveBeenEstablished==false)
     &&(document.form1.thirdstat[0].checked==false)
     &&(document.form1.thirdstat[1].checked==false)
     &&(document.form1.thirdstat[2].checked==false)
     &&(document.form1.thirdstat[3].checked==false)
     &&(document.form1.thirdstat[4].checked==false)
     &&(document.form1.thirdstat[5].checked==false)
     )
  {document.form1.stat3arrow.src="dragonarrowright.gif"; }
  else if ((stat3>0)&&(AbilitiesHaveBeenEstablished==false))
   {document.form1.stat3arrow.src="dragongrayright.gif"; }
    else {document.form1.stat3arrow.src="dragonblank.gif"; }

 if ((stat4>0)&&(AbilitiesHaveBeenEstablished==false)
     &&(document.form1.fourthstat[0].checked==false)
     &&(document.form1.fourthstat[1].checked==false)
     &&(document.form1.fourthstat[2].checked==false)
     &&(document.form1.fourthstat[3].checked==false)
     &&(document.form1.fourthstat[4].checked==false)
     &&(document.form1.fourthstat[5].checked==false)
     )
  {document.form1.stat4arrow.src="dragonarrowright.gif"; }
  else if ((stat4>0)&&(AbilitiesHaveBeenEstablished==false))
   {document.form1.stat4arrow.src="dragongrayright.gif"; }
    else {document.form1.stat4arrow.src="dragonblank.gif"; }

 if ((stat5>0)&&(AbilitiesHaveBeenEstablished==false)
     &&(document.form1.fifthstat[0].checked==false)
     &&(document.form1.fifthstat[1].checked==false)
     &&(document.form1.fifthstat[2].checked==false)
     &&(document.form1.fifthstat[3].checked==false)
     &&(document.form1.fifthstat[4].checked==false)
     &&(document.form1.fifthstat[5].checked==false)
     )
  {document.form1.stat5arrow.src="dragonarrowright.gif"; }
  else if ((stat5>0)&&(AbilitiesHaveBeenEstablished==false))
   {document.form1.stat5arrow.src="dragongrayright.gif"; }
    else {document.form1.stat5arrow.src="dragonblank.gif"; }

 if ((stat6>0)&&(AbilitiesHaveBeenEstablished==false)
     &&(document.form1.sixthstat[0].checked==false)
     &&(document.form1.sixthstat[1].checked==false)
     &&(document.form1.sixthstat[2].checked==false)
     &&(document.form1.sixthstat[3].checked==false)
     &&(document.form1.sixthstat[4].checked==false)
     &&(document.form1.sixthstat[5].checked==false)
     )
  {document.form1.stat6arrow.src="dragonarrowright.gif"; }
  else if ((stat6>0)&&(AbilitiesHaveBeenEstablished==false))
   {document.form1.stat6arrow.src="dragongrayright.gif"; }
    else {document.form1.stat6arrow.src="dragonblank.gif"; }

 if ((AbilitiesAreProperlyAssigned==true)&&(AbilitiesHaveBeenEstablished==false))
  {document.form1.acceptscoresarrow.src="dragonarrowleft.gif"; }
    else {document.form1.acceptscoresarrow.src="dragonblank.gif"; }


 if ((CharacterTypeHasBeenEstablished==false)&&(AbilitiesHaveBeenEstablished==true))
   {
   if (rayce==0){document.form1.racearrow.src="dragonarrowright.gif"; }
   else {document.form1.racearrow.src="dragongrayright.gif"; }
   }
    else {document.form1.racearrow.src="dragonblank.gif"; }

 if ((CharacterTypeHasBeenEstablished==false)&&(AbilitiesHaveBeenEstablished==true))
   {
   if (gender==0){document.form1.genderarrow.src="dragonarrowright.gif"; }
   else {document.form1.genderarrow.src="dragongrayright.gif"; }
   }
    else {document.form1.genderarrow.src="dragonblank.gif"; }

 if ((CharacterTypeHasBeenEstablished==false)&&(AbilitiesHaveBeenEstablished==true))
   {
   if (alignment==0){document.form1.alignmentarrow.src="dragonarrowright.gif"; }
   else {document.form1.alignmentarrow.src="dragongrayright.gif"; }
   }
    else {document.form1.alignmentarrow.src="dragonblank.gif"; }

 if ((CharacterTypeHasBeenEstablished==false)&&(AbilitiesHaveBeenEstablished==true))
   {
   if (total_levels==0){document.form1.totallevelsarrow.src="dragonarrowright.gif"; }
   else {document.form1.totallevelsarrow.src="dragongrayright.gif"; }
   }
    else {document.form1.totallevelsarrow.src="dragonblank.gif"; }


 if ((CharacterTypeHasBeenEstablished==false)&&(rayce>0)&&(gender>0)&&(alignment>0)&&(total_levels>0))
  {document.form1.acceptthispersonarrow.src="dragonarrowleft.gif"; }
    else {document.form1.acceptthispersonarrow.src="dragonblank.gif"; }

 if ((ClassesHaveBeenEstablished==false)&&(CharacterTypeHasBeenEstablished==true))
  {
   if (class01==0){document.form1.classesarrow.src="dragonarrowleft.gif"; }
   else {document.form1.classesarrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.classesarrow.src="dragonblank.gif"; }


 if ((ClassesHaveBeenEstablished==false)&&(class01!=0))
  {document.form1.acceptclassesarrow.src="dragonarrowleft.gif"; }
    else {document.form1.acceptclassesarrow.src="dragonblank.gif"; }
//zzzzzzzzzzzzzzzzz
 if (((rayce==1)|(rayce==2)|(rayce==7)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32))&&(ClassesHaveBeenEstablished==true)&&(AbilityIncreasesAreLocked==false))
  {
   if (upitat00==0){document.form1.up00arrow.src="dragonarrowleft.gif"; }
   else {document.form1.up00arrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.up00arrow.src="dragonblank.gif"; }

 if ((total_levels>=4)&&(ClassesHaveBeenEstablished==true)&&(AbilityIncreasesAreLocked==false))
  {
   if (upitat04==0){document.form1.up04arrow.src="dragonarrowleft.gif"; }
   else {document.form1.up04arrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.up04arrow.src="dragonblank.gif"; }

 if ((total_levels>=8)&&(ClassesHaveBeenEstablished==true)&&(AbilityIncreasesAreLocked==false))
  {
   if (upitat08==0){document.form1.up08arrow.src="dragonarrowleft.gif"; }
   else {document.form1.up08arrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.up08arrow.src="dragonblank.gif"; }

 if ((total_levels>=12)&&(ClassesHaveBeenEstablished==true)&&(AbilityIncreasesAreLocked==false))
  {
   if (upitat12==0){document.form1.up12arrow.src="dragonarrowleft.gif"; }
   else {document.form1.up12arrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.up12arrow.src="dragonblank.gif"; }

 if ((total_levels>=16)&&(ClassesHaveBeenEstablished==true)&&(AbilityIncreasesAreLocked==false))
  {
   if (upitat16==0){document.form1.up16arrow.src="dragonarrowleft.gif"; }
   else {document.form1.up16arrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.up16arrow.src="dragonblank.gif"; }

 if ((total_levels>=20)&&(ClassesHaveBeenEstablished==true)&&(AbilityIncreasesAreLocked==false))
  {
   if (upitat20==0){document.form1.up20arrow.src="dragonarrowleft.gif"; }
   else {document.form1.up20arrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.up20arrow.src="dragonblank.gif"; }




 if (ClassesHaveBeenEstablished==true)  {
   document.form1.favored_arrow.src="dragongrayleft.gif"}
  
    else {document.form1.favored_arrow.src="dragonblank.gif"; }

 if ((sorcerer_levels>0)&(FighterFeatsEtcFrozen==false)&(ClassesHaveBeenEstablished==true))
  {if (BloodlineCount()==false){document.form1.bloodlinearrow.src="dragonarrowleft.gif";}
    else {document.form1.bloodlinearrow.src="dragongrayleft.gif";}}
  else {document.form1.bloodlinearrow.src="dragonblank.gif";}


 if (
    (cleric_levels>0)
    &&
    (FighterFeatsEtcFrozen==false)
    &&
    (ClassesHaveBeenEstablished==true)
    )
  {
   if (DomainCount()!=2)
    {document.form1.domainarrow.src="dragonarrowleft.gif"; }
   else
    {document.form1.domainarrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.domainarrow.src="dragonblank.gif"; }

 if ((cleric_levels>0)&&(FighterFeatsEtcFrozen==false)&&(ClassesHaveBeenEstablished==true)&(alignment>3)&(alignment<6))
  {
   if ((document.form1.choose_energy[0].checked==false)&&(document.form1.choose_energy[1].checked==false)){document.form1.energyarrow.src="dragonarrowleft.gif"; }
   else {document.form1.energyarrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.energyarrow.src="dragonblank.gif"; }


 if ((wizard_levels>0)&&(FighterFeatsEtcFrozen==false)&&(ClassesHaveBeenEstablished==true))
  {document.form1.wizardspecialtyarrow.src="dragongrayright.gif"; }
    else {document.form1.wizardspecialtyarrow.src="dragonblank.gif"; }



 if ((wizard_levels>0)&&(FighterFeatsEtcFrozen==false)&&(ClassesHaveBeenEstablished==true))
  {
   if (WizardSpecialty()==false){document.form1.wizardgiveuparrow.src="dragonarrowright.gif"; }
   else if (no_specialist==true){document.form1.wizardgiveuparrow.src="dragonblank.gif"; }
   else {document.form1.wizardgiveuparrow.src="dragongrayright.gif"; }
  }
    else {document.form1.wizardgiveuparrow.src="dragonblank.gif"; }




 if ((ranger_levels>0)&&(FighterFeatsEtcFrozen==false)&&(ClassesHaveBeenEstablished==true))
  {
    if ((document.form1.ranger_combat_track[0].checked==false)&&(document.form1.ranger_combat_track[1].checked==false))
      {document.form1.rangerarrow.src="dragonarrowleft.gif"; }
    else {document.form1.rangerarrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.rangerarrow.src="dragonblank.gif"; }

      
 if ((ranger_levels>0)&&(FighterFeatsEtcFrozen==false)&&(ClassesHaveBeenEstablished==true))
  {
    if (RangerFoes()==false)
      {document.form1.favoredenemiesarrow.src="dragonarrowleft.gif";  }
    else {document.form1.favoredenemiesarrow.src="dragongrayleft.gif";  }
  }
    else {document.form1.favoredenemiesarrow.src="dragonblank.gif";  }


 if ((ranger_levels>=3)&&(FighterFeatsEtcFrozen==false)&&(ClassesHaveBeenEstablished==true))
  {
    if (RangerTerrains()==false)
      {document.form1.favoredterrainsarrow.src="dragonarrowleft.gif";  }
    else {document.form1.favoredterrainsarrow.src="dragongrayleft.gif";  }
  }
    else {document.form1.favoredterrainsarrow.src="dragonblank.gif";  }


 if (((wizard_levels)|(document.form1.choose_bloodline[2].checked==true))&&(FighterFeatsEtcFrozen==false)&&(ClassesHaveBeenEstablished==true))
   {document.form1.familiararrow.src="dragongrayright.gif"; }
    else {document.form1.familiararrow.src="dragonblank.gif"; }


 if ((druid_levels>0)&&(FighterFeatsEtcFrozen==false)&&(ClassesHaveBeenEstablished==true))
   {document.form1.druidchoicearrow.src="dragongrayright.gif"; }
    else {document.form1.druidchoicearrow.src="dragonblank.gif"; }


 if ((prestige_levels>0)&&(FighterFeatsEtcFrozen==false)&&(ClassesHaveBeenEstablished==true))
  {
   if (PrestigeClass()==false){document.form1.prestigearrow.src="dragonarrowleft.gif"; }
   else {document.form1.prestigearrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.prestigearrow.src="dragonblank.gif"; }



 if ((FighterFeatsEtcFrozen==false)
    &&(AbilitiesWellIncreased()==true)

   
    &&(ClassesHaveBeenEstablished==true)
    &&((ranger_levels<=1)||(document.form1.ranger_combat_track[0].checked==true)
       ||(document.form1.ranger_combat_track[1].checked==true))
    &&((cleric_levels==0)||(Domains()==true))
    &&((sorcerer_levels==0)||(BloodlineCount()))
    &&(ClassesHaveBeenEstablished==true)
    &&((cleric_levels==0)||(document.form1.choose_energy[0].checked==true)
         ||(document.form1.choose_energy[1].checked==true))
    &&((prestige_levels==0)||(PrestigeClass()==true))

    &&((wizard_levels==0)||(WizardSpecialty()==true))

    )
  {document.form1.moveonarrow.src="dragonarrowleft.gif"; }
    else {document.form1.moveonarrow.src="dragonblank.gif"; }


 if ((FighterFeatsEtcFrozen==true)&&(SkillPointsAreLocked==false))
  {
    if (skill_points_spent!=total_skill_points){document.form1.skillsarrow.src="dragonarrowleft.gif"; }
    else {document.form1.skillsarrow.src="dragongrayleft.gif"; }
  }
    else {document.form1.skillsarrow.src="dragonblank.gif"; }

 if ((FighterFeatsEtcFrozen==true)&&(SkillPointsAreLocked==false)&&(skill_points_spent==total_skill_points))
 {document.form1.acceptskillsarrow.src="dragonarrowleft.gif"; }
    else {document.form1.acceptskillsarrow.src="dragonblank.gif"; }



 if ((SkillPointsAreLocked==false)||(FeatsAreLocked==true))
     {
      document.form1.featsarrow.src="dragonblank.gif"; 
      document.form1.acceptfeatsarrow.src="dragonblank.gif"; 
     }



 if ((FeatsAreLocked==true))
  {document.form1.doitarrow.src="dragonarrowright.gif"; }
    else {document.form1.doitarrow.src="dragonblank.gif"; }

 }

function slottage(i){
 if (i==1){return "slot"; }
 return "slots"; 
 }

function ThisTakesAMoment(){
 if (CharacterTypeHasBeenEstablished==true){return; }
 if (AbilitiesHaveBeenEstablished==false){return; }
 if (rayce==0){return; }
 if (alignment==0){return;}
 if (gender==0){return; }
 if (total_levels==0){return; }
 document.form1.second_comment_box.value="Ready to accept.  This takes just a moment."
 }





function InitializeIntelligences(){
//alert("initializing intelligences");
     intelligence01=intelligence; 
     intelligence04=intelligence; 
     intelligence08=intelligence; 
     intelligence12=intelligence; 
     intelligence16=intelligence; 
     intelligence20=intelligence; 
 }


function EmptyPrestigeClassOptions(){
 document.form1.prestige_hit_dice[0].checked=true;
 document.form1.prestige_attack_progress[0].checked=true;
 document.form1.prestige_fortitude_progress[0].checked=true;
 document.form1.prestige_reflex_progress[0].checked=true;
 document.form1.prestige_will_progress[0].checked=true; 
 document.form1.prestige_skill_progress[0].checked=true; 
 document.form1.prestige_bonus_feats[0].checked=true;  //qqq
 document.form1.prestige_arcanespell_type[0].checked=true; //qqq
 document.form1.prestige_divinespell_type[0].checked=true;  //qqq
 document.form1.count_prestige_spell_levels[0].checked=true;

 document.form1.prestige_hit_dice[0].checked=false;
 document.form1.prestige_attack_progress[0].checked=false;
 document.form1.prestige_fortitude_progress[0].checked=false;
 document.form1.prestige_reflex_progress[0].checked=false;
 document.form1.prestige_will_progress[0].checked=false; 
 document.form1.prestige_skill_progress[0].checked=false; 
 document.form1.prestige_arcanespell_type[0].checked=false;  //qqq
 document.form1.prestige_divinespell_type[0].checked=false;  //qqq
 document.form1.count_prestige_spell_levels[0].checked=false;

 }

function RememberPrestigeClassOptions(){
 EmptyPrestigeClassOptions()
 document.form1.prestige_name.value=prestige_class_name; 
 if (prestige_hit_point_dice==4){document.form1.prestige_hit_dice[0].checked=true; }
 if (prestige_hit_point_dice==6){document.form1.prestige_hit_dice[1].checked=true; }
 if (prestige_hit_point_dice==8){document.form1.prestige_hit_dice[2].checked=true; }
 if (prestige_hit_point_dice==10){document.form1.prestige_hit_dice[3].checked=true; }
 if (prestige_hit_point_dice==12){document.form1.prestige_hit_dice[4].checked=true; }
 if (prestige_attack_bonus_progress==1){document.form1.prestige_attack_progress[0].checked=true; }
 if (prestige_attack_bonus_progress==2){document.form1.prestige_attack_progress[1].checked=true; }
 if (prestige_attack_bonus_progress==3){document.form1.prestige_attack_progress[2].checked=true; }
 if (prestige_fortitude_save_bonus==1){document.form1.prestige_fortitude_progress[0].checked=true; }
 if (prestige_fortitude_save_bonus==2){document.form1.prestige_fortitude_progress[1].checked=true; }
 if (prestige_reflex_save_bonus==1){document.form1.prestige_reflex_progress[0].checked=true; }
 if (prestige_reflex_save_bonus==2){document.form1.prestige_reflex_progress[1].checked=true; }
 if (prestige_will_save_bonus==1){document.form1.prestige_will_progress[0].checked=true; }
 if (prestige_will_save_bonus==2){document.form1.prestige_will_progress[1].checked=true; }
 if (prestige_skill_points_per_level==2){document.form1.prestige_skill_progress[0].checked=true; }
 if (prestige_skill_points_per_level==4){document.form1.prestige_skill_progress[1].checked=true; }
 if (prestige_skill_points_per_level==6){document.form1.prestige_skill_progress[2].checked=true; }
 if (prestige_skill_points_per_level==8){document.form1.prestige_skill_progress[3].checked=true; }
 document.form1.prestige_bonus_feats[prestige_bonus_feat_entitlement].checked=true;  //qqq
 if (prestige_bard_spell_levels>0){document.form1.prestige_arcanespell_type[1].checked=true; }  //qqq
 if (prestige_cleric_spell_levels>0){document.form1.prestige_divinespell_type[1].checked=true; } //qqq
 if (prestige_druid_spell_levels>0){document.form1.prestige_divinespell_type[2].checked=true; } //qqq
 if (prestige_paladin_spell_levels>0){document.form1.prestige_divinespell_type[3].checked=true; } //qqq
 if (prestige_ranger_spell_levels>0){document.form1.prestige_divinespell_type[4].checked=true; } //qqq
 if (prestige_sorcerer_spell_levels>0){document.form1.prestige_arcanespell_type[2].checked=true; } //qqq
 if (prestige_wizard_spell_levels>0){document.form1.prestige_arcanespell_type[3].checked=true; } //qqq
 document.form1.count_prestige_spell_levels[prestige_any_spell_levels].checked=true; 


 }

function PrestigeClass(){

if (FighterFeatsEtcFrozen==true)
  {RememberPrestigeClassOptions();  return true; }


 if (prestige_levels==0){RememberPrestigeClassOptions();  return true; }
 prestige_any_spell_levels=0; 
 prestige_bard_spell_levels=0; 
 prestige_cleric_spell_levels=0; 
 prestige_druid_spell_levels=0; 
 prestige_paladin_spell_levels=0; 
 prestige_ranger_spell_levels=0; 
 prestige_sorcerer_spell_levels=0; 
 prestige_wizard_spell_levels=0; 
 if (document.form1.prestige_name.value==""){document.form1.prestige_name.value="Prestige Class"; }
 prestige_class_name=document.form1.prestige_name.value; 
 prestige_hit_point_dice=0; 
 if (document.form1.prestige_hit_dice[0].checked==true){prestige_hit_point_dice=4; }
 if (document.form1.prestige_hit_dice[1].checked==true){prestige_hit_point_dice=6; }
 if (document.form1.prestige_hit_dice[2].checked==true){prestige_hit_point_dice=8; }
 if (document.form1.prestige_hit_dice[3].checked==true){prestige_hit_point_dice=10; }
 if (document.form1.prestige_hit_dice[4].checked==true){prestige_hit_point_dice=12; }
 if (prestige_hit_point_dice==0){document.form1.fourth_comment_box.value="Hit point dice for the prestige class?";  return false; }
 prestige_attack_bonus_progress=0; 
 if (document.form1.prestige_attack_progress[0].checked==true){prestige_attack_bonus_progress=1; }
 if (document.form1.prestige_attack_progress[1].checked==true){prestige_attack_bonus_progress=2; }
 if (document.form1.prestige_attack_progress[2].checked==true){prestige_attack_bonus_progress=3; }
 if (prestige_attack_bonus_progress==0){document.form1.fourth_comment_box.value="Attack bonus progress for the prestige class?";  return false; }
 prestige_fortitude_save_bonus=0; 
 if (document.form1.prestige_fortitude_progress[0].checked==true){prestige_fortitude_save_bonus=1; }
 if (document.form1.prestige_fortitude_progress[1].checked==true){prestige_fortitude_save_bonus=2; }
 if (prestige_fortitude_save_bonus==0){document.form1.fourth_comment_box.value="Fortitude save progress for the prestige class?";  return false; }
 prestige_reflex_save_bonus=0; 
 if (document.form1.prestige_reflex_progress[0].checked==true){prestige_reflex_save_bonus=1; }
 if (document.form1.prestige_reflex_progress[1].checked==true){prestige_reflex_save_bonus=2; }
 if (prestige_reflex_save_bonus==0){document.form1.fourth_comment_box.value="Reflex save progress for the prestige class?";  return false; }
 prestige_will_save_bonus=0; 
 if (document.form1.prestige_will_progress[0].checked==true){prestige_will_save_bonus=1; }
 if (document.form1.prestige_will_progress[1].checked==true){prestige_will_save_bonus=2; }
 if (prestige_will_save_bonus==0){document.form1.fourth_comment_box.value="Will save progress for the prestige class?";  return false; }
 prestige_skill_points_per_level=0;  
 if (document.form1.prestige_skill_progress[0].checked==true){prestige_skill_points_per_level=2; }
 if (document.form1.prestige_skill_progress[1].checked==true){prestige_skill_points_per_level=4; }
 if (document.form1.prestige_skill_progress[2].checked==true){prestige_skill_points_per_level=6; }
 if (document.form1.prestige_skill_progress[3].checked==true){prestige_skill_points_per_level=8; }
 if (prestige_skill_points_per_level==0){document.form1.fourth_comment_box.value="Skill points/level for the prestige class?";  return false; }
 prestige_bonus_feat_entitlement=0;  //qqq
 if (document.form1.prestige_bonus_feats[0].checked==true){prestige_bonus_feat_entitlement=0; } //qqq
 if (document.form1.prestige_bonus_feats[1].checked==true){prestige_bonus_feat_entitlement=1; } //qqq
 if (document.form1.prestige_bonus_feats[2].checked==true){prestige_bonus_feat_entitlement=2; } //qqq
 if (document.form1.prestige_bonus_feats[3].checked==true){prestige_bonus_feat_entitlement=3; } //qqq
 if ((document.form1.prestige_arcanespell_type[0].checked==true) //qqq
  & (document.form1.prestige_divinespell_type[0].checked==true)) //qqq
  {document.form1.count_prestige_spell_levels[0].checked=true; }
 prestige_any_spell_levels=0; 
 z=0; while (z<16){if (document.form1.count_prestige_spell_levels[z].checked==true){prestige_any_spell_levels=z; }z++ ; }
 if (prestige_any_spell_levels==0){document.form1.count_prestige_spell_levels[0].checked=true; }

  //qqq follows
  if (prestige_any_spell_levels==0){document.form1.count_prestige_spell_levels[0].checked=true; }
 if (document.form1.prestige_arcanespell_type[1].checked==true)
  {
   if (bard_levels==0)
     {document.form1.fourth_comment_box.value="You have no bard levels to continue in your prestige class."; document.form1.prestige_arcanespell_type[0].checked=true; prestige_monitor=false; }
    else
     {
      prestige_bard_spell_levels=prestige_any_spell_levels; 
     }
  }
 if (document.form1.prestige_arcanespell_type[2].checked==true)
  {
   if (sorcerer_levels==0)
     {document.form1.fourth_comment_box.value="You have no sorcerer levels to continue in your prestige class."; document.form1.prestige_arcanespell_type[0].checked=true; prestige_monitor=false; }
    else
     {
      prestige_sorcerer_spell_levels=prestige_any_spell_levels; 
     }
  }
 if (document.form1.prestige_arcanespell_type[3].checked==true)
  {
   if (wizard_levels==0)
     {document.form1.fourth_comment_box.value="You have no wizard levels to continue in your prestige class."; document.form1.prestige_arcanespell_type[0].checked=true; prestige_monitor=false; }
    else
     {
      prestige_wizard_spell_levels=prestige_any_spell_levels; 
     }
  }



  if (prestige_any_spell_levels==0){document.form1.count_prestige_spell_levels[0].checked=true; }
 if (document.form1.prestige_divinespell_type[1].checked==true)
  {
   if (cleric_levels==0)
     {document.form1.fourth_comment_box.value="You have no cleric levels to continue in your prestige class."; document.form1.prestige_divinespell_type[0].checked=true; prestige_monitor=false; }
    else
     {
      prestige_cleric_spell_levels=prestige_any_spell_levels; 
     }
  }
 if (document.form1.prestige_divinespell_type[2].checked==true)
  {
   if (druid_levels==0)
     {document.form1.fourth_comment_box.value="You have no druid levels to continue in your prestige class."; document.form1.prestige_divinespell_type[0].checked=true; prestige_monitor=false; }
    else
     {
      prestige_druid_spell_levels=prestige_any_spell_levels; 
     }
  }
 if (document.form1.prestige_divinespell_type[3].checked==true)
  {
   if ((paladin_levels==0)&(npcother_class_name!="Paladin of Freedom"))
     {document.form1.fourth_comment_box.value="You have no paladin levels to continue in your prestige class."; document.form1.prestige_divinespell_type[0].checked=true; prestige_monitor=false; }
    else
     {
      prestige_paladin_spell_levels=prestige_any_spell_levels; 
     }
  }
 if (document.form1.prestige_divinespell_type[4].checked==true)
  {
   if (ranger_levels==0)
     {document.form1.fourth_comment_box.value="You have no ranger levels to continue in your prestige class."; document.form1.prestige_divinespell_type[0].checked=true; prestige_monitor=false; }
    else
     {
      prestige_ranger_spell_levels=prestige_any_spell_levels; 
     }
  }

 if ((prestige_any_spell_levels>0)
  &&(document.form1.prestige_arcanespell_type[0].checked==true) //qqq
  &&(document.form1.prestige_divinespell_type[0].checked==true) //qqq
   )
  {document.form1.fourth_comment_box.value="Prestige spellcasting as...?"; prestige_monitor=false; }



 document.form1.fourth_comment_box.value="Your prestige class is okay."; 
  DoHPAndOtherClassStuff();   GenerateClassString(); 
  return true; 
 }

function SumOfModifiers(){
  return (modifier_number(stat1) + modifier_number(stat2) + modifier_number(stat3) + modifier_number(stat4) + modifier_number(stat5) + modifier_number(stat6))
  }

 function AdjustIfTooLow4(){
 if ((stat1<13)&(stat2<13)&(stat3<13)&(stat4<13)&(stat5<13)&(stat6<13))
  {stat6=13; }
 if (SumOfModifiers()<1)
   {
    do
     {
      RaiseARandomStatistic(); 
     }
     while (SumOfModifiers()<1); 
   }
 }

function RaiseARandomStatistic(){
      x=Math.floor (6*Math.random())
      switch (x){
       case 0:{if (stat1<18){stat1++ ; }break; }
       case 1:{if (stat2<18){stat2++ ; }break; }
       case 2:{if (stat3<18){stat3++ ; }break; }
       case 3:{if (stat4<18){stat4++ ; }break; }
       case 4:{if (stat5<18){stat5++ ; }break; }
       case 5:{if (stat6<18){stat6++ ; }break; }
       }
 }

 function AdjustIfTooLow5(){
 if ((stat1<15)&(stat2<15)&(stat3<15)&(stat4<15)&(stat5<15)&(stat6<15))
  {stat6=15; }
 if (SumOfModifiers()<2)
   {
    do
     {
      RaiseARandomStatistic(); 
     }
     while (SumOfModifiers()<2); 
   }
 }


 function AdjustIfTooLow3(){
 if ((stat1<12)&(stat2<12)&(stat3<12)&(stat4<12)&(stat5<12)&(stat6<12))
  {stat6=12; }
 if (SumOfModifiers()<0)
   {
    do
     {
      RaiseARandomStatistic(); 
     }
     while (SumOfModifiers()<0); 
   }
 }

function IndexForWeight(lbs){
 if (lbs<31){return 1; } else
 if (lbs<32){return 2; } else
 if (lbs<33){return 3; } else
 if (lbs<34){return 4; } else
 if (lbs<35){return 5; } else
 if (lbs<36){return 6; } else
 if (lbs<37){return 7; } else
 if (lbs<38){return 8; } else
 if (lbs<39){return 9; } else
 if (lbs<40){return 10; } else
 if (lbs<41){return 11; } else
 if (lbs<42){return 12; } else
 if (lbs<43){return 13; } else
 if (lbs<44){return 14; } else
 if (lbs<45){return 15; } else
 if (lbs<46){return 16; } else
 if (lbs<47){return 17; } else
 if (lbs<48){return 18; } else
 if (lbs<49){return 19; } else
 if (lbs<50){return 20; } else
 if (lbs<55){return 21; } else
 if (lbs<60){return 22; } else
 if (lbs<65){return 23; } else
 if (lbs<70){return 24; } else
 if (lbs<75){return 25; } else
 if (lbs<80){return 26; } else
 if (lbs<85){return 27; } else
 if (lbs<90){return 28; } else
 if (lbs<95){return 29; } else
 if (lbs<100){return 30; } else
 if (lbs<105){return 31; } else
 if (lbs<110){return 32; } else
 if (lbs<115){return 33; } else
 if (lbs<120){return 34; } else
 if (lbs<125){return 35; } else
 if (lbs<130){return 36; } else
 if (lbs<135){return 37; } else
 if (lbs<140){return 38; } else
 if (lbs<145){return 39; } else
 if (lbs<150){return 40; } else
 if (lbs<155){return 41; } else
 if (lbs<160){return 42; } else
 if (lbs<165){return 43; } else
 if (lbs<170){return 44; } else
 if (lbs<175){return 45; } else
 if (lbs<180){return 46; } else
 if (lbs<185){return 47; } else
 if (lbs<190){return 48; } else
 if (lbs<195){return 49; } else
 if (lbs<200){return 50; } else
 if (lbs<210){return 51; } else
 if (lbs<220){return 52; } else
 if (lbs<230){return 53; } else
 if (lbs<240){return 54; } else
 if (lbs<250){return 55; } else
 if (lbs<260){return 56; } else
 if (lbs<270){return 57; } else
 if (lbs<280){return 58; } else
 if (lbs<290){return 59; } else
 if (lbs<300){return 60; } else
 if (lbs<310){return 61; } else
 if (lbs<320){return 62; } else
 if (lbs<330){return 63; } else
 if (lbs<340){return 64; } else
 if (lbs<350){return 65; } else
 if (lbs<360){return 66; } else
 if (lbs<370){return 67; } else
 if (lbs<380){return 68; } else
 if (lbs<390){return 69; } else
 if (lbs<400){return 70; } else
 if (lbs<410){return 71; } else
 if (lbs<420){return 72; } else
 if (lbs<430){return 73; } else
 if (lbs<440){return 74; } else {return 75; }
 }

function x_and_heft(){
  large=false;
  if ((rayce==5)|(rayce==6)){small=true; } else if (rayce!=8) {small=false; }
  if (strength== 1){x=3; }
  if (strength== 2){x=6; }
  if (strength== 3){x=10; }
  if (strength== 4){x=13; }
  if (strength== 5){x=16; }
  if (strength== 6){x=20; }
  if (strength== 7){x=23; }
  if (strength== 8){x=26; }
  if (strength== 9){x=30; }
  if (strength==10){x=33; }
  if (strength==11){x=38; }
  if (strength==12){x=43; }
  if (strength==13){x=50; }
  if (strength==14){x=58; }
  if (strength==15){x=66; }
  if (strength==16){x=76; }
  if (strength==17){x=86; }
  if (strength==18){x=100; }
  if (strength==19){x=116; }
  if (strength==20){x=133; }
  if (strength==21){x=153; }
  if (strength==22){x=173; }
  if (strength==23){x=200; }
  if (strength==24){x=233; }
  if (strength==25){x=266; }
  if (strength==26){x=306; }
  if (strength==27){x=346; }
  if (strength==28){x=400; }
  if (strength==29){x=466; }
  heft=x; if (small==true){heft=Math.round(x*3/4)}
 }

//zzzzzzzzzzzzzzzz
function AdjustWeight(){
 if (((rayce==1)|(rayce==28)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32)|(rayce==33)|(rayce==9))&(gender==1))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(120))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(120); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(280))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(280); }
  }
 if (((rayce==1)|(rayce==28)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32)|(rayce==33)|(rayce==9))&(gender==2))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(85))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(85); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(185))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(185); }
  }
 if ((rayce==2)&(gender==1))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(110))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(110); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(190))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(190); }
  }
 if ((rayce==2)&(gender==2))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(90))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(90); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(170))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(170); }
  }
 if (((rayce==3)|(rayce==12))&(gender==1))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(100))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(100); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(150))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(150); }
  }
 if (((rayce==3)|(rayce==12))&(gender==2))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(90))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(90); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(130))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(130); }
  }
 if ((rayce==4)&(gender==1))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(150))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(150); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(220))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(220); }
  }
 if ((rayce==4)&(gender==2))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(120))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(120); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(190))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(190); }
  }
 if ((rayce==5)&(gender==1))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(36))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(36); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(48))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(48); }
  }
 if ((rayce==5)&(gender==2))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(34))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(34); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(44))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(44); }
  }
 if ((rayce==6)&(gender==1))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(30))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(30); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(38))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(38); }
  }
 if ((rayce==6)&(gender==2))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(25))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(25); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(33))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(33); }
  }
 if (((rayce==7)|(rayce==22))&(gender==1))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(150))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(150); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(500))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(500); }
  }
 if (((rayce==7)|(rayce==22))&(gender==2))
  {
   if (document.form1.how_heavy.selectedIndex<IndexForWeight(110))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(110); }
   if (document.form1.how_heavy.selectedIndex>IndexForWeight(400))
      {document.form1.how_heavy.selectedIndex=IndexForWeight(400); }
  }
 }
// zzzzzzzzzzzz
function AdjustHeight(){
 if (rayce==0){document.form1.how_tall.selectedIndex=0; }
  if ((rayce==1)|(rayce==7)|(rayce==22)|(rayce==28)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32)|(rayce==33)|(rayce==9))
// Your selected index 2'8" = 1
//                     3'   = 5
//                     4'   = 17
//                     5'   = 29
//                     6'   = 41
//                     7'   = 53
// male humans 5' to 6'8"
  {
   if (gender==1)
    {
     if (document.form1.how_tall.selectedIndex<29)
        {document.form1.how_tall.selectedIndex=29}
     if (document.form1.how_tall.selectedIndex>49)
        {document.form1.how_tall.selectedIndex=49}
    }
   if (gender==2)
    {
     if (document.form1.how_tall.selectedIndex<24)
        {document.form1.how_tall.selectedIndex=24}
     if (document.form1.how_tall.selectedIndex>44)
        {document.form1.how_tall.selectedIndex=44}
    }
  }
 if (rayce==2)
// halfelf men 33 to 47
  {
   if (gender==1)
    {
     if (document.form1.how_tall.selectedIndex<33)
        {document.form1.how_tall.selectedIndex=33}
     if (document.form1.how_tall.selectedIndex>47)
        {document.form1.how_tall.selectedIndex=47}
    }
   if (gender==2)
    {
     if (document.form1.how_tall.selectedIndex<31)
        {document.form1.how_tall.selectedIndex=31}
     if (document.form1.how_tall.selectedIndex>45)
        {document.form1.how_tall.selectedIndex=45}
    }
  }
 if ((rayce==3)|(rayce==12))
// elf men35 49
  {
   if (gender==1)
    {
     if (document.form1.how_tall.selectedIndex<35)
        {document.form1.how_tall.selectedIndex=35}
     if (document.form1.how_tall.selectedIndex>49)
        {document.form1.how_tall.selectedIndex=49}
    }
   if (gender==2)
    {
     if (document.form1.how_tall.selectedIndex<35)
        {document.form1.how_tall.selectedIndex=35}
     if (document.form1.how_tall.selectedIndex>45)
        {document.form1.how_tall.selectedIndex=45}
    }
  }
 if (rayce==4)
// dwarf men
  {
   if (gender==1)
    {
     if (document.form1.how_tall.selectedIndex<16)
        {document.form1.how_tall.selectedIndex=16}
     if (document.form1.how_tall.selectedIndex>22)
        {document.form1.how_tall.selectedIndex=22}
    }
   if (gender==2)
    {
     if (document.form1.how_tall.selectedIndex<14)
        {document.form1.how_tall.selectedIndex=14}
     if (document.form1.how_tall.selectedIndex>20)
        {document.form1.how_tall.selectedIndex=20}
    }
  }
 if (rayce==5)
  {
   if (gender==1)
    {
     if (document.form1.how_tall.selectedIndex< 7)
        {document.form1.how_tall.selectedIndex= 7}
     if (document.form1.how_tall.selectedIndex>13)
        {document.form1.how_tall.selectedIndex=13}
    }
   if (gender==2)
    {
     if (document.form1.how_tall.selectedIndex< 5)
        {document.form1.how_tall.selectedIndex= 5}
     if (document.form1.how_tall.selectedIndex>11)
        {document.form1.how_tall.selectedIndex=11}
    }
  }
 if (rayce==6)
  {
   if (gender==1)
    {
     if (document.form1.how_tall.selectedIndex< 3)
        {document.form1.how_tall.selectedIndex= 3}
     if (document.form1.how_tall.selectedIndex> 9)
        {document.form1.how_tall.selectedIndex= 9}
    }
   if (gender==2)
    {
     if (document.form1.how_tall.selectedIndex< 1)
        {document.form1.how_tall.selectedIndex= 1}
     if (document.form1.how_tall.selectedIndex> 7)
        {document.form1.how_tall.selectedIndex= 7}
    }
  }

  GetIdealWeight()
 }

function GetIdealWeight(){
  ideal_weight=0; 
  x_and_heft(); 
//zzzzzz
  if (((rayce==1)|(rayce==28)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32)|(rayce==33)|(rayce==9))&(gender==1)){ideal_weight=2*(document.form1.how_tall.selectedIndex + 31) + 1.334*(heft-10); }
  if (((rayce==1)|(rayce==28)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32)|(rayce==33)|(rayce==9))&(gender==2)){ideal_weight=1.546*(document.form1.how_tall.selectedIndex + 31) + 1.379*(heft-10); }
  if ((rayce==2)&(gender==1)){ideal_weight=1.755*(document.form1.how_tall.selectedIndex + 31) + 1.150*(heft-10); }
  if ((rayce==2)&(gender==2)){ideal_weight=1.455*(document.form1.how_tall.selectedIndex + 31) + 1.196*(heft-10); }
  if (((rayce==3)|(rayce==12))&(gender==1)){ideal_weight=1.546*(document.form1.how_tall.selectedIndex + 31) + 0.594*(heft-10); }
  if (((rayce==3)|(rayce==12))&(gender==2)){ideal_weight=1.455*(document.form1.how_tall.selectedIndex + 31) + 0.607*(heft-10); }
  if ((rayce==4)&(gender==1)){ideal_weight=2.766*(document.form1.how_tall.selectedIndex + 31) + 0.883*(heft-10); }
  if ((rayce==4)&(gender==2)){ideal_weight=2.223*(document.form1.how_tall.selectedIndex + 31) + 0.919*(heft-10); }
  if (((rayce==5))&(gender==1)){ideal_weight=1.053*(document.form1.how_tall.selectedIndex + 31) + 0.036*(heft-10); }
  if (((rayce==5))&(gender==2)){ideal_weight=1.000*(document.form1.how_tall.selectedIndex + 31) + 0.047*(heft-10); }
  if ((rayce==6)&(gender==1)){ideal_weight=0.883*(document.form1.how_tall.selectedIndex + 31) + 0.171*(heft-10); }
  if ((rayce==6)&(gender==2)){ideal_weight=0.782*(document.form1.how_tall.selectedIndex + 31) + 0.171*(heft-10); }
  if (((rayce==7)|(rayce==22))&(gender==1)){ideal_weight=2.5*(document.form1.how_tall.selectedIndex + 31) + 2.342*(heft-10); }
  if (((rayce==7)|(rayce==22))&(gender==2)){ideal_weight=2*(document.form1.how_tall.selectedIndex + 31) + 2.342*(heft-10); }
//zzzzzzzzzzz
  document.form1.how_heavy.selectedIndex=IndexForWeight(ideal_weight);
  AdjustWeight();
 }

//zzzzzzzzzzzzz
function RandomHeight(){
  document.form1.how_tall.selectedIndex=10; 
 if (rayce==0){document.form1.how_tall.selectedIndex=0; }
 if ((rayce==1)|(rayce==22)|(rayce==28)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32)|(rayce==33))
  {
   if (gender==1){document.form1.how_tall.selectedIndex=29 + Math.floor (10*Math.random()) + Math.floor (10*Math.random()); }
   if (gender==2){document.form1.how_tall.selectedIndex=24 + Math.floor (10*Math.random()) + Math.floor (10*Math.random()); }
  }
 if (rayce==2)
  {
   if (gender==1){document.form1.how_tall.selectedIndex=26 + Math.floor ( 8*Math.random()) + Math.floor ( 8*Math.random()); }
   if (gender==2){document.form1.how_tall.selectedIndex=24 + Math.floor ( 8*Math.random()) + Math.floor ( 8*Math.random()); }
  }
 if ((rayce==3)|(rayce==12))
  {
   if (gender==1){document.form1.how_tall.selectedIndex=24 + Math.floor ( 6*Math.random()) + Math.floor ( 6*Math.random()); }
   if (gender==2){document.form1.how_tall.selectedIndex=24 + Math.floor ( 6*Math.random()) + Math.floor ( 6*Math.random()); }
  }
 if (rayce==4)
  {
   if (gender==1){document.form1.how_tall.selectedIndex=16 + Math.floor ( 4*Math.random()) + Math.floor ( 4*Math.random()); }
   if (gender==2){document.form1.how_tall.selectedIndex=14 + Math.floor ( 4*Math.random()) + Math.floor ( 4*Math.random()); }
  }
 if (rayce==5)
  {
   if (gender==1){document.form1.how_tall.selectedIndex= 7 + Math.floor ( 4*Math.random()) + Math.floor ( 4*Math.random()); }
   if (gender==2){document.form1.how_tall.selectedIndex= 5 + Math.floor ( 4*Math.random()) + Math.floor ( 4*Math.random()); }
  }
 if (rayce==6)
  {
   if (gender==1){document.form1.how_tall.selectedIndex= 3 + Math.floor ( 4*Math.random()) + Math.floor ( 4*Math.random()); }
   if (gender==2){document.form1.how_tall.selectedIndex= 1 + Math.floor ( 4*Math.random()) + Math.floor ( 4*Math.random()); }
  }
 if (rayce==7)
  {
   if (gender==1){document.form1.how_tall.selectedIndex=29 + Math.floor (12*Math.random()) + Math.floor (12*Math.random()); }
   if (gender==2){document.form1.how_tall.selectedIndex=22 + Math.floor (12*Math.random()) + Math.floor (12*Math.random()); }
  }
 AdjustHeight();
 GetIdealWeight(); 
 }

function ClassNeeds(){

 if ((wizard_levels>0)&(document.form1.spellbook.selectedIndex==0))
  {document.form1.spellbook.selectedIndex=1}
 if (druid_levels>0)
  {document.form1.hollyandmistletoe.checked=true; }
 if ((rogue_levels>0)  | (disabledevice>0))
   {document.form1.thievestools.checked=true}
 if (bard_levels>0)
   {document.form1.musicalinstrument.checked=true}

 if (((bard_levels>0)|(cleric_levels>0)|(druid_levels>0)|(paladin_levels>=6)|(ranger_levels>=6))
   &(has_eschewmaterials==false))
    {document.form1.spellcomponentpouch.checked=true; }
 }

function RollSomeDice(){
 my_character_is_done=false;

 if ((stat1!=0)|(stat2!=0)|(stat3!=0)|(stat4!=0)|(stat5!=0)|(stat6!=0))
  {if (rayce!=0){startup()}}
 AbilitiesHaveBeenEstablished=false; 
 ClearAllAbilityAssignments()
 strength=0; 
 intelligence=0; 
 wisdom=0; 
 constitution=0; 
 dexterity=0; 
 charisma=0; 
 RollTheDice(); 
 if (document.form1.methods_list.selectedIndex==4)
  {
   stat1=10; 
   stat2=10; 
   stat3=10; 
   stat4=10; 
   stat5=10; 
   stat6=10; 
   document.form1.stat1_list.selectedIndex=5; 
   document.form1.stat2_list.selectedIndex=5; 
   document.form1.stat3_list.selectedIndex=5; 
   document.form1.stat4_list.selectedIndex=5; 
   document.form1.stat5_list.selectedIndex=5; 
   document.form1.stat6_list.selectedIndex=5; 
   DiceHaveBeenRolled=true; 
  }
 if (document.form1.methods_list.selectedIndex==7)
  {
   stat1=3; 
   stat2=3; 
   stat3=3; 
   stat4=3; 
   stat5=3; 
   stat6=3; 
   document.form1.stat1_list.selectedIndex=0; 
   document.form1.stat2_list.selectedIndex=0; 
   document.form1.stat3_list.selectedIndex=0; 
   document.form1.stat4_list.selectedIndex=0; 
   document.form1.stat5_list.selectedIndex=0; 
   document.form1.stat6_list.selectedIndex=0; 
   DiceHaveBeenRolled=true; 
  }
 DisplayTrueStatistics()
 DiceHaveBeenRolled=true; 
// if (document.form1.methods_list.selectedIndex!=4){document.form1.first_comment_box.value="Now assign your abilities."; }
 if ((document.form1.methods_list.selectedIndex!=4)&(document.form1.methods_list.selectedIndex!=7)){document.form1.first_comment_box.value="Now assign your abilities."; }
 TellAboutPointBuy(); 
 ArrowShow(); 
 }

function findTheClass(radiobuttons){
 }

function NegateElevenClassLevels(){
 barbarian_levels=0; 
 bard_levels=0; 
 cleric_levels=0; 
 druid_levels=0; 
 fighter_levels=0; 
 monk_levels=0; 
 paladin_levels=0; 
 ranger_levels=0; 
 rogue_levels=0; 
 sorcerer_levels=0; 
 wizard_levels=0; 
 prestige_levels=0; 
 }

function uncheck_feat_boxes(){
 document.form1.acrobatic.checked=false
 document.form1.agilemaneuvers.checked=false
 document.form1.alertness.checked=false
 document.form1.animalaffinity.checked=false
 document.form1.arcanestrike.checked=false
 document.form1.armorproficiencylight.checked=false
 document.form1.armorproficiencymedium.checked=false
 document.form1.armorproficiencyheavy.checked=false
 document.form1.athletic.checked=false
 document.form1.augmentsummoning.checked=false
 document.form1.blindfight.checked=false
 document.form1.combatcasting.checked=false
 document.form1.combatexpertise.checked=false
 document.form1.improveddisarm.checked=false
 document.form1.improvedfeint.checked=false
 document.form1.improvedtrip.checked=false
 document.form1.whirlwindattack.checked=false
 document.form1.combatreflexes.checked=false
 document.form1.deceitful.checked=false
 document.form1.defthands.checked=false
 document.form1.dodge.checked=false
 document.form1.mobility.checked=false
 document.form1.springattack.checked=false
 document.form1.endurance.checked=false
 document.form1.diehard.checked=false
 document.form1.eschewmaterials.checked=false
 document.form1.exoticweaponproficiency.checked=false
 document.form1.toughness.checked=false;
  has_extrachannel=0; document.form1.extrachannel_list.selectedIndex=0; 
  has_extraki=0; document.form1.extraki_list.selectedIndex=0; 
  has_extralayonhands=0; document.form1.extralayonhands_list.selectedIndex=0; 
  has_extramercy=0; document.form1.extramercy_list.selectedIndex=0; 
  has_extraperformance=0; document.form1.extraperformance_list.selectedIndex=0; 
  has_extrarage=0; document.form1.extrarage_list.selectedIndex=0; 
  has_spellmastery=0; document.form1.spellmastery_list.selectedIndex=0; 
 document.form1.greatfortitude.checked=false
 document.form1.improvedcounterspell.checked=false
 has_improvedcritical=0; document.form1.improvedcritical_list.selectedIndex=0; 
 document.form1.improvedinitiative.checked=false
 document.form1.improvedunarmedstrike.checked=false
 document.form1.improvedgrapple.checked=false
 document.form1.deflectarrows.checked=false
 document.form1.snatcharrows.checked=false
 document.form1.stunningfist.checked=false
 document.form1.ironwill.checked=false
 document.form1.leadership.checked=false
 document.form1.lightningreflexes.checked=false
 document.form1.magicalaptitude.checked=false
 document.form1.martialweaponproficiency.checked=false
 document.form1.mountedcombat.checked=false
 document.form1.mountedarchery.checked=false
 document.form1.ridebyattack.checked=false
 document.form1.spiritedcharge.checked=false
 document.form1.trample.checked=false
 document.form1.naturalspell.checked=false
 document.form1.persuasive.checked=false
 document.form1.pointblankshot.checked=false
 document.form1.farshot.checked=false
 document.form1.preciseshot.checked=false
 document.form1.rapidshot.checked=false
 document.form1.manyshot.checked=false
 document.form1.shotontherun.checked=false
 document.form1.improvedpreciseshot.checked=false
 document.form1.powerattack.checked=false
 document.form1.cleave.checked=false
 document.form1.greatcleave.checked=false
 document.form1.improvedbullrush.checked=false
 document.form1.improvedoverrun.checked=false
 document.form1.improvedsunder.checked=false
 document.form1.quickdraw.checked=false
 document.form1.rapidreload.checked=false
 document.form1.run.checked=false
 document.form1.selfsufficient.checked=false
 document.form1.shieldproficiency.checked=false
 document.form1.improvedshieldbash.checked=false
 document.form1.towershieldproficiency.checked=false
 document.form1.simpleweaponproficiency.checked=false
 document.form1.skillfocusappraise.checked=false
 document.form1.skillfocusbluff.checked=false
 document.form1.skillfocusclimb.checked=false
 document.form1.skillfocusacrobatics.checked=false
 document.form1.skillfocuscraft_1.checked=false
 document.form1.skillfocuscraft_2.checked=false
 document.form1.skillfocuscraft_3.checked=false
 document.form1.skillfocusdiplomacy.checked=false
 document.form1.skillfocusdisabledevice.checked=false
 document.form1.skillfocusdisguise.checked=false
 document.form1.skillfocusescapeartist.checked=false
 document.form1.skillfocusfly.checked=false
 document.form1.skillfocushandleanimal.checked=false
 document.form1.skillfocusheal.checked=false
 document.form1.skillfocusstealth.checked=false
 document.form1.skillfocusintimidate.checked=false
 document.form1.skillfocusknowledgearcana.checked=false
 document.form1.skillfocusknowledgeengineering.checked=false
 document.form1.skillfocusknowledgedungeoneering.checked=false
 document.form1.skillfocusknowledgegeography.checked=false
 document.form1.skillfocusknowledgehistory.checked=false
 document.form1.skillfocusknowledgelocal.checked=false
 document.form1.skillfocusknowledgenature.checked=false
 document.form1.skillfocusknowledgenobility.checked=false
 document.form1.skillfocusknowledgereligion.checked=false
 document.form1.skillfocusknowledgeplanes.checked=false
 document.form1.skillfocuslinguistics.checked=false
 document.form1.skillfocusperception.checked=false
 document.form1.skillfocusperform_1.checked=false
 document.form1.skillfocusperform_2.checked=false
 document.form1.skillfocusperform_3.checked=false
 document.form1.skillfocusperform_4.checked=false
 document.form1.skillfocusperform_5.checked=false
 document.form1.skillfocusprofession.checked=false
 document.form1.skillfocusride.checked=false
 document.form1.skillfocussensemotive.checked=false
 document.form1.skillfocussleightofhand.checked=false
 document.form1.skillfocusspellcraft.checked=false
 document.form1.skillfocussurvival.checked=false
 document.form1.skillfocusswim.checked=false
 document.form1.skillfocususemagicdevice.checked=false
 document.form1.spellfocusabjuration.checked=false
 document.form1.spellfocusconjuration.checked=false
 document.form1.spellfocusdivination.checked=false
 document.form1.spellfocusenchantment.checked=false
 document.form1.spellfocusevocation.checked=false
 document.form1.spellfocusillusion.checked=false
 document.form1.spellfocusnecromancy.checked=false
 document.form1.spellfocustransmutation.checked=false
 document.form1.greaterspellfocusabjuration.checked=false
 document.form1.greaterspellfocusconjuration.checked=false
 document.form1.greaterspellfocusdivination.checked=false
 document.form1.greaterspellfocusenchantment.checked=false
 document.form1.greaterspellfocusevocation.checked=false
 document.form1.greaterspellfocusillusion.checked=false
 document.form1.greaterspellfocusnecromancy.checked=false
 document.form1.greaterspellfocustransmutation.checked=false
 document.form1.spellpenetration.checked=false
 document.form1.greaterspellpenetration.checked=false
 document.form1.stealthy.checked=false
 document.form1.stepup.checked=false
 document.form1.strikeback.checked=false
 document.form1.throwanything.checked=false
 document.form1.twoweaponfighting.checked=false
 document.form1.twoweapondefense.checked=false
 document.form1.improvedtwoweaponfighting.checked=false
 document.form1.greatertwoweaponfighting.checked=false
 document.form1.weaponfinesse.checked=false;
 document.form1.otherfeat1.checked=false
 document.form1.otherfeat2.checked=false
 document.form1.otherfeat3.checked=false
 document.form1.otherfeat4.checked=false
 document.form1.otherfeat5.checked=false
 document.form1.otherfeat6.checked=false
 document.form1.otherfeat7.checked=false
 document.form1.otherfeat8.checked=false
 document.form1.otherfeat9.checked=false
 document.form1.otherfeat10.checked=false
 document.form1.weaponfocus_list.selectedIndex=0
 document.form1.weaponspecialization_list.selectedIndex=0
 document.form1.greaterweaponfocus_list.selectedIndex=0
 document.form1.greaterweaponspecialization_list.selectedIndex=0
 document.form1.brewpotion.checked=false
 document.form1.craftmaa.checked=false
 document.form1.craftrod.checked=false
 document.form1.craftstaff.checked=false
 document.form1.craftwand.checked=false
 document.form1.craftwondrousitem.checked=false
 document.form1.forgering.checked=false
 document.form1.scribescroll.checked=false
 document.form1.empowerspell.checked=false
 document.form1.enlargespell.checked=false
 document.form1.extendspell.checked=false
 document.form1.heightenspell.checked=false
 document.form1.maximizespell.checked=false
 document.form1.quickenspell.checked=false
 document.form1.silentspell.checked=false
 document.form1.stillspell.checked=false
 document.form1.widenspell.checked=false
  document.form1.alignmentchannel.checked=false;
  document.form1.arcanearmortraining.checked=false;
  document.form1.arcanearmormastery.checked=false;
  document.form1.catchoffguard.checked=false;
  document.form1.channelsmite.checked=false;
  document.form1.greaterdisarm.checked=false;
  document.form1.greaterfeint.checked=false;
  document.form1.greatertrip.checked=false;
  document.form1.standstill.checked=false;
  document.form1.commandundead.checked=false;
  document.form1.criticalfocus.checked=false;
  document.form1.bleedingcritical.checked=false;
  document.form1.blindingcritical.checked=false;
  document.form1.criticalmastery.checked=false;
  document.form1.deafeningcritical.checked=false;
  document.form1.sickeningcritical.checked=false;
  document.form1.staggeringcritical.checked=false;
  document.form1.stunningcritical.checked=false;
  document.form1.tiringcritical.checked=false;
  document.form1.exhaustingcritical.checked=false;
  document.form1.deadlyaim.checked=false;
  document.form1.defensivecombattraining.checked=false;
  document.form1.disruptive.checked=false;
  document.form1.spellbreaker.checked=false;
  document.form1.windstance.checked=false;
  document.form1.lightningstance.checked=false;
  document.form1.elementalchannel.checked=false;
  document.form1.fleet.checked=false;
  document.form1.improvedgreatfortitude.checked=false;
  document.form1.improvedchannel.checked=false;
  document.form1.improvedfamiliar.checked=false;
  document.form1.greatergrapple.checked=false;
  document.form1.scorpionstyle.checked=false;
  document.form1.gorgonsfist.checked=false;
  document.form1.medusaswrath.checked=false;
  document.form1.improvisedweaponmastery.checked=false;
  document.form1.intimidatingprowess.checked=false;
  document.form1.improvedironwill.checked=false;
  document.form1.improvedlightningreflexes.checked=false;
  document.form1.lunge.checked=false;
  document.form1.mastercraftsman.checked=false;
  document.form1.unseat.checked=false;
  document.form1.nimblemoves.checked=false;
  document.form1.acrobaticsteps.checked=false;
  document.form1.pinpointtargeting.checked=false;
  document.form1.greaterbullrush.checked=false;
  document.form1.greateroverrun.checked=false;
  document.form1.greatersunder.checked=false;
  document.form1.selectivechanneling.checked=false;
  document.form1.shieldslam.checked=false;
  document.form1.shieldmaster.checked=false;
  document.form1.shieldfocus.checked=false;
  document.form1.greatershieldfocus.checked=false;

  document.form1.turnundead.checked=false;
  document.form1.doubleslice.checked=false;
  document.form1.twoweaponrend.checked=false;
  document.form1.vitalstrike.checked=false;
  document.form1.improvedvitalstrike.checked=false;
  document.form1.greatervitalstrike.checked=false;
  document.form1.dazzlingdisplay.checked=false;
  document.form1.shatterdefenses.checked=false;
  document.form1.deadlystroke.checked=false;
  document.form1.penetratingstrike.checked=false;
  document.form1.greaterpenetratingstrike.checked=false;






 }

function AdjustFeatMenus(){
  document.form1.improvedcritical_list.length=0; 
  z=genericfeatentitlement  +  fighterfeatentitlement; 
  if ((base_attack_bonus<8)&(monk_levels<10)){z=0; }
  for (x=0;  x<=z;  x++ ){
    document.form1.improvedcritical_list.options[x]=new Option(x);  }
      document.form1.improvedcritical_list.options[0].selected=true;  


  document.form1.spellmastery_list.length=0;  
  z=genericfeatentitlement  +  wizardfeatentitlement;  
  if (wizard_levels ==0){z=0;  }
  for (x=0;  x<=z;  x++ ){
    document.form1.spellmastery_list.options[x]=new Option(x);  }
      document.form1.spellmastery_list.options[0].selected=true;  




  document.form1.weaponfocus_list.length=0;   //generic
  z=genericfeatentitlement  +  fighterfeatentitlement;  
  for (x=0;  x<=z;  x++ ){
    document.form1.weaponfocus_list.options[x]=new Option(x);  }
      document.form1.weaponfocus_list.options[0].selected=true;  


  document.form1.weaponspecialization_list.length=0;   //generic
  z=Math.floor((genericfeatentitlement  +  fighterfeatentitlement)/2);  
  if (fighter_levels <4){z=0;  }
  for (x=0;  x<=z;  x++ ){
    document.form1.weaponspecialization_list.options[x]=new Option(x);  }
      document.form1.weaponspecialization_list.options[0].selected=true;  


  document.form1.greaterweaponfocus_list.length=0;   //generic
  z=Math.floor((genericfeatentitlement  +  fighterfeatentitlement)/2);  
  if (fighter_levels <8){z=0;  }
  for (x=0;  x<=z;  x++ ){
    document.form1.greaterweaponfocus_list.options[x]=new Option(x);  }
      document.form1.greaterweaponfocus_list.options[0].selected=true;  


  document.form1.greaterweaponspecialization_list.length=0;   //generic
  z=Math.floor((genericfeatentitlement  +  fighterfeatentitlement)/4);  
  if (fighter_levels <12){z=0;  }
  for (x=0;  x<=z;  x++ ){
    document.form1.greaterweaponspecialization_list.options[x]=new Option(x);  }
      document.form1.greaterweaponspecialization_list.options[0].selected=true;  


  document.form1.extrachannel_list.length=0; 
  z=genericfeatentitlement; 
  if ((cleric_levels==0)&(paladin_levels<4)&(wizard_specialty_name!="Necromancer")){z=0; }
  for (x=0; x<=z; x++ ){
    document.form1.extrachannel_list.options[x]=new Option(x); }
      document.form1.extrachannel_list.options[0].selected=true; 

  document.form1.extraki_list.length=0; 
  z=genericfeatentitlement; 
  if (monk_levels<4){z=0; }
  for (x=0; x<=z; x++ ){
    document.form1.extraki_list.options[x]=new Option(x); }
      document.form1.extraki_list.options[0].selected=true; 

  document.form1.extralayonhands_list.length=0; 
  z=genericfeatentitlement; 
  if (paladin_levels<2){z=0; }
  for (x=0; x<=z; x++ ){
    document.form1.extralayonhands_list.options[x]=new Option(x); }
      document.form1.extralayonhands_list.options[0].selected=true; 

  document.form1.extramercy_list.length=0; 
  z=genericfeatentitlement; 
  if (paladin_levels<3){z=0; }
  for (x=0; x<=z; x++ ){
    document.form1.extramercy_list.options[x]=new Option(x); }
      document.form1.extramercy_list.options[0].selected=true; 

  document.form1.extraperformance_list.length=0; 
  z=genericfeatentitlement; 
  if (bard_levels==0){z=0; }
  for (x=0; x<=z; x++ ){
    document.form1.extraperformance_list.options[x]=new Option(x); }
      document.form1.extraperformance_list.options[0].selected=true; 

  document.form1.extrarage_list.length=0; 
  z=genericfeatentitlement; 
  if (barbarian_levels==0){z=0; }
  for (x=0; x<=z; x++ ){
    document.form1.extrarage_list.options[x]=new Option(x); }
      document.form1.extrarage_list.options[0].selected=true; 



 }

function AdjustSkillMenus(){
  document.form1.appraise_list.length=0; 
  z=0;
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.appraise_list.options[x]=new Option(x); }
      document.form1.appraise_list.options[0].selected=true; 
  document.form1.bluff_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.bluff_list.options[x]=new Option(x); }
      document.form1.bluff_list.options[0].selected=true; 
  document.form1.climb_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.climb_list.options[x]=new Option(x); }
      document.form1.climb_list.options[0].selected=true; 
  document.form1.acrobatics_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.acrobatics_list.options[x]=new Option(x); }
      document.form1.acrobatics_list.options[0].selected=true; 
  document.form1.craft_1_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.craft_1_list.options[x]=new Option(x); }
      document.form1.craft_1_list.options[0].selected=true; 
  document.form1.craft_2_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.craft_2_list.options[x]=new Option(x); }
      document.form1.craft_2_list.options[0].selected=true; 
  document.form1.craft_3_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.craft_3_list.options[x]=new Option(x); }
      document.form1.craft_3_list.options[0].selected=true; 
  document.form1.diplomacy_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.diplomacy_list.options[x]=new Option(x); }
      document.form1.diplomacy_list.options[0].selected=true; 
  document.form1.disabledevice_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.disabledevice_list.options[x]=new Option(x); }
      document.form1.disabledevice_list.options[0].selected=true; 
  document.form1.disguise_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.disguise_list.options[x]=new Option(x); }
      document.form1.disguise_list.options[0].selected=true; 
  document.form1.escapeartist_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.escapeartist_list.options[x]=new Option(x); }
      document.form1.escapeartist_list.options[0].selected=true; 
  document.form1.fly_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.fly_list.options[x]=new Option(x); }
      document.form1.fly_list.options[0].selected=true; 
  document.form1.handleanimal_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.handleanimal_list.options[x]=new Option(x); }
      document.form1.handleanimal_list.options[0].selected=true; 
  document.form1.heal_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.heal_list.options[x]=new Option(x); }
      document.form1.heal_list.options[0].selected=true; 
  document.form1.stealth_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.stealth_list.options[x]=new Option(x); }
      document.form1.stealth_list.options[0].selected=true; 
//  document.form1.hypnosis_list.length=0; 
//  for (x=0; x<=total_levels  +  z; x++ ){
//    document.form1.hypnosis_list.options[x]=new Option(x); }
//      document.form1.hypnosis_list.options[0].selected=true; 
  document.form1.intimidate_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.intimidate_list.options[x]=new Option(x); }
      document.form1.intimidate_list.options[0].selected=true; 
  document.form1.knowledgearcana_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgearcana_list.options[x]=new Option(x); }
      document.form1.knowledgearcana_list.options[0].selected=true; 
  document.form1.knowledgeengineering_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgeengineering_list.options[x]=new Option(x); }
      document.form1.knowledgeengineering_list.options[0].selected=true; 
  document.form1.knowledgedungeoneering_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgedungeoneering_list.options[x]=new Option(x); }
      document.form1.knowledgedungeoneering_list.options[0].selected=true; 
  document.form1.knowledgegeography_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgegeography_list.options[x]=new Option(x); }
      document.form1.knowledgegeography_list.options[0].selected=true; 
  document.form1.knowledgehistory_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgehistory_list.options[x]=new Option(x); }
      document.form1.knowledgehistory_list.options[0].selected=true; 
  document.form1.knowledgelocal_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgelocal_list.options[x]=new Option(x); }
      document.form1.knowledgelocal_list.options[0].selected=true; 
  document.form1.knowledgenature_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgenature_list.options[x]=new Option(x); }
      document.form1.knowledgenature_list.options[0].selected=true; 
  document.form1.knowledgenobility_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgenobility_list.options[x]=new Option(x); }
      document.form1.knowledgenobility_list.options[0].selected=true; 
  document.form1.knowledgereligion_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgereligion_list.options[x]=new Option(x); }
      document.form1.knowledgereligion_list.options[0].selected=true; 
  document.form1.knowledgeplanes_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.knowledgeplanes_list.options[x]=new Option(x); }
      document.form1.knowledgeplanes_list.options[0].selected=true; 
  document.form1.perception_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.perception_list.options[x]=new Option(x); }
      document.form1.perception_list.options[0].selected=true; 
  document.form1.perform_1_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.perform_1_list.options[x]=new Option(x); }
      document.form1.perform_1_list.options[0].selected=true; 
  document.form1.perform_2_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.perform_2_list.options[x]=new Option(x); }
      document.form1.perform_2_list.options[0].selected=true; 
  document.form1.perform_3_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.perform_3_list.options[x]=new Option(x); }
      document.form1.perform_3_list.options[0].selected=true; 
  document.form1.perform_4_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.perform_4_list.options[x]=new Option(x); }
      document.form1.perform_4_list.options[0].selected=true; 
  document.form1.perform_5_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.perform_5_list.options[x]=new Option(x); }
      document.form1.perform_5_list.options[0].selected=true; 
  document.form1.profession_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.profession_list.options[x]=new Option(x); }
      document.form1.profession_list.options[0].selected=true; 
  document.form1.ride_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.ride_list.options[x]=new Option(x); }
      document.form1.ride_list.options[0].selected=true; 
  document.form1.sensemotive_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.sensemotive_list.options[x]=new Option(x); }
      document.form1.sensemotive_list.options[0].selected=true; 
  document.form1.sleightofhand_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.sleightofhand_list.options[x]=new Option(x); }
      document.form1.sleightofhand_list.options[0].selected=true; 
  document.form1.linguistics_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.linguistics_list.options[x]=new Option(x); }
      document.form1.linguistics_list.options[0].selected=true; 
  document.form1.spellcraft_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.spellcraft_list.options[x]=new Option(x); }
      document.form1.spellcraft_list.options[0].selected=true; 
  document.form1.survival_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.survival_list.options[x]=new Option(x); }
      document.form1.survival_list.options[0].selected=true; 
  document.form1.swim_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.swim_list.options[x]=new Option(x); }
      document.form1.swim_list.options[0].selected=true; 
  document.form1.usemagicdevice_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.usemagicdevice_list.options[x]=new Option(x); }
      document.form1.usemagicdevice_list.options[0].selected=true; 
  document.form1.otherskill1_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.otherskill1_list.options[x]=new Option(x); }
      document.form1.otherskill1_list.options[0].selected=true; 
  document.form1.otherskill2_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.otherskill2_list.options[x]=new Option(x); }
      document.form1.otherskill2_list.options[0].selected=true; 
  document.form1.otherskill3_list.length=0; 
  for (x=0; x<=total_levels  +  z; x++ ){
    document.form1.otherskill3_list.options[x]=new Option(x); }
      document.form1.otherskill3_list.options[0].selected=true; 
  animal_companion_level=druid_levels;
  if (ranger_levels>=4){animal_companion_level+=ranger_levels;}



  document.form1.ac_acrobatics_list.length=0; 
  document.form1.ac_climb_list.length=0; 
  document.form1.ac_escapeartist_list.length=0; 
  document.form1.ac_fly_list.length=0; 
  document.form1.ac_intimidate_list.length=0; 
  document.form1.ac_perception_list.length=0; 
  document.form1.ac_stealth_list.length=0; 
  document.form1.ac_survival_list.length=0; 
  document.form1.ac_swim_list.length=0; 
  for (x=0; x<=animal_companion_level  ; x++ ){
    document.form1.ac_acrobatics_list.options[x]=new Option(x); 
    document.form1.ac_climb_list.options[x]=new Option(x); 
    document.form1.ac_escapeartist_list.options[x]=new Option(x); 
    document.form1.ac_fly_list.options[x]=new Option(x); 
    document.form1.ac_intimidate_list.options[x]=new Option(x); 
    document.form1.ac_perception_list.options[x]=new Option(x); 
    document.form1.ac_stealth_list.options[x]=new Option(x); 
    document.form1.ac_survival_list.options[x]=new Option(x); 
    document.form1.ac_swim_list.options[x]=new Option(x); 
    }
      document.form1.ac_acrobatics_list.options[0].selected=true; 
      document.form1.ac_climb_list.options[0].selected=true; 
      document.form1.ac_escapeartist_list.options[0].selected=true; 
      document.form1.ac_fly_list.options[0].selected=true; 
      document.form1.ac_intimidate_list.options[0].selected=true; 
      document.form1.ac_perception_list.options[0].selected=true; 
      document.form1.ac_stealth_list.options[0].selected=true; 
      document.form1.ac_survival_list.options[0].selected=true; 
      document.form1.ac_swim_list.options[0].selected=true; 

 }





function Languages(){

 skillbought_bonus_languages=0; 
 total_bonus_languages=0; 
 racial_bonus_language_entitlement=0; 
 skillbought_bonus_language_entitlement=0; 
 total_bonus_language_entitlement=0; 
 if (modifier_number(intelligence)>0)
   {racial_bonus_language_entitlement=modifier_number(intelligence); }
 skillbought_bonus_language_entitlement=linguistics; 
 total_bonus_language_entitlement=racial_bonus_language_entitlement + skillbought_bonus_language_entitlement; 

 if (document.form1.speak_abyssal.checked==true)
  {
   total_bonus_languages++ ; 
   if (abyssal_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_abyssal.checked=false; 
   total_bonus_languages--; 
   if (abyssal_friendly==false){skillbought_bonus_languages--; }
      }}


 if (document.form1.speak_aarakocra.checked==true)
  {
   if (aarakocra_nativespeaker==true){document.form1.speak_aarakocra.checked=false} else {
   total_bonus_languages++ ; 
   if (aarakocra_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_aarakocra.checked=false; 
   total_bonus_languages--; 
   if (aarakocra_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_aboleth.checked==true)
  {
   if (aboleth_nativespeaker==true){document.form1.speak_aboleth.checked=false} else {
   total_bonus_languages++ ; 
   if (aboleth_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_aboleth.checked=false; 
   total_bonus_languages--; 
   if (aboleth_friendly==false){skillbought_bonus_languages--; }
      }}}





 if (document.form1.speak_aquan.checked==true)
  {
   if (aquan_nativespeaker==true){document.form1.speak_aquan.checked=false; } else {
   total_bonus_languages++ ; 
   if (aquan_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_aquan.checked=false; 
   total_bonus_languages--; 
   if (aquan_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_aklo.checked==true)
  {
   if (aklo_nativespeaker==true){document.form1.speak_aklo.checked=false; } else {
   total_bonus_languages++ ; 
   if (aklo_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_aklo.checked=false; 
   total_bonus_languages--; 
   if (aklo_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_auran.checked==true)
  {
   total_bonus_languages++ ; 
   if (auran_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_auran.checked=false; 
   total_bonus_languages--; 
   if (auran_friendly==false){skillbought_bonus_languages--; }

      }}

 if (document.form1.speak_celestial.checked==true)
  {
   total_bonus_languages++ ; 
   if (celestial_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_celestial.checked=false; 
   total_bonus_languages--; 
   if (celestial_friendly==false){skillbought_bonus_languages--; }

      }}

 if (document.form1.speak_common.checked==true)
  {
   if (common_nativespeaker==true){document.form1.speak_common.checked=false; } else {
   total_bonus_languages++ ; 
   if (common_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_common.checked=false; 
   total_bonus_languages--; 
   if (common_friendly==false){skillbought_bonus_languages--; }
      }}}


 if (document.form1.speak_draconic.checked==true)
  {
   if (draconic_nativespeaker==true){document.form1.speak_draconic.checked=false; } else {
   total_bonus_languages++ ; 
   if (draconic_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_draconic.checked=false; 
   total_bonus_languages--; 
   if (draconic_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_dwarven.checked==true)
  {
   if (dwarven_nativespeaker==true){document.form1.speak_dwarven.checked=false; } else {
   total_bonus_languages++ ; 
   if (dwarven_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_dwarven.checked=false; 
   total_bonus_languages--; 
   if (dwarven_friendly==false){skillbought_bonus_languages--; }
      }}}


 if (document.form1.speak_darkelfsilent.checked==true)
  {
   total_bonus_languages++ ; 
   if (darkelfsilent_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_darkelfsilent.checked=false; 
   total_bonus_languages--; 
   if (darkelfsilent_friendly==false){skillbought_bonus_languages--; }
      }}




 if (document.form1.speak_elven.checked==true)
  {
   if (elven_nativespeaker==true){document.form1.speak_elven.checked=false; } else {
   total_bonus_languages++ ; 
   if (elven_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_elven.checked=false; 
   total_bonus_languages--; 
   if (elven_friendly==false){skillbought_bonus_languages--; }
      }}}


 if (document.form1.speak_giant.checked==true)
  {
   if (giant_nativespeaker==true) {document.form1.speak_giant.checked=false} else {
   total_bonus_languages++ ; 
   if (giant_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_giant.checked=false; 
   total_bonus_languages--; 
   if (giant_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_gith.checked==true)
  {
   if (gith_nativespeaker==true){document.form1.speak_gith.checked=false} else {
   total_bonus_languages++ ; 
   if (gith_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_gith.checked=false; 
   total_bonus_languages--; 
   if (gith_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_gnoll.checked==true)
  {
   if (gnoll_nativespeaker==true){document.form1.speak_gnoll.checked=false} else {
   total_bonus_languages++ ; 
   if (gnoll_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_gnoll.checked=false; 
   total_bonus_languages--; 
   if (gnoll_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_gnome.checked==true)
  {
   if (gnome_nativespeaker==true){document.form1.speak_gnome.checked=false; } else {
   total_bonus_languages++ ; 
   if (gnome_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_gnome.checked=false; 
   total_bonus_languages--; 
   if (gnome_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_goblin.checked==true)
  {
   if (goblin_nativespeaker==true){document.form1.speak_goblin.checked=false} else {
   total_bonus_languages++ ; 
   if (goblin_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_goblin.checked=false; 
   total_bonus_languages--; 
   if (goblin_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_halfling.checked==true)
  {
   if (halfling_nativespeaker==true){document.form1.speak_halfling.checked=false; } else {
   total_bonus_languages++ ; 
   if (halfling_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_halfling.checked=false; 
   total_bonus_languages--; 
   if (halfling_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_ignan.checked==true)
  {
   total_bonus_languages++ ; 
   if (ignan_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_ignan.checked=false; 
   total_bonus_languages--; 
   if (ignan_friendly==false){skillbought_bonus_languages--; }
      }}

 if (document.form1.speak_infernal.checked==true)
  {
   total_bonus_languages++ ; 
   if (infernal_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_infernal.checked=false; 
   total_bonus_languages--; 
   if (infernal_friendly==false){skillbought_bonus_languages--; }
      }}

 if (document.form1.speak_orc.checked==true)
  {
   if (orc_nativespeaker==true){document.form1.speak_orc.checked=false; } else {
   total_bonus_languages++ ; 
   if (orc_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_orc.checked=false; 
   total_bonus_languages--; 
   if (orc_friendly==false){skillbought_bonus_languages--; }

      }}}

 if (document.form1.speak_pterran.checked==true)
  {
   if (pterran_nativespeaker==true){document.form1.speak_pterran.checked=false} else {
   total_bonus_languages++ ; 
   if (pterran_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_pterran.checked=false; 
   total_bonus_languages--; 
   if (pterran_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_sahuagin.checked==true)
  {
   total_bonus_languages++ ; 
   if (sahuagin_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_sahuagin.checked=false; 
   total_bonus_languages--; 
   if (sahuagin_friendly==false){skillbought_bonus_languages--; }
      }}

 if (document.form1.speak_sylvan.checked==true)
  {
   if (sylvan_nativespeaker==true){document.form1.speak_sylvan.checked=false; } else {
   total_bonus_languages++ ; 
   if (sylvan_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_sylvan.checked=false; 
   total_bonus_languages--; 
   if (sylvan_friendly==false){skillbought_bonus_languages--; }

      }}}

 if (document.form1.speak_terran.checked==true)
  {
   total_bonus_languages++ ; 
   if (terran_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_terran.checked=false; 
   total_bonus_languages--; 
   if (terran_friendly==false){skillbought_bonus_languages--; }
      }}

 if (document.form1.speak_thrikreen.checked==true)
  {
   if (thrikreen_nativespeaker==true){document.form1.speak_thrikreen.checked=false} else {
   total_bonus_languages++ ; 
   if (thrikreen_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_thrikreen.checked=false; 
   total_bonus_languages--; 
   if (thrikreen_friendly==false){skillbought_bonus_languages--; }
      }}}

 if (document.form1.speak_undercommon.checked==true)
  {
   total_bonus_languages++ ; 
   if (undercommon_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_undercommon.checked=false; 
   total_bonus_languages--; 
   if (undercommon_friendly==false){skillbought_bonus_languages--; }
  }}


 if (document.form1.speak_xeph.checked==true)
  {
   if (rayce==104){document.form1.speak_xeph.checked=false} else {
   total_bonus_languages++ ; 
   if (xeph_friendly==false){skillbought_bonus_languages++ ; }
   if ((total_bonus_languages>total_bonus_language_entitlement) | 
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_xeph.checked=false; 
   total_bonus_languages--; 
   if (xeph_friendly==false){skillbought_bonus_languages--; }
      }}}



 if (document.form1.speak_otherlanguage1.checked==true)
  {
   total_bonus_languages++ ; 
   if ((total_bonus_languages>total_bonus_language_entitlement)|
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_otherlanguage1.checked=false; 
      total_bonus_languages--; }
  }



 if (document.form1.speak_otherlanguage2.checked==true)
  {
   total_bonus_languages++ ; 
   if ((total_bonus_languages>total_bonus_language_entitlement)|
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_otherlanguage2.checked=false; 
      total_bonus_languages--; }
  }



 if (document.form1.speak_otherlanguage3.checked==true)
  {
   total_bonus_languages++ ; 
   if ((total_bonus_languages>total_bonus_language_entitlement)|
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_otherlanguage3.checked=false; 
      total_bonus_languages--; }
  }



 if (document.form1.speak_otherlanguage4.checked==true)
  {
   total_bonus_languages++ ; 
   if ((total_bonus_languages>total_bonus_language_entitlement)|
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_otherlanguage4.checked=false; 
      total_bonus_languages--; }
  }



 if (document.form1.speak_otherlanguage5.checked==true)
  {
   total_bonus_languages++ ; 
   if ((total_bonus_languages>total_bonus_language_entitlement)|
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_otherlanguage5.checked=false; 
      total_bonus_languages--; }
  }



 if (document.form1.speak_otherlanguage6.checked==true)
  {
   total_bonus_languages++ ; 
   if ((total_bonus_languages>total_bonus_language_entitlement)|
      (skillbought_bonus_languages>skillbought_bonus_language_entitlement))
      {document.form1.speak_otherlanguage6.checked=false; 
      total_bonus_languages--; }
  }



 if ((!aarakocra_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(aarakocra_friendly))
      //&((skillbought_bonus_languages>0r)|(aarakocra_friendly))
      )
       {document.form1.speak_aarakocra_star.src="asterisk.gif"}
         else {document.form1.speak_aarakocra_star.src="no_asterisk.gif"}


 if ((!aboleth_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(aboleth_friendly))
      //&((skillbought_bonus_languages>0r)|(aboleth_friendly))
      )
       {document.form1.speak_aboleth_star.src="asterisk.gif"}
         else {document.form1.speak_aboleth_star.src="no_asterisk.gif"}





 if ((!abyssal_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(abyssal_friendly))
      //&((skillbought_bonus_languages>0r)|(abyssal_friendly))
      )
       {document.form1.speak_abyssal_star.src="asterisk.gif"}
         else {document.form1.speak_abyssal_star.src="no_asterisk.gif"}





 if ((!aquan_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(aquan_friendly))
      //&((skillbought_bonus_languages>0r)|(aquan_friendly))
      )
       {document.form1.speak_aquan_star.src="asterisk.gif"}
         else {document.form1.speak_aquan_star.src="no_asterisk.gif"}


 if ((!aklo_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(aklo_friendly))
      //&((skillbought_bonus_languages>0r)|(aklo_friendly))
      )
       {document.form1.speak_aklo_star.src="asterisk.gif"}
         else {document.form1.speak_aklo_star.src="no_asterisk.gif"}





 if ((!auran_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(auran_friendly))
      //&((skillbought_bonus_languages>0r)|(auran_friendly))
      )
       {document.form1.speak_auran_star.src="asterisk.gif"}
         else {document.form1.speak_auran_star.src="no_asterisk.gif"}





 if ((!celestial_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(celestial_friendly))
      //&((skillbought_bonus_languages>0r)|(celestial_friendly))
      )
       {document.form1.speak_celestial_star.src="asterisk.gif"}
         else {document.form1.speak_celestial_star.src="no_asterisk.gif"}





 if ((!darkelfsilent_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(darkelfsilent_friendly))
      //&((skillbought_bonus_languages>0r)|(darkelfsilent_friendly))
      )
       {document.form1.speak_darkelfsilent_star.src="asterisk.gif"}
         else {document.form1.speak_darkelfsilent_star.src="no_asterisk.gif"}





 if ((!draconic_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(draconic_friendly))
      //&((skillbought_bonus_languages>0r)|(draconic_friendly))
      )
       {document.form1.speak_draconic_star.src="asterisk.gif"}
         else {document.form1.speak_draconic_star.src="no_asterisk.gif"}





 if ((!dwarven_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(dwarven_friendly))
      //&((skillbought_bonus_languages>0r)|(dwarven_friendly))
      )
       {document.form1.speak_dwarven_star.src="asterisk.gif"}
         else {document.form1.speak_dwarven_star.src="no_asterisk.gif"}



 if ((!common_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(common_friendly))
      //&((skillbought_bonus_languages>0r)|(common_friendly))
      )
       {document.form1.speak_common_star.src="asterisk.gif"}
         else {document.form1.speak_common_star.src="no_asterisk.gif"}





 if ((!elven_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(elven_friendly))
      //&((skillbought_bonus_languages>0r)|(elven_friendly))
      )
       {document.form1.speak_elven_star.src="asterisk.gif"}
         else {document.form1.speak_elven_star.src="no_asterisk.gif"}





 if ((!giant_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(giant_friendly))
      //&((skillbought_bonus_languages>0r)|(giant_friendly))
      )
       {document.form1.speak_giant_star.src="asterisk.gif"}
         else {document.form1.speak_giant_star.src="no_asterisk.gif"}





 if ((!gith_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(gith_friendly))
      //&((skillbought_bonus_languages>0r)|(gith_friendly))
      )
       {document.form1.speak_gith_star.src="asterisk.gif"}
         else {document.form1.speak_gith_star.src="no_asterisk.gif"}





 if ((!gnoll_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(gnoll_friendly))
      //&((skillbought_bonus_languages>0r)|(gnoll_friendly))
      )
       {document.form1.speak_gnoll_star.src="asterisk.gif"}
         else {document.form1.speak_gnoll_star.src="no_asterisk.gif"}





 if ((!gnome_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(gnome_friendly))
      //&((skillbought_bonus_languages>0r)|(gnome_friendly))
      )
       {document.form1.speak_gnome_star.src="asterisk.gif"}
         else {document.form1.speak_gnome_star.src="no_asterisk.gif"}





 if ((!goblin_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(goblin_friendly))
      //&((skillbought_bonus_languages>0r)|(goblin_friendly))
      )
       {document.form1.speak_goblin_star.src="asterisk.gif"}
         else {document.form1.speak_goblin_star.src="no_asterisk.gif"}





 if ((!halfling_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(halfling_friendly))
      //&((skillbought_bonus_languages>0r)|(halfling_friendly))
      )
       {document.form1.speak_halfling_star.src="asterisk.gif"}
         else {document.form1.speak_halfling_star.src="no_asterisk.gif"}





 if ((!ignan_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(ignan_friendly))
      //&((skillbought_bonus_languages>0r)|(ignan_friendly))
      )
       {document.form1.speak_ignan_star.src="asterisk.gif"}
         else {document.form1.speak_ignan_star.src="no_asterisk.gif"}





 if ((!infernal_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(infernal_friendly))
      //&((skillbought_bonus_languages>0r)|(infernal_friendly))
      )
       {document.form1.speak_infernal_star.src="asterisk.gif"}
         else {document.form1.speak_infernal_star.src="no_asterisk.gif"}









 if ((!orc_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(orc_friendly))
      //&((skillbought_bonus_languages>0r)|(orc_friendly))
      )
       {document.form1.speak_orc_star.src="asterisk.gif"}
         else {document.form1.speak_orc_star.src="no_asterisk.gif"}





 if ((!pterran_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(pterran_friendly))
      //&((skillbought_bonus_languages>0r)|(pterran_friendly))
      )
       {document.form1.speak_pterran_star.src="asterisk.gif"}
         else {document.form1.speak_pterran_star.src="no_asterisk.gif"}





 if ((!sahuagin_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(sahuagin_friendly))
      //&((skillbought_bonus_languages>0r)|(sahuagin_friendly))
      )
       {document.form1.speak_sahuagin_star.src="asterisk.gif"}
         else {document.form1.speak_sahuagin_star.src="no_asterisk.gif"}





 if ((!sylvan_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(sylvan_friendly))
      //&((skillbought_bonus_languages>0r)|(sylvan_friendly))
      )
       {document.form1.speak_sylvan_star.src="asterisk.gif"}
         else {document.form1.speak_sylvan_star.src="no_asterisk.gif"}





 if ((!terran_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(terran_friendly))
      //&((skillbought_bonus_languages>0r)|(terran_friendly))
      )
       {document.form1.speak_terran_star.src="asterisk.gif"}
         else {document.form1.speak_terran_star.src="no_asterisk.gif"}





 if ((!thrikreen_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(thrikreen_friendly))
      //&((skillbought_bonus_languages>0r)|(thrikreen_friendly))
      )
       {document.form1.speak_thrikreen_star.src="asterisk.gif"}
         else {document.form1.speak_thrikreen_star.src="no_asterisk.gif"}





 if ((!xeph_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(xeph_friendly))
      //&((skillbought_bonus_languages>0r)|(xeph_friendly))
      )
       {document.form1.speak_xeph_star.src="asterisk.gif"}
         else {document.form1.speak_xeph_star.src="no_asterisk.gif"}





 if ((!undercommon_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(undercommon_friendly))
      //&((skillbought_bonus_languages>0r)|(undercommon_friendly))
      )
       {document.form1.speak_undercommon_star.src="asterisk.gif"}
         else {document.form1.speak_undercommon_star.src="no_asterisk.gif"}





 if ((!otherlanguage1_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(otherlanguage1_friendly))
      //&((skillbought_bonus_languages>0r)|(otherlanguage1_friendly))
      )
       {document.form1.speak_otherlanguage1_star.src="asterisk.gif"}
         else {document.form1.speak_otherlanguage1_star.src="no_asterisk.gif"}





 if ((!otherlanguage2_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(otherlanguage2_friendly))
      //&((skillbought_bonus_languages>0r)|(otherlanguage2_friendly))
      )
       {document.form1.speak_otherlanguage2_star.src="asterisk.gif"}
         else {document.form1.speak_otherlanguage2_star.src="no_asterisk.gif"}





 if ((!otherlanguage3_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(otherlanguage3_friendly))
      //&((skillbought_bonus_languages>0r)|(otherlanguage3_friendly))
      )
       {document.form1.speak_otherlanguage3_star.src="asterisk.gif"}
         else {document.form1.speak_otherlanguage3_star.src="no_asterisk.gif"}





 if ((!otherlanguage4_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(otherlanguage4_friendly))
      //&((skillbought_bonus_languages>0r)|(otherlanguage4_friendly))
      )
       {document.form1.speak_otherlanguage4_star.src="asterisk.gif"}
         else {document.form1.speak_otherlanguage4_star.src="no_asterisk.gif"}





 if ((!otherlanguage5_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(otherlanguage5_friendly))
      //&((skillbought_bonus_languages>0r)|(otherlanguage5_friendly))
      )
       {document.form1.speak_otherlanguage5_star.src="asterisk.gif"}
         else {document.form1.speak_otherlanguage5_star.src="no_asterisk.gif"}





 if ((!otherlanguage6_nativespeaker)
   &(total_bonus_languages<total_bonus_language_entitlement)
     &((skillbought_bonus_languages<skillbought_bonus_language_entitlement)|(otherlanguage6_friendly))
      //&((skillbought_bonus_languages>0r)|(otherlanguage6_friendly))
      )
       {document.form1.speak_otherlanguage6_star.src="asterisk.gif"}
         else {document.form1.speak_otherlanguage6_star.src="no_asterisk.gif"}





  }




function startup(){
   document.form1.title_list.length=0; 
  document.form1.title_list.options[0]=new Option("--------------------"); 

document.form1.Looks.value="";
document.form1.other_ranger_terrain_1.value="Other Terrain 1";
document.form1.other_ranger_terrain_2.value="Other Terrain 2";
recall_age();
Languages()
NegateFamiliarChoices();
NegateDruidChoices();
TurnOffFeatStars();
TurnOffArmsAndArmorStars();
npcother_class_name="NPC-Other Class";

document.form1.hair_color[0].checked=true;document.form1.hair_color[0].checked=false;
document.form1.hair_type[0].checked=true;document.form1.hair_type[0].checked=false;
document.form1.beard_type[0].checked=true;document.form1.beard_type[0].checked=false;
document.form1.skin_color[0].checked=true;document.form1.skin_color[0].checked=false;
document.form1.eye_color[0].checked=true;document.form1.eye_color[0].checked=false;
  document.form1.prestige_name.value="Prestige Class";

 EmptyPrestigeClassOptions();
 prestige_class_name="Prestige Class"; 
 wizard_specialty_name="Wizard"; 
 
 document.form1.moreAbout.value="";
 document.form1.additionalEquipment.value="";

 NegateRangerFoes(); 
 NegateRangerTerrains();
 if (document.form1.other_feat_1.value==""){document.form1.other_feat_1.value="Other Feat 1"; }
 if (document.form1.other_feat_2.value==""){document.form1.other_feat_2.value="Other Feat 2"; }
 if (document.form1.other_feat_3.value==""){document.form1.other_feat_3.value="Other Feat 3"; }
 if (document.form1.other_feat_4.value==""){document.form1.other_feat_4.value="Other Feat 4"; }
 if (document.form1.other_feat_5.value==""){document.form1.other_feat_5.value="Other Feat 5"; }
 if (document.form1.other_feat_6.value==""){document.form1.other_feat_6.value="Other Feat 6"; }
 if (document.form1.other_feat_7.value==""){document.form1.other_feat_7.value="Other Feat 7"; }
 if (document.form1.other_feat_8.value==""){document.form1.other_feat_8.value="Other Feat 8"; }
 if (document.form1.other_feat_9.value==""){document.form1.other_feat_9.value="Other Feat 9"; }
 if (document.form1.other_feat_10.value==""){document.form1.other_feat_10.value="Other Feat 10"; }
 if (document.form1.other_language_1_name.value==""){document.form1.other_language_1_name.value="Other Language 1"; }
 if (document.form1.other_language_2_name.value==""){document.form1.other_language_2_name.value="Other Language 2"; }
 if (document.form1.other_language_3_name.value==""){document.form1.other_language_3_name.value="Other Language 3"; }
 if (document.form1.other_language_4_name.value==""){document.form1.other_language_4_name.value="Other Language 4"; }
 if (document.form1.other_language_5_name.value==""){document.form1.other_language_5_name.value="Other Language 5"; }
 if (document.form1.other_language_6_name.value==""){document.form1.other_language_6_name.value="Other Language 6"; }
 if (document.form1.otherskill1_name.value==""){document.form1.otherskill1_name.value="Other Skill 1"; }
 if (document.form1.otherskill2_name.value==""){document.form1.otherskill2_name.value="Other Skill 2"; }
 if (document.form1.otherskill3_name.value==""){document.form1.otherskill3_name.value="Other Skill 3"; }
 prestige_any_spell_levels=0; 
 prestige_bard_spell_levels=0; 
 prestige_cleric_spell_levels=0; 
 prestige_druid_spell_levels=0; 
 prestige_paladin_spell_levels=0; 
 prestige_ranger_spell_levels=0; 
 prestige_sorcerer_spell_levels=0; 
 prestige_wizard_spell_levels=0;
  prestige_bonus_feat_entitlement=0;   //qqq

  document.form1.want_another_character.src="not_another_character.jpg"; 

  my_character_is_done=false; 
  document.form1.appraise_ics.checked=false; 
  document.form1.bluff_ics.checked=false; 
  document.form1.climb_ics.checked=false; 
  document.form1.acrobatics_ics.checked=false; 
  document.form1.craft_1_ics.checked=false; 
  document.form1.craft_2_ics.checked=false; 
  document.form1.craft_3_ics.checked=false; 
  document.form1.diplomacy_ics.checked=false; 
  document.form1.disabledevice_ics.checked=false; 
  document.form1.disguise_ics.checked=false; 
  document.form1.escapeartist_ics.checked=false; 
  document.form1.fly_ics.checked=false; 
  document.form1.handleanimal_ics.checked=false; 
  document.form1.heal_ics.checked=false; 
  document.form1.stealth_ics.checked=false; 
//  document.form1.hypnosis_ics.checked=false; 
  document.form1.intimidate_ics.checked=false; 
  document.form1.knowledgearcana_ics.checked=false; 
  document.form1.knowledgeengineering_ics.checked=false; 
  document.form1.knowledgedungeoneering_ics.checked=false; 
  document.form1.knowledgegeography_ics.checked=false; 
  document.form1.knowledgehistory_ics.checked=false; 
  document.form1.knowledgelocal_ics.checked=false; 
  document.form1.knowledgenobility_ics.checked=false; 
  document.form1.knowledgereligion_ics.checked=false; 
  document.form1.knowledgeplanes_ics.checked=false; 
  document.form1.perception_ics.checked=false; 
  document.form1.perform_1_ics.checked=false; 
  document.form1.perform_2_ics.checked=false; 
  document.form1.perform_3_ics.checked=false; 
  document.form1.perform_4_ics.checked=false; 
  document.form1.perform_5_ics.checked=false; 
  document.form1.profession_ics.checked=false; 
  document.form1.ride_ics.checked=false; 
  document.form1.sensemotive_ics.checked=false; 
  document.form1.sleightofhand_ics.checked=false; 
  document.form1.linguistics_ics.checked=false; 
  document.form1.spellcraft_ics.checked=false; 
  document.form1.survival_ics.checked=false; 
  document.form1.swim_ics.checked=false; 
  document.form1.usemagicdevice_ics.checked=false; 
 unarmored=false; 
 document.form1.moniker.value=""; 
 document.form1.stat1_list.selectedIndex=0; 
 document.form1.stat2_list.selectedIndex=0; 
 document.form1.stat3_list.selectedIndex=0; 
 document.form1.stat4_list.selectedIndex=0; 
 document.form1.stat5_list.selectedIndex=0; 
 document.form1.stat6_list.selectedIndex=0; 
 stat1=0; 
 stat2=0; 
 stat3=0; 
 stat4=0; 
 stat5=0; 
 stat6=0; 
 clearall(); 

 total_levels=0; 
 ClearAllAbilityAssignments()
 NegateTheBottomStuff(); 
 }


function clearall(){

 total_levels=0; 
 ClearAllAbilityAssignments()
 NegateTheBottomStuff(); 
 NegateWizardSpecialization(); 
 rangercombattrack=0; 

 missile_attack_string_1=""
 finesse_attack_string_1=""
 CMB_string_1=""
 CMD_string_1=""
 handheld_attack_string_1=""
 flurry_of_blows_string=""
 fortitude_string_1=""
 will_string_1=""
 reflex_string_1=""
 fear_save=0; 
 horror_save=0; 
 madness_save=0; 
 fear_string_1=""; 
 horror_string_1=""; 
 madness_string_1=""; 
 fear_string_2=""; 
 horror_string_2=""; 
 madness_string_2=""; 

 initiative_string_1=""
 missile_attack_string_2=""
 finesse_attack_string_2=""
 CMB_string_2=""
 CMD_string_2=""
 handheld_attack_string_2=""
 fortitude_string_2=""
 will_string_2=""
 reflex_string_2=""
 initiative_string_2=""

no_familiar=true; 
bat_familiar=false; 
cat_familiar=false; 
hawk_familiar=false; 
lizard_familiar=false; 
monkey_familiar=false; 
owl_familiar=false; 
rat_familiar=false; 
raven_familiar=false; 
snake_familiar=false; 
toad_familiar=false; 
weasel_familiar=false; 


already_knows_simple_weapons=false; 
already_knows_martial_weapons=false; 
already_knows_light_armor=false; 
already_knows_medium_armor=false; 
already_knows_heavy_armor=false; 
already_knows_shields=false; 
already_knows_tower_shield=false; 


 FeatsAreLocked=false; 
 skill_points_spent=0; 
 total_fighter_feats=0; 
 total_halfelf_feats=0; 
 total_monk_feats=0;
 total_r1_feats=0;
 total_r2_feats=0;
 high_level_rogue_count=0; 
 total_wizard_feats=0; 
 WizardSpells0=""; 
 WizardSpells1=""; 
 WizardSpells2=""; 
 WizardSpells3=""; 
 WizardSpells4=""; 
 WizardSpells5=""; 
 WizardSpells6=""; 
 WizardSpells7=""; 
 WizardSpells8=""; 
 WizardSpells9=""; 
 DruidSpells0=""; 
 DruidSpells1=""; 
 DruidSpells2=""; 
 DruidSpells3=""; 
 DruidSpells4=""; 
 DruidSpells5=""; 
 DruidSpells6=""; 
 DruidSpells7=""; 
 DruidSpells8=""; 
 DruidSpells9=""; 
 ClericSpells0=""; 
 ClericSpells1=""; 
 ClericSpells2=""; 
 ClericSpells3=""; 
 ClericSpells4=""; 
 ClericSpells5=""; 
 ClericSpells6=""; 
 ClericSpells7=""; 
 ClericSpells8=""; 
 ClericSpells9=""; 
 SorcererSpells0=""; 
 SorcererSpells1=""; 
 SorcererSpells2=""; 
 SorcererSpells3=""; 
 SorcererSpells4=""; 
 SorcererSpells5=""; 
 SorcererSpells6=""; 
 SorcererSpells7=""; 
 SorcererSpells8=""; 
 SorcererSpells9=""; 
 PaladinSpells0=""; 
 PaladinSpells1=""; 
 PaladinSpells2=""; 
 PaladinSpells3=""; 
 PaladinSpells4=""; 
 PaladinSpells5=""; 
 PaladinSpells6=""; 
 PaladinSpells7=""; 
 PaladinSpells8=""; 
 PaladinSpells9=""; 
 RangerSpells0=""; 
 RangerSpells1=""; 
 RangerSpells2=""; 
 RangerSpells3=""; 
 RangerSpells4=""; 
 RangerSpells5=""; 
 RangerSpells6=""; 
 RangerSpells7=""; 
 RangerSpells8=""; 
 RangerSpells9=""; 
 BardSpells0=""; 
 BardSpells1=""; 
 BardSpells2=""; 
 BardSpells3=""; 
 BardSpells4=""; 
 BardSpells5=""; 
 BardSpells6=""; 
 BardSpells7=""; 
 BardSpells8=""; 
 BardSpells9=""; 
 base_attack_bonus=0; 
 base_fortitude_bonus=0; 
 base_will_bonus=0; 
 base_reflex_bonus=0; 
 missile_attack=0; 
 finesse_attack=0; 
 CMB_attack=0; 
 handheld_attack=0; 
 fortitude_save=0; 
 reflex_save=0; 
 will_save=0; 
 initiative_modifier=0; 
 missile_attack=0; 
 finesse_attack=0; 

 z=0; 
 total_skill_points=0; 
 stringy=""
class_string=""
genderandrace_string="";
small=false; 
large=false;
has_uncanny_dodge=false; 
total_hit_points=0; 
total_armor_class=10; 
touch_armor_class=10; 
flatfooted_armor_class=10; 
armor_string=""; 
speed_string=""; 
shield_string=""; 
armor_class_string=""; 
dexterity_bonus_in_this_armor=0; 
document.form1.skillpointcount.value=""
document.form1.feat.value="This will monitor your feat selection."
has_acrobatic=false
has_agilemaneuvers=false
has_alertness=false
has_animalaffinity=false
has_arcanestrike=false
has_armorproficiencylight=false
has_armorproficiencymedium=false
has_armorproficiencyheavy=false
has_athletic=false
has_augmentsummoning=false
has_blindfight=false
has_combatcasting=false
has_combatexpertise=false
has_improveddisarm=false
has_improvedfeint=false
has_improvedtrip=false
has_whirlwindattack=false
has_combatreflexes=false
has_deceitful=false
has_defthands=false
has_dodge=false
has_mobility=false
has_springattack=false
has_endurance=false
has_diehard=false
has_eschewmaterials=false
has_exoticweaponproficiency=false
has_extrachannel=0
has_greatfortitude=false
has_improvedcounterspell=false
has_improvedcritical=0
has_improvedinitiative=false
has_improvedunarmedstrike=false
has_improvedgrapple=false
has_deflectarrows=false
has_snatcharrows=false
has_stunningfist=false
has_ironwill=false
has_leadership=false
has_lightningreflexes=false
has_magicalaptitude=false
has_martialweaponproficiency=false
has_mountedcombat=false
has_mountedarchery=false
has_ridebyattack=false
has_spiritedcharge=false
has_trample=false
has_naturalspell=false
has_persuasive=false
has_pointblankshot=false
has_farshot=false
has_preciseshot=false
has_rapidshot=false
has_manyshot=false
has_shotontherun=false
has_improvedpreciseshot=false
has_powerattack=false
has_cleave=false
has_greatcleave=false
has_improvedbullrush=false
has_improvedoverrun=false
has_improvedsunder=false
has_quickdraw=false
has_rapidreload=false
has_run=false
has_selfsufficient=false
has_shieldproficiency=false
has_improvedshieldbash=false
has_towershieldproficiency=false
has_simpleweaponproficiency=false
has_skillfocusappraise=false
has_skillfocusbluff=false
has_skillfocusclimb=false
has_skillfocusacrobatics=false
has_skillfocuscraft_1=false
has_skillfocuscraft_2=false
has_skillfocuscraft_3=false
has_skillfocusdiplomacy=false
has_skillfocusdisabledevice=false
has_skillfocusdisguise=false
has_skillfocusescapeartist=false
has_skillfocusfly=false
has_skillfocushandleanimal=false
has_skillfocusheal=false
has_skillfocusstealth=false
//has_skillfocushypnosis=false
has_skillfocusintimidate=false
has_skillfocusknowledgearcana=false
has_skillfocusknowledgeengineering=false
has_skillfocusknowledgedungeoneering=false
has_skillfocusknowledgegeography=false
has_skillfocusknowledgehistory=false
has_skillfocusknowledgelocal=false
has_skillfocusknowledgenature=false
has_skillfocusknowledgenobility=false
has_skillfocusknowledgereligion=false
has_skillfocusknowledgeplanes=false
has_skillfocuslinguistics=false
has_skillfocusperception=false
has_skillfocusperform_1=false
has_skillfocusperform_2=false
has_skillfocusperform_3=false
has_skillfocusperform_4=false
has_skillfocusperform_5=false
has_skillfocusprofession=false
has_skillfocusride=false
has_skillfocussensemotive=false
has_skillfocussleightofhand=false
has_skillfocusspellcraft=false
has_skillfocussurvival=false
has_skillfocusswim=false
has_skillfocususemagicdevice=false
has_spellfocusabjuration=false
has_spellfocusconjuration=false
has_spellfocusdivination=false
has_spellfocusenchantment=false
has_spellfocusevocation=false
has_spellfocusillusion=false
has_spellfocusnecromancy=false
has_spellfocustransmutation=false
has_greaterspellfocusabjuration=false
has_greaterspellfocusconjuration=false
has_greaterspellfocusdivination=false
has_greaterspellfocusenchantment=false
has_greaterspellfocusevocation=false
has_greaterspellfocusillusion=false
has_greaterspellfocusnecromancy=false
has_greaterspellfocustransmutation=false
has_spellmastery=0
has_spellpenetration=false
has_greaterspellpenetration=false
has_stealthy=false
has_stepup=false
has_strikeback=false
has_throwanything=false
has_toughness=false
has_twoweaponfighting=false
has_twoweapondefense=false
has_improvedtwoweaponfighting=false
has_greatertwoweaponfighting=false
has_weaponfinesse=false
has_otherfeat1=false
has_otherfeat2=false
has_otherfeat3=false
has_otherfeat4=false
has_otherfeat5=false
has_otherfeat6=false
has_otherfeat7=false
has_otherfeat8=false
has_otherfeat9=false
has_otherfeat10=false
has_weaponfocus=0
has_weaponspecialization=0
has_greaterweaponfocus=0
has_greaterweaponspecialization=0
has_brewpotion=false
has_craftmaa=false
has_craftrod=false
has_craftstaff=false
has_craftwand=false
has_craftwondrousitem=false
has_forgering=false
has_scribescroll=false
has_empowerspell=false
has_enlargespell=false
has_extendspell=false
has_heightenspell=false
has_maximizespell=false
has_quickenspell=false
has_silentspell=false
has_stillspell=false
has_widenspell=false
has_alignmentchannel=false;
has_arcanearmortraining=false;
has_arcanearmormastery=false;
has_catchoffguard=false;
has_channelsmite=false;
has_greaterdisarm=false;
has_greaterfeint=false;
has_greatertrip=false;
has_standstill=false;
has_commandundead=false;
has_criticalfocus=false;
has_bleedingcritical=false;
has_blindingcritical=false;
has_criticalmastery=false;
has_deafeningcritical=false;
has_sickeningcritical=false;
has_staggeringcritical=false;
has_stunningcritical=false;
has_tiringcritical=false;
has_exhaustingcritical=false;
has_deadlyaim=false;
has_defensivecombattraining=false;
has_disruptive=false;
has_spellbreaker=false;
has_windstance=false;
has_lightningstance=false;
has_elementalchannel=false;
has_extraki=0;
has_extralayonhands=0;
has_extramercy=0;
has_extraperformance=0;
has_extrarage=0;
has_fleet=false;
has_improvedgreatfortitude=false;
has_improvedchannel=false;
has_improvedfamiliar=false;
has_greatergrapple=false;
has_scorpionstyle=false;
has_gorgonsfist=false;
has_medusaswrath=false;
has_improvisedweaponmastery=false;
has_intimidatingprowess=false;
has_improvedironwill=false;
has_improvedlightningreflexes=false;
has_lunge=false;
has_mastercraftsman=false;
has_unseat=false;
has_nimblemoves=false;
has_acrobaticsteps=false;
has_pinpointtargeting=false;
has_greaterbullrush=false;
has_greateroverrun=false;
has_greatersunder=false;
has_selectivechanneling=false;
has_shieldslam=false;
has_shieldmaster=false;
has_shieldfocus=false;
has_greatershieldfocus=false;

has_turnundead=false;
has_doubleslice=false;
has_twoweaponrend=false;
has_vitalstrike=false;
has_improvedvitalstrike=false;
has_greatervitalstrike=false;
has_dazzlingdisplay=false;
has_shatterdefenses=false;
has_deadlystroke=false;
has_penetratingstrike=false;
has_greaterpenetratingstrike=false;



has_air_domain=false
has_animal_domain=false
has_chaos_domain=false
has_death_domain=false
has_destruction_domain=false
has_earth_domain=false
has_evil_domain=false
has_fire_domain=false
has_good_domain=false
has_healing_domain=false
has_knowledge_domain=false
has_law_domain=false
has_luck_domain=false
has_magic_domain=false
has_plant_domain=false
has_protection_domain=false
has_strength_domain=false
has_sun_domain=false
has_travel_domain=false
has_trickery_domain=false
has_war_domain=false
has_water_domain=false
has_artifice_domain=false;
has_charm_domain=false;
has_community_domain=false;
has_darkness_domain=false;
has_glory_domain=false;
has_liberation_domain=false;
has_madness_domain=false;
has_nobility_domain=false;
has_repose_domain=false;
has_rune_domain=false;
has_weather_domain=false;
channels_energy=0; 


has_aberrant_bloodline=false;
has_abyssal_bloodline=false;
has_arcane_bloodline=false;
has_celestial_bloodline=false;
has_destined_bloodline=false;
has_draconic_bloodline=false;
has_elemental_bloodline=false;
has_fey_bloodline=false;
has_infernal_bloodline=false;
has_undead_bloodline=false;


document.form1.choose_energy[0].checked=false; 
document.form1.choose_energy[1].checked=false; 
document.form1.choose_bloodline[0].checked=true;
document.form1.choose_bloodline[0].checked=false;
document.form1.air_domain.checked=false; 
document.form1.animal_domain.checked=false; 
document.form1.chaos_domain.checked=false; 
document.form1.death_domain.checked=false; 
document.form1.destruction_domain.checked=false; 
document.form1.earth_domain.checked=false; 
document.form1.evil_domain.checked=false; 
document.form1.fire_domain.checked=false; 
document.form1.good_domain.checked=false; 
document.form1.healing_domain.checked=false; 
document.form1.knowledge_domain.checked=false; 
document.form1.law_domain.checked=false; 
document.form1.luck_domain.checked=false; 
document.form1.magic_domain.checked=false; 
document.form1.plant_domain.checked=false; 
document.form1.protection_domain.checked=false; 
document.form1.strength_domain.checked=false; 
document.form1.sun_domain.checked=false; 
document.form1.travel_domain.checked=false; 
document.form1.trickery_domain.checked=false; 
document.form1.war_domain.checked=false; 
document.form1.water_domain.checked=false; 
document.form1.artifice_domain.checked=false;
document.form1.charm_domain.checked=false;
document.form1.community_domain.checked=false;
document.form1.darkness_domain.checked=false;
document.form1.glory_domain.checked=false;
document.form1.liberation_domain.checked=false;
document.form1.madness_domain.checked=false;
document.form1.nobility_domain.checked=false;
document.form1.repose_domain.checked=false;
document.form1.rune_domain.checked=false;
document.form1.weather_domain.checked=false;

WipeBloodlines();

document.form1.ranger_combat_track[0].checked=false; 
document.form1.ranger_combat_track[1].checked=false; 
document.form1.choose_familiar[0].checked=true; 
document.form1.choose_familiar[0].checked=false; 
document.form1.choose_specialty[0].checked=true; 
document.form1.choose_specialty[0].checked=false; 
document.form1.forbid_abjuration.checked=false; 
document.form1.forbid_conjuration.checked=false; 
document.form1.forbid_divination.checked=false; 
document.form1.forbid_enchantment.checked=false; 
document.form1.forbid_evocation.checked=false; 
document.form1.forbid_illusion.checked=false; 
document.form1.forbid_necromancy.checked=false; 
document.form1.forbid_transmutation.checked=false; 
uncheck_feat_boxes(); 
NegateAnimalCompanionStuff();
 fighterfeatentitlement=0; 
 r1featentitlement=0; 
 r2featentitlement=0; 
 genericfeatentitlement=0; 
 sorcererfeatentitlement=0;
 wizardfeatentitlement=0; 
monkfeatentitlement=0;
 halfelffeatentitlement=0;
 document.form1.firststatistic.value=""
 document.form1.secondstatistic.value=""
 document.form1.thirdstatistic.value=""
 document.form1.fourthstatistic.value=""
 document.form1.fifthstatistic.value=""
 document.form1.sixthstatistic.value=""
 document.form1.first_comment_box.value="Roll the dice!"
/// if (document.form1.methods_list.selectedIndex==4)

//  {document.form1.first_comment_box.value="Simple entry.  "}
 if (document.form1.methods_list.selectedIndex==4)
  {document.form1.first_comment_box.value="Point buy.  "; RollSomeDice(); }
 if (document.form1.methods_list.selectedIndex==3)
  {document.form1.first_comment_box.value="Elite array.  "; RollSomeDice(); }
 if (document.form1.methods_list.selectedIndex==5)
  {document.form1.first_comment_box.value="Non-Elite array.  "; RollSomeDice(); }
 if (document.form1.methods_list.selectedIndex==7)
  {document.form1.first_comment_box.value="Simple Entry.  "; RollSomeDice(); }
 document.form1.second_comment_box.value=""
 document.form1.third_comment_box.value=""
 document.form1.fourth_comment_box.value=""
 document.form1.fifth_comment_box.value=""
 document.form1.sixth_comment_box.value="Keep working"
 document.form1.about_appraise.value=""
 document.form1.about_bluff.value=""
 document.form1.about_climb.value=""
 document.form1.about_acrobatics.value=""
 document.form1.about_craft_1.value=""
 document.form1.about_craft_2.value=""
 document.form1.about_craft_3.value=""
 document.form1.about_diplomacy.value=""

 document.form1.about_disabledevice.value=""
 document.form1.about_disguise.value=""
 document.form1.about_escapeartist.value=""
 document.form1.about_fly.value=""
 document.form1.about_handleanimal.value=""
 document.form1.about_heal.value=""
 document.form1.about_stealth.value=""
// document.form1.about_hypnosis.value=""
 document.form1.about_intimidate.value=""
 document.form1.about_knowledgearcana.value=""
 document.form1.about_knowledgeengineering.value=""
 document.form1.about_knowledgedungeoneering.value=""
 document.form1.about_knowledgegeography.value=""
 document.form1.about_knowledgehistory.value=""
 document.form1.about_knowledgelocal.value=""
 document.form1.about_knowledgenature.value=""

 document.form1.about_knowledgenobility.value=""
 document.form1.about_knowledgereligion.value=""
 document.form1.about_knowledgeplanes.value=""
 document.form1.about_perception.value=""
 document.form1.about_perform_1.value=""
 document.form1.about_perform_2.value=""
 document.form1.about_perform_3.value=""
 document.form1.about_perform_4.value=""
 document.form1.about_perform_5.value=""
 document.form1.about_profession.value=""
 document.form1.about_ride.value=""
 document.form1.about_sensemotive.value=""
 document.form1.about_sleightofhand.value=""
 document.form1.about_linguistics.value=""
 document.form1.about_spellcraft.value=""
 document.form1.about_survival.value=""
 document.form1.about_swim.value=""
 document.form1.about_usemagicdevice.value=""
 document.form1.about_otherskill1.value=""
 document.form1.about_otherskill2.value=""
 document.form1.about_otherskill3.value=""


 NegateAllClassChoicesHereAndBelow(1)

 NegateElevenClassLevels()
 rayce=0; 
 document.form1.how_tall.selectedIndex=0; 
 document.form1.how_heavy.selectedIndex=0; 
 alignment=0; 
 total_levels=0; 
 gender=0; 
 z=0; while (z<21)
 {
 strength=0; 
 wisdom=0; 
 dexterity=0; 
 intelligence=0; 
 charisma=0; 
 constitution=0; 
 z++ ; }
 intelligence01=0; 
 intelligence04=0; 
 intelligence08=0; 
 intelligence12=0; 
 intelligence16=0; 
 intelligence20=0; 
 newHP01=0; 
 newHP02=0; 
 newHP03=0; 
 newHP04=0; 
 newHP05=0; 
 newHP06=0; 
 newHP07=0; 
 newHP08=0; 
 newHP09=0; 
 newHP10=0; 
 newHP11=0; 
 newHP12=0; 
 newHP13=0; 
 newHP14=0; 
 newHP15=0; 
 newHP16=0; 
 newHP17=0; 
 newHP18=0; 
 newHP19=0; 
 newHP20=0; 

 class01=0; 
 class02=0; 
 class03=0; 
 class04=0; 
 class05=0; 
 class06=0; 
 class07=0; 
 class08=0; 
 class09=0; 
 class10=0; 
 class11=0; 
 class12=0; 
 class13=0; 
 class14=0; 
 class15=0; 
 class16=0; 
 class17=0; 
 class18=0; 
 class19=0; 
 class20=0; 

 SkillPointsAreLocked=false; 
 ClassesHaveBeenEstablished=false; 
 CharacterTypeHasBeenEstablished=false; 
 AbilitiesHaveBeenEstablished=false; 
 AbilitiesAreProperlyAssigned=false; 
 DiceHaveBeenRolled=false; 
 AbilityIncreasesAreLocked=false; 
 FighterFeatsEtcFrozen=false; 
 FeatsAreLocked=false; 
 upitat00=0; 
 upitat04=0; 
 upitat08=0; 
 upitat12=0; 
 upitat16=0; 
 upitat20=0; 

 WipeDomains(); 
 WipeBloodlines();
 ClearRace()
 ClearGender()
 ClearAlignment()
 ClearTotalLevels()
 NegateSkills()
 NegateAllUp00()
 NegateAllUp04()
 NegateAllUp08()
 NegateAllUp12()
 NegateAllUp16()
 NegateAllUp20()
 AddUpTheClasses(); 
 PointBuyIsSevensOrBetter(); 
 RememberFeats(); 
 }

function NegateTheBottomStuff(){
  document.form1.dagger.checked=false; 
  document.form1.punchingdagger.checked=false; 
  document.form1.gauntlet.checked=false; 
  document.form1.spikedgauntlet.checked=false; 
  document.form1.lightmace.checked=false; 
  document.form1.sickle.checked=false; 
  document.form1.club.checked=false; 
  document.form1.heavymace.checked=false; 
  document.form1.morningstar.checked=false; 
  document.form1.shortspear.checked=false; 
  document.form1.longspear.checked=false; 
  document.form1.quarterstaff.checked=false; 
  document.form1.spear.checked=false; 
  document.form1.heavycrossbow.checked=false; 
  document.form1.lightcrossbow.checked=false; 
  document.form1.dart.checked=false; 
  document.form1.javelin.checked=false; 
  document.form1.sling.checked=false; 
  document.form1.throwingaxe.checked=false; 
  document.form1.lighthammer.checked=false; 
  document.form1.handaxe.checked=false; 
  document.form1.kukri.checked=false; 
  document.form1.lightpick.checked=false; 
  document.form1.sap.checked=false; 
  document.form1.lightshield.checked=false; 
  document.form1.spikedarmor.checked=false; 
  document.form1.lightspikedshield.checked=false; 
  document.form1.shortsword.checked=false; 
  document.form1.battleaxe.checked=false; 
  document.form1.flail.checked=false; 
  document.form1.longsword.checked=false; 
  document.form1.heavypick.checked=false; 
  document.form1.rapier.checked=false; 
  document.form1.scimitar.checked=false; 
  document.form1.heavyshield.checked=false; 
  document.form1.trident.checked=false; 
  document.form1.warhammer.checked=false; 
  document.form1.falchion.checked=false; 
  document.form1.glaive.checked=false; 
  document.form1.greataxe.checked=false; 
  document.form1.greatclub.checked=false; 
  document.form1.heavyflail.checked=false; 
  document.form1.greatsword.checked=false; 
  document.form1.guisarme.checked=false; 
  document.form1.halberd.checked=false; 
  document.form1.lance.checked=false; 
  document.form1.ranseur.checked=false; 
  document.form1.scythe.checked=false; 
  document.form1.longbow.checked=false; 
  document.form1.compositelongbow.checked=false; 
  document.form1.shortbow.checked=false; 
  document.form1.compositeshortbow.checked=false; 
  document.form1.kama.checked=false; 
  document.form1.nanchaku.checked=false; 
  document.form1.sai.checked=false; 
  document.form1.siangham.checked=false; 
  document.form1.bastardsword.checked=false; 
  document.form1.dwarvenwaraxe.checked=false; 
  document.form1.whip.checked=false; 
  document.form1.orcdoubleaxe.checked=false; 
  document.form1.spikedchain.checked=false; 
  document.form1.direflail.checked=false; 
  document.form1.gnomehookedhammer.checked=false; 
  document.form1.twobladedsword.checked=false; 
  document.form1.dwarvenurgrosh.checked=false; 
  document.form1.bolas.checked=false; 
  document.form1.handcrossbow.checked=false; 
  document.form1.repeatingheavycrossbow.checked=false; 
  document.form1.repeatinglightcrossbow.checked=false; 
  document.form1.net.checked=false; 
  document.form1.shuriken.checked=false; 
  document.form1.pistol.checked=false; 
  document.form1.musket.checked=false; 
  document.form1.armor_radio[0].checked=false; 
  document.form1.armor_radio[1].checked=false; 
  document.form1.armor_radio[2].checked=false; 
  document.form1.armor_radio[3].checked=false; 
  document.form1.armor_radio[4].checked=false; 
  document.form1.armor_radio[5].checked=false; 
  document.form1.armor_radio[6].checked=false; 
  document.form1.armor_radio[7].checked=false; 
  document.form1.armor_radio[8].checked=false; 
  document.form1.armor_radio[9].checked=false; 
  document.form1.armor_radio[10].checked=false; 
  document.form1.armor_radio[11].checked=false; 
  document.form1.armor_radio[12].checked=false; 
  document.form1.shield_radio[0].checked=false; 
  document.form1.shield_radio[1].checked=false; 
  document.form1.shield_radio[2].checked=false; 
  document.form1.shield_radio[3].checked=false; 
  document.form1.shield_radio[4].checked=false; 
  document.form1.shield_radio[5].checked=false; 
  document.form1.shield_radio[6].checked=false;
  document.form1.hair_color[0].checked=true;document.form1.hair_color[0].checked=false;
  document.form1.hair_type[0].checked=true;document.form1.hair_type[0].checked=false;
  document.form1.skin_color[0].checked=true;document.form1.skin_color[0].checked=false;
  document.form1.eye_color[0].checked=true;document.form1.eye_color[0].checked=false;



  document.form1.speak_aarakocra.checked=false; 
  document.form1.speak_abyssal.checked=false; 
  document.form1.speak_aklo.checked=false; 
  document.form1.speak_aquan.checked=false; 
  document.form1.speak_auran.checked=false; 
  document.form1.speak_celestial.checked=false; 
  document.form1.speak_draconic.checked=false; 
  document.form1.speak_dwarven.checked=false; 
  document.form1.speak_common.checked=false; 
  document.form1.speak_elven.checked=false; 
  document.form1.speak_darkelfsilent.checked=false; 
  document.form1.speak_giant.checked=false; 
  document.form1.speak_gith.checked=false; 
  document.form1.speak_gnoll.checked=false; 
  document.form1.speak_gnome.checked=false; 
  document.form1.speak_goblin.checked=false; 
  document.form1.speak_halfling.checked=false; 
  document.form1.speak_ignan.checked=false; 
  document.form1.speak_infernal.checked=false; 
  document.form1.speak_aboleth.checked=false; 
  document.form1.speak_orc.checked=false; 
  document.form1.speak_pterran.checked=false; 
  document.form1.speak_sylvan.checked=false; 
  document.form1.speak_sahuagin.checked=false; 
  document.form1.speak_terran.checked=false; 
  document.form1.speak_thrikreen.checked=false; 
  document.form1.speak_xeph.checked=false; 
  document.form1.speak_undercommon.checked=false; 
  document.form1.speak_otherlanguage1.checked=false; 
  document.form1.speak_otherlanguage2.checked=false; 
  document.form1.speak_otherlanguage3.checked=false; 
  document.form1.speak_otherlanguage4.checked=false; 
  document.form1.speak_otherlanguage5.checked=false; 
  document.form1.speak_otherlanguage6.checked=false; 
  document.form1.backpack.checked=false; 
  document.form1.barrel.checked=false; 
  document.form1.basket.checked=false; 
  document.form1.bedroll.checked=false; 
  document.form1.bell.checked=false; 
  document.form1.blockandtackle.checked=false; 
  document.form1.bottle.checked=false; 
  document.form1.bucket.checked=false; 
  document.form1.caltrops.checked=false; 
  document.form1.candle.checked=false; 
  document.form1.canvas.checked=false; 
  document.form1.casemaporscroll.checked=false; 

  document.form1.chalk.checked=false; 
  document.form1.chest.checked=false; 
  document.form1.crowbar.checked=false; 
  document.form1.fishhook.checked=false; 
  document.form1.fishingnet.checked=false; 
  document.form1.flintandsteel.checked=false; 
  document.form1.grapplinghook.checked=false; 
  document.form1.hammer.checked=false; 
  document.form1.inkvial.checked=false; 
  document.form1.inkpen.checked=false; 
  document.form1.jugclay.checked=false; 
  document.form1.ladder.checked=false; 
  document.form1.lampcommon.checked=false; 
  document.form1.lanternbullseye.checked=false; 
  document.form1.lanternhooded.checked=false; 
  document.form1.mirror.checked=false; 
  document.form1.mug.checked=false; 
  document.form1.pick.checked=false; 
  document.form1.pitcher.checked=false; 
  document.form1.pole.checked=false; 
  document.form1.pot.checked=false; 
  document.form1.ram.checked=false; 
  document.form1.sealingwax.checked=false; 
  document.form1.sewingneedle.checked=false; 
  document.form1.signalwhistle.checked=false; 
  document.form1.signetring.checked=false; 
  document.form1.sledge.checked=false; 
  document.form1.soap.checked=false; 
  document.form1.spadeorshovel.checked=false; 
  document.form1.spyglass.checked=false; 
  document.form1.tent.checked=false; 
  document.form1.whetstone.checked=false; 
  document.form1.alchemistlab.checked=false; 
  document.form1.artisantools.checked=false; 
  document.form1.climberskit.checked=false; 
  document.form1.disguisekit.checked=false; 
  document.form1.healerkit.checked=false; 
  document.form1.hollyandmistletoe.checked=false; 
  document.form1.holysymbolwooden.checked=false; 

  document.form1.holysymbolsilver.checked=false; 
  document.form1.hourglass.checked=false; 
  document.form1.magnifyingglass.checked=false; 
  document.form1.musicalinstrument.checked=false; 
  document.form1.scale.checked=false; 

  document.form1.spellcomponentpouch.checked=false; 
  document.form1.thievestools.checked=false; 
  document.form1.blanketwinter_list.selectedIndex=0; 
  document.form1.chain.selectedIndex=0; 
  document.form1.firewood.selectedIndex=0; 
  document.form1.flask.selectedIndex=0; 
  document.form1.lock.selectedIndex=0; 
  document.form1.manacles.selectedIndex=0; 
  document.form1.oilflask.selectedIndex=0; 
  document.form1.paper.selectedIndex=0; 
  document.form1.parchment.selectedIndex=0; 
  document.form1.piton.selectedIndex=0; 
  document.form1.pouch.selectedIndex=0; 
  document.form1.rations.selectedIndex=0; 
  document.form1.ropehempen.selectedIndex=0; 
  document.form1.ropesilk.selectedIndex=0; 
  document.form1.sack.selectedIndex=0; 
  document.form1.vialinkorpotion.selectedIndex=0; 
  document.form1.torch.selectedIndex=0; 
  document.form1.waterskin.selectedIndex=0; 
  document.form1.spellbook.selectedIndex=0; 
  document.form1.tool.selectedIndex=0; 
  document.form1.arrows.selectedIndex=0; 
  document.form1.bullets.selectedIndex=0; 
  document.form1.slingbullets.selectedIndex=0; 
  document.form1.throwingdaggers.selectedIndex=0; 
  document.form1.crossbowbolts.selectedIndex=0; 
 }

function TurnOffArmsAndArmorStars(){
document.form1.gauntlet_star.src="no_asterisk.gif";
document.form1.dagger_star.src="no_asterisk.gif";
document.form1.punchingdagger_star.src="no_asterisk.gif";
document.form1.spikedgauntlet_star.src="no_asterisk.gif";
document.form1.lightmace_star.src="no_asterisk.gif";
document.form1.sickle_star.src="no_asterisk.gif";
document.form1.club_star.src="no_asterisk.gif";
document.form1.heavymace_star.src="no_asterisk.gif";
document.form1.morningstar_star.src="no_asterisk.gif";
document.form1.shortspear_star.src="no_asterisk.gif";
document.form1.longspear_star.src="no_asterisk.gif";
document.form1.quarterstaff_star.src="no_asterisk.gif";
document.form1.spear_star.src="no_asterisk.gif";
document.form1.heavycrossbow_star.src="no_asterisk.gif";
document.form1.lightcrossbow_star.src="no_asterisk.gif";
document.form1.dart_star.src="no_asterisk.gif";
document.form1.javelin_star.src="no_asterisk.gif";
document.form1.sling_star.src="no_asterisk.gif";
document.form1.throwingaxe_star.src="no_asterisk.gif";
document.form1.lighthammer_star.src="no_asterisk.gif";
document.form1.handaxe_star.src="no_asterisk.gif";
document.form1.kukri_star.src="no_asterisk.gif";
document.form1.lightpick_star.src="no_asterisk.gif";
document.form1.sap_star.src="no_asterisk.gif";
document.form1.lightshield_star.src="no_asterisk.gif";
document.form1.spikedarmor_star.src="no_asterisk.gif";
document.form1.lightspikedshield_star.src="no_asterisk.gif";
document.form1.shortsword_star.src="no_asterisk.gif";
document.form1.battleaxe_star.src="no_asterisk.gif";
document.form1.flail_star.src="no_asterisk.gif";
document.form1.longsword_star.src="no_asterisk.gif";
document.form1.heavypick_star.src="no_asterisk.gif";
document.form1.rapier_star.src="no_asterisk.gif";
document.form1.scimitar_star.src="no_asterisk.gif";
document.form1.heavyshield_star.src="no_asterisk.gif";
document.form1.trident_star.src="no_asterisk.gif";
document.form1.warhammer_star.src="no_asterisk.gif";
document.form1.falchion_star.src="no_asterisk.gif";
document.form1.glaive_star.src="no_asterisk.gif";
document.form1.greataxe_star.src="no_asterisk.gif";
document.form1.greatclub_star.src="no_asterisk.gif";
document.form1.heavyflail_star.src="no_asterisk.gif";
document.form1.greatsword_star.src="no_asterisk.gif";
document.form1.guisarme_star.src="no_asterisk.gif";
document.form1.halberd_star.src="no_asterisk.gif";
document.form1.lance_star.src="no_asterisk.gif";
document.form1.ranseur_star.src="no_asterisk.gif";
document.form1.scythe_star.src="no_asterisk.gif";
document.form1.longbow_star.src="no_asterisk.gif";
document.form1.compositelongbow_star.src="no_asterisk.gif";
document.form1.shortbow_star.src="no_asterisk.gif";
document.form1.compositeshortbow_star.src="no_asterisk.gif";
document.form1.kama_star.src="no_asterisk.gif";
document.form1.nanchaku_star.src="no_asterisk.gif";
document.form1.sai_star.src="no_asterisk.gif";
document.form1.siangham_star.src="no_asterisk.gif";
document.form1.bastardsword_star.src="no_asterisk.gif";
document.form1.dwarvenwaraxe_star.src="no_asterisk.gif";
document.form1.whip_star.src="no_asterisk.gif";
document.form1.orcdoubleaxe_star.src="no_asterisk.gif";
document.form1.spikedchain_star.src="no_asterisk.gif";
document.form1.direflail_star.src="no_asterisk.gif";
document.form1.gnomehookedhammer_star.src="no_asterisk.gif";
document.form1.twobladedsword_star.src="no_asterisk.gif";
document.form1.dwarvenurgrosh_star.src="no_asterisk.gif";
document.form1.bolas_star.src="no_asterisk.gif";
document.form1.handcrossbow_star.src="no_asterisk.gif";
document.form1.repeatingheavycrossbow_star.src="no_asterisk.gif";
document.form1.repeatinglightcrossbow_star.src="no_asterisk.gif";
document.form1.net_star.src="no_asterisk.gif";
document.form1.shuriken_star.src="no_asterisk.gif";
document.form1.pistol_star.src="no_asterisk.gif";
document.form1.musket_star.src="no_asterisk.gif";
document.form1.no_shield_star.src="no_asterisk.gif";
document.form1.buckler_star.src="no_asterisk.gif";
document.form1.lightwoodenshield_star.src="no_asterisk.gif";
document.form1.lightsteelshield_star.src="no_asterisk.gif";
document.form1.heavywoodenshield_star.src="no_asterisk.gif";
document.form1.heavysteelshield_star.src="no_asterisk.gif";
document.form1.towershield_star.src="no_asterisk.gif";
document.form1.no_armor_star.src="no_asterisk.gif";
document.form1.padded_armor_star.src="no_asterisk.gif";
document.form1.leather_armor_star.src="no_asterisk.gif";
document.form1.studdedleather_armor_star.src="no_asterisk.gif";
document.form1.chain_shirt_armor_star.src="no_asterisk.gif";
document.form1.hide_armor_star.src="no_asterisk.gif";
document.form1.scale_armor_star.src="no_asterisk.gif";
document.form1.chainmail_star.src="no_asterisk.gif";
document.form1.breastplate_star.src="no_asterisk.gif";
document.form1.splintmail_star.src="no_asterisk.gif";
document.form1.bandedmail_star.src="no_asterisk.gif";
document.form1.halfplate_star.src="no_asterisk.gif";
document.form1.fullplate_star.src="no_asterisk.gif";

 }

function Arms(){
 if (document.form1.cult_weapons.checked==false)
 {
   if ((already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.gauntlet.checked=false; }

   if ((wizard_levels==0)&(monk_levels==0)&(druid_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.dagger.checked=false; document.form1.throwingdaggers.selectedIndex=0;}

   if ((already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.punchingdagger.checked=false; }

   if ((already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.spikedgauntlet.checked=false; }

   if ((already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.lightmace.checked=false; }

   if ((druid_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.sickle.checked=false; }

   if ((monk_levels==0)&(druid_levels==0)&(wizard_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.club.checked=false; }

   if ((already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.heavymace.checked=false; }

   if ((already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.morningstar.checked=false; }

   if ((druid_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.shortspear.checked=false; }

   if ((already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.longspear.checked=false; }

   if ((wizard_levels==0)&(monk_levels==0)&(druid_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.quarterstaff.checked=false; }

   if ((druid_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.spear.checked=false; }

   if ((wizard_levels==0)&(monk_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.heavycrossbow.checked=false; }

   if ((wizard_levels==0)&(monk_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.lightcrossbow.checked=false; }

   if ((already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.dart.checked=false; }

   if ((monk_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.javelin.checked=false; }

   if ((monk_levels==0)&(druid_levels==0)&(already_knows_simple_weapons==false)&(has_simpleweaponproficiency==false))
     {document.form1.sling.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.throwingaxe.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.lighthammer.checked=false; }

   if ((monk_levels==0)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.handaxe.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.kukri.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.lightpick.checked=false; }

   if ((bard_levels==0)&(rogue_levels==0)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.sap.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.lightshield.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.spikedarmor.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.lightspikedshield.checked=false; }

   if ((rogue_levels==0)&(rayce!=12)&(bard_levels==0)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.shortsword.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.battleaxe.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.flail.checked=false; }

   if ((rayce!=3)&(bard_levels==0)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.longsword.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.heavypick.checked=false; }

   if ((rayce!=3)&(rogue_levels==0)&(rayce!=12)&(bard_levels==0)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.rapier.checked=false; }

   if ((druid_levels==0)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.scimitar.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.heavyshield.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.trident.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.warhammer.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false)&(rayce!=7)&(rayce!=22))
     {document.form1.falchion.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.glaive.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false)&(rayce!=7)&(rayce!=22))
     {document.form1.greataxe.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.greatclub.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.heavyflail.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.greatsword.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.guisarme.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.halberd.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.lance.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.ranseur.checked=false; }

   if ((already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.scythe.checked=false; }

   if ((rayce!=3)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.longbow.checked=false; }

   if ((rayce!=3)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.compositelongbow.checked=false; }

   if ((rayce!=3)&(rogue_levels==0)&(bard_levels==0)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.shortbow.checked=false; }

   if ((rayce!=3)&(already_knows_martial_weapons==false)&(has_martialweaponproficiency==false))
     {document.form1.compositeshortbow.checked=false; }

   if ((monk_levels==0)&(has_exoticweaponproficiency==false))
     {document.form1.kama.checked=false; }

   if ((monk_levels==0)&(has_exoticweaponproficiency==false))
     {document.form1.nanchaku.checked=false; }

   if ((monk_levels==0)&(has_exoticweaponproficiency==false))
     {document.form1.sai.checked=false; }

   if ((monk_levels==0)&(has_exoticweaponproficiency==false))
     {document.form1.siangham.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.bastardsword.checked=false; }

   if ((has_exoticweaponproficiency==false)&(rayce!=4))
     {document.form1.dwarvenwaraxe.checked=false; }

   if ((bard_levels==0)&&(has_exoticweaponproficiency==false))
     {document.form1.whip.checked=false; }

   if ((has_exoticweaponproficiency==false)&(rayce!=7))
     {document.form1.orcdoubleaxe.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.spikedchain.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.direflail.checked=false; }

   if ((has_exoticweaponproficiency==false)&(rayce!=5))
     {document.form1.gnomehookedhammer.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.twobladedsword.checked=false; }

   if ((has_exoticweaponproficiency==false)&(rayce!=4))
     {document.form1.dwarvenurgrosh.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.bolas.checked=false; }

   if ((rogue_levels==0)&(rayce!=12)&(has_exoticweaponproficiency==false))
     {document.form1.handcrossbow.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.repeatingheavycrossbow.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.repeatinglightcrossbow.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.net.checked=false; }

   if ((monk_levels==0)&(has_exoticweaponproficiency==false))
     {document.form1.shuriken.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.pistol.checked=false; }

   if ((has_exoticweaponproficiency==false))
     {document.form1.musket.checked=false; }
}
   if ((already_knows_light_armor==false)&(has_armorproficiencylight==false))
     {document.form1.armor_radio[1].checked=false; }

   if ((already_knows_light_armor==false)&(has_armorproficiencylight==false))
     {document.form1.armor_radio[2].checked=false; }

   if ((druid_levels>0)|((already_knows_light_armor==false)&(has_armorproficiencylight==false)))
     {document.form1.armor_radio[3].checked=false; }

   if ((druid_levels>0)|((already_knows_light_armor==false)&(has_armorproficiencylight==false)))
     {document.form1.armor_radio[4].checked=false; }

   if ((already_knows_medium_armor==false)&(has_armorproficiencymedium==false))
     {document.form1.armor_radio[5].checked=false; }

   if ((druid_levels>0)|((already_knows_medium_armor==false)&(has_armorproficiencymedium==false)))
     {document.form1.armor_radio[6].checked=false; }

   if ((druid_levels>0)|((already_knows_medium_armor==false)&(has_armorproficiencymedium==false)))
     {document.form1.armor_radio[7].checked=false; }

   if ((druid_levels>0)|((already_knows_medium_armor==false)&(has_armorproficiencymedium==false)))
     {document.form1.armor_radio[8].checked=false; }

   if ((druid_levels>0)|((already_knows_heavy_armor==false)&(has_armorproficiencyheavy==false)))
     {document.form1.armor_radio[9].checked=false; }

   if ((druid_levels>0)|((already_knows_heavy_armor==false)&(has_armorproficiencyheavy==false)))
     {document.form1.armor_radio[10].checked=false; }

   if ((druid_levels>0)|((already_knows_heavy_armor==false)&(has_armorproficiencyheavy==false)))
     {document.form1.armor_radio[11].checked=false; }

   if ((druid_levels>0)|((already_knows_heavy_armor==false)&(has_armorproficiencyheavy==false)))
     {document.form1.armor_radio[12].checked=false; }

   if ((druid_levels>0)|((already_knows_shields==false)&(has_shieldproficiency==false)))
     {document.form1.shield_radio[1].checked=false; }

   if ((already_knows_shields==false)&(has_shieldproficiency==false))
     {document.form1.shield_radio[2].checked=false; }

   if ((druid_levels>0)|((already_knows_shields==false)&(has_shieldproficiency==false)))
     {document.form1.shield_radio[3].checked=false; }

   if ((already_knows_shields==false)&(has_shieldproficiency==false))
     {document.form1.shield_radio[4].checked=false; }

   if ((druid_levels>0)|((already_knows_shields==false)&(has_shieldproficiency==false)))
     {document.form1.shield_radio[5].checked=false; }

   if ((already_knows_tower_shield==false)&(has_towershieldproficiency==false))
     {document.form1.shield_radio[6].checked=false; }

 if ((document.form1.arrows.selectedIndex==0)&
   (
    (document.form1.longbow.checked==true)|
    (document.form1.compositelongbow.checked==true)|
    (document.form1.shortbow.checked==true)|
    (document.form1.compositeshortbow.checked==true)
   ))
   {document.form1.arrows.selectedIndex=1; }

 if ((document.form1.bullets.selectedIndex==0)&
   (
    (document.form1.pistol.checked==true)|
    (document.form1.musket.checked==true)
   ))
   {document.form1.bullets.selectedIndex=1; }

 if ((document.form1.slingbullets.selectedIndex==0)&
    (document.form1.sling.checked==true)
   )
   {document.form1.slingbullets.selectedIndex=1; }


 if ((document.form1.crossbowbolts.selectedIndex==0)&
   (
    (document.form1.heavycrossbow.checked==true)|
    (document.form1.lightcrossbow.checked==true)|
    (document.form1.repeatingheavycrossbow.checked==true)|
    (document.form1.repeatinglightcrossbow.checked==true)
   ))
   {document.form1.crossbowbolts.selectedIndex=1; }
 }

function lock_skills(){
 if (SkillPointsAreLocked==true){document.form1.fifth_comment_box.value="Sorry... no going back."}  else
 if (total_skill_points==0){document.form1.fifth_comment_box.value="Not ready yet."}
 else if (skill_points_spent!=total_skill_points){document.form1.fifth_comment_box.value="Please assign your skill points precisely."}
 else
  {
   SkillPointsAreLocked=true; 
   document.form1.fifth_comment_box.value="Skills are assigned."
   DoYourFeatEntitlements();  AdjustFeatMenus();  
   NegateFeats(); 
   LightConstantFeatStars();
   Feats(); 
   ArrowShow(); 
  }
 }



function goodsave(levello){
 if (levello== 1){return 2} else
 if (levello== 2){return 3} else
 if (levello== 3){return 3} else
 if (levello== 4){return 4} else
 if (levello== 5){return 4} else
 if (levello== 6){return 5} else
 if (levello== 7){return 5} else
 if (levello== 8){return 6} else
 if (levello== 9){return 6} else
 if (levello==10){return 7} else
 if (levello==11){return 7} else
 if (levello==12){return 8} else
 if (levello==13){return 8} else
 if (levello==14){return 9} else
 if (levello==15){return 9} else
 if (levello==16){return 10} else
 if (levello==17){return 10} else
 if (levello==18){return 11} else
 if (levello==19){return 11} else
 if (levello==20){return 12} else
 return 0; 
 }


function poorsave(levello){
 if (levello== 1){return 0} else
 if (levello== 2){return 0} else
 if (levello== 3){return 1} else
 if (levello== 4){return 1} else
 if (levello== 5){return 1} else
 if (levello== 6){return 2} else
 if (levello== 7){return 2} else
 if (levello== 8){return 2} else
 if (levello== 9){return 3} else
 if (levello==10){return 3} else
 if (levello==11){return 3} else
 if (levello==12){return 4} else
 if (levello==13){return 4} else
 if (levello==14){return 4} else
 if (levello==15){return 5} else
 if (levello==16){return 5} else
 if (levello==17){return 5} else
 if (levello==18){return 6} else
 if (levello==19){return 6} else
 if (levello==20){return 6} else
 return 0; 
 }

function goodattack(levello){return levello}

function averageattack(levello){
 if (levello== 1){return 0} else
 if (levello== 2){return 1} else
 if (levello== 3){return 2} else
 if (levello== 4){return 3} else
 if (levello== 5){return 3} else
 if (levello== 6){return 4} else
 if (levello== 7){return 5} else
 if (levello== 8){return 6} else
 if (levello== 9){return 6} else
 if (levello==10){return 7} else
 if (levello==11){return 8} else
 if (levello==12){return 9} else
 if (levello==13){return 9} else
 if (levello==14){return 10} else
 if (levello==15){return 11} else
 if (levello==16){return 12} else
 if (levello==17){return 12} else
 if (levello==18){return 13} else
 if (levello==19){return 14} else
 if (levello==20){return 15} else
 return 0; 
 }


function poorattack(levello){
 if (levello== 1){return 0} else
 if (levello== 2){return 1} else
 if (levello== 3){return 1} else
 if (levello== 4){return 2} else
 if (levello== 5){return 2} else
 if (levello== 6){return 3} else
 if (levello== 7){return 3} else
 if (levello== 8){return 4} else
 if (levello== 9){return 4} else
 if (levello==10){return 5} else
 if (levello==11){return 5} else
 if (levello==12){return 6} else
 if (levello==13){return 6} else
 if (levello==14){return 7} else
 if (levello==15){return 7} else
 if (levello==16){return 8} else
 if (levello==17){return 8} else
 if (levello==18){return 9} else
 if (levello==19){return 9} else
 if (levello==20){return 10} else
 return 0; 
 }


function AddUpTheClasses(){
 NegateElevenClassLevels()
 if (total_levels>0){upsky(class01); }
 if (total_levels>1){upsky(class02); }
 if (total_levels>2){upsky(class03); }
 if (total_levels>3){upsky(class04); }
 if (total_levels>4){upsky(class05); }
 if (total_levels>5){upsky(class06); }
 if (total_levels>6){upsky(class07); }
 if (total_levels>7){upsky(class08); }
 if (total_levels>8){upsky(class09); }
 if (total_levels>9){upsky(class10); }
 if (total_levels>10){upsky(class11); }
 if (total_levels>11){upsky(class12); }
 if (total_levels>12){upsky(class13); }
 if (total_levels>13){upsky(class14); }
 if (total_levels>14){upsky(class15); }
 if (total_levels>15){upsky(class16); }
 if (total_levels>16){upsky(class17); }
 if (total_levels>17){upsky(class18); }
 if (total_levels>18){upsky(class19); }
 if (total_levels>19){upsky(class20); }
 base_attack_bonus=0; 
 base_fortitude_bonus=0; 
 base_will_bonus=0; 
 base_reflex_bonus=0; 
 base_attack_bonus +=goodattack(barbarian_levels); 
   base_fortitude_bonus +=goodsave(barbarian_levels); 
     base_reflex_bonus +=poorsave(barbarian_levels); 
        base_will_bonus +=poorsave(barbarian_levels); 

 base_attack_bonus +=averageattack(bard_levels); 
   base_fortitude_bonus +=poorsave(bard_levels); 
     base_reflex_bonus +=goodsave(bard_levels); 
        base_will_bonus +=goodsave(bard_levels); 
 base_attack_bonus +=averageattack(cleric_levels); 
   base_fortitude_bonus +=goodsave(cleric_levels); 
     base_reflex_bonus +=poorsave(cleric_levels); 
        base_will_bonus +=goodsave(cleric_levels); 
 base_attack_bonus +=averageattack(druid_levels); 
   base_fortitude_bonus +=goodsave(druid_levels); 
     base_reflex_bonus +=poorsave(druid_levels); 
        base_will_bonus +=goodsave(druid_levels); 
 base_attack_bonus +=goodattack(fighter_levels); 
   base_fortitude_bonus +=goodsave(fighter_levels); 
     base_reflex_bonus +=poorsave(fighter_levels); 
        base_will_bonus +=poorsave(fighter_levels); 
 base_attack_bonus +=averageattack(monk_levels); 
   base_fortitude_bonus +=goodsave(monk_levels); 
     base_reflex_bonus +=goodsave(monk_levels); 
        base_will_bonus +=goodsave(monk_levels); 
 base_attack_bonus +=goodattack(paladin_levels); 
   base_fortitude_bonus +=goodsave(paladin_levels); 
     base_reflex_bonus +=poorsave(paladin_levels); 
        base_will_bonus +=goodsave(paladin_levels); 
 base_attack_bonus +=goodattack(ranger_levels); 
   base_fortitude_bonus +=goodsave(ranger_levels); 
     base_reflex_bonus +=goodsave(ranger_levels); 
        base_will_bonus +=poorsave(ranger_levels); 
 base_attack_bonus +=averageattack(rogue_levels); 
   base_fortitude_bonus +=poorsave(rogue_levels); 
     base_reflex_bonus +=goodsave(rogue_levels); 
        base_will_bonus +=poorsave(rogue_levels); 
 base_attack_bonus +=poorattack(sorcerer_levels); 
   base_fortitude_bonus +=poorsave(sorcerer_levels); 
     base_reflex_bonus +=poorsave(sorcerer_levels); 
        base_will_bonus +=goodsave(sorcerer_levels); 
 base_attack_bonus +=poorattack(wizard_levels); 
   base_fortitude_bonus +=poorsave(wizard_levels); 
     base_reflex_bonus +=poorsave(wizard_levels); 
        base_will_bonus +=goodsave(wizard_levels); 


  if (prestige_attack_bonus_progress==1){base_attack_bonus +=poorattack(prestige_levels); }
  if (prestige_attack_bonus_progress==2){base_attack_bonus +=averageattack(prestige_levels); }
  if (prestige_attack_bonus_progress==3){base_attack_bonus +=goodattack(prestige_levels); }
  if (prestige_fortitude_save_bonus==1){base_fortitude_bonus +=poorsave(prestige_levels); }
  if (prestige_fortitude_save_bonus==2){base_fortitude_bonus +=goodsave(prestige_levels); }
  if (prestige_reflex_save_bonus==1){base_reflex_bonus +=poorsave(prestige_levels); }
  if (prestige_reflex_save_bonus==2){base_reflex_bonus +=goodsave(prestige_levels); }
  if (prestige_will_save_bonus==1){base_will_bonus +=poorsave(prestige_levels); }
  if (prestige_will_save_bonus==2){base_will_bonus +=goodsave(prestige_levels); }

}


function RememberFighterFeatsEtc(){


// alert("remembering fighter feats  has_aberrant_bloodline="+has_aberrant_bloodline);


  if (ranger_levels==0)
   {
    document.form1.ranger_combat_track[0].checked=false; 
    document.form1.ranger_combat_track[1].checked=false; 
   }
  else
   {
    if (rangercombattrack==1){document.form1.ranger_combat_track[0].checked=true; }
    if (rangercombattrack==2){document.form1.ranger_combat_track[1].checked=true; }
   }
  RememberPrestigeClassOptions()
  document.form1.air_domain.checked=has_air_domain; 
  document.form1.animal_domain.checked=has_animal_domain; 
  document.form1.chaos_domain.checked=has_chaos_domain; 
  document.form1.death_domain.checked=has_death_domain; 
  document.form1.destruction_domain.checked=has_destruction_domain; 
  document.form1.earth_domain.checked=has_earth_domain; 
  document.form1.evil_domain.checked=has_evil_domain; 
  document.form1.fire_domain.checked=has_fire_domain; 
  document.form1.good_domain.checked=has_good_domain; 
  document.form1.healing_domain.checked=has_healing_domain; 
  document.form1.knowledge_domain.checked=has_knowledge_domain; 
  document.form1.law_domain.checked=has_law_domain; 
  document.form1.luck_domain.checked=has_luck_domain; 
  document.form1.magic_domain.checked=has_magic_domain; 
  document.form1.plant_domain.checked=has_plant_domain; 
  document.form1.protection_domain.checked=has_protection_domain; 
  document.form1.strength_domain.checked=has_strength_domain; 
  document.form1.sun_domain.checked=has_sun_domain; 
  document.form1.travel_domain.checked=has_travel_domain; 
  document.form1.trickery_domain.checked=has_trickery_domain; 
  document.form1.war_domain.checked=has_war_domain; 
  document.form1.water_domain.checked=has_water_domain; 
  document.form1.artifice_domain.checked=has_artifice_domain;
  document.form1.charm_domain.checked=has_charm_domain;
  document.form1.community_domain.checked=has_community_domain;
  document.form1.darkness_domain.checked=has_darkness_domain;
  document.form1.glory_domain.checked=has_glory_domain;
  document.form1.liberation_domain.checked=has_liberation_domain;
  document.form1.madness_domain.checked=has_madness_domain;
  document.form1.nobility_domain.checked=has_nobility_domain;
  document.form1.repose_domain.checked=has_repose_domain;
  document.form1.rune_domain.checked=has_rune_domain;
  document.form1.weather_domain.checked=has_weather_domain;

  document.form1.choose_bloodline[0].checked=has_aberrant_bloodline;
  document.form1.choose_bloodline[1].checked=has_abyssal_bloodline;
  document.form1.choose_bloodline[2].checked=has_arcane_bloodline;
  document.form1.choose_bloodline[3].checked=has_celestial_bloodline;
  document.form1.choose_bloodline[4].checked=has_destined_bloodline;
  document.form1.choose_bloodline[5].checked=has_draconic_bloodline;
  document.form1.choose_bloodline[6].checked=has_elemental_bloodline;
  document.form1.choose_bloodline[7].checked=has_fey_bloodline;
  document.form1.choose_bloodline[8].checked=has_infernal_bloodline;
  document.form1.choose_bloodline[9].checked=has_undead_bloodline;


  if (channels_energy==1){document.form1.choose_energy[0].checked=true; }
    else {document.form1.choose_energy[0].checked=false; }
  if (channels_energy==2){document.form1.choose_energy[1].checked=true; }
    else {document.form1.choose_energy[1].checked=false; }
 }

function produceCharacterSheet(){
 SecondWindow=open("","secondWindow","toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=500,height=500"); 
 if (SecondWindow!=null){
  WriteTextForCharacterSheet()
// SecondWindow.scrollbars.visible=true; 
  }
 }

function raise_ability(whazyt,howhigh){
 if (whazyt==1){strength++ ; }
 if (whazyt==2){dexterity++ ; }
 if (whazyt==3){constitution++ ; }
 if (whazyt==4){intelligence++ ; }
 if (whazyt==5){wisdom++ ; }
 if (whazyt==6){charisma++ ; }
 }

function up00(whichwun){
//zzzzzzzz
 if (((rayce!=1)&(rayce!=2)&(rayce!=7)&(rayce!=30)&(rayce!=31)&(rayce!=32)&(rayce!=29))|(ClassesHaveBeenEstablished==false)){NegateAllUp00(); }
 else if ((AbilityIncreasesAreLocked==true)|(FighterFeatsEtcFrozen==true))
   {RememberWhichAbilitiesYouRaised(); } else
 upitat00=whichwun; 
   ArrowShow(); 
 }

function up04(whichwun){
 if ((total_levels<4)|(ClassesHaveBeenEstablished==false)){NegateAllUp04(); }
 else if ((AbilityIncreasesAreLocked==true)|(FighterFeatsEtcFrozen==true))
   {RememberWhichAbilitiesYouRaised(); } else
 upitat04=whichwun; 
   ArrowShow(); 
 }

function NegateAllUp04(){
 z=0; while (z<6){document.form1.upat04[z].checked=false; z++ ; }
 }

function NegateAllUp00(){
 z=0; while (z<6){document.form1.upat00[z].checked=false; z++ ; }
 }

function up08(whichwun){
 if ((total_levels<8)|(ClassesHaveBeenEstablished==false)){NegateAllUp08(); }
 else if ((AbilityIncreasesAreLocked==true)|(FighterFeatsEtcFrozen==true))
   {RememberWhichAbilitiesYouRaised(); } else
 upitat08=whichwun; 
   ArrowShow(); 
 }

function NegateAllUp08(){
 z=0; while (z<6){document.form1.upat08[z].checked=false; z++ ; }
 }

function up12(whichwun){
 if ((total_levels<12)|(ClassesHaveBeenEstablished==false)){NegateAllUp12(); }
 else if ((AbilityIncreasesAreLocked==true)|(FighterFeatsEtcFrozen==true))
   {RememberWhichAbilitiesYouRaised(); } else
 upitat12=whichwun; 
   ArrowShow(); 
 }

function NegateAllUp12(){
 z=0; while (z<6){document.form1.upat12[z].checked=false; z++ ; }
 }

function up16(whichwun){
 if ((total_levels<16)|(ClassesHaveBeenEstablished==false)){NegateAllUp16(); }
 else if ((AbilityIncreasesAreLocked==true)|(FighterFeatsEtcFrozen==true))
   {RememberWhichAbilitiesYouRaised(); } else
 upitat16=whichwun; 
   ArrowShow(); 
 }

function NegateAllUp16(){
 z=0; while (z<6){document.form1.upat16[z].checked=false; z++ ; }
 }

function up20(whichwun){
 if ((total_levels<20)|(ClassesHaveBeenEstablished==false)){NegateAllUp20(); }
 else if ((AbilityIncreasesAreLocked==true)|(FighterFeatsEtcFrozen==true))
   {RememberWhichAbilitiesYouRaised(); } else
 upitat20=whichwun; 
   ArrowShow(); 
 }

function NegateAllUp20(){
 z=0; while (z<6){document.form1.upat20[z].checked=false; z++ ; }
 }





function NegateRangerCombatTrack(){
   document.form1.ranger_combat_track[0].checked=false; 
   document.form1.ranger_combat_track[1].checked=false; 
 }


function NegateFamiliarChoices(){
 document.form1.choose_familiar[0].checked=true; 
 document.form1.choose_familiar[0].checked=false;
 no_familiar=true;

 }

function RememberRangerCombatTrack(){
 if (ranger_levels==0){NegateRangerCombatTrack(); } else
 {
  if (rangercombattrack==1){document.form1.ranger_combat_track[0].checked=true; }
  if (rangercombattrack==2){document.form1.ranger_combat_track[1].checked=true; }
 }
 }

function RememberFamiliar(){
 if (wizard_levels + sorcerer_levels==0){NegateFamiliarChoices(); } else
 {
  if (no_familiar==true){document.form1.choose_familiar[0].checked=true; }
  if (bat_familiar==true){document.form1.choose_familiar[1].checked=true; }
  if (cat_familiar==true){document.form1.choose_familiar[2].checked=true; }
  if (hawk_familiar==true){document.form1.choose_familiar[3].checked=true; }
  if (lizard_familiar==true){document.form1.choose_familiar[4].checked=true; }
  if (monkey_familiar==true){document.form1.choose_familiar[5].checked=true; }
  if (owl_familiar==true){document.form1.choose_familiar[6].checked=true; }
  if (rat_familiar==true){document.form1.choose_familiar[7].checked=true; }
  if (raven_familiar==true){document.form1.choose_familiar[8].checked=true; }
  if (snake_familiar==true){document.form1.choose_familiar[9].checked=true; }
  if (toad_familiar==true){document.form1.choose_familiar[10].checked=true; }
  if (weasel_familiar==true){document.form1.choose_familiar[11].checked=true; }
 }
 }


function NegateWizardSpecialization(){
 document.form1.choose_specialty[0].checked=false; 
 document.form1.choose_specialty[1].checked=false; 
 document.form1.choose_specialty[2].checked=false; 
 document.form1.choose_specialty[3].checked=false; 
 document.form1.choose_specialty[4].checked=false; 
 document.form1.choose_specialty[5].checked=false; 
 document.form1.choose_specialty[6].checked=false; 
 document.form1.choose_specialty[7].checked=false; 
 document.form1.choose_specialty[8].checked=false; 
 document.form1.forbid_abjuration.checked=false; 
 document.form1.forbid_conjuration.checked=false; 
 document.form1.forbid_divination.checked=false; 
 document.form1.forbid_enchantment.checked=false; 
 document.form1.forbid_evocation.checked=false; 
 document.form1.forbid_illusion.checked=false; 
 document.form1.forbid_necromancy.checked=false; 
 document.form1.forbid_transmutation.checked=false; 
 ResetWizardSpecialties(); 
 }



function ResetWizardSpecialties(){
 wizard_specialty_name="Wizard"; 
 no_specialist=true; 
 abjuration_specialist=false; 
 conjuration_specialist=false; 
 divination_specialist=false; 
 enchantment_specialist=false; 
 evocation_specialist=false; 
 illusion_specialist=false; 
 necromancy_specialist=false; 
 transmutation_specialist=false; 
 gave_up_abjuration=false; 
 gave_up_conjuration=false; 
 gave_up_divination=false; 
 gave_up_enchantment=false; 
 gave_up_evocation=false; 
 gave_up_illusion=false; 
 gave_up_necromancy=false; 
 gave_up_transmutation=false; 
 }

function RememberWizardSpecialty(){
 document.form1.choose_specialty[0].checked=no_specialist; 
 document.form1.choose_specialty[1].checked=abjuration_specialist; 
 document.form1.choose_specialty[2].checked=conjuration_specialist; 
 document.form1.choose_specialty[3].checked=divination_specialist; 
 document.form1.choose_specialty[4].checked=enchantment_specialist; 
 document.form1.choose_specialty[5].checked=evocation_specialist; 
 document.form1.choose_specialty[6].checked=illusion_specialist; 
 document.form1.choose_specialty[7].checked=necromancy_specialist; 
 document.form1.choose_specialty[8].checked=transmutation_specialist; 
 document.form1.forbid_abjuration.checked=gave_up_abjuration; 
 document.form1.forbid_conjuration.checked=gave_up_conjuration; 
 document.form1.forbid_divination.checked=gave_up_divination; 
 document.form1.forbid_enchantment.checked=gave_up_enchantment; 
 document.form1.forbid_evocation.checked=gave_up_evocation; 
 document.form1.forbid_illusion.checked=gave_up_illusion; 
 document.form1.forbid_necromancy.checked=gave_up_necromancy; 
 document.form1.forbid_transmutation.checked=gave_up_transmutation; 
                                             
 }


function WizardSpecialty(){
 if ((wizard_levels + sorcerer_levels==0)|(ClassesHaveBeenEstablished==false)){NegateWizardSpecialization(); }
 else if (FighterFeatsEtcFrozen==true)
  {RememberWizardSpecialty(); }
 else
  {
   ResetWizardSpecialties(); 
   if (document.form1.choose_specialty[0].checked==true){no_specialist=true; }
   if (document.form1.choose_specialty[1].checked==true){abjuration_specialist=true; no_specialist=false;  wizard_specialty_name="Abjurer"; document.form1.forbid_abjuration.checked=false; }
   if (document.form1.choose_specialty[2].checked==true){conjuration_specialist=true; no_specialist=false;  wizard_specialty_name="Conjuror"; document.form1.forbid_conjuration.checked=false; }
   if (document.form1.choose_specialty[3].checked==true){divination_specialist=true; no_specialist=false;  wizard_specialty_name="Diviner"; document.form1.forbid_divination.checked=false;}
   if (document.form1.choose_specialty[4].checked==true){enchantment_specialist=true; no_specialist=false;  wizard_specialty_name="Enchanter";  document.form1.forbid_enchantment.checked=false; }
   if (document.form1.choose_specialty[5].checked==true){evocation_specialist=true; no_specialist=false;  wizard_specialty_name="Evoker"; document.form1.forbid_evocation.checked=false; }
   if (document.form1.choose_specialty[6].checked==true){illusion_specialist=true; no_specialist=false;  wizard_specialty_name="Illusionist"; document.form1.forbid_illusion.checked=false; }
   if (document.form1.choose_specialty[7].checked==true){necromancy_specialist=true; no_specialist=false;  wizard_specialty_name="Necromancer"; document.form1.forbid_necromancy.checked=false; }
   if (document.form1.choose_specialty[8].checked==true){transmutation_specialist=true; no_specialist=false;  wizard_specialty_name="Transmuter"; document.form1.forbid_transmutation.checked=false; }
   GenerateClassString(); 
   if (document.form1.forbid_abjuration.checked==true){gave_up_abjuration=true; }
   if (document.form1.forbid_conjuration.checked==true){gave_up_conjuration=true; }
   if (document.form1.forbid_divination.checked==true){gave_up_divination=true; }
   if (document.form1.forbid_enchantment.checked==true){gave_up_enchantment=true; }
   if (document.form1.forbid_evocation.checked==true){gave_up_evocation=true; }
   if (document.form1.forbid_illusion.checked==true){gave_up_illusion=true; }
   if (document.form1.forbid_necromancy.checked==true){gave_up_necromancy=true; }
   if (document.form1.forbid_transmutation.checked==true){gave_up_transmutation=true; }              
   if (no_specialist==true)
        {
         if (forbidden_school_count()!=0){return false; }
         else {return true; }
        }

   if (abjuration_specialist==true)
        {
         if (forbidden_school_count()!=2){return false; }
         else if (gave_up_abjuration==true){return false; }
         else {return true; }
        }
   if (conjuration_specialist==true)
        {
         if (forbidden_school_count()!=2){return false; }
         else if (gave_up_conjuration==true){return false; }
         else {return true; }
        }
   if (divination_specialist==true)
        {
         if (forbidden_school_count()!=2){return false; }
         else if (gave_up_divination==true){return false; }
         else {return true; }
        }
   if (enchantment_specialist==true)
        {
         if (forbidden_school_count()!=2){return false; }
         else if (gave_up_enchantment==true){return false; }
         else {return true; }
        }
   if (evocation_specialist==true)
        {
         if (forbidden_school_count()!=2){return false; }
         else if (gave_up_evocation==true){return false; }
         else {return true; }
        }
   if (illusion_specialist==true)
        {
         if (forbidden_school_count()!=2){return false; }
         else if (gave_up_illusion==true){return false; }
         else {return true; }
        }
   if (necromancy_specialist==true)
        {
         if (forbidden_school_count()!=2){return false; }
         else if (gave_up_necromancy==true){return false; }
         else {return true; }
        }
   if (transmutation_specialist==true)
        {
         if (forbidden_school_count()!=2){return false; }
         else if (gave_up_transmutation==true){return false; }
         else {return true; }
        }
     return true; 
  }
  return true; 
 }



function forbidden_school_count(){
 x=0; 
 if (gave_up_abjuration==true){x++ ; }
 if (gave_up_conjuration==true){x++ ; }
 if (gave_up_divination==true){x++ ; }
 if (gave_up_enchantment==true){x++ ; }
 if (gave_up_evocation==true){x++ ; }
 if (gave_up_illusion==true){x++ ; }
 if (gave_up_necromancy==true){x++ ; }
 if (gave_up_transmutation==true){x++ ; }
 return x; 
 }




function ChooseFamiliar(){
 if ((wizard_levels ==0)&((sorcerer_levels==0)|(document.form1.choose_bloodline[2].checked==false))|(ClassesHaveBeenEstablished==false)){NegateFamiliarChoices(); }
 else if (FighterFeatsEtcFrozen==true)
  {RememberFamiliar(); }
 else
  {
   NegateFamiliars(); 
   if (document.form1.choose_familiar[0].checked==true){no_familiar=true; }
     else {no_familiar=false;}
   if (document.form1.choose_familiar[1].checked==true){bat_familiar=true; }
   if (document.form1.choose_familiar[2].checked==true){cat_familiar=true; }
   if (document.form1.choose_familiar[3].checked==true){hawk_familiar=true; }
   if (document.form1.choose_familiar[4].checked==true){lizard_familiar=true; }
   if (document.form1.choose_familiar[5].checked==true){monkey_familiar=true; }
   if (document.form1.choose_familiar[6].checked==true){owl_familiar=true; }
   if (document.form1.choose_familiar[7].checked==true){rat_familiar=true; }
   if (document.form1.choose_familiar[8].checked==true){raven_familiar=true; }
   if (document.form1.choose_familiar[9].checked==true){snake_familiar=true; }
   if (document.form1.choose_familiar[10].checked==true){toad_familiar=true; }
   if (document.form1.choose_familiar[11].checked==true){weasel_familiar=true; }
  }
 }

function NegateDruidChoices(){
 document.form1.druid_domain[0].checked=true;
 document.form1.druid_domain[0].checked=false;
 NegateDruidDomains();
 }

function NegateDruidDomains(){
 no_druid_domain=false;
 air_druid_domain=false;
 animal_druid_domain=false;
 earth_druid_domain=false;
 fire_druid_domain=false;
 plant_druid_domain=false;
 water_druid_domain=false;
 weather_druid_domain=false;
 }

function RememberForDruid(){
 document.form1.druid_domain[0].checked=no_druid_domain;
 document.form1.druid_domain[1].checked=air_druid_domain;
 document.form1.druid_domain[2].checked=animal_druid_domain;
 document.form1.druid_domain[3].checked=earth_druid_domain;
 document.form1.druid_domain[4].checked=fire_druid_domain;
 document.form1.druid_domain[5].checked=plant_druid_domain;
 document.form1.druid_domain[6].checked=water_druid_domain;
 document.form1.druid_domain[7].checked=weather_druid_domain;
 }

function RecordForDruid(){
 no_druid_domain=document.form1.druid_domain[0].checked;
 air_druid_domain=document.form1.druid_domain[1].checked;
 animal_druid_domain=document.form1.druid_domain[2].checked;
 earth_druid_domain=document.form1.druid_domain[3].checked;
 fire_druid_domain=document.form1.druid_domain[4].checked;
 plant_druid_domain=document.form1.druid_domain[5].checked;
 water_druid_domain=document.form1.druid_domain[6].checked;
 weather_druid_domain=document.form1.druid_domain[6].checked;
 }

function ChooseForDruid(){ 
 if ((druid_levels==0)|(ClassesHaveBeenEstablished==false)){NegateDruidChoices(); }
 else if (FighterFeatsEtcFrozen==true)
  {RememberForDruid(); }
 else
  {
   NegateDruidDomains(); 
   if (document.form1.druid_domain[0].checked==true){no_druid_domain=true; }
   if (document.form1.druid_domain[1].checked==true){air_druid_domain=true; }
   if (document.form1.druid_domain[2].checked==true){animal_druid_domain=true; }
   if (document.form1.druid_domain[3].checked==true){earth_druid_domain=true; }
   if (document.form1.druid_domain[4].checked==true){fire_druid_domain=true; }
   if (document.form1.druid_domain[5].checked==true){plant_druid_domain=true; }
   if (document.form1.druid_domain[6].checked==true){water_druid_domain=true; }
   if (document.form1.druid_domain[7].checked==true){weather_druid_domain=true; }
  }
 }

function NegateFamiliars(){
 no_familiar=true; 
 bat_familiar=false; 
 cat_familiar=false; 
 hawk_familiar=false; 
 lizard_familiar=false; 
 monkey_familiar=false; 
 owl_familiar=false; 
 rat_familiar=false; 
 raven_familiar=false; 
 snake_familiar=false; 
 toad_familiar=false; 
 weasel_familiar=false; 
 }

 function ChooseRangerCombatTrack(){
 if ((ranger_levels==0)|(ClassesHaveBeenEstablished==false)){NegateRangerCombatTrack(); }
 else if (FighterFeatsEtcFrozen==true)
  {RememberRangerCombatTrack(); }
 else
  {
   if (document.form1.ranger_combat_track[0].checked==true){rangercombattrack=1; }
   if (document.form1.ranger_combat_track[1].checked==true){rangercombattrack=2; }
   ArrowShow(); 

  }
 }

function FreezeFighterFeatsEtc(){

 if (FighterFeatsEtcFrozen==true){document.form1.fourth_comment_box.value="We are done here."}
 else if (ClassesHaveBeenEstablished==false){document.form1.fourth_comment_box.value="Not ready for this yet."}


 else if (AbilitiesWellIncreased()==false)
  {document.form1.fourth_comment_box.value="Need to raise abilities."}


 else if (!RangerFoes()){document.form1.fourth_comment_box.value="Choose your ranger favored enemies."}
 else if (!RangerTerrains()){document.form1.fourth_comment_box.value="Choose your ranger favored terrains."}


 else if ((ranger_levels>1)&(document.form1.ranger_combat_track[0].checked==false)
   &(document.form1.ranger_combat_track[1].checked==false))
    {document.form1.fourth_comment_box.value="Ranger combat track"}



 else if ((cleric_levels>0)& (Domains()==false))
  {document.form1.fourth_comment_box.value="Wrong number of domains."}

 else if ((sorcerer_levels>0)& (BloodlineCount()==false))
  {document.form1.fourth_comment_box.value="You need a sorcerer bloodline."}

 else if ((cleric_levels>0)
         &(document.form1.choose_energy[0].checked==false)
         &(document.form1.choose_energy[1].checked==false))
  {document.form1.fourth_comment_box.value="Which energy type?"}

 else if ((wizard_levels>0)&(WizardSpecialty()==false))
  {document.form1.fourth_comment_box.value="Check your forbidden schools."
   }


 else if (PrestigeClass()==false)
  {}

 else
  {
   AdjustSkillMenus();  

   RecordRangerFoes(); 
   RecordRangerTerrains();
   RecordForDruid();
   acceptIncreases(); 
   document.form1.fourth_comment_box.value="Now for the skills."
   if (has_arcane_bloodline){document.form1.fourth_comment_box.value+="  Your arcane bloodline lets you check a knowledge skill as a class skill.  ";}
   if (has_abyssal_bloodline)
     {
      if (sorcerer_levels>=9){strength+=2;}
      if (sorcerer_levels>=13){strength+=2;}
      if (sorcerer_levels>=17){strength+=2;}
     }
   RecordFighterFeatsEtc();
//   alert("upitat00="+upitat00);
   if (upitat00==4)
   {
    intelligence01+=2;
    intelligence04+=2;
    intelligence08+=2;
    intelligence12+=2;
    intelligence16+=2;
    intelligence20+=2;
   }
   favored_for_hp=document.form1.favored_for_hit_points.selectedIndex;
   favored_for_skill=document.form1.favored_for_skill_points.selectedIndex;
   FigureClassSkillsAndTotalSkillPoints()
   NegateSkills(); 
   FighterFeatsEtcFrozen=true; 
   figure_skills();     
   }

 }

function BloodlineCount(){
 if (sorcerer_levels==0){WipeBloodlines();ArrowShow();return true;}
 if (FighterFeatsEtcFrozen==true)
  {
   RememberFighterFeatsEtc(); 
   return true; 
  }
 if (document.form1.choose_bloodline[0].checked){return true;}
 if (document.form1.choose_bloodline[1].checked){return true;}
 if (document.form1.choose_bloodline[2].checked){return true;}
 if (document.form1.choose_bloodline[3].checked){return true;}
 if (document.form1.choose_bloodline[4].checked){return true;}
 if (document.form1.choose_bloodline[5].checked){return true;}
 if (document.form1.choose_bloodline[6].checked){return true;}
 if (document.form1.choose_bloodline[7].checked){return true;}
 if (document.form1.choose_bloodline[8].checked){return true;}
 if (document.form1.choose_bloodline[9].checked){return true;}
 return false;
 }

function BloodlineCountA(){
if ((wizard_levels==0)&(document.form1.choose_bloodline[2].checked==false)){NegateFamiliarChoices();}
 BloodlineCount();
has_aberrant_bloodline=document.form1.choose_bloodline[0].checked;
//alert("B. Aberrant bloodline="+has_aberrant_bloodline)
has_abyssal_bloodline=document.form1.choose_bloodline[1].checked;
has_arcane_bloodline=document.form1.choose_bloodline[2].checked;
has_celestial_bloodline=document.form1.choose_bloodline[3].checked;
has_destined_bloodline=document.form1.choose_bloodline[4].checked;
has_draconic_bloodline=document.form1.choose_bloodline[5].checked;
has_elemental_bloodline=document.form1.choose_bloodline[6].checked;
has_fey_bloodline=document.form1.choose_bloodline[7].checked;
has_infernal_bloodline=document.form1.choose_bloodline[8].checked;
has_undead_bloodline=document.form1.choose_bloodline[9].checked;
 ArrowShow();
 }

function Domains(){
 if (cleric_levels==0){WipeDomains();  return true; } else
 if (FighterFeatsEtcFrozen==true)
  {
   RememberFighterFeatsEtc(); 
   return true; 
  }
 else
 if (ClassesHaveBeenEstablished==false){WipeDomains();  return true; }
 else {
   x=0; 
   if (document.form1.air_domain.checked==true){x++ ; }
   if (document.form1.animal_domain.checked==true){x++ ; }
   if (document.form1.chaos_domain.checked==true){
    if ((alignment==1)|(alignment==2)|(alignment==4)|
       (alignment==5)|(alignment==7)|(alignment==8))
        {document.form1.chaos_domain.checked=false; }
     else {x++ ; }}
   if (document.form1.death_domain.checked==true){x++ ; }
   if (document.form1.destruction_domain.checked==true){x++ ; }
   if (document.form1.earth_domain.checked==true){x++ ; }
   if (document.form1.evil_domain.checked==true){
    if ((alignment==1)|(alignment==2)|(alignment==3)|
       (alignment==4)|(alignment==5)|(alignment==6))
        {document.form1.evil_domain.checked=false; }
     else {x++ ; }}
   if (document.form1.fire_domain.checked==true){x++ ; }
   if (document.form1.good_domain.checked==true){
    if ((alignment==4)|(alignment==5)|(alignment==6)|
       (alignment==7)|(alignment==8)|(alignment==9))
        {document.form1.good_domain.checked=false; }
     else {x++ ; }}

   if (document.form1.healing_domain.checked==true){x++ ; }
   if (document.form1.knowledge_domain.checked==true){x++ ; }
   if (document.form1.law_domain.checked==true){
    if ((alignment==2)|(alignment==3)|(alignment==5)|
       (alignment==6)|(alignment==8)|(alignment==9))
        {document.form1.law_domain.checked=false; }
     else {x++ ; }}

   if (document.form1.luck_domain.checked==true){x++ ; }
   if (document.form1.magic_domain.checked==true){x++ ; }
   if (document.form1.plant_domain.checked==true){x++ ; }
   if (document.form1.protection_domain.checked==true){x++ ; }
   if (document.form1.strength_domain.checked==true){x++ ; }
   if (document.form1.sun_domain.checked==true){x++ ; }
   if (document.form1.travel_domain.checked==true){x++ ; }
   if (document.form1.trickery_domain.checked==true){x++ ; }
   if (document.form1.war_domain.checked==true){x++ ; }
   if (document.form1.water_domain.checked==true){x++ ; }
  if (document.form1.artifice_domain.checked){x++;}
  if (document.form1.charm_domain.checked){x++;}
  if (document.form1.community_domain.checked){x++;}
  if (document.form1.darkness_domain.checked){x++;}
  if (document.form1.glory_domain.checked){x++;}
  if (document.form1.liberation_domain.checked){x++;}
  if (document.form1.madness_domain.checked){x++;}
  if (document.form1.nobility_domain.checked){x++;}
  if (document.form1.repose_domain.checked){x++;}
  if (document.form1.rune_domain.checked){x++;}
  if (document.form1.weather_domain.checked){x++;}
   if (alignment<4)
    {
     document.form1.choose_energy[0].checked=true; 
    }
   if (alignment>6)
    {
     document.form1.choose_energy[1].checked=true; 
    }
   if (x==2) {return true} else {return false; }
  }
 }


function acceptIncreases(){

 if ((AbilityIncreasesAreLocked==true)|(FighterFeatsEtcFrozen==true))
   {RememberWhichAbilitiesYouRaised(); }
  else if ((total_levels>=4)&(upitat04==0)){}
  else if ((total_levels>=8)&(upitat08==0)){}
  else if ((total_levels>=12)&(upitat12==0)){}
  else if ((total_levels>=16)&(upitat16==0)){}
  else if ((total_levels>=20)&(upitat20==0)){}
  else
   {
    age_adjustment=0;
	if (document.form1.age_radio[1].checked)
	 {
	  age_adjustment=1;
	  strength-=1;
	  dexterity-=1;
	  constitution-=1;
	  intelligence+=1;
	  wisdom+=1;
	  charisma+=1;
	 }
	if (document.form1.age_radio[2].checked)
	 {
	  age_adjustment=2;
	  strength-=3;
	  dexterity-=3;
	  constitution-=3;
	  intelligence+=2;
	  wisdom+=2;
	  charisma+=2;
	 }
	if (document.form1.age_radio[3].checked)
	 {
	  age_adjustment=3;
	  strength-=6;
	  dexterity-=6;
	  constitution-=6;
	  intelligence+=3;
	  wisdom+=3;
	  charisma+=3;
	 }
	 if (strength<3){strength=3;}
	 if (dexterity<3){dexterity=3;}
	 if (constitution<3){constitution=3;}
	 
	 
    if (upitat00==1){strength+=2;}
    if (upitat00==2){dexterity+=2;}
    if (upitat00==3){constitution+=2;}
    if (upitat00==4){intelligence+=2;}
    if (upitat00==5){wisdom+=2;}
    if (upitat00==6){charisma+=2;}
    raise_ability(upitat04,4); 
    raise_ability(upitat08,8); 
    raise_ability(upitat12,12); 
    raise_ability(upitat16,16); 
    raise_ability(upitat20,20); 
    AbilityIncreasesAreLocked=true; 

    if (upitat04==4)
     {
      intelligence04++ ; 
      intelligence08++ ; 
      intelligence12++ ;   
      intelligence16++ ; 
      intelligence20++ ; 
     }
    if (upitat08==4)
     {
      intelligence08++ ; 
      intelligence12++ ;   
      intelligence16++ ; 
      intelligence20++ ; 
     }
    if (upitat12==4)
     {
      intelligence12++ ;   
      intelligence16++ ; 
      intelligence20++ ; 
     }
    if (upitat16==4)
     {
      intelligence16++ ; 
      intelligence20++ ; 
     }
    if (upitat20==4)
     {
      intelligence20++ ; 
     }

   }
  }


function RememberWhichAbilitiesYouRaised(){
 NegateAllUp00();
 NegateAllUp04(); 
 NegateAllUp08(); 
 NegateAllUp12(); 
 NegateAllUp16(); 
 NegateAllUp20(); 
 if (upitat00>0){document.form1.upat04[upitat00-1].checked=true; }
 if (upitat04>0){document.form1.upat04[upitat04-1].checked=true; }
 if (upitat08>0){document.form1.upat08[upitat08-1].checked=true; }
 if (upitat12>0){document.form1.upat12[upitat12-1].checked=true; }
 if (upitat16>0){document.form1.upat16[upitat16-1].checked=true; }
 if (upitat20>0){document.form1.upat20[upitat20-1].checked=true; }
 }

function lock_identity(){
 if (CharacterTypeHasBeenEstablished==true){} 
 else if (DiceHaveBeenRolled==false){document.form1.second_comment_box.value="You haven't even rolled your dice."} 
 else if (AbilitiesAreProperlyAssigned==false){document.form1.second_comment_box.value="Please finish assigning your abilities."} 
 else if (AbilitiesHaveBeenEstablished==false){document.form1.second_comment_box.value="Please accept your ability assignments first."} 
 else if (rayce==0){document.form1.second_comment_box.value="Please choose your race."}
 else if (gender==0){document.form1.second_comment_box.value="Please choose your gender."} 
 else if (alignment==0){document.form1.second_comment_box.value="Please choose your alignment."} 
 else if (total_levels==0){document.form1.second_comment_box.value="Please choose your total levels."} 
  else {
   RandomHeight(); 
   document.form1.second_comment_box.value="You chose a "; 
   if (alignment==1){document.form1.second_comment_box.value +="Lawful Good" }
   if (alignment==2){document.form1.second_comment_box.value +="Neutral Good" }
   if (alignment==3){document.form1.second_comment_box.value +="Chaotic Good" }
   if (alignment==4){document.form1.second_comment_box.value +="Lawful Neutral" }
   if (alignment==5){document.form1.second_comment_box.value +="True Neutral" }
   if (alignment==6){document.form1.second_comment_box.value +="Chaotic Neutral" }
   if (alignment==7){document.form1.second_comment_box.value +="Lawful Evil" }
   if (alignment==8){document.form1.second_comment_box.value +="Neutral Evil" }
   if (alignment==9){document.form1.second_comment_box.value +="Chaotic Evil" }
   document.form1.second_comment_box.value +=", Level " + total_levels + " "
   if ((rayce==5)|(rayce==6)){small=true; }
   if (gender==1){document.form1.second_comment_box.value +="Male ";  }
   if (gender==2){document.form1.second_comment_box.value +="Female "; }
   if (rayce==1){document.form1.second_comment_box.value +="Human.";  }
   if (rayce==2){document.form1.second_comment_box.value +="Half-Elf.";  }
   if (rayce==3){document.form1.second_comment_box.value +="Elf.";  }
   if (rayce==4){document.form1.second_comment_box.value +="Dwarf.";  }
   if (rayce==5){document.form1.second_comment_box.value +="Gnome.";  }
   if (rayce==6){document.form1.second_comment_box.value +="Halfling.";  }
   if (rayce==7){document.form1.second_comment_box.value +="Half-Orc.";  }
   if (rayce==28){document.form1.second_comment_box.value +="Aasimar.";  }
   if (rayce==9){document.form1.second_comment_box.value +="Dhampir.";  }
   if (rayce==22){document.form1.second_comment_box.value +="Orc.";  }
//zzzzzzzzzz
   CharacterTypeHasBeenEstablished=true; 
///   if (rayce==28)
///    {
 ///    document.form1.second_comment_box.value +="\r  Aasimar are probably more diverse than the Bestiary suggests.  You will raise an ability score of your choice later, like a human."
 ///   }
   if (rayce==29)
    {
     document.form1.second_comment_box.value +="\r  Sylphs are probably more diverse than the Bestiary suggests.  You will raise an ability score of your choice later, like a human."
    }
   if (rayce==30)
    {
     document.form1.second_comment_box.value +="\r  Oreads are probably more diverse than the Bestiary suggests.  You will raise an ability score of your choice later, like a human."
    }
   if (rayce==31)
    {
     document.form1.second_comment_box.value +="\r  Ifrits are probably more diverse than the Bestiary suggests.  You will raise an ability score of your choice later, like a human."
    }
   if (rayce==32)
    {
     document.form1.second_comment_box.value +="\r  Undines are probably more diverse than the Bestiary suggests.  You will raise an ability score of your choice later, like a human."
    }
//   if (rayce==33)
 //   {
 //    document.form1.second_comment_box.value +="\r  Tieflings are surely more diverse than the Bestiary suggests.  You will raise an ability score of your choice later, like a human."
 //   }
//zzzzzzzzz
   if (rayce==3)
    {
     dexterity++ ; dexterity++ ; intelligence+=2;
     constitution--; constitution--; 
     document.form1.second_comment_box.value +="\r  Elves receive  + 2 dexterity, +2 intelligence, -2 constitution."
    }
   if (rayce==4)
    {
     constitution++ ; constitution++ ; wisdom+=2;
     charisma--; charisma--; 
     document.form1.second_comment_box.value +="\r  Dwarves receive  + 2 constitution, +2 wisdom, -2 charisma."
    }
   if (rayce==5)
    {
     strength--; strength--; 
     constitution++ ; constitution++ ; charisma+=2;
     document.form1.second_comment_box.value +="\r  Gnomes receive  + 2 constitution, +2 charisma, -2 strength."
    }
   if (rayce==6)
    {
     dexterity++ ; dexterity++ ; 
     strength--; strength--; charisma+=2;
     document.form1.second_comment_box.value +="\r  Halflings receive  + 2 dexterity, +2 charisma, -2 strength."
    }
   if (rayce==9)
    {
     dexterity++ ; dexterity++ ; 
     constitution--; constitution--; charisma+=2;
     document.form1.second_comment_box.value +="\r  Dhampir receive  + 2 dexterity, +2 charisma, -2 constitution."
    }
   if (rayce==12)
    {
     dexterity++ ; dexterity++ ; 
     constitution--; constitution--; charisma+=2;
     document.form1.second_comment_box.value +="\r  Drow receive  + 2 dexterity, +2 charisma, -2 constitution."
    }
   if (rayce==22)
    {
     strength+=4;intelligence-=2;wisdom-=2;charisma-=2;
     document.form1.second_comment_box.value +="\r  Orcs receive  +4 strength, -2 intelligence, -2 wisdom, -2 charisma."
    }
   if (rayce==28)
    {
     charisma+=2;wisdom+=2;
     document.form1.second_comment_box.value +="\r  Aasimar now receive +2 wisdom, +2 charisma."
    }
    if (rayce==33)
    {
     dexterity+=2;intelligence+=2;charisma-=2;
     document.form1.second_comment_box.value +="\r  Tieflings now receive +2 dexterity, +2 intelligence, -2 charisma."
    }
    if (strength<3){strength=3; }
    if (dexterity<3){dexterity=3; }
    if (constitution<3){constitution=3; }
    if (intelligence<3){intelligence=3; }
    if (wisdom<3){wisdom=3; }
    if (charisma<3){charisma=3; }
     InitializeIntelligences(); 
     document.form1.second_comment_box.value +="\r  Now choose your class(es), starting with first level. We will designate your first-level choice as your favored class.\rRecommended: "
     x=1; 
     if ((dexterity>strength)){x=2; }
     if ((constitution>dexterity)&(constitution>strength)){x=3; }
     if ((intelligence>dexterity)&(intelligence>constitution)&(intelligence>strength)){x=4; }
     if ((wisdom>intelligence)&(wisdom>dexterity)&(wisdom>constitution)&(wisdom>strength)){x=5; }
     if ((charisma>wisdom)&(charisma>intelligence)&(charisma>dexterity)&(charisma>constitution)&(charisma>strength)){x=6; }
     top_ability_score=x; 
     if ((x==1)&(strength<11)){strength=11; }
     if ((x==2)&(dexterity<11)){dexterity=11; }
     if ((x==3)&(constitution<11)){constitution=11; }
     if ((x==4)&(intelligence<11)){intelligence=11; }
     if ((x==5)&(wisdom<11)){wisdom=11; }
     if ((x==6)&(charisma<11)){charisma=11; }
     z=0; if (x!=1){z=1; }
     if ((dexterity>strength)&(x!=2)){z=2; }
     if ((constitution>dexterity)&(constitution>strength)&(x!=3)){z=3; }
     if ((intelligence>dexterity)&(intelligence>constitution)&(intelligence>strength)&(x!=4)){z=4; }
     if ((wisdom>intelligence)&(wisdom>dexterity)&(wisdom>constitution)&(wisdom>strength)&(x!=5)){z=5; }
     if ((charisma>wisdom)&(charisma>intelligence)&(charisma>dexterity)&(charisma>constitution)&(charisma>strength)&(x!=6)){z=6; }

     if ((alignment!=1)&(alignment!=4)&(alignment!=7))
      {if ((strength>=10)&(dexterity>=10)&(constitution>=12)&(x!=6)&(x!=4)){document.form1.second_comment_box.value +=" Barbarian "; }}
     if ((alignment!=1)&(alignment!=4)&(alignment!=7))
      {if ((charisma>=16)|(((x==6)|(z==6)|(charisma>=14))&(intelligence>=10)&(charisma>=12)&(dexterity>=10))){document.form1.second_comment_box.value +=" Bard "; }}
     if ((x==5)|(wisdom>=16)|(((wisdom>=15))&(charisma>=8))){document.form1.second_comment_box.value +=" Cleric "; }     
     if ((alignment==2)|(alignment==4)|(alignment==5)|(alignment==6)|(alignment==8))
      {if ((x==5)|(wisdom>=16)|(((wisdom>=15))&(dexterity>=8))){document.form1.second_comment_box.value +=" Druid "; }}
     if (((strength + dexterity>=22)|(strength>=14)|(x==1)|(dexterity>=14))&((constitution>=12)|(strength + dexterity>26))&((x==1)|(x==2)|(x==3))&(constitution>8)){document.form1.second_comment_box.value +=" Fighter "; }

     if ((alignment==1)|(alignment==4)|(alignment==7))
      {if ((wisdom+dexterity>=20)&&(constitution>=10)&&(strength>=10)){document.form1.second_comment_box.value+=" Monk "; }}



     if (alignment==1)
      {if (((strength + dexterity>=22)|(strength>=14)|(dexterity>=14))&(((charisma>=12))|(charisma>=14))&(constitution>=9)){document.form1.second_comment_box.value +=" Paladin "; }}
     if ((strength>=10)&(dexterity>=10)&(constitution>=12)&(wisdom>=12)&(x!=6)){document.form1.second_comment_box.value +=" Ranger "; }
     if ((x==2)|((dexterity>=10)&(intelligence>=10))){document.form1.second_comment_box.value +=" Rogue "; }
     if ((charisma>=15)|((z==6)&(constitution>=10))|(x==6)){document.form1.second_comment_box.value +=" Sorcerer "; }     
     if ((intelligence>=15)|(((z==4))&(constitution>=10))|(x==4)){document.form1.second_comment_box.value +=" Wizard "; }     
  }
   ArrowShow(); 
 }

function lock_abilities(){
 if (DiceHaveBeenRolled==false){document.form1.first_comment_box.value="Roll dice / assign all numbers first."}
 else if (AbilitiesAreProperlyAssigned==false)
  {
   document.form1.first_comment_box.value="Finish assigning your statistics."
   TellAboutPointBuy()
  }
 else {
     AbilitiesHaveBeenEstablished=true; 
     z=0; while (z<6){
     if (document.form1.firststat[z].checked==true){firststatwentto=z; }
     if (document.form1.secondstat[z].checked==true){secondstatwentto=z; }
     if (document.form1.thirdstat[z].checked==true){thirdstatwentto=z; }
     if (document.form1.fourthstat[z].checked==true){fourthstatwentto=z; }
     if (document.form1.fifthstat[z].checked==true){fifthstatwentto=z; }
     if (document.form1.sixthstat[z].checked==true){sixthstatwentto=z; }
     z++ ; }
     document.form1.first_comment_box.value="Scores accepted.  Now choose your character type."; 
     if (firststatwentto==0){strength=stat1; }
     if (firststatwentto==1){dexterity=stat1; }
     if (firststatwentto==2){constitution=stat1; }
     if (firststatwentto==3){intelligence=stat1; }
     if (firststatwentto==4){wisdom=stat1; }
     if (firststatwentto==5){charisma=stat1; }
     if (secondstatwentto==0){strength=stat2; }
     if (secondstatwentto==1){dexterity=stat2; }
     if (secondstatwentto==2){constitution=stat2; }
     if (secondstatwentto==3){intelligence=stat2; }
     if (secondstatwentto==4){wisdom=stat2; }
     if (secondstatwentto==5){charisma=stat2; }
     if (thirdstatwentto==0){strength=stat3; }
     if (thirdstatwentto==1){dexterity=stat3; }
     if (thirdstatwentto==2){constitution=stat3; }
     if (thirdstatwentto==3){intelligence=stat3; }
     if (thirdstatwentto==4){wisdom=stat3; }
     if (thirdstatwentto==5){charisma=stat3; }
     if (fourthstatwentto==0){strength=stat4; }
     if (fourthstatwentto==1){dexterity=stat4; }
     if (fourthstatwentto==2){constitution=stat4; }
     if (fourthstatwentto==3){intelligence=stat4; }
     if (fourthstatwentto==4){wisdom=stat4; }
     if (fourthstatwentto==5){charisma=stat4; }
     if (fifthstatwentto==0){strength=stat5; }
     if (fifthstatwentto==1){dexterity=stat5; }
     if (fifthstatwentto==2){constitution=stat5; }
     if (fifthstatwentto==3){intelligence=stat5; }
     if (fifthstatwentto==4){wisdom=stat5; }
     if (fifthstatwentto==5){charisma=stat5; }
     if (sixthstatwentto==0){strength=stat6; }
     if (sixthstatwentto==1){dexterity=stat6; }
     if (sixthstatwentto==2){constitution=stat6; }
     if (sixthstatwentto==3){intelligence=stat6; }
     if (sixthstatwentto==4){wisdom=stat6; }
     if (sixthstatwentto==5){charisma=stat6; }
 
   ArrowShow(); 
  }
 }

function HaveISixStats(){
 AbilitiesAreProperlyAssigned=false; 
 if
   (
    (stat1>=3)&(stat2>=3)&(stat3>=3)&(stat4>=3)&(stat5>=3)&(stat6>=3)&
    (
     (document.form1.firststat[0].checked==true)|
     (document.form1.firststat[1].checked==true)|
     (document.form1.firststat[2].checked==true)|
     (document.form1.firststat[3].checked==true)|
     (document.form1.firststat[4].checked==true)|
     (document.form1.firststat[5].checked==true)
    )&
    (
     (document.form1.secondstat[0].checked==true)|
     (document.form1.secondstat[1].checked==true)|
     (document.form1.secondstat[2].checked==true)|
     (document.form1.secondstat[3].checked==true)|
     (document.form1.secondstat[4].checked==true)|
     (document.form1.secondstat[5].checked==true)
    )&
    (
     (document.form1.thirdstat[0].checked==true)|
     (document.form1.thirdstat[1].checked==true)|
     (document.form1.thirdstat[2].checked==true)|
     (document.form1.thirdstat[3].checked==true)|
     (document.form1.thirdstat[4].checked==true)|
     (document.form1.thirdstat[5].checked==true)
    )&
    (
     (document.form1.fourthstat[0].checked==true)|
     (document.form1.fourthstat[1].checked==true)|
     (document.form1.fourthstat[2].checked==true)|
     (document.form1.fourthstat[3].checked==true)|
     (document.form1.fourthstat[4].checked==true)|
     (document.form1.fourthstat[5].checked==true)
    )&
    (
     (document.form1.fifthstat[0].checked==true)|
     (document.form1.fifthstat[1].checked==true)|
     (document.form1.fifthstat[2].checked==true)|
     (document.form1.fifthstat[3].checked==true)|
     (document.form1.fifthstat[4].checked==true)|
     (document.form1.fifthstat[5].checked==true)
    )&
    (
     (document.form1.sixthstat[0].checked==true)|
     (document.form1.sixthstat[1].checked==true)|
     (document.form1.sixthstat[2].checked==true)|
     (document.form1.sixthstat[3].checked==true)|
     (document.form1.sixthstat[4].checked==true)|
     (document.form1.sixthstat[5].checked==true)
    )
   )
   {
    AbilitiesAreProperlyAssigned=true; }
   if (AbilitiesAreProperlyAssigned==false)
    {
     if ((document.form1.methods_list.selectedIndex==4)|(document.form1.methods_list.selectedIndex==7))
      {
        TellAboutPointBuy()
      }
     else
      {
       document.form1.first_comment_box.value="Now assign your abilities."; 
       TellAboutPointBuy(); 
      }
    }
  if (AbilitiesAreProperlyAssigned==true)
    {
     document.form1.first_comment_box.value="You can accept these."; 
     TellAboutPointBuy(); 
    }

 }

function PointBuyIsSevensOrBetter(){
 if (document.form1.methods_list.selectedIndex==4)
  {
   if (stat1<7){stat1=7; document.form1.stat1_list.selectedIndex=4; }
   if (stat2<7){stat2=7; document.form1.stat2_list.selectedIndex=4; }
   if (stat3<7){stat3=7; document.form1.stat3_list.selectedIndex=4; }
   if (stat4<7){stat4=7; document.form1.stat4_list.selectedIndex=4; }
   if (stat5<7){stat5=7; document.form1.stat5_list.selectedIndex=4; }
   if (stat6<7){stat6=7; document.form1.stat6_list.selectedIndex=4; }
   DiceHaveBeenRolled=true; 
   DisplayTrueStatistics(); 
   TellAboutPointBuy(); 
  }
 if (document.form1.methods_list.selectedIndex==7)
  {
   DiceHaveBeenRolled=true; 
   DisplayTrueStatistics(); 
   TellAboutPointBuy(); 
  }
 }

function assign_stat(numbur){
 if (rayce!=0){clearall()}
 AbilitiesHaveBeenEstablished=false; 
 if (numbur==1){stat1=3 + document.form1.stat1_list.selectedIndex; }
 if (numbur==2){stat2=3 + document.form1.stat2_list.selectedIndex; }
 if (numbur==3){stat3=3 + document.form1.stat3_list.selectedIndex; }
 if (numbur==4){stat4=3 + document.form1.stat4_list.selectedIndex; }
 if (numbur==5){stat5=3 + document.form1.stat5_list.selectedIndex; }
 if (numbur==6){stat6=3 + document.form1.stat6_list.selectedIndex; }

 PointBuyIsSevensOrBetter()

 DisplayTrueStatistics()
 if ((stat1>=3)&(stat2>=3)&(stat3>=3)&(stat4>=3)&(stat5>=3)&(stat6>=3))
  {
   DiceHaveBeenRolled=true; HaveISixStats(); 
  }
  else {document.form1.first_comment_box.value="Assign all six."; }
   ArrowShow(); 
 }

function assignstat(whichstat,whichability){
 my_character_is_done=false; 
  
 if (AbilitiesHaveBeenEstablished==true){RewriteLockedAbilityAssignments(); }
 else if (DiceHaveBeenRolled==false){document.form1.first_comment_box.value="Please roll the dice first.";  ClearAllAbilityAssignments(); }
 else {
 z=1; while (z<7){
 if ((whichstat!=1)&(whichability==z)&(document.form1.firststat[z-1].checked==true)){document.form1.firststat[z-1].checked=false; }
 if ((whichstat!=2)&(whichability==z)&(document.form1.secondstat[z-1].checked==true)){document.form1.secondstat[z-1].checked=false; }
 if ((whichstat!=3)&(whichability==z)&(document.form1.thirdstat[z-1].checked==true)){document.form1.thirdstat[z-1].checked=false; }
 if ((whichstat!=4)&(whichability==z)&(document.form1.fourthstat[z-1].checked==true)){document.form1.fourthstat[z-1].checked=false; }
 if ((whichstat!=5)&(whichability==z)&(document.form1.fifthstat[z-1].checked==true)){document.form1.fifthstat[z-1].checked=false; }
 if ((whichstat!=6)&(whichability==z)&(document.form1.sixthstat[z-1].checked==true)){document.form1.sixthstat[z-1].checked=false; }
 z++ ; }

 if (whichstat==1){x=stat1; }
 if (whichstat==2){x=stat2; }
 if (whichstat==3){x=stat3; }
 if (whichstat==4){x=stat4; }
 if (whichstat==5){x=stat5; }
 if (whichstat==6){x=stat6; }
 if (whichability==1){strength=x; }
 if (whichability==2){dexterity=x; }
 if (whichability==3){constitution=x; }
 if (whichability==4){intelligence=x; }
 if (whichability==5){wisdom=x; }
 if (whichability==6){charisma=x; }
 HaveISixStats(); 
  }
   ArrowShow(); 

 }

function DisplayTrueStatistics(){
 document.form1.firststatistic.value=stat1; 
 document.form1.secondstatistic.value=stat2; 
 document.form1.thirdstatistic.value=stat3; 
 document.form1.fourthstatistic.value=stat4; 
 document.form1.fifthstatistic.value=stat5; 
 document.form1.sixthstatistic.value=stat6; 
 }



function Feats(){

 document.form1.feat.value=""
 if (FeatsAreLocked==true)
  {
   RememberFeats(); 
   return true; 
  }

 else {
  x=0; total_fighter_feats=0; total_wizard_feats=0; total_monk_feats=0; total_halfelf_feats=0;
   high_level_rogue_count=0; 
   total_r1_feats=0;total_r2_feats=0;




if (document.form1.acrobatic.checked==true){x++ ; }
if (dexterity<=strength){document.form1.agilemaneuvers.checked=false;}
if (document.form1.agilemaneuvers.checked==true){x++ ; total_fighter_feats++;  }
if (document.form1.alertness.checked==true){x++ ; }
if (handleanimal==0){document.form1.animalaffinity.checked=false}
if (document.form1.animalaffinity.checked==true){x++ ; }
if (bard_levels+sorcerer_levels+wizard_levels==0){document.form1.arcanestrike.checked=false}
if (document.form1.arcanestrike.checked==true){x++ ; }
if (document.form1.armorproficiencylight.checked==true){
 if (already_knows_light_armor==true)
   {document.form1.armorproficiencylight.checked=false}
    else {x++ ; }}
if (document.form1.armorproficiencymedium.checked==true){
 if ((already_knows_medium_armor==true)|((!already_knows_light_armor)&(document.form1.armorproficiencylight.checked==false)))
   {document.form1.armorproficiencymedium.checked=false}
    else {x++ ; }}
if (document.form1.armorproficiencyheavy.checked==true){
 if ((already_knows_heavy_armor==true)|((!already_knows_medium_armor)&(document.form1.armorproficiencymedium.checked==false)))
   {document.form1.armorproficiencyheavy.checked=false}
    else {x++ ; }}
if (document.form1.athletic.checked==true){x++ ; }
if (document.form1.augmentsummoning.checked==true){
 if (document.form1.spellfocusconjuration.checked==false)
  {document.form1.augmentsummoning.checked=false}
  else {x++ ; }}
if (document.form1.combatcasting.checked==true){
 if (!Spellcaster())
  {document.form1.combatcasting.checked=false}
  else {x++ ; }}


if (document.form1.deceitful.checked==true){x++ ; }
if (document.form1.defthands.checked==true){
 if (sleightofhand+disabledevice==0){document.form1.defthands.checked=false}
 else {x++ ; }}
 if (ranger_levels>3){document.form1.endurance.checked=false; }
 
if (document.form1.endurance.checked==true){x++;}


if (document.form1.diehard.checked==true){
  if ((document.form1.endurance.checked==false)&(ranger_levels<3))
   {document.form1.diehard.checked=false; }
  else {x++ ; }}
if (document.form1.eschewmaterials.checked==true){
 if (bard_levels + cleric_levels + druid_levels + paladin_levels + ranger_levels + wizard_levels==0)
  {document.form1.eschewmaterials.checked=false}
  else {x++ ; }}


if ((cleric_levels==0)&(paladin_levels<4)&(wizard_specialty_name!="Necromancer")){document.form1.extrachannel_list.selectedIndex=0}  
x=x + document.form1.extrachannel_list.selectedIndex; 
if (monk_levels<4){document.form1.extraki_list.selectedIndex=0}  
x=x + document.form1.extraki_list.selectedIndex; 
if (paladin_levels<2){document.form1.extralayonhands_list.selectedIndex=0;} 
x=x + document.form1.extralayonhands_list.selectedIndex; 
if (paladin_levels<3){document.form1.extralayonhands_list.selectedIndex=0}  
x=x + document.form1.extramercy_list.selectedIndex; 
if (bard_levels==0){document.form1.extraperformance_list.selectedIndex=0}  
x=x + document.form1.extraperformance_list.selectedIndex; 
if (barbarian_levels==0){document.form1.extrarage_list.selectedIndex=0}  
x=x + document.form1.extrarage_list.selectedIndex; 


if (document.form1.greatfortitude.checked==true){x++ ; }
if (document.form1.improvedcounterspell.checked==true){
 if (!Spellcaster())
  {document.form1.improvedcounterspell.checked=false}
  else {x++ ; }}

if (document.form1.ironwill.checked==true){x++ ; }
if (document.form1.leadership.checked==true){
 if ((total_levels<7)|(has_nobility_domain)){document.form1.leadership.checked=false}
 else {x++ ; }}
if (document.form1.lightningreflexes.checked==true){x++ ; }
if (document.form1.magicalaptitude.checked==true){
 if ((usemagicdevice==0)|(spellcraft==0)){document.form1.magicalaptitude.checked=false}
 else {x++ ; }}
if (document.form1.martialweaponproficiency.checked==true){
  if (already_knows_martial_weapons==true)
   {document.form1.martialweaponproficiency.checked=false; }
  else {x++ ; }}
if (document.form1.naturalspell.checked==true){
 if ((druid_levels<4)|(wisdom<13)){document.form1.naturalspell.checked=false}
 else {x++ ; }}
if (document.form1.persuasive.checked==true){x++ ; }
if (document.form1.run.checked==true){x++ ; }
if (document.form1.selfsufficient.checked==true){x++ ; }
if (document.form1.shieldproficiency.checked==true){
  if (already_knows_shields==true)
   {document.form1.shieldproficiency.checked=false}
  else {x++ ; }}
if ((already_knows_tower_shield)|((!already_knows_shields)&(!document.form1.shieldproficiency.checked))){document.form1.towershieldproficiency.checked=false;}
if (document.form1.towershieldproficiency.checked==true){x++ ; }
if (document.form1.simpleweaponproficiency.checked==true){
 if ((already_knows_simple_weapons==true)|
    (already_knows_martial_weapons==true))
    {document.form1.simpleweaponproficiency.checked=false}
   else {x++ ; }}

if (document.form1.skillfocusappraise.checked==true){x++ ; total_halfelf_feats++;}
if (document.form1.skillfocusbluff.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusclimb.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusacrobatics.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocuscraft_1.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocuscraft_2.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocuscraft_3.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusdiplomacy.checked==true){x++ ;  total_halfelf_feats++; total_halfelf_feats++;}
if (document.form1.skillfocusdisabledevice.checked==true){
  if (disabledevice==0){document.form1.skillfocusdisabledevice.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusdisguise.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusescapeartist.checked==true){x++ ;  total_halfelf_feats++; total_halfelf_feats++;}
if (document.form1.skillfocusfly.checked==true){x++ ;  total_halfelf_feats++; total_halfelf_feats++;}
if (document.form1.skillfocushandleanimal.checked==true){
  if (handleanimal==0){document.form1.skillfocushandleanimal.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusheal.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusstealth.checked==true){x++ ;  total_halfelf_feats++;}


if (document.form1.skillfocusintimidate.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusknowledgearcana.checked==true){
  if (knowledgearcana==0){document.form1.skillfocusknowledgearcana.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusknowledgeengineering.checked==true){
  if (knowledgeengineering==0){document.form1.skillfocusknowledgeengineering.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusknowledgedungeoneering.checked==true){
  if (knowledgedungeoneering==0){document.form1.skillfocusknowledgedungeoneering.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusknowledgegeography.checked==true){
  if (knowledgegeography==0){document.form1.skillfocusknowledgegeography.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusknowledgehistory.checked==true){
  if (knowledgehistory==0){document.form1.skillfocusknowledgehistory.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusknowledgelocal.checked==true){
  if (knowledgelocal==0){document.form1.skillfocusknowledgelocal.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusknowledgenature.checked==true){
  if (knowledgenature==0){document.form1.skillfocusknowledgenature.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusknowledgenobility.checked==true){
  if (knowledgenobility==0){document.form1.skillfocusknowledgenobility.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusknowledgereligion.checked==true){
  if (knowledgereligion==0){document.form1.skillfocusknowledgereligion.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusknowledgeplanes.checked==true){
  if (knowledgeplanes==0){document.form1.skillfocusknowledgeplanes.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusperception.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocuslinguistics.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusperform_1.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusperform_2.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusperform_3.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusperform_4.checked==true){x++ ; total_halfelf_feats++; }
if (document.form1.skillfocusperform_5.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusprofession.checked==true){
  if (profession==0){document.form1.skillfocusprofession.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusride.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocussensemotive.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocussleightofhand.checked==true){
  if (sleightofhand==0){document.form1.skillfocussleightofhand.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocusspellcraft.checked==true){
  if (spellcraft==0){document.form1.skillfocusspellcraft.checked=false}
   else {x++ ;  total_halfelf_feats++;}}
if (document.form1.skillfocussurvival.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocusswim.checked==true){x++ ;  total_halfelf_feats++;}
if (document.form1.skillfocususemagicdevice.checked==true){
  if (usemagicdevice==0){document.form1.skillfocususemagicdevice.checked=false}
   else {x++ ;  total_halfelf_feats++;}}





if (document.form1.spellfocusabjuration.checked==true){
 if ((gave_up_abjuration==true)|(!Spellcaster()))
  {document.form1.spellfocusabjuration.checked=false} 
   else {x++ ; }}
if (document.form1.spellfocusconjuration.checked==true){
 if ((gave_up_conjuration==true)|(!Spellcaster()))
  {document.form1.spellfocusconjuration.checked=false} 
   else {x++ ; }}
if (document.form1.spellfocusdivination.checked==true)
 if ((gave_up_divination==true)|(!Spellcaster()))
  {document.form1.spellfocusdivination.checked=false} 
   else {x++ ; }
if (document.form1.spellfocusenchantment.checked==true){
 if ((gave_up_enchantment==true)|(!Spellcaster()))
  {document.form1.spellfocusenchantment.checked=false} 
   else {x++ ; }}
if (document.form1.spellfocusevocation.checked==true){
 if ((gave_up_evocation==true)|(!Spellcaster()))
  {document.form1.spellfocusevocation.checked=false} 
   else {x++ ; }}
if (document.form1.spellfocusillusion.checked==true){
 if ((gave_up_illusion==true)|(!Spellcaster()))
  {document.form1.spellfocusillusion.checked=false} 
   else {x++ ; }}
if (document.form1.spellfocusnecromancy.checked==true){
 if ((gave_up_necromancy==true)|(!Spellcaster()))
  {document.form1.spellfocusnecromancy.checked=false} 
   else {x++ ; }}
if (document.form1.spellfocustransmutation.checked==true){
 if ((gave_up_transmutation==true)|(!Spellcaster()))
  {document.form1.spellfocustransmutation.checked=false} 
   else {x++ ; }}
if (document.form1.greaterspellfocusabjuration.checked==true){
 if (document.form1.spellfocusabjuration.checked==false)
  {document.form1.greaterspellfocusabjuration.checked=false; }
   else {x++ ; }}
if (document.form1.greaterspellfocusconjuration.checked==true){
 if (document.form1.spellfocusconjuration.checked==false)
  {document.form1.greaterspellfocusconjuration.checked=false; }
   else {x++ ; }}
if (document.form1.greaterspellfocusdivination.checked==true){
 if (document.form1.spellfocusdivination.checked==false)
  {document.form1.greaterspellfocusdivination.checked=false; }
   else {x++ ; }}
if (document.form1.greaterspellfocusenchantment.checked==true){
 if (document.form1.spellfocusenchantment.checked==false)
  {document.form1.greaterspellfocusenchantment.checked=false; }
   else {x++ ; }}
if (document.form1.greaterspellfocusevocation.checked==true){
 if (document.form1.spellfocusevocation.checked==false)
  {document.form1.greaterspellfocusevocation.checked=false; }
   else {x++ ; }}
if (document.form1.greaterspellfocusillusion.checked==true){
 if (document.form1.spellfocusillusion.checked==false)
  {document.form1.greaterspellfocusillusion.checked=false; }
   else {x++ ; }}
if (document.form1.greaterspellfocusnecromancy.checked==true){
 if (document.form1.spellfocusnecromancy.checked==false)
  {document.form1.greaterspellfocusnecromancy.checked=false; }
   else {x++ ; }}
if (document.form1.greaterspellfocustransmutation.checked==true){
 if (document.form1.spellfocustransmutation.checked==false)
  {document.form1.greaterspellfocustransmutation.checked=false; }
   else {x++ ; }}
if (document.form1.spellmastery_list.selectedIndex>0){
 if (wizard_levels==0){document.form1.spellmastery_list.selectedIndex=0}
 else
  {
   total_wizard_feats +=document.form1.spellmastery_list.selectedIndex; 
   x +=document.form1.spellmastery_list.selectedIndex; 
  }}
if (document.form1.spellpenetration.checked==true){
 if (CasterLevel()==0)
  {document.form1.spellpenetration.checked=false}
  else {x++ ; }}

if (document.form1.greaterspellpenetration.checked==true){
 if (document.form1.spellpenetration.checked==false)    
  {document.form1.greaterspellpenetration.checked=false}
   else {x++ ; }}

if (document.form1.stealthy.checked==true){x++ ; }
if (base_attack_bonus<1){document.form1.stepup.checked=false;}
if (document.form1.stepup.checked==true){x++ ; }
if (base_attack_bonus<11){document.form1.strikeback.checked=false;}
if (document.form1.strikeback.checked==true){x++ ; }
if (document.form1.throwanything.checked==true){x++ ;total_fighter_feats++; total_monk_feats++; }
if (document.form1.toughness.checked==true){x++ ; }

if (document.form1.brewpotion.checked==true){
 if (CasterLevel()<3)
  {document.form1.brewpotion.checked=false}
   else {total_wizard_feats++ ;  x++ ; }}



if (document.form1.craftmaa.checked==true){
 if ((CasterLevel()<5)&(CrafterLevel()<5))
  {document.form1.craftmaa.checked=false}
   else {total_wizard_feats++ ;  x++ ; }}


if (document.form1.craftrod.checked==true){
 if (CasterLevel()<9)
  {document.form1.craftrod.checked=false}
   else {total_wizard_feats++ ;  x++ ; }}


if (document.form1.craftstaff.checked==true){
 if (CasterLevel()<11)
  {document.form1.craftstaff.checked=false}
   else {total_wizard_feats++ ;  x++ ; }}


if (document.form1.craftwand.checked==true){
 if (CasterLevel()<5)
  {document.form1.craftwand.checked=false}
   else {total_wizard_feats++ ;  x++ ; }}


if (document.form1.craftwondrousitem.checked==true){
 if ((CasterLevel()<3)&(CrafterLevel()<3))
  {document.form1.craftwondrousitem.checked=false}
   else {total_wizard_feats++ ;  x++ ; }}


if (document.form1.forgering.checked==true){
 if (CasterLevel()<7)
  {document.form1.forgering.checked=false}
   else {total_wizard_feats++ ;  x++ ; }}


if (document.form1.scribescroll.checked==true){
 if ((wizard_levels>0)|(has_rune_domain)|
    (CasterLevel()<1))
 {document.form1.scribescroll.checked=false}
 else {x++ ; }}
 if (!Spellcaster())
 {
  document.form1.empowerspell.checked=false;
  document.form1.enlargespell.checked=false;
  document.form1.extendspell.checked=false;
  document.form1.heightenspell.checked=false;
  document.form1.maximizespell.checked=false;
  document.form1.quickenspell.checked=false;
  document.form1.silentspell.checked=false;
  document.form1.stillspell.checked=false;
  document.form1.widenspell.checked=false;
 }
if (document.form1.empowerspell.checked==true){total_wizard_feats++ ;  x++ ; }
if (document.form1.enlargespell.checked==true){total_wizard_feats++ ;  x++ ; }
if (document.form1.extendspell.checked==true){total_wizard_feats++ ;  x++ ; }
if (document.form1.heightenspell.checked==true){total_wizard_feats++ ;  x++ ; }
if (document.form1.maximizespell.checked==true){total_wizard_feats++ ;  x++ ; }
if (document.form1.quickenspell.checked==true){total_wizard_feats++ ;  x++ ; }
if (document.form1.silentspell.checked==true){total_wizard_feats++ ;  x++ ; }
if (document.form1.stillspell.checked==true){total_wizard_feats++ ;  x++ ; }
if (document.form1.widenspell.checked==true){total_wizard_feats++ ;  x++ ; }

if ((cleric_levels==0)&(paladin_levels<4)){document.form1.alignmentchannel.checked=false;}
if (document.form1.alignmentchannel.checked){x++;}
if (((!already_knows_light_armor)&(!document.form1.armorproficiencylight.checked))|((bard_levels<3)&(wizard_levels<3)&(sorcerer_levels<3))){document.form1.arcanearmortraining.checked=false;}
if (document.form1.arcanearmortraining.checked){x++; total_fighter_feats++;  }
if (((!already_knows_medium_armor)&(!document.form1.armorproficiencymedium.checked))|((bard_levels<7)&(wizard_levels<7)&(sorcerer_levels<7))){document.form1.arcanearmormastery.checked=false;}
if (document.form1.arcanearmormastery.checked){x++; total_fighter_feats++;  }
if (document.form1.catchoffguard.checked){x++; total_fighter_feats++;  total_monk_feats++;}
if ((cleric_levels==0)&(paladin_levels<4)){document.form1.channelsmite.checked=false;}
if (document.form1.channelsmite.checked){x++; total_fighter_feats++;  }
if (!document.form1.combatreflexes.checked){document.form1.standstill.checked=false;}
if (document.form1.standstill.checked){x++; total_fighter_feats++;  }
if (channels_energy!=2){document.form1.commandundead.checked=false;}
if (document.form1.commandundead.checked){x++;}

if (base_attack_bonus<9){document.form1.criticalfocus.checked=false;}
if (document.form1.criticalfocus.checked){x++; total_fighter_feats++;  }
if ((!document.form1.criticalfocus.checked)|(base_attack_bonus<11)){document.form1.bleedingcritical.checked=false;}
if (document.form1.bleedingcritical.checked){x++; total_fighter_feats++;  }
if ((!document.form1.criticalfocus.checked)|(base_attack_bonus<15)){document.form1.blindingcritical.checked=false;}
if (document.form1.blindingcritical.checked){x++; total_fighter_feats++;  }
if ((!document.form1.criticalfocus.checked)|(fighter_levels<14)){document.form1.criticalmastery.checked=false;}
if (document.form1.criticalmastery.checked){x++; total_fighter_feats++;  }
if ((!document.form1.criticalfocus.checked)|(base_attack_bonus<13)){document.form1.deafeningcritical.checked=false;}
if (document.form1.deafeningcritical.checked){x++; total_fighter_feats++;  }
if ((!document.form1.criticalfocus.checked)|(base_attack_bonus<11)){document.form1.sickeningcritical.checked=false;}
if (document.form1.sickeningcritical.checked){x++; total_fighter_feats++;  }
if ((!document.form1.criticalfocus.checked)|(base_attack_bonus<13)){document.form1.staggeringcritical.checked=false;}
if (document.form1.staggeringcritical.checked){x++; total_fighter_feats++;  }
if ((!document.form1.criticalfocus.checked)|(base_attack_bonus<17)){document.form1.stunningcritical.checked=false;}
if (document.form1.stunningcritical.checked){x++; total_fighter_feats++;  }
if ((!document.form1.criticalfocus.checked)|(base_attack_bonus<13)){document.form1.tiringcritical.checked=false;}
if (document.form1.tiringcritical.checked){x++; total_fighter_feats++;  }
if ((!document.form1.tiringcritical.checked)|(base_attack_bonus<15)){document.form1.exhaustingcritical.checked=false;}
if (document.form1.exhaustingcritical.checked){x++; total_fighter_feats++;  }
if ((dexterity<13)|(base_attack_bonus<1)){document.form1.deadlyaim.checked=false;}
if (document.form1.deadlyaim.checked){x++; total_fighter_feats++;  }
if (base_attack_bonus>=total_levels){document.form1.defensivecombattraining.checked=false;}
if (document.form1.defensivecombattraining.checked){x++; total_fighter_feats++;  }
if (fighter_levels<6){document.form1.disruptive.checked=false;}
if (document.form1.disruptive.checked){x++; total_fighter_feats++;  }
if ((fighter_levels<10)|(!document.form1.disruptive.checked)){document.form1.spellbreaker.checked=false;}
if (document.form1.spellbreaker.checked){x++; total_fighter_feats++;  }
if ((!document.form1.dodge.checked)|(dexterity<15)|(base_attack_bonus<6)){document.form1.windstance.checked=false;}
if (document.form1.windstance.checked){x++; total_fighter_feats++;  }
if ((!document.form1.windstance.checked)|(dexterity<17)|(base_attack_bonus<11)){document.form1.lightningstance.checked=false;}
if (document.form1.lightningstance.checked){x++; total_fighter_feats++;  }
if ((cleric_levels==0)&(paladin_levels<4)){document.form1.elementalchannel.checked=false;}
if (document.form1.elementalchannel.checked){x++;}
if (document.form1.fleet.checked){x++;}
if (!document.form1.greatfortitude.checked){document.form1.improvedgreatfortitude.checked=false;}
if (document.form1.improvedgreatfortitude.checked){x++;}
if ((cleric_levels==0)&(paladin_levels<4)&(wizard_specialty_name!="Necromancer")){document.form1.improvedchannel.checked=false;}
if (document.form1.improvedchannel.checked){x++;}  
if (document.form1.improvedfamiliar.checked){x++;}
if (((!document.form1.catchoffguard.checked)&(!document.form1.throwanything.checked))|(base_attack_bonus<8)){document.form1.improvisedweaponmastery.checked=false;}
if (document.form1.improvisedweaponmastery.checked){x++; total_fighter_feats++;  }
if (strength<12){document.form1.intimidatingprowess.checked=false;}
if (document.form1.intimidatingprowess.checked){x++;}
if (!document.form1.ironwill.checked){document.form1.improvedironwill.checked=false;}
if (document.form1.improvedironwill.checked){x++;}
if (document.form1.improvedlightningreflexes.checked){x++;}
if (base_attack_bonus<6){document.form1.lunge.checked=false;}
if (document.form1.lunge.checked){x++; total_fighter_feats++;  }
if ((craft_1<5)&(craft_2<5)&(craft_3<5)&(profession<5)){document.form1.mastercraftsman.checked=false;}
if (document.form1.mastercraftsman.checked){x++;}
if ((!document.form1.improvedbullrush.checked)|(!document.form1.mountedcombat.checked)){document.form1.unseat.checked=false;}
if (document.form1.unseat.checked){x++; total_fighter_feats++;  }
if (dexterity<13){document.form1.nimblemoves.checked=false;}
if (document.form1.nimblemoves.checked){x++;}
if ((dexterity<15)|(!document.form1.nimblemoves.checked)){document.form1.acrobaticsteps.checked=false;}
if (document.form1.acrobaticsteps.checked){x++;}
if (document.form1.pinpointtargeting.checked){x++; total_r1_feats++; total_fighter_feats++;   } 
if (((cleric_levels==0)&(paladin_levels<4)&(wizard_specialty_name!="Necromancer"))|(charisma<13)){document.form1.selectivechanneling.checked=false;}
if (document.form1.selectivechanneling.checked){x++;}
if ((!document.form1.improvedshieldbash.checked)|(!document.form1.twoweaponfighting.checked)|(base_attack_bonus<6)){document.form1.shieldslam.checked=false;}
if (document.form1.shieldslam.checked){x++; total_fighter_feats++;  }
if ((!document.form1.shieldslam.checked)|(base_attack_bonus<11)){document.form1.shieldmaster.checked=false;}
if (document.form1.shieldmaster.checked){x++; total_fighter_feats++;  }
if ((!already_knows_shields)&(!document.form1.shieldfocus.checked)){document.form1.shieldfocus.checked=false;}
if (document.form1.shieldfocus.checked){x++; total_fighter_feats++;  }
if ((!document.form1.shieldfocus.checked)|(fighter_levels<8)){document.form1.greatershieldfocus.checked=false;}
if (document.form1.greatershieldfocus.checked){x++; total_fighter_feats++;  }
if ((cleric_levels==0)&(paladin_levels<4)){document.form1.turnundead.checked=false;}
if (document.form1.turnundead.checked){x++;}
if ((base_attack_bonus<6)){document.form1.vitalstrike.checked=false;}
if (document.form1.vitalstrike.checked){x++; total_fighter_feats++;  }
if ((!document.form1.vitalstrike.checked)|(base_attack_bonus<11)){document.form1.improvedvitalstrike.checked=false;}
if (document.form1.improvedvitalstrike.checked){x++; total_fighter_feats++;  }
if ((!document.form1.improvedvitalstrike.checked)|(base_attack_bonus<16)){document.form1.greatervitalstrike.checked=false;}
if (document.form1.greatervitalstrike.checked){x++; total_fighter_feats++;  }
if (document.form1.weaponfocus_list.selectedIndex==0){document.form1.dazzlingdisplay.checked=false;}
if (document.form1.dazzlingdisplay.checked){x++; total_fighter_feats++;  }
if ((!document.form1.dazzlingdisplay.checked)|(base_attack_bonus<6)){document.form1.shatterdefenses.checked=false;}
if (document.form1.shatterdefenses.checked){x++; total_fighter_feats++;  }
if ((document.form1.greaterweaponfocus_list.selectedIndex==0)|(!document.form1.shatterdefenses.checked)|(base_attack_bonus<11)){document.form1.deadlystroke.checked=false;}
if (document.form1.deadlystroke.checked){x++; total_fighter_feats++;  }
if ((document.form1.weaponfocus_list.selectedIndex==0)|(fighter_levels<12)){document.form1.penetratingstrike.checked=false;}
if (document.form1.penetratingstrike.checked){x++; total_fighter_feats++;  }
if ((!document.form1.penetratingstrike.checked)|(fighter_levels<16)){document.form1.greaterpenetratingstrike.checked=false;}
if (document.form1.greaterpenetratingstrike.checked){x++; total_fighter_feats++;  }

if (has_darkness_domain){document.form1.blindfight.checked=false;}
 if (document.form1.blindfight.checked==true){total_fighter_feats++ ;  x++ ; }
 if (document.form1.combatexpertise.checked==true){
  if (intelligence<13){document.form1.combatexpertise.checked=false} 
  else {total_fighter_feats++ ;  x++ ; }}
 if (document.form1.improveddisarm.checked==true){
  if ((document.form1.combatexpertise.checked==false)&(monk_levels<6))
   {document.form1.improveddisarm.checked=false; }
  else {total_fighter_feats++ ; total_monk_feats++;  x++ ; }}
 if (document.form1.improvedfeint.checked==true){
   if ((document.form1.combatexpertise.checked==false)&(monk_levels<6))
    {document.form1.improvedfeint.checked=false; }
   else {total_fighter_feats++ ; total_monk_feats++; x++ ; }}
 if (document.form1.improvedtrip.checked==true){
   if ((document.form1.combatexpertise.checked==false)&(monk_levels<6))
    {document.form1.improvedtrip.checked=false; }
   else {total_fighter_feats++ ; total_monk_feats++;  x++ ; }}


if ((base_attack_bonus<6)|(!document.form1.improveddisarm.checked)){document.form1.greaterdisarm.checked=false;}
if (document.form1.greaterdisarm.checked){x++; total_fighter_feats++;  }
if ((base_attack_bonus<6)|(!document.form1.improvedfeint.checked)){document.form1.greaterfeint.checked=false;}
if (document.form1.greaterfeint.checked){x++; total_fighter_feats++;  }
if ((base_attack_bonus<6)|(!document.form1.improvedtrip.checked)){document.form1.greatertrip.checked=false;}
if (document.form1.greatertrip.checked){x++; total_fighter_feats++;  }


 if (document.form1.whirlwindattack.checked==true){
   if ((document.form1.combatexpertise.checked==false)
      |(base_attack_bonus<4)
      |(document.form1.combatexpertise.checked==false)
      |(document.form1.springattack.checked==false)
      |(dexterity<13)
      )
      {document.form1.whirlwindattack.checked=false; }
   else {total_fighter_feats++ ;  x++ ; }}
 if (document.form1.combatreflexes.checked==true){total_fighter_feats++ ;  total_monk_feats++; x++ ; }
 if (document.form1.dodge.checked==true){
   if ((dexterity<13)&(monk_levels==0)){document.form1.dodge.checked=false}
  else {total_fighter_feats++ ; total_monk_feats++; x++ ; }}
 if (document.form1.mobility.checked==true){
   if ((document.form1.dodge.checked==false)&(monk_levels<6)){document.form1.mobility.checked=false}
   else {total_fighter_feats++ ;  total_monk_feats++; x++ ; }}

 if (document.form1.springattack.checked==true){
   if (((document.form1.mobility.checked==false)|(dexterity<13)|(base_attack_bonus<4))&(monk_levels<10)){document.form1.springattack.checked=false}
  else {total_fighter_feats++ ; total_monk_feats++;  x++ ; }}
 if (document.form1.exoticweaponproficiency.checked==true){total_fighter_feats++ ;  x++ ; }
 if (document.form1.improvedcritical_list.selectedIndex>0){
  if ((base_attack_bonus<8)&(monk_levels<10)){has_improvedcritical=0; document.form1.improvedcritical_list.selectedIndex=0; }
   else
    {
    total_fighter_feats +=document.form1.improvedcritical_list.selectedIndex; 
    total_monk_feats +=document.form1.improvedcritical_list.selectedIndex; 
    x +=document.form1.improvedcritical_list.selectedIndex; 
    
    }}
 if (document.form1.improvedinitiative.checked==true){total_fighter_feats++ ;  x++ ; }
 if (document.form1.improvedunarmedstrike.checked==true){
  if (monk_levels>0){document.form1.improvedunarmedstrike.checked=false}
   else {total_fighter_feats++ ;  x++ ; }}
  if (document.form1.improvedgrapple.checked==true){
   if ((((document.form1.improvedunarmedstrike.checked==false)&(monk_levels==0))|(dexterity<13))&(monk_levels==0)){document.form1.improvedgrapple.checked=false}
    else {total_fighter_feats++ ;  total_monk_feats++; x++ ; }}

  if ((((document.form1.improvedunarmedstrike.checked)|(monk_levels>0))&(dexterity>13))|(monk_levels>0)){document.form1.deflectarrows_star.src="asterisk.gif";}
    else {document.form1.deflectarrows_star.src="no_asterisk.gif";}

  if (((document.form1.deflectarrows.checked)&(dexterity>=15))|(monk_levels>=10)){document.form1.snatcharrows_star.src="asterisk.gif";}
    else {document.form1.snatcharrows_star.src="no_asterisk.gif";}

  if (((document.form1.improvedunarmedstrike.checked)|(monk_levels>0))&(dexterity>13)){document.form1.improvedgrapple_star.src="asterisk.gif";}
    else {document.form1.improvedgrapple_star.src="no_asterisk.gif";}

  if ((document.form1.improvedgrapple.checked)&(base_attack_bonus>=6)){document.form1.greatergrapple_star.src="asterisk.gif";}
    else {document.form1.greatergrapple_star.src="no_asterisk.gif";}

  if ((document.form1.improvedunarmedstrike.checked)|(monk_levels>0)){document.form1.scorpionstyle_star.src="asterisk.gif";}
    else {document.form1.scorpionstyle_star.src="no_asterisk.gif";}

  if (((document.form1.scorpionstyle.checked)&(base_attack_bonus>=6))|(monk_levels>=6)){document.form1.gorgonsfist_star.src="asterisk.gif";}
    else {document.form1.gorgonsfist_star.src="no_asterisk.gif";}

  if (((document.form1.gorgonsfist.checked)&(base_attack_bonus>=11))|(monk_levels>=10)){document.form1.medusaswrath_star.src="asterisk.gif";}
    else {document.form1.medusaswrath_star.src="no_asterisk.gif";}

  if (((document.form1.improvedunarmedstrike.checked))&(wisdom>=13)&(dexterity>=13)&(base_attack_bonus>=8)&(monk_levels==0)){document.form1.stunningfist_star.src="asterisk.gif";}
    else {document.form1.stunningfist_star.src="no_asterisk.gif";}

if ((!document.form1.improvedgrapple.checked)|(base_attack_bonus<6)){document.form1.greatergrapple.checked=false;}
if (document.form1.greatergrapple.checked){x++; total_fighter_feats++;  }
if ((!document.form1.improvedunarmedstrike.checked)&(monk_levels==0)){document.form1.scorpionstyle.checked=false;}
if (document.form1.scorpionstyle.checked){x++; total_monk_feats++; total_fighter_feats++;  }
if (((!document.form1.scorpionstyle.checked)|(base_attack_bonus<6))&(monk_levels<6)){document.form1.gorgonsfist.checked=false;}
if (document.form1.gorgonsfist.checked){x++; total_fighter_feats++; total_monk_feats++; }
if (((!document.form1.gorgonsfist.checked)|(base_attack_bonus<11))&(monk_levels<10)){document.form1.medusaswrath.checked=false;}
if (document.form1.medusaswrath.checked){x++; total_fighter_feats++;  total_monk_feats++;}

 if (document.form1.deflectarrows.checked==true){
  if ((((document.form1.improvedunarmedstrike.checked==false)&(monk_levels==0))|(dexterity<13))&(monk_levels==0)){document.form1.deflectarrows.checked=false}
  else {total_fighter_feats++ ;  total_monk_feats++; x++ ; }}
 if (document.form1.snatcharrows.checked==true){
  if (
      ( 
       (dexterity<15)
       |(document.form1.deflectarrows.checked==false))&(monk_levels<10)){document.form1.snatcharrows.checked=false}
  else {total_fighter_feats++ ; total_monk_feats++; x++ ; }}

 if (document.form1.stunningfist.checked==true){
  if (((document.form1.improvedunarmedstrike.checked==false)&(monk_levels==0))
     |(wisdom<13)
     |(monk_levels>0)
     |(dexterity<13)
     |(base_attack_bonus<8)
     )
   {document.form1.stunningfist.checked=false}
  else {total_fighter_feats++ ;  x++ ; }}
 if (ride==0){document.form1.mountedcombat.checked=false;}
 if (document.form1.mountedcombat.checked==true){total_fighter_feats++ ;  x++ ; }
 if (document.form1.mountedarchery.checked==true){
   if (document.form1.mountedcombat.checked==false){document.form1.mountedarchery.checked=false; }
   else {total_fighter_feats++ ;  x++ ; }}
 if (document.form1.ridebyattack.checked==true){
   if (document.form1.mountedcombat.checked==false){document.form1.ridebyattack.checked=false; }
   else {total_fighter_feats++ ;  x++ ; }}
 if (document.form1.spiritedcharge.checked==true){
   if ((document.form1.mountedcombat.checked==false)
      |(document.form1.ridebyattack.checked==false)
      ){document.form1.spiritedcharge.checked=false; }
   else {total_fighter_feats++ ;  x++ ; }}
 if (document.form1.trample.checked==true){
   if (document.form1.mountedcombat.checked==false){document.form1.trample.checked=false; }
   else {total_fighter_feats++ ;  x++ ; }}



 if (document.form1.pointblankshot.checked==true){total_fighter_feats++ ;  total_r1_feats++;  x++ ; }
 if ((rangercombattrack!=1)&(document.form1.pointblankshot.checked==false))
       {document.form1.farshot.checked=false}
  if (document.form1.farshot.checked) {total_fighter_feats++ ; total_r1_feats++; x++ ; }

  if ((rangercombattrack!=1)&(document.form1.pointblankshot.checked==false))
       {document.form1.preciseshot.checked=false};
  if (document.form1.preciseshot.checked) {total_fighter_feats++ ;  total_r1_feats++;  x++ ; }

   if ((rangercombattrack!=1)&((document.form1.pointblankshot.checked==false)|(dexterity<13)))
       {document.form1.rapidshot.checked=false}

 if (document.form1.rapidshot.checked==true){total_fighter_feats++;  total_r1_feats++;  x++; }




 if (((rangercombattrack!=1)|(ranger_levels<6))&((dexterity<17)|(document.form1.rapidshot.checked==false)|(base_attack_bonus<6)))
   {document.form1.manyshot.checked=false;}
 if (document.form1.manyshot.checked==true){total_fighter_feats++;  total_r1_feats++;  x++; }

 if (((rangercombattrack!=1)|(ranger_levels<10))&((!document.form1.mobility.checked)|(!document.form1.pointblankshot.checked)|(base_attack_bonus<4)))
    {document.form1.shotontherun.checked=false;}
 if (document.form1.shotontherun.checked==true){total_fighter_feats++ ;  total_r1_feats++;  x++ ; }


  
   if (((document.form1.preciseshot.checked==false)
      |(dexterity<19)
      |(base_attack_bonus<11)
      )&((rangercombattrack!=1)|(ranger_levels<6)))
       {document.form1.improvedpreciseshot.checked=false}
 

 if (document.form1.improvedpreciseshot.checked==true)
   {total_fighter_feats++;  total_r1_feats++;  x++; }


if (((rangercombattrack!=1)|(ranger_levels<10))&((!document.form1.improvedpreciseshot.checked)|(base_attack_bonus<16)))
  {document.form1.pinpointtargeting.checked=false;}



 if (document.form1.powerattack.checked==true){
   if ((strength<13)|(base_attack_bonus==0)){document.form1.powerattack.checked=false; }
   else {total_fighter_feats++ ;  x++ ; }}
 if (document.form1.cleave.checked==true){
   if (document.form1.powerattack.checked==false)
    {document.form1.cleave.checked=false; }
   else {total_fighter_feats++ ;  x++ ; }}
 if (document.form1.greatcleave.checked==true){
   if ((document.form1.cleave.checked==false)|(base_attack_bonus<4))
    {document.form1.greatcleave.checked=false; }
   else {total_fighter_feats++ ;  x++ ; }}
 if (document.form1.improvedbullrush.checked==true){
   if ((document.form1.powerattack.checked==false)&(monk_levels<6))
    {document.form1.improvedbullrush.checked=false; }
   else {total_fighter_feats++ ;  total_monk_feats++; x++ ; }}
 if (document.form1.improvedoverrun.checked==true){
   if (document.form1.powerattack.checked==false)
    {document.form1.improvedoverrun.checked=false; }
    else {total_fighter_feats++ ;  x++ ; }}
 if (document.form1.improvedsunder.checked==true){
   if (document.form1.powerattack.checked==false)
    {document.form1.improvedsunder.checked=false; }
   else {total_fighter_feats++ ;  x++ ; }}


if ((!document.form1.improvedbullrush.checked)|(base_attack_bonus<6)){document.form1.greaterbullrush.checked=false;} 
if (document.form1.greaterbullrush.checked){x++; total_fighter_feats++;  }
if ((!document.form1.improvedoverrun.checked)|(base_attack_bonus<6)){document.form1.greateroverrun.checked=false;} 
if (document.form1.greateroverrun.checked){x++; total_fighter_feats++;  }
if ((!document.form1.improvedsunder.checked)|(base_attack_bonus<6)){document.form1.greatersunder.checked=false;} 
if (document.form1.greatersunder.checked){x++; total_fighter_feats++;  }



 if (document.form1.quickdraw.checked==true){
   if (base_attack_bonus<1){document.form1.quickdraw.checked=false; }
   else {total_fighter_feats++ ;  total_r2_feats++;  x++ ; }}
 if (document.form1.rapidreload.checked==true){
    total_fighter_feats++ ;  x++ ; }


 if ((document.form1.shieldproficiency.checked)&(!already_knows_shields)){document.form1.improvedshieldbash.checked=false;}
 if (document.form1.improvedshieldbash.checked==true){total_fighter_feats++ ;  total_r2_feats++;  x++ ; }

 if ((rangercombattrack!=2)&(dexterity<15)){document.form1.twoweaponfighting.checked=false;}
 if (document.form1.twoweaponfighting.checked){total_fighter_feats++;  total_r2_feats++;  x++; }

 if (((rangercombattrack!=2)|(ranger_levels<6))&(!document.form1.twoweaponfighting.checked)){document.form1.twoweapondefense.checked=false;}
 if (document.form1.twoweapondefense.checked){total_fighter_feats++;  total_r2_feats++;  x++; }

 if (((rangercombattrack!=2)|(ranger_levels<6))&((dexterity<17)|(base_attack_bonus<6)|(!document.form1.twoweaponfighting.checked))){document.form1.improvedtwoweaponfighting.checked=false;}
 if (document.form1.improvedtwoweaponfighting.checked){total_fighter_feats++;  total_r2_feats++;  x++; }

 if (((rangercombattrack!=2)|(ranger_levels<10))&((!document.form1.improvedtwoweaponfighting.checked)|(dexterity<19)|(base_attack_bonus<11))){document.form1.greatertwoweaponfighting.checked=false;}
 if (document.form1.greatertwoweaponfighting.checked){total_fighter_feats++;  total_r2_feats++;  x++; }
 
 if ((rangercombattrack!=2)&(!document.form1.twoweaponfighting.checked)){document.form1.doubleslice.checked=false;}
 if (document.form1.doubleslice.checked){x++;total_fighter_feats++;  total_r2_feats++; }

 if (((rangercombattrack!=2)|(ranger_levels<10))&((!document.form1.doubleslice.checked)|(!document.form1.improvedtwoweaponfighting)|(base_attack_bonus<11))){document.form1.twoweaponrend.checked=false;}
 if (document.form1.twoweaponrend.checked){x++; total_fighter_feats++; total_r2_feats++; }


 if (document.form1.weaponfinesse.checked==true){
  {
    total_fighter_feats ++; 
    x ++; 
   }}

 if (document.form1.otherfeat1.checked==true){x++ ; }
 if (document.form1.otherfeat2.checked==true){x++ ; }
 if (document.form1.otherfeat3.checked==true){x++ ; }
 if (document.form1.otherfeat4.checked==true){x++ ; }
 if (document.form1.otherfeat5.checked==true){x++ ; }
 if (document.form1.otherfeat6.checked==true){x++ ; }
 if (document.form1.otherfeat7.checked==true){x++ ; }
 if (document.form1.otherfeat8.checked==true){x++ ; }
 if (document.form1.otherfeat9.checked==true){x++ ; }
 if (document.form1.otherfeat10.checked==true){x++ ; }



 if (document.form1.weaponfocus_list.selectedIndex>0)
       {
         total_fighter_feats+=document.form1.weaponfocus_list.selectedIndex; 
         x+=document.form1.weaponfocus_list.selectedIndex; 
       }







 if (document.form1.weaponspecialization_list.selectedIndex>document.form1.weaponfocus_list.selectedIndex)
  {document.form1.weaponspecialization_list.selectedIndex=document.form1.weaponfocus_list.selectedIndex; }
 if (fighter_levels<4)
  {document.form1.weaponspecialization_list.selectedIndex=0; }
 total_fighter_feats +=document.form1.weaponspecialization_list.selectedIndex; 
 x +=document.form1.weaponspecialization_list.selectedIndex; 

 if (document.form1.greaterweaponfocus_list.selectedIndex>document.form1.weaponfocus_list.selectedIndex)
  {document.form1.greaterweaponfocus_list.selectedIndex=document.form1.weaponfocus_list.selectedIndex; }
 if (fighter_levels<8)
  {document.form1.greaterweaponfocus_list.selectedIndex=0; }
 total_fighter_feats +=document.form1.greaterweaponfocus_list.selectedIndex; 
 x +=document.form1.greaterweaponfocus_list.selectedIndex;  

 if (document.form1.greaterweaponspecialization_list.selectedIndex>document.form1.greaterweaponfocus_list.selectedIndex)
  {document.form1.greaterweaponspecialization_list.selectedIndex=document.form1.greaterweaponfocus_list.selectedIndex; }
 if (document.form1.greaterweaponspecialization_list.selectedIndex>document.form1.weaponspecialization_list.selectedIndex)
  {document.form1.greaterweaponspecialization_list.selectedIndex=document.form1.weaponspecialization_list.selectedIndex; }
 if (fighter_levels<12)
  {document.form1.greaterweaponspecialization_list.selectedIndex=0; }
 total_fighter_feats +=document.form1.greaterweaponspecialization_list.selectedIndex; 
 x +=document.form1.greaterweaponspecialization_list.selectedIndex;  


 LightVariableFeatStars();
 RecordFeats(); 
   z=fighterfeatentitlement + wizardfeatentitlement + genericfeatentitlement +r1featentitlement + r2featentitlement + sorcererfeatentitlement + monkfeatentitlement + halfelffeatentitlement; 


  if (SkillPointsAreLocked==false){
   document.form1.feat.value="Wait to choose your feats."
   } else {
  document.form1.feat.value +="You must choose " + z + " feats.  You have " + x + ".\r"
  if (wizardfeatentitlement>0){document.form1.feat.value +="There must be " + wizardfeatentitlement + " wizard feats [W].  You have " + total_wizard_feats + ".\r"; }
  if (fighterfeatentitlement>0){document.form1.feat.value +="There must be " + fighterfeatentitlement + " fighter feats [F].  You have " + total_fighter_feats + ".\r"; }
  if (halfelffeatentitlement>0){document.form1.feat.value +="A half-elf must take one Skill Focus feat.  You have " + total_halfelf_feats + ".\r"; }
  if (monkfeatentitlement>0){document.form1.feat.value +="There must be " + monkfeatentitlement + " monk feats [M].  You have " + total_monk_feats + ".\r"; }
  if (r1featentitlement>0){document.form1.feat.value +="There must be " + r1featentitlement + " archery-track ranger feats [R].  You have " + total_r1_feats + ".\r"; }
  if (r2featentitlement>0){document.form1.feat.value +="There must be " + r2featentitlement + " two-weapon ranger feats [R].  You have " + total_r2_feats + ".\r"; }
  if (sorcererfeatentitlement>0){document.form1.feat.value +="There must be " + sorcererfeatentitlement + " bloodline feats.  See the rulebook.  You are on your honor.\r"; }
   SorcererFeatRecommendations();

   if ((x==z)&(total_fighter_feats>=fighterfeatentitlement)
    &(total_halfelf_feats>=halfelffeatentitlement)
    &(total_r1_feats>=r1featentitlement)
    &(total_r2_feats>=r2featentitlement)
    &(total_wizard_feats>=wizardfeatentitlement)
    &(total_monk_feats>=monkfeatentitlement)&(x>0))
     {
      document.form1.feat.value +="You can accept these."
      document.form1.sixth_comment_box.value="You can accept these."
      document.form1.acceptfeatsarrow.src="dragonarrowleft.gif"; 
      document.form1.featsarrow.src="dragongrayright.gif"; 
      return true; 
     }
     else
     {
      document.form1.feat.value +="Keep working."
      document.form1.sixth_comment_box.value="Keep working."
      if (x>z+1)
      {
       document.form1.feat.value+="  Un-check some boxes."
       document.form1.sixth_comment_box.value="  Un-check some boxes."
      }
      if (x==z+1)
      {
       document.form1.feat.value+="  Un-check a box."
       document.form1.sixth_comment_box.value="  Un-check a box."
      }
      document.form1.acceptfeatsarrow.src="dragonblank.gif"; 
      document.form1.featsarrow.src="dragonarrowright.gif"; 
      return false; 
     }
  }

 }

 }





function modifier_number(skillo){
 if (skillo<2){return -5}
 else if (skillo<4){return -4}
 else if (skillo<6){return -3}
 else if (skillo<8){return -2}
 else if (skillo<10){return -1}
 else {return Math.floor((skillo-10)/2);}
 }

function modifier_string(skillo){
 if (skillo<2){return "-5"}
 else if (skillo<4){return "-4"}
 else if (skillo<6){return "-3"}
 else if (skillo<8){return "-2"}
 else if (skillo<10){return "-1"}
 else {return "+"+(Math.floor(skillo/2)-5);}
 }


function SkillPointsPerLevel(klasso){
 if (klasso==0){return 0; }
 else if (klasso==1){return 4; }
 else if (klasso==2){return 6; }
 else if (klasso==3){return 2; }
 else if (klasso==4){return 4; }
 else if (klasso==5){return 2; }
 else if (klasso==6){return 4; }
 else if (klasso==7){return 2; }
 else if (klasso==8){return 6; }
 else if (klasso==9){return 8; }
 else if (klasso==10){return 2; }
 else if (klasso==11){return 2; }
 else if (klasso==12){return 2; }
 else if (klasso==13){return 2; }
 else if (klasso==14){return prestige_skill_points_per_level; }
  else return 0; 
 }

function FigureClassSkillsAndTotalSkillPoints(){
// alert("intelligence01="+intelligence01+" favored_for_skill="+favored_for_skill);
  total_skill_points=0;
/*
  if (total_levels>=1){x=SkillPointsPerLevel(class01) + modifier_number(intelligence01); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=2){x=SkillPointsPerLevel(class02) + modifier_number(intelligence01); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=3){x=SkillPointsPerLevel(class03) + modifier_number(intelligence01); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=4){x=SkillPointsPerLevel(class04) + modifier_number(intelligence04); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=5){x=SkillPointsPerLevel(class05) + modifier_number(intelligence04); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=6){x=SkillPointsPerLevel(class06) + modifier_number(intelligence04); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=7){x=SkillPointsPerLevel(class07) + modifier_number(intelligence04); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=8){x=SkillPointsPerLevel(class08) + modifier_number(intelligence08); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=9){x=SkillPointsPerLevel(class09) + modifier_number(intelligence08); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=10){x=SkillPointsPerLevel(class10) + modifier_number(intelligence08); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=11){x=SkillPointsPerLevel(class11) + modifier_number(intelligence08); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=12){x=SkillPointsPerLevel(class12) + modifier_number(intelligence12); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=13){x=SkillPointsPerLevel(class13) + modifier_number(intelligence12); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=14){x=SkillPointsPerLevel(class14) + modifier_number(intelligence12); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=15){x=SkillPointsPerLevel(class15) + modifier_number(intelligence12); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=16){x=SkillPointsPerLevel(class16) + modifier_number(intelligence16); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=17){x=SkillPointsPerLevel(class17) + modifier_number(intelligence16); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=18){x=SkillPointsPerLevel(class18) + modifier_number(intelligence16); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=19){x=SkillPointsPerLevel(class19) + modifier_number(intelligence16); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=20){x=SkillPointsPerLevel(class20) + modifier_number(intelligence20); if (x<1){x=1; } total_skill_points +=x; }
*/
  if (total_levels>=1){x=SkillPointsPerLevel(class01) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=2){x=SkillPointsPerLevel(class02) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=3){x=SkillPointsPerLevel(class03) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=4){x=SkillPointsPerLevel(class04) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=5){x=SkillPointsPerLevel(class05) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=6){x=SkillPointsPerLevel(class06) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=7){x=SkillPointsPerLevel(class07) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=8){x=SkillPointsPerLevel(class08) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=9){x=SkillPointsPerLevel(class09) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=10){x=SkillPointsPerLevel(class10) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=11){x=SkillPointsPerLevel(class11) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=12){x=SkillPointsPerLevel(class12) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=13){x=SkillPointsPerLevel(class13) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=14){x=SkillPointsPerLevel(class14) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=15){x=SkillPointsPerLevel(class15) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=16){x=SkillPointsPerLevel(class16) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=17){x=SkillPointsPerLevel(class17) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=18){x=SkillPointsPerLevel(class18) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=19){x=SkillPointsPerLevel(class19) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (total_levels>=20){x=SkillPointsPerLevel(class20) + modifier_number(intelligence); if (x<1){x=1; } total_skill_points +=x; }
  if (rayce==1){total_skill_points +=total_levels;}
   total_skill_points+=document.form1.favored_for_skill_points.selectedIndex;
    
    
   if (barbarian_levels>0)
   {
     document.form1.acrobatics_ics.checked=true; 
    document.form1.climb_ics.checked=true; 
    document.form1.handleanimal_ics.checked=true; 
    document.form1.intimidate_ics.checked=true; 
    document.form1.perception_ics.checked=true; 
    document.form1.ride_ics.checked=true; 
     document.form1.survival_ics.checked=true; 
     document.form1.swim_ics.checked=true; 
   }
  if (has_knowledge_domain)
  { 
     document.form1.knowledgearcana_ics.checked=true; 
     document.form1.knowledgeengineering_ics.checked=true; 
     document.form1.knowledgedungeoneering_ics.checked=true; 
     document.form1.knowledgegeography_ics.checked=true; 
     document.form1.knowledgehistory_ics.checked=true; 
     document.form1.knowledgelocal_ics.checked=true; 
     document.form1.knowledgenature_ics.checked=true; 
     document.form1.knowledgenobility_ics.checked=true; 
     document.form1.knowledgereligion_ics.checked=true; 
     document.form1.knowledgeplanes_ics.checked=true; 
  }
  if (has_aberrant_bloodline){document.form1.knowledgedungeoneering_ics.checked=true;}
  if (has_abyssal_bloodline){document.form1.knowledgeplanes_ics.checked=true;}
//  if (has_aberrant_bloodline){document.form1.knowledgedungeoneering_ics.checked=true;}
  if (has_celestial_bloodline){document.form1.heal_ics.checked=true;}
  if (has_destined_bloodline){document.form1.knowledgehistory_ics.checked=true;}
  if (has_draconic_bloodline){document.form1.perception_ics.checked=true;}
  if (has_elemental_bloodline){document.form1.knowledgeplanes_ics.checked=true;}
  if (has_fey_bloodline){document.form1.knowledgenature_ics.checked=true;}
  if (has_infernal_bloodline){document.form1.knowledgeplanes_ics.checked=true;}
  if (has_undead_bloodline){document.form1.knowledgereligion_ics.checked=true;}
  if (has_trickery_domain)
  {
     document.form1.bluff_ics.checked=true; 
     document.form1.disguise_ics.checked=true; 
     document.form1.stealth_ics.checked=true; 
  }
  if (bard_levels>0)
   {
     document.form1.acrobatics_ics.checked=true; 
     document.form1.appraise_ics.checked=true; 
     document.form1.bluff_ics.checked=true; 
     document.form1.climb_ics.checked=true; 
     document.form1.diplomacy_ics.checked=true; 
     document.form1.disguise_ics.checked=true; 
     document.form1.escapeartist_ics.checked=true; 
    document.form1.intimidate_ics.checked=true; 
     document.form1.stealth_ics.checked=true; 
     document.form1.knowledgearcana_ics.checked=true; 
     document.form1.knowledgeengineering_ics.checked=true; 
     document.form1.knowledgedungeoneering_ics.checked=true; 
     document.form1.knowledgegeography_ics.checked=true; 
     document.form1.knowledgehistory_ics.checked=true; 
     document.form1.knowledgelocal_ics.checked=true; 
     document.form1.knowledgenature_ics.checked=true; 
     document.form1.knowledgenobility_ics.checked=true; 
     document.form1.knowledgereligion_ics.checked=true; 
     document.form1.knowledgeplanes_ics.checked=true; 
     document.form1.perception_ics.checked=true; 
     document.form1.perform_1_ics.checked=true; 
     document.form1.perform_2_ics.checked=true; 
     document.form1.perform_3_ics.checked=true; 
     document.form1.perform_4_ics.checked=true; 
     document.form1.perform_5_ics.checked=true; 
     document.form1.profession_ics.checked=true; 
     document.form1.sensemotive_ics.checked=true; 
     document.form1.sleightofhand_ics.checked=true; 
     document.form1.linguistics_ics.checked=true; 
     document.form1.spellcraft_ics.checked=true; 
     document.form1.swim_ics.checked=true; 
     document.form1.usemagicdevice_ics.checked=true; 
     if (bard_levels>=16)
     {
     document.form1.disabledevice_ics.checked=true; 
     document.form1.fly_ics.checked=true; 
     document.form1.handleanimal_ics.checked=true; 
     document.form1.heal_ics.checked=true; 
     document.form1.ride_ics.checked=true; 
     document.form1.survival_ics.checked=true; 
     document.form1.swim_ics.checked=true; 
     document.form1.appraise_ics.checked=true; 
     }
   }
  if (cleric_levels>0)
   {
     document.form1.diplomacy_ics.checked=true; 
     document.form1.heal_ics.checked=true; 
     document.form1.knowledgearcana_ics.checked=true; 
     document.form1.knowledgehistory_ics.checked=true; 
     document.form1.knowledgereligion_ics.checked=true; 
     document.form1.knowledgeplanes_ics.checked=true; 
     document.form1.profession_ics.checked=true; 
     document.form1.linguistics_ics.checked=true; 
     document.form1.spellcraft_ics.checked=true; 
   }
  if (druid_levels>0)
   {
     document.form1.diplomacy_ics.checked=true; 
     document.form1.handleanimal_ics.checked=true; 
     document.form1.heal_ics.checked=true; 
     document.form1.knowledgenature_ics.checked=true; 
     document.form1.perception_ics.checked=true; 
     document.form1.profession_ics.checked=true; 
     document.form1.ride_ics.checked=true; 
     document.form1.spellcraft_ics.checked=true; 
     document.form1.survival_ics.checked=true; 
     document.form1.swim_ics.checked=true; 
     document.form1.fly_ics.checked=true; 
   }
  if (fighter_levels>0)
   {
     document.form1.climb_ics.checked=true; 
     document.form1.handleanimal_ics.checked=true; 
     document.form1.intimidate_ics.checked=true; 
     document.form1.ride_ics.checked=true; 
     document.form1.swim_ics.checked=true; 
     document.form1.survival_ics.checked=true; 
      document.form1.knowledgeengineering_ics.checked=true; 
     document.form1.knowledgedungeoneering_ics.checked=true; 
  }

  if (monk_levels>0)
   {
     document.form1.climb_ics.checked=true; 
     document.form1.acrobatics_ics.checked=true; 
     document.form1.diplomacy_ics.checked=true; 
     document.form1.escapeartist_ics.checked=true; 
     document.form1.stealth_ics.checked=true; 
     document.form1.knowledgearcana_ics.checked=true; 
     document.form1.knowledgereligion_ics.checked=true; 
     document.form1.perception_ics.checked=true; 
     document.form1.perform_1_ics.checked=true; 
     document.form1.perform_2_ics.checked=true; 
     document.form1.perform_3_ics.checked=true; 
     document.form1.perform_4_ics.checked=true; 
     document.form1.perform_5_ics.checked=true; 
     document.form1.profession_ics.checked=true; 
     document.form1.sensemotive_ics.checked=true; 
     document.form1.swim_ics.checked=true; 
   }
  if (paladin_levels>0)
   {
     document.form1.diplomacy_ics.checked=true; 
     document.form1.handleanimal_ics.checked=true; 
     document.form1.heal_ics.checked=true; 
     document.form1.knowledgenobility_ics.checked=true; 
     document.form1.knowledgereligion_ics.checked=true; 
     document.form1.profession_ics.checked=true; 
     document.form1.ride_ics.checked=true; 
     document.form1.sensemotive_ics.checked=true; 
   }
  if (ranger_levels>0)
   {
     document.form1.climb_ics.checked=true; 
     document.form1.acrobatics_ics.checked=true; 
     document.form1.handleanimal_ics.checked=true; 
     document.form1.heal_ics.checked=true; 
     document.form1.stealth_ics.checked=true; 
     document.form1.knowledgedungeoneering_ics.checked=true; 
     document.form1.knowledgegeography_ics.checked=true; 
     document.form1.knowledgenature_ics.checked=true; 
     document.form1.perception_ics.checked=true; 
     document.form1.profession_ics.checked=true; 
     document.form1.ride_ics.checked=true; 
     document.form1.spellcraft_ics.checked=true; 
     document.form1.survival_ics.checked=true; 
     document.form1.swim_ics.checked=true; 
   }
  if (rogue_levels>0)
   {
     document.form1.acrobatics_ics.checked=true; 
     document.form1.appraise_ics.checked=true; 
     document.form1.bluff_ics.checked=true; 
     document.form1.climb_ics.checked=true; 
     document.form1.diplomacy_ics.checked=true; 
     document.form1.disabledevice_ics.checked=true; 
     document.form1.disguise_ics.checked=true; 
     document.form1.escapeartist_ics.checked=true; 
     document.form1.stealth_ics.checked=true; 
     document.form1.intimidate_ics.checked=true; 
     document.form1.knowledgedungeoneering_ics.checked=true; 
     document.form1.knowledgelocal_ics.checked=true; 
     document.form1.perception_ics.checked=true; 
     document.form1.perform_1_ics.checked=true; 
     document.form1.perform_2_ics.checked=true; 
     document.form1.perform_3_ics.checked=true; 
     document.form1.perform_4_ics.checked=true; 
     document.form1.perform_5_ics.checked=true; 
     document.form1.profession_ics.checked=true; 
     document.form1.sensemotive_ics.checked=true; 
     document.form1.sleightofhand_ics.checked=true; 
     document.form1.swim_ics.checked=true; 
     document.form1.usemagicdevice_ics.checked=true; 
     document.form1.linguistics_ics.checked=true; 
   }
  if (sorcerer_levels>0)
   {
     document.form1.bluff_ics.checked=true; 
     document.form1.knowledgearcana_ics.checked=true; 
     document.form1.profession_ics.checked=true; 
     document.form1.spellcraft_ics.checked=true; 
     document.form1.fly_ics.checked=true; 
   }
  if (wizard_levels>0)
   {
     document.form1.appraise_ics.checked=true; 
     document.form1.knowledgearcana_ics.checked=true; 
     document.form1.knowledgeengineering_ics.checked=true; 
     document.form1.knowledgedungeoneering_ics.checked=true; 
     document.form1.knowledgegeography_ics.checked=true; 
     document.form1.knowledgehistory_ics.checked=true; 
     document.form1.knowledgelocal_ics.checked=true; 
     document.form1.knowledgenature_ics.checked=true; 
     document.form1.knowledgenobility_ics.checked=true; 
     document.form1.knowledgereligion_ics.checked=true; 
     document.form1.knowledgeplanes_ics.checked=true; 
     document.form1.profession_ics.checked=true; 
     document.form1.spellcraft_ics.checked=true; 
     document.form1.fly_ics.checked=true; 
      document.form1.linguistics_ics.checked=true; 
  }


  if (has_animal_domain==true){ document.form1.knowledgenature_ics.checked=true; }
  if (has_plant_domain==true){ document.form1.knowledgenature_ics.checked=true; }
  if (has_knowledge_domain==true)
   {
     document.form1.knowledgearcana_ics.checked=true; 
     document.form1.knowledgeengineering_ics.checked=true; 
     document.form1.knowledgedungeoneering_ics.checked=true; 
     document.form1.knowledgegeography_ics.checked=true; 
     document.form1.knowledgehistory_ics.checked=true; 
     document.form1.knowledgelocal_ics.checked=true; 
     document.form1.knowledgenature_ics.checked=true; 
     document.form1.knowledgenobility_ics.checked=true; 
     document.form1.knowledgereligion_ics.checked=true; 
     document.form1.knowledgeplanes_ics.checked=true; 
   }
  if (has_travel_domain==true){ document.form1.survival_ics.checked=true; }
  if (has_trickery_domain==true)
   {
     document.form1.bluff_ics.checked=true; 
     document.form1.disguise_ics.checked=true; 
     document.form1.stealth_ics.checked=true; 
   }
 }


function NumberToAbility(numb){
 if (numb==1){return "strength"; } else
 if (numb==2){return "dexterity"; } else
 if (numb==3){return "constitution"; } else
 if (numb==4){return "intelligence"; } else
 if (numb==5){return "wisdom"; } else
 if (numb==6){return "charisma"; } else return "???"; 
 }

function RecordFighterFeatsEtc(){

has_aberrant_bloodline=document.form1.choose_bloodline[0].checked;
//alert("A. Aberrant bloodline="+has_aberrant_bloodline)
has_abyssal_bloodline=document.form1.choose_bloodline[1].checked;
has_arcane_bloodline=document.form1.choose_bloodline[2].checked;
has_celestial_bloodline=document.form1.choose_bloodline[3].checked;
has_destined_bloodline=document.form1.choose_bloodline[4].checked;
has_draconic_bloodline=document.form1.choose_bloodline[5].checked;
has_elemental_bloodline=document.form1.choose_bloodline[6].checked;
has_fey_bloodline=document.form1.choose_bloodline[7].checked;
has_infernal_bloodline=document.form1.choose_bloodline[8].checked;
has_undead_bloodline=document.form1.choose_bloodline[9].checked;


 if (document.form1.air_domain.checked==true){has_air_domain=true; }
 if (document.form1.animal_domain.checked==true){has_animal_domain=true; }
 if (document.form1.chaos_domain.checked==true){has_chaos_domain=true; }
 if (document.form1.death_domain.checked==true){has_death_domain=true; }
 if (document.form1.destruction_domain.checked==true){has_destruction_domain=true; }
 if (document.form1.earth_domain.checked==true){has_earth_domain=true; }
 if (document.form1.evil_domain.checked==true){has_evil_domain=true; }
 if (document.form1.fire_domain.checked==true){has_fire_domain=true; }
 if (document.form1.good_domain.checked==true){has_good_domain=true; }
 if (document.form1.healing_domain.checked==true){has_healing_domain=true; }
 if (document.form1.knowledge_domain.checked==true){has_knowledge_domain=true; }
 if (document.form1.law_domain.checked==true){has_law_domain=true; }
 if (document.form1.luck_domain.checked==true){has_luck_domain=true; }
 if (document.form1.magic_domain.checked==true){has_magic_domain=true; }
 if (document.form1.plant_domain.checked==true){has_plant_domain=true; }
 if (document.form1.protection_domain.checked==true){has_protection_domain=true; }
 if (document.form1.strength_domain.checked==true){has_strength_domain=true; }
 if (document.form1.sun_domain.checked==true){has_sun_domain=true; }
 if (document.form1.travel_domain.checked==true){has_travel_domain=true; }
 if (document.form1.trickery_domain.checked==true){has_trickery_domain=true; }
 if (document.form1.war_domain.checked==true){has_war_domain=true; }
 if (document.form1.water_domain.checked==true){has_water_domain=true; }
  if (document.form1.artifice_domain.checked){has_artifice_domain=true;}
  if (document.form1.charm_domain.checked){has_charm_domain=true;}
  if (document.form1.community_domain.checked){has_community_domain=true;}
  if (document.form1.darkness_domain.checked){has_darkness_domain=true;}
  if (document.form1.glory_domain.checked){has_glory_domain=true;}
  if (document.form1.liberation_domain.checked){has_liberation_domain=true;}
  if (document.form1.madness_domain.checked){has_madness_domain=true;}
  if (document.form1.nobility_domain.checked){has_nobility_domain=true;}
  if (document.form1.repose_domain.checked){has_repose_domain=true;}
  if (document.form1.rune_domain.checked){has_rune_domain=true;}
  if (document.form1.weather_domain.checked){has_weather_domain=true;}
 if (document.form1.choose_energy[0].checked==true){channels_energy=1; }
 if (document.form1.choose_energy[1].checked==true)
  {
   if (alignment<4)
    {
     document.form1.choose_energy[0].checked==true
     channels_energy=1; 
    }
   else {channels_energy=2; }
  }


 RememberFighterFeatsEtc(); 

 }

function WipeBloodlines(){
// alert("Wiping bloodlines");
 document.form1.choose_bloodline[0].checked=true;
 document.form1.choose_bloodline[0].checked=false;
 }

function WipeDomains(){
 document.form1.air_domain.checked=false; 
 document.form1.animal_domain.checked=false; 
 document.form1.chaos_domain.checked=false; 
 document.form1.death_domain.checked=false; 
 document.form1.destruction_domain.checked=false; 
 document.form1.earth_domain.checked=false; 
 document.form1.evil_domain.checked=false; 
 document.form1.fire_domain.checked=false; 
 document.form1.good_domain.checked=false; 
 document.form1.healing_domain.checked=false; 
 document.form1.knowledge_domain.checked=false; 
 document.form1.law_domain.checked=false; 
 document.form1.luck_domain.checked=false; 
 document.form1.magic_domain.checked=false; 
 document.form1.plant_domain.checked=false; 
 document.form1.protection_domain.checked=false; 
 document.form1.strength_domain.checked=false; 
 document.form1.sun_domain.checked=false; 
 document.form1.travel_domain.checked=false; 
 document.form1.trickery_domain.checked=false; 
 document.form1.war_domain.checked=false; 
 document.form1.water_domain.checked=false; 
  document.form1.artifice_domain.checked=false;
  document.form1.charm_domain.checked=false;
  document.form1.community_domain.checked=false;
  document.form1.darkness_domain.checked=false;
  document.form1.glory_domain.checked=false;
  document.form1.liberation_domain.checked=false;
  document.form1.madness_domain.checked=false;
  document.form1.nobility_domain.checked=false;
  document.form1.repose_domain.checked=false;
  document.form1.rune_domain.checked=false;
  document.form1.weather_domain.checked=false;
 document.form1.choose_energy[0].checked=false; 
 document.form1.choose_energy[1].checked=false; 
 }



function AbilitiesWellIncreased(){
//zzzzzzzzzzzz
 if ((total_levels<4)&(rayce!=1)&(rayce!=2)&(rayce!=7)&(rayce!=28)&(rayce!=29)&(rayce!=30)&(rayce!=31)&(rayce!=32)&(rayce!=33)){return true; }
 else if (((rayce==1)|(rayce==2)|(rayce==7)|(rayce==30)|(rayce==31)|(rayce==32)|(rayce==29))
         &(document.form1.upat00[0].checked==false)
         &(document.form1.upat00[1].checked==false)
         &(document.form1.upat00[2].checked==false)
         &(document.form1.upat00[3].checked==false)
         &(document.form1.upat00[4].checked==false)
         &(document.form1.upat00[5].checked==false)){return false; }
 else if ((total_levels>=4)
         &(document.form1.upat04[0].checked==false)
         &(document.form1.upat04[1].checked==false)
         &(document.form1.upat04[2].checked==false)
         &(document.form1.upat04[3].checked==false)
         &(document.form1.upat04[4].checked==false)
         &(document.form1.upat04[5].checked==false)){return false; }
 else if ((total_levels>=8)
         &(document.form1.upat08[0].checked==false)
         &(document.form1.upat08[1].checked==false)
         &(document.form1.upat08[2].checked==false)
         &(document.form1.upat08[3].checked==false)
         &(document.form1.upat08[4].checked==false)
         &(document.form1.upat08[5].checked==false)){return false; }
 else if ((total_levels>=12)
         &(document.form1.upat12[0].checked==false)
         &(document.form1.upat12[1].checked==false)
         &(document.form1.upat12[2].checked==false)
         &(document.form1.upat12[3].checked==false)
         &(document.form1.upat12[4].checked==false)
         &(document.form1.upat12[5].checked==false)){return false; }
 else if ((total_levels>=16)
         &(document.form1.upat16[0].checked==false)
         &(document.form1.upat16[1].checked==false)
         &(document.form1.upat16[2].checked==false)
         &(document.form1.upat16[3].checked==false)
         &(document.form1.upat16[4].checked==false)
         &(document.form1.upat16[5].checked==false)){return false; }
 else if ((total_levels>=20)
         &(document.form1.upat20[0].checked==false)
         &(document.form1.upat20[1].checked==false)
         &(document.form1.upat20[2].checked==false)
         &(document.form1.upat20[3].checked==false)
         &(document.form1.upat20[4].checked==false)
         &(document.form1.upat20[5].checked==false)){return false; }
 else return true; 
 }



function upsky(klass){
 if (klass==1){barbarian_levels++ ; }
 if (klass==2){bard_levels++ ; }
 if (klass==3){cleric_levels++ ; }
 if (klass==4){druid_levels++ ; }
 if (klass==5){fighter_levels++ ; }
 if (klass==6){monk_levels++ ; }
 if (klass==7){paladin_levels++ ; }
 if (klass==8){ranger_levels++ ; }
 if (klass==9){rogue_levels++ ; }
 if (klass==10){sorcerer_levels++ ; }
 if (klass==11){wizard_levels++ ; }
 if (klass==14){prestige_levels++ ; }
 }


 function NegateSkills(){
  appraise=0; document.form1.appraise_list.selectedIndex=0; 
  bluff=0; document.form1.bluff_list.selectedIndex=0; 
  climb=0; document.form1.climb_list.selectedIndex=0; 
  acrobatics=0; document.form1.acrobatics_list.selectedIndex=0; 
  craft_1=0; document.form1.craft_1_list.selectedIndex=0; 
  craft_2=0; document.form1.craft_2_list.selectedIndex=0; 
  craft_3=0; document.form1.craft_3_list.selectedIndex=0; 
  diplomacy=0; document.form1.diplomacy_list.selectedIndex=0; 

  disabledevice=0; document.form1.disabledevice_list.selectedIndex=0; 
  disguise=0; document.form1.disguise_list.selectedIndex=0; 
  escapeartist=0; document.form1.escapeartist_list.selectedIndex=0; 
  fly=0; document.form1.fly_list.selectedIndex=0; 
  handleanimal=0; document.form1.handleanimal_list.selectedIndex=0; 
  heal=0; document.form1.heal_list.selectedIndex=0; 
  stealth=0; document.form1.stealth_list.selectedIndex=0; 
  intimidate=0; document.form1.intimidate_list.selectedIndex=0; 
  knowledgearcana=0; document.form1.knowledgearcana_list.selectedIndex=0; 
  knowledgeengineering=0; document.form1.knowledgeengineering_list.selectedIndex=0; 
  knowledgedungeoneering=0; document.form1.knowledgedungeoneering_list.selectedIndex=0; 
  knowledgegeography=0; document.form1.knowledgegeography_list.selectedIndex=0; 
  knowledgehistory=0; document.form1.knowledgehistory_list.selectedIndex=0; 
  knowledgelocal=0; document.form1.knowledgelocal_list.selectedIndex=0; 

  knowledgenature=0; document.form1.knowledgenature_list.selectedIndex=0; 

  knowledgenobility=0; document.form1.knowledgenobility_list.selectedIndex=0; 
  knowledgereligion=0; document.form1.knowledgereligion_list.selectedIndex=0; 
  knowledgeplanes=0; document.form1.knowledgeplanes_list.selectedIndex=0; 

  perception=0; document.form1.perception_list.selectedIndex=0; 
  perform_1=0; document.form1.perform_1_list.selectedIndex=0; 
  perform_2=0; document.form1.perform_2_list.selectedIndex=0; 
  perform_3=0; document.form1.perform_3_list.selectedIndex=0; 
  perform_4=0; document.form1.perform_4_list.selectedIndex=0; 
  perform_5=0; document.form1.perform_5_list.selectedIndex=0; 
  profession=0; document.form1.profession_list.selectedIndex=0; 
  ride=0; document.form1.ride_list.selectedIndex=0; 
  sensemotive=0; document.form1.sensemotive_list.selectedIndex=0; 
  sleightofhand=0; document.form1.sleightofhand_list.selectedIndex=0; 
  linguistics=0; document.form1.linguistics_list.selectedIndex=0; 
  spellcraft=0; document.form1.spellcraft_list.selectedIndex=0; 
  survival=0; document.form1.survival_list.selectedIndex=0; 
  swim=0; document.form1.swim_list.selectedIndex=0; 
  usemagicdevice=0; document.form1.usemagicdevice_list.selectedIndex=0; 
  otherskill1=0; document.form1.otherskill1_list.selectedIndex=0; 
  otherskill2=0; document.form1.otherskill2_list.selectedIndex=0; 
  otherskill3=0; document.form1.otherskill3_list.selectedIndex=0; 

  figure_skills(); 
  }

 function figure_skills(){
  if (SkillPointsAreLocked==true){return; }  
  if (FighterFeatsEtcFrozen==true){

  x=0; 
  x +=appraise; 
  x +=bluff; 
  x +=climb; 
  x +=acrobatics; 
  x +=craft_1; 
  x +=craft_2; 
  x +=craft_3; 
  x +=diplomacy; 

  x +=disabledevice; 
  x +=disguise; 
  x +=escapeartist; 
  x +=fly; 
  x +=handleanimal; 
  x +=heal; 
  x +=stealth; 
  x +=intimidate; 
  x +=knowledgearcana; 
  x +=knowledgeengineering; 
  x +=knowledgedungeoneering; 
  x +=knowledgegeography; 
  x +=knowledgehistory; 
  x +=knowledgelocal; 
  x +=knowledgenature; 
  x +=knowledgenobility; 
  x +=knowledgereligion; 
  x +=knowledgeplanes; 
  x +=perception; 
  x +=perform_1; 
  x +=perform_2; 
  x +=perform_3; 
  x +=perform_4; 
  x +=perform_5; 
  x +=profession; 
  x +=ride; 
  x +=sensemotive; 
  x +=sleightofhand; 
  x +=linguistics; 
  x +=spellcraft; 
  x +=survival; 
  x +=swim; 
  x +=usemagicdevice; 
  x +=otherskill1; 
  x +=otherskill2; 
  x +=otherskill3; 

  skill_points_spent=x; 
  document.form1.skillpointcount.value="You have spent " + x + " of " + total_skill_points + " skill points."; 
  if (x==0){document.form1.fifth_comment_box.value="Not ready yet"}
   else if (x==total_skill_points){document.form1.fifth_comment_box.value="You can accept these skills."}
    else {document.form1.fifth_comment_box.value="Keep working"}

  document.form1.about_appraise.value=(appraise) + " ranks"; 
  document.form1.about_bluff.value=(bluff) + " ranks";  
  document.form1.about_climb.value=(climb) + " ranks";  
  document.form1.about_acrobatics.value=(acrobatics) + " ranks";  
  document.form1.about_craft_1.value=(craft_1) + " ranks";  
  document.form1.about_craft_2.value=(craft_2) + " ranks";  
  document.form1.about_craft_3.value=(craft_3) + " ranks";  
  document.form1.about_diplomacy.value=(diplomacy) + " ranks";  
  document.form1.about_disabledevice.value=(disabledevice) + " ranks"; 
  document.form1.about_disguise.value=(disguise) + " ranks"; 
  document.form1.about_escapeartist.value=(escapeartist) + " ranks"; 
  document.form1.about_fly.value=(fly) + " ranks"; 
  document.form1.about_handleanimal.value=(handleanimal) + " ranks"; 
  document.form1.about_heal.value=(heal) + " ranks"; 
  document.form1.about_stealth.value=(stealth) + " ranks"; 
  document.form1.about_intimidate.value=(intimidate) + " ranks"; 
  document.form1.about_knowledgearcana.value=(knowledgearcana) + " ranks"; 
  document.form1.about_knowledgeengineering.value=(knowledgeengineering) + " ranks"; 
  document.form1.about_knowledgedungeoneering.value=(knowledgedungeoneering) + " ranks"; 
  document.form1.about_knowledgegeography.value=(knowledgegeography) + " ranks"; 
  document.form1.about_knowledgehistory.value=(knowledgehistory) + " ranks"; 
  document.form1.about_knowledgelocal.value=(knowledgelocal) + " ranks"; 
  document.form1.about_knowledgenature.value=(knowledgenature) + " ranks"; 
  document.form1.about_knowledgenobility.value=(knowledgenobility) + " ranks"; 
  document.form1.about_knowledgereligion.value=(knowledgereligion) + " ranks"; 
  document.form1.about_knowledgeplanes.value=(knowledgeplanes) + " ranks"; 
  document.form1.about_perception.value=(perception) + " ranks"; 
  document.form1.about_perform_1.value=(perform_1) + " ranks"; 
  document.form1.about_perform_2.value=(perform_2) + " ranks"; 
  document.form1.about_perform_3.value=(perform_3) + " ranks"; 
  document.form1.about_perform_4.value=(perform_4) + " ranks"; 
  document.form1.about_perform_5.value=(perform_5) + " ranks"; 
  document.form1.about_profession.value=(profession) + " ranks"; 
  document.form1.about_ride.value=(ride) + " ranks"; 
  document.form1.about_sensemotive.value=(sensemotive) + " ranks"; 
  document.form1.about_sleightofhand.value=(sleightofhand) + " ranks"; 
  document.form1.about_linguistics.value=(linguistics) + " ranks"; 
  document.form1.about_spellcraft.value=(spellcraft) + " ranks"; 
  document.form1.about_survival.value=(survival) + " ranks"; 
  document.form1.about_swim.value=(swim) + " ranks"; 
  document.form1.about_usemagicdevice.value=(usemagicdevice) + " ranks"; 
  document.form1.about_otherskill1.value=otherskill1 + " ranks"; 
  document.form1.about_otherskill2.value=otherskill2 + " ranks"; 
  document.form1.about_otherskill3.value=otherskill3 + " ranks"; 
   ArrowShow(); 

  }
  }


 function figure_appraise(){
  if ((document.form1.appraise_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.appraise_list.selectedIndex=appraise; }
  else {appraise=document.form1.appraise_list.selectedIndex; }
   figure_skills(); 
  }


 function figure_bluff(){
  if ((document.form1.bluff_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.bluff_list.selectedIndex=bluff; }
  else {bluff=document.form1.bluff_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_climb(){
  if ((document.form1.climb_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.climb_list.selectedIndex=climb; }
  else {climb=document.form1.climb_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_acrobatics(){
  if ((document.form1.acrobatics_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.acrobatics_list.selectedIndex=acrobatics; }
  else {acrobatics=document.form1.acrobatics_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_craft_1(){
  if ((document.form1.craft_1_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.craft_1_list.selectedIndex=craft_1; }
  else {craft_1=document.form1.craft_1_list.selectedIndex; }
   figure_skills(); 
  }


 function figure_craft_2(){
  if ((document.form1.craft_2_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.craft_2_list.selectedIndex=craft_2; }
  else {craft_2=document.form1.craft_2_list.selectedIndex; }
   figure_skills(); 
  }


 function figure_craft_3(){
  if ((document.form1.craft_3_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.craft_3_list.selectedIndex=craft_3; }
  else {craft_3=document.form1.craft_3_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_diplomacy(){
  if ((document.form1.diplomacy_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.diplomacy_list.selectedIndex=diplomacy; }
  else {diplomacy=document.form1.diplomacy_list.selectedIndex; }
   figure_skills(); 
  }



 function figure_disabledevice(){
  if ((document.form1.disabledevice_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.disabledevice_list.selectedIndex=disabledevice; }
  else {disabledevice=document.form1.disabledevice_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_disguise(){
  if ((document.form1.disguise_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.disguise_list.selectedIndex=disguise; }
  else {disguise=document.form1.disguise_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_escapeartist(){
  if ((document.form1.escapeartist_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.escapeartist_list.selectedIndex=escapeartist; }
  else {escapeartist=document.form1.escapeartist_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_fly(){
  if ((document.form1.fly_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.fly_list.selectedIndex=fly; }
  else {fly=document.form1.fly_list.selectedIndex; }
   figure_skills(); 
  }


 function figure_handleanimal(){
  if ((document.form1.handleanimal_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.handleanimal_list.selectedIndex=handleanimal; }
  else {handleanimal=document.form1.handleanimal_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_heal(){
  if ((document.form1.heal_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.heal_list.selectedIndex=heal; }
  else {heal=document.form1.heal_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_stealth(){
  if ((document.form1.stealth_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.stealth_list.selectedIndex=stealth; }
  else {stealth=document.form1.stealth_list.selectedIndex; }
   figure_skills(); 
  }


 function figure_intimidate(){
  if ((document.form1.intimidate_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.intimidate_list.selectedIndex=intimidate; }
  else {intimidate=document.form1.intimidate_list.selectedIndex; }
   figure_skills(); 
  }


 function figure_knowledgearcana(){
  if ((document.form1.knowledgearcana_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgearcana_list.selectedIndex=knowledgearcana; }
  else {knowledgearcana=document.form1.knowledgearcana_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_knowledgeengineering(){
  if ((document.form1.knowledgeengineering_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgeengineering_list.selectedIndex=knowledgeengineering; }
  else {knowledgeengineering=document.form1.knowledgeengineering_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_knowledgedungeoneering(){
  if ((document.form1.knowledgedungeoneering_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgedungeoneering_list.selectedIndex=knowledgedungeoneering; }
  else {knowledgedungeoneering=document.form1.knowledgedungeoneering_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_knowledgegeography(){
  if ((document.form1.knowledgegeography_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgegeography_list.selectedIndex=knowledgegeography; }
  else {knowledgegeography=document.form1.knowledgegeography_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_knowledgehistory(){
  if ((document.form1.knowledgehistory_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgehistory_list.selectedIndex=knowledgehistory; }
  else {knowledgehistory=document.form1.knowledgehistory_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_knowledgelocal(){
  if ((document.form1.knowledgelocal_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgelocal_list.selectedIndex=knowledgelocal; }
  else {knowledgelocal=document.form1.knowledgelocal_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_knowledgenature(){
  if ((document.form1.knowledgenature_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgenature_list.selectedIndex=knowledgenature; }
  else {knowledgenature=document.form1.knowledgenature_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_knowledgenobility(){
  if ((document.form1.knowledgenobility_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgenobility_list.selectedIndex=knowledgenobility; }
  else {knowledgenobility=document.form1.knowledgenobility_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_knowledgereligion(){
  if ((document.form1.knowledgereligion_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgereligion_list.selectedIndex=knowledgereligion; }
  else {knowledgereligion=document.form1.knowledgereligion_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_knowledgeplanes(){
  if ((document.form1.knowledgeplanes_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.knowledgeplanes_list.selectedIndex=knowledgeplanes; }
  else {knowledgeplanes=document.form1.knowledgeplanes_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_perception(){
  if ((document.form1.perception_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.perception_list.selectedIndex=perception; }
  else {perception=document.form1.perception_list.selectedIndex; }
   figure_skills(); 
  }


 function figure_perform_1(){
  if ((document.form1.perform_1_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.perform_1_list.selectedIndex=perform_1; }
  else {perform_1=document.form1.perform_1_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_perform_2(){
  if ((document.form1.perform_2_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.perform_2_list.selectedIndex=perform_2; }
  else {perform_2=document.form1.perform_2_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_perform_3(){
  if ((document.form1.perform_3_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.perform_3_list.selectedIndex=perform_3; }
  else {perform_3=document.form1.perform_3_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_perform_4(){
  if ((document.form1.perform_4_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.perform_4_list.selectedIndex=perform_4; }
  else {perform_4=document.form1.perform_4_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_perform_5(){
  if ((document.form1.perform_5_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.perform_5_list.selectedIndex=perform_5; }
  else {perform_5=document.form1.perform_5_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_profession(){
  if ((document.form1.profession_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.profession_list.selectedIndex=profession; }
  else {profession=document.form1.profession_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_ride(){
  if ((document.form1.ride_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.ride_list.selectedIndex=ride; }
  else {ride=document.form1.ride_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_sensemotive(){
  if ((document.form1.sensemotive_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.sensemotive_list.selectedIndex=sensemotive; }
  else {sensemotive=document.form1.sensemotive_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_sleightofhand(){
  if ((document.form1.sleightofhand_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.sleightofhand_list.selectedIndex=sleightofhand; }
  else {sleightofhand=document.form1.sleightofhand_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_linguistics(){
  if ((document.form1.linguistics_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.linguistics_list.selectedIndex=linguistics; }
  else {linguistics=document.form1.linguistics_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_spellcraft(){
  if ((document.form1.spellcraft_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.spellcraft_list.selectedIndex=spellcraft; }
  else {spellcraft=document.form1.spellcraft_list.selectedIndex; }
   figure_skills(); 
  }


 function figure_survival(){
  if ((document.form1.survival_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.survival_list.selectedIndex=survival; }
  else {survival=document.form1.survival_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_swim(){
  if ((document.form1.swim_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.swim_list.selectedIndex=swim; }
  else {swim=document.form1.swim_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_usemagicdevice(){
  if ((document.form1.usemagicdevice_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.usemagicdevice_list.selectedIndex=usemagicdevice; }
  else {usemagicdevice=document.form1.usemagicdevice_list.selectedIndex; }
   figure_skills(); 
  }



 function figure_otherskill1(){
  if ((document.form1.otherskill1_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.otherskill1_list.selectedIndex=otherskill1; }
  else {otherskill1=document.form1.otherskill1_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_otherskill2(){
  if ((document.form1.otherskill2_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.otherskill2_list.selectedIndex=otherskill2; }
  else {otherskill2=document.form1.otherskill2_list.selectedIndex; }
   figure_skills(); 
  }

 function figure_otherskill3(){
  if ((document.form1.otherskill3_list.selectedIndex>3 + total_levels)|(FighterFeatsEtcFrozen==false)|(SkillPointsAreLocked==true))
   {document.form1.otherskill3_list.selectedIndex=otherskill3; }
  else {otherskill3=document.form1.otherskill3_list.selectedIndex; }
   figure_skills(); 
  }



function GenerateClassString(){
   class_string=""; 
   if (barbarian_levels>0){class_string +="Barbarian " + barbarian_levels; 
   if ((bard_levels>0)|(cleric_levels>0)|(druid_levels>0)|(fighter_levels>0)|(monk_levels>0)|(paladin_levels>0)|(ranger_levels>0)|(rogue_levels>0)|(sorcerer_levels>0)|(wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (bard_levels>0){class_string +="Bard " + bard_levels; 
   if ((cleric_levels>0)|(druid_levels>0)|(fighter_levels>0)|(monk_levels>0)|(paladin_levels>0)|(ranger_levels>0)|(rogue_levels>0)|(sorcerer_levels>0)|(wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (cleric_levels>0){class_string +="Cleric " + cleric_levels; 
   if ((druid_levels>0)|(fighter_levels>0)|(monk_levels>0)|(paladin_levels>0)|(ranger_levels>0)|(rogue_levels>0)|(sorcerer_levels>0)|(wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (druid_levels>0){class_string +="Druid " + druid_levels; 
   if ((fighter_levels>0)|(monk_levels>0)|(paladin_levels>0)|(ranger_levels>0)|(rogue_levels>0)|(sorcerer_levels>0)|(wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (fighter_levels>0){class_string +="Fighter " + fighter_levels; 
   if ((monk_levels>0)|(paladin_levels>0)|(ranger_levels>0)|(rogue_levels>0)|(sorcerer_levels>0)|(wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (monk_levels>0){class_string +="Monk " + monk_levels; 
   if ((paladin_levels>0)|(ranger_levels>0)|(rogue_levels>0)|(sorcerer_levels>0)|(wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (paladin_levels>0){class_string +="Paladin " + paladin_levels; 
   if ((ranger_levels>0)|(rogue_levels>0)|(sorcerer_levels>0)|(wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (ranger_levels>0){class_string +="Ranger " + ranger_levels; 
   if ((rogue_levels>0)|(sorcerer_levels>0)|(wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (rogue_levels>0){class_string +="Rogue " + rogue_levels; 
   if ((sorcerer_levels>0)|(wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (sorcerer_levels>0){class_string +="Sorcerer " + sorcerer_levels; 
   if ((wizard_levels>0)|(prestige_levels>0)){class_string +=" / "; }}
   if (wizard_levels>0){class_string +=wizard_specialty_name + " " + wizard_levels; 
   if ((prestige_levels>0)){class_string +=" / "; }}
   if (prestige_levels>0){class_string +=prestige_class_name + " " + prestige_levels; }
 }

 function rollHP(klasso){
  if (document.form1.avghp.checked)
  {
   if (klasso==1){return 7;}
   if (klasso==2){return 5;}
   if (klasso==3){return 5;}
   if (klasso==4){return 5;}
   if (klasso==5){return 6;}
   if (klasso==6){return 5;}
   if (klasso==7){return 6;}
   if (klasso==8){return 6;}
   if (klasso==9){return 5;}
   if (klasso==10){return 4;}
   if (klasso==11){return 4;}
   if (klasso==12){return 3;}
   if (klasso==13){return 5;}
   if (klasso==14){return Math.floor(prestige_hit_point_dice/2)+1;}
  }
  if (klasso==1){return Math.floor (12*Math.random() + 1); }
  else if (klasso==2){return Math.floor (8*Math.random() + 1); }
  else if (klasso==3){return Math.floor (8*Math.random() + 1); }
  else if (klasso==4){return Math.floor (8*Math.random() + 1); }
  else if (klasso==5){return Math.floor (10*Math.random() + 1); }
  else if (klasso==6){return Math.floor (8*Math.random() + 1); }
  else if (klasso==7){return Math.floor (10*Math.random() + 1); }
  else if (klasso==8){return Math.floor (10*Math.random() + 1); }
  else if (klasso==9){return Math.floor (8*Math.random() + 1); }
  else if (klasso==10){return Math.floor (6*Math.random() + 1); }
  else if (klasso==11){return Math.floor (6*Math.random() + 1); }
  else if (klasso==12){return Math.floor (4*Math.random() + 1); }
  else if (klasso==13){return Math.floor (8*Math.random() + 1); }
  else if (klasso==14){return Math.floor (prestige_hit_point_dice*Math.random() + 1); }
  else return 0; 
  }


 function ClassName(klasso){
  if (klasso==1){return "Barbarian"; }
  else if (klasso==2){return "Bard"; }
  else if (klasso==3){return "Cleric"; }
  else if (klasso==4){return "Druid"; }
  else if (klasso==5){return "Fighter"; }
  else if (klasso==6){return "Monk"; }
  else if (klasso==7){return "Paladin"; }
  else if (klasso==8){return "Ranger"; }
  else if (klasso==9){return "Rogue"; }
  else if (klasso==10){return "Sorcerer"; }
  else if (klasso==11){return wizard_specialty_name; }
  else if (klasso==14){return prestige_class_name; }
  else return "Adventurer"; 
  }

 function DoHPAndOtherClassStuff(){
   if (class01==1){newHP01=12; }
   if (class01==2){newHP01=8; }
   if (class01==3){newHP01=8; }
   if (class01==4){newHP01=8; }
   if (class01==5){newHP01=10; }
   if (class01==6){newHP01=8; }
   if (class01==7){newHP01=10; }
   if (class01==8){newHP01=10; }
   if (class01==9){newHP01=8; }
   if (class01==10){newHP01=6; }
   if (class01==11){newHP01=6; }
   if (document.form1.methods_list.selectedIndex==6){newHP01=rollHP(class01);}
   newHP02=rollHP(class02); 
   newHP03=rollHP(class03); 
   newHP04=rollHP(class04); 
   newHP05=rollHP(class05); 
   newHP06=rollHP(class06); 
   newHP07=rollHP(class07); 
   newHP08=rollHP(class08); 
   newHP09=rollHP(class09); 
   newHP10=rollHP(class10); 
   newHP11=rollHP(class11); 
   newHP12=rollHP(class12); 
   newHP13=rollHP(class13); 
   newHP14=rollHP(class14); 
   newHP15=rollHP(class15); 
   newHP16=rollHP(class16); 
   newHP17=rollHP(class17); 
   newHP18=rollHP(class18); 
   newHP19=rollHP(class19); 
   newHP20=rollHP(class20); 
   favored_class_point_total=1;
   if (class01==class02){favored_class_point_total++;}
   if (class01==class03){favored_class_point_total++;}
   if (class01==class04){favored_class_point_total++;}
   if (class01==class05){favored_class_point_total++;}
   if (class01==class06){favored_class_point_total++;}
   if (class01==class07){favored_class_point_total++;}
   if (class01==class08){favored_class_point_total++;}
   if (class01==class09){favored_class_point_total++;}
   if (class01==class10){favored_class_point_total++;}
   if (class01==class11){favored_class_point_total++;}
   if (class01==class12){favored_class_point_total++;}
   if (class01==class13){favored_class_point_total++;}
   if (class01==class14){favored_class_point_total++;}
   if (class01==class15){favored_class_point_total++;}
   if (class01==class16){favored_class_point_total++;}
   if (class01==class17){favored_class_point_total++;}
   if (class01==class18){favored_class_point_total++;}
   if (class01==class19){favored_class_point_total++;}
   if (class01==class20){favored_class_point_total++;}
   if (rayce==2)
   {
    z=-1;
    if (class02!=class01){z=class02;} else
    if (class03!=class01){z=class03;} else
    if (class04!=class01){z=class04;} else
    if (class05!=class01){z=class05;} else
    if (class06!=class01){z=class06;} else
    if (class07!=class01){z=class07;} else
    if (class08!=class01){z=class08;} else
    if (class09!=class01){z=class09;} else
    if (class10!=class01){z=class10;} else
    if (class11!=class01){z=class11;} else
    if (class12!=class01){z=class12;} else
    if (class13!=class01){z=class13;} else
    if (class14!=class01){z=class14;} else
    if (class15!=class01){z=class15;} else
    if (class16!=class01){z=class16;} else
    if (class17!=class01){z=class17;} else
    if (class18!=class01){z=class18;} else
    if (class19!=class01){z=class19;} else
    if (class20!=class01){z=class20;}
 //   alert("Half Elf Surprise! z="+z);
    if ((z!=-1)&(z!=0))
    {
    if (z==class02){favored_class_point_total++;}
    if (z==class03){favored_class_point_total++;}
    if (z==class04){favored_class_point_total++;}
    if (z==class05){favored_class_point_total++;}
    if (z==class06){favored_class_point_total++;}
    if (z==class07){favored_class_point_total++;}
    if (z==class08){favored_class_point_total++;}
    if (z==class09){favored_class_point_total++;}
    if (z==class10){favored_class_point_total++;}
    if (z==class11){favored_class_point_total++;}
    if (z==class12){favored_class_point_total++;}
    if (z==class13){favored_class_point_total++;}
    if (z==class14){favored_class_point_total++;}
    if (z==class15){favored_class_point_total++;}
    if (z==class16){favored_class_point_total++;}
    if (z==class17){favored_class_point_total++;}
    if (z==class18){favored_class_point_total++;}
    if (z==class19){favored_class_point_total++;}
    if (z==class20){favored_class_point_total++;}
    }
   }
  }

 function lock_classes(){
  if (class01==0){document.form1.third_comment_box.value="Not yet"}
   else
    {
     AddUpTheClasses(); 
     GenerateClassString()
     ClassesHaveBeenEstablished=true; 

     document.form1.third_comment_box.value="You chose a " + class_string + ".\r"

     if (stringy!=""){document.form1.third_comment_box.value+=stringy+"\r"}

     document.form1.third_comment_box.value +="Now complete the following as applicable."
//zzzzzz
     if (sorcerer_levels>0) 
      {
        if (rayce==28){document.form1.third_comment_box.value+="  You probably want the celestial bloodline for sorcerers.";}
        if (rayce==29){document.form1.third_comment_box.value+="  You probably want the elemental (air) bloodline for sorcerers.";}
        if (rayce==30){document.form1.third_comment_box.value+="  You probably want the elemental (earth) bloodline for sorcerers.";}
        if (rayce==31){document.form1.third_comment_box.value+="  You probably want the elemental (fire) bloodline for sorcerers.";}
        if (rayce==32){document.form1.third_comment_box.value+="  You probably want the elemental (water) bloodline for sorcerers.";}
        if (rayce==33){document.form1.third_comment_box.value+="  You probably want the infernal or abyssal bloodline for sorcerers.";}
      }

     if ((cleric_levels>0)|(druid_levels>0))
      {
        if (rayce==29){document.form1.third_comment_box.value+="  You probably want the air domain.";}
        if (rayce==30){document.form1.third_comment_box.value+="  You probably want the earth domain.";}
        if (rayce==31){document.form1.third_comment_box.value+="  You probably want the fire domain.";}
        if (rayce==32){document.form1.third_comment_box.value+="  You probably want the water domain.";}
       }

     DoHPAndOtherClassStuff()
     DoFavoredClassPoints();
     DoYourFeatEntitlements(); 
     AdjustRangerFoes(); 
     AdjustRangerTerrains();
   if (wizard_levels>0){document.form1.choose_specialty[0].checked=true; }
   if ((wizard_levels>0)){document.form1.choose_familiar[0].checked=true; }
   if (druid_levels>0){document.form1.druid_domain[0].checked=true;}
   if ((barbarian_levels>0)|(bard_levels>0)|(cleric_levels>0)|(fighter_levels>0)|(paladin_levels>0)|(ranger_levels>0)|(rogue_levels>0)|(sorcerer_levels>0))
    {already_knows_simple_weapons=true; }
   if ((barbarian_levels>0)|(fighter_levels>0)|(paladin_levels>0)|(ranger_levels>0))
    {already_knows_martial_weapons=true; }
   if ((barbarian_levels>0)|(bard_levels>0)|(druid_levels>0)|(fighter_levels>0)|(paladin_levels>0)|(ranger_levels>0)|(rogue_levels>0))
    {already_knows_light_armor=true; }

   if ((barbarian_levels>0)|(cleric_levels>0)|(druid_levels>0)|(fighter_levels>0)|(paladin_levels>0)|(ranger_levels>0))
    {already_knows_medium_armor=true; }
   if ((fighter_levels>0)|(paladin_levels>0))
    {already_knows_heavy_armor=true; }
   if ((barbarian_levels>0)|(bard_levels>0)|(cleric_levels>0)|(druid_levels>0)|(fighter_levels>0)|(paladin_levels>0)|(ranger_levels>0))
    {already_knows_shields=true; }
   if (cleric_levels>0)
    {
      if (alignment<4){document.form1.choose_energy[0].checked=true;}
      if (alignment>6){document.form1.choose_energy[1].checked=true;}
    }
   if (fighter_levels>0){already_knows_tower_shield=true; }
   if (already_knows_heavy_armor==true){already_knows_medium_armor=true; }
   if (already_knows_medium_armor==true){already_knows_light_armor=true; }
   if (already_knows_martial_weapons==true){already_knows_simple_weapons=true; }
   ArrowShow(); 
   }
  }

 function assignclass(whatlevel,whatclass){
  if (ClassesHaveBeenEstablished==true){ShowHowWeChoseClasses()}
  else if (CharacterTypeHasBeenEstablished==false){NegateAllClassChoicesHereAndBelow(1); }
  else if ((class01==0)&(whatlevel>1)){NegateAllClassChoicesHereAndBelow(1); }
  else if (((alignment==1)|(alignment==4)|(alignment==7))&((whatclass==1))){alert("Cannot be lawful");ShowHowWeChoseClasses(); }
  else if (((alignment==1)|(alignment==3)|(alignment==7)|(alignment==9))&(whatclass==4)){alert("Wrong alignment");ShowHowWeChoseClasses(); }
  else if (((alignment==2)|(alignment==3)|(alignment==5)|(alignment==6)|(alignment==8)|(alignment==9))&(whatclass==6)){alert("Must be lawful");ShowHowWeChoseClasses(); }
  else if ((alignment!=1)&(whatclass==7)){alert("Must be lawful good");ShowHowWeChoseClasses(); }
  else if (whatlevel>total_levels){ShowHowWeChoseClasses(); }
  else
   {
      if (whatlevel<2){class01=whatclass; }
      if ((whatlevel<3)&(total_levels>=2)){class02=whatclass; }
      if ((whatlevel<4)&(total_levels>=3)){class03=whatclass; }
      if ((whatlevel<5)&(total_levels>=4)){class04=whatclass; }
      if ((whatlevel<6)&(total_levels>=5)){class05=whatclass; }
      if ((whatlevel<7)&(total_levels>=6)){class06=whatclass; }
      if ((whatlevel<8)&(total_levels>=7)){class07=whatclass; }
      if ((whatlevel<9)&(total_levels>=8)){class08=whatclass; }
      if ((whatlevel<10)&(total_levels>=9)){class09=whatclass; }
      if ((whatlevel<11)&(total_levels>=10)){class10=whatclass; }
      if ((whatlevel<12)&(total_levels>=11)){class11=whatclass; }
      if ((whatlevel<13)&(total_levels>=12)){class12=whatclass; }
      if ((whatlevel<14)&(total_levels>=13)){class13=whatclass; }
      if ((whatlevel<15)&(total_levels>=14)){class14=whatclass; }
      if ((whatlevel<16)&(total_levels>=15)){class15=whatclass; }
      if ((whatlevel<17)&(total_levels>=16)){class16=whatclass; }
      if ((whatlevel<18)&(total_levels>=17)){class17=whatclass; }
      if ((whatlevel<19)&(total_levels>=18)){class18=whatclass; }
      if ((whatlevel<20)&(total_levels>=19)){class19=whatclass; }
       if (total_levels>=20){class20=whatclass; }
      ShowHowWeChoseClasses(); 
   }
   ArrowShow(); 
  }


function FindClassSpot(i){
 if (i==14){return 11; }
 return i-1; 
 }

function ShowHowWeChoseClasses(){
      NegateAllClassChoicesHereAndBelow(1); 
      if (class01>0){document.form1.choose_class01[FindClassSpot(class01)].checked=true; }
      if (class02>0){document.form1.choose_class02[FindClassSpot(class02)].checked=true; }
      if (class03>0){document.form1.choose_class03[FindClassSpot(class03)].checked=true; }
      if (class04>0){document.form1.choose_class04[FindClassSpot(class04)].checked=true; }
      if (class05>0){document.form1.choose_class05[FindClassSpot(class05)].checked=true; }
      if (class06>0){document.form1.choose_class06[FindClassSpot(class06)].checked=true; }
      if (class07>0){document.form1.choose_class07[FindClassSpot(class07)].checked=true; }
      if (class08>0){document.form1.choose_class08[FindClassSpot(class08)].checked=true; }
      if (class09>0){document.form1.choose_class09[FindClassSpot(class09)].checked=true; }
      if (class10>0){document.form1.choose_class10[FindClassSpot(class10)].checked=true; }
      if (class11>0){document.form1.choose_class11[FindClassSpot(class11)].checked=true; }
      if (class12>0){document.form1.choose_class12[FindClassSpot(class12)].checked=true; }
      if (class13>0){document.form1.choose_class13[FindClassSpot(class13)].checked=true; }
      if (class14>0){document.form1.choose_class14[FindClassSpot(class14)].checked=true; }
      if (class15>0){document.form1.choose_class15[FindClassSpot(class15)].checked=true; }
      if (class16>0){document.form1.choose_class16[FindClassSpot(class16)].checked=true; }
      if (class17>0){document.form1.choose_class17[FindClassSpot(class17)].checked=true; }
      if (class18>0){document.form1.choose_class18[FindClassSpot(class18)].checked=true; }
      if (class19>0){document.form1.choose_class19[FindClassSpot(class19)].checked=true; }
      if (class20>0){document.form1.choose_class20[FindClassSpot(class20)].checked=true; }
      document.form1.third_comment_box.value=""; 
      NegateElevenClassLevels(); 
      AddUpTheClasses(); 


      if ((bard_levels>=2)&(charisma<11)){document.form1.third_comment_box.value +="Charisma is low for these bard levels.\r"} else
      if ((bard_levels>=5)&(charisma==12)){document.form1.third_comment_box.value +="Charisma is low for these bard levels.\r"} else
      if ((bard_levels>=7)&(charisma==13)){document.form1.third_comment_box.value +="Charisma is low for these bard levels.\r"} else
      if ((bard_levels>=10)&(charisma==14)){document.form1.third_comment_box.value +="Charisma is low for these bard levels.\r"} else
      if ((bard_levels>=13)&(charisma==15)){document.form1.third_comment_box.value +="Charisma is low for these bard levels.\r"}


      if ((wizard_levels>=1)&(intelligence<11)){document.form1.third_comment_box.value +="Intelligence is low for these wizard levels.\r"} else
      if ((wizard_levels>=3)&(intelligence==12)){document.form1.third_comment_box.value +="Intelligence is low for these wizard levels.\r"} else
      if ((wizard_levels>=5)&(intelligence==13)){document.form1.third_comment_box.value +="Intelligence is low for these wizard levels.\r"} else
      if ((wizard_levels>=7)&(intelligence==14)){document.form1.third_comment_box.value +="Intelligence is low for these wizard levels.\r"} else
      if ((wizard_levels>=11)&(intelligence==15)){document.form1.third_comment_box.value +="Intelligence is low for these wizard levels.\r"}
      if ((cleric_levels>=1)&(wisdom<11)){document.form1.third_comment_box.value +="Wisdom is low for these cleric levels.\r"} else
      if ((cleric_levels>=3)&(wisdom==12)){document.form1.third_comment_box.value +="Wisdom is low for these cleric levels.\r"} else
      if ((cleric_levels>=5)&(wisdom==13)){document.form1.third_comment_box.value +="Wisdom is low for these cleric levels.\r"} else
      if ((cleric_levels>=7)&(wisdom==14)){document.form1.third_comment_box.value +="Wisdom is low for these cleric levels.\r"} else
      if ((cleric_levels>=11)&(wisdom==15)){document.form1.third_comment_box.value +="Wisdom is low for these cleric levels.\r"}
      if ((druid_levels>=1)&(wisdom<11)){document.form1.third_comment_box.value +="Wisdom is low for these druid levels.\r"} else
      if ((druid_levels>=3)&(wisdom==12)){document.form1.third_comment_box.value +="Wisdom is low for these druid levels.\r"} else
      if ((druid_levels>=5)&(wisdom==13)){document.form1.third_comment_box.value +="Wisdom is low for these druid levels.\r"} else
      if ((druid_levels>=7)&(wisdom==14)){document.form1.third_comment_box.value +="Wisdom is low for these druid levels.\r"} else
      if ((druid_levels>=11)&(wisdom==15)){document.form1.third_comment_box.value +="Wisdom is low for these druid levels.\r"}
      if ((barbarian_levels>0)&(strength + dexterity + constitution<=30)){document.form1.third_comment_box.value +="Low scores will handicap a barbarian.\r"}



      if ((bard_levels>0)&(charisma<16)&((charisma + dexterity + intelligence<=20)|(charisma<12))){document.form1.third_comment_box.value +="Low scores may limit your bard.\r"}
      if (
         (fighter_levels>0)&
      (   ((strength + dexterity<22)&(strength<14)&(dexterity<14))
          |((constitution<10)&(strength + dexterity<28)) )
         )
          {document.form1.third_comment_box.value +="Low scores will handicap a fighter.\r"}
      if ((paladin_levels>0)&(charisma + wisdom + constitution + strength<=40)){document.form1.third_comment_box.value +="Low scores will handicap a paladin.\r"}
      if ((ranger_levels>0)&(dexterity + wisdom + constitution + strength<=40)){document.form1.third_comment_box.value +="Low scores will handicap a ranger.\r"}
      if ((rogue_levels>0)&(dexterity + intelligence<=20)&(dexterity<16)){document.form1.third_comment_box.value +="Low scores will handicap a rogue.\r"}



  }

function NegateAllClassChoicesHereAndBelow(herehere){
 if (herehere< 2){z=0; while (z<11){document.form1.choose_class01[z].checked=false; z++ ; }}
 if (herehere< 3){z=0; while (z<11){document.form1.choose_class02[z].checked=false; z++ ; }}
 if (herehere< 4){z=0; while (z<11){document.form1.choose_class03[z].checked=false; z++ ; }}
 if (herehere< 5){z=0; while (z<11){document.form1.choose_class04[z].checked=false; z++ ; }}
 if (herehere< 6){z=0; while (z<11){document.form1.choose_class05[z].checked=false; z++ ; }}
 if (herehere< 7){z=0; while (z<12){document.form1.choose_class06[z].checked=false; z++ ; }}
 if (herehere< 8){z=0; while (z<12){document.form1.choose_class07[z].checked=false; z++ ; }}
 if (herehere< 9){z=0; while (z<12){document.form1.choose_class08[z].checked=false; z++ ; }}
 if (herehere<10){z=0; while (z<12){document.form1.choose_class09[z].checked=false; z++ ; }}
 if (herehere<11){z=0; while (z<12){document.form1.choose_class10[z].checked=false; z++ ; }}
 if (herehere<12){z=0; while (z<12){document.form1.choose_class11[z].checked=false; z++ ; }}
 if (herehere<13){z=0; while (z<12){document.form1.choose_class12[z].checked=false; z++ ; }}
 if (herehere<14){z=0; while (z<12){document.form1.choose_class13[z].checked=false; z++ ; }}
 if (herehere<15){z=0; while (z<12){document.form1.choose_class14[z].checked=false; z++ ; }}
 if (herehere<16){z=0; while (z<12){document.form1.choose_class15[z].checked=false; z++ ; }}
 if (herehere<17){z=0; while (z<12){document.form1.choose_class16[z].checked=false; z++ ; }}
 if (herehere<18){z=0; while (z<12){document.form1.choose_class17[z].checked=false; z++ ; }}
 if (herehere<19){z=0; while (z<12){document.form1.choose_class18[z].checked=false; z++ ; }}
 if (herehere<20){z=0; while (z<12){document.form1.choose_class19[z].checked=false; z++ ; }}
 if (herehere<21){z=0; while (z<12){document.form1.choose_class20[z].checked=false; z++ ; }}
 }


function ClearTotalLevels(){
 z=0; while (z<20){
  document.form1.totallevels[z].checked=false; 
  document.form1.totallevels[1].checked=false; 
  z++ ; 
  }
 }

function ClearRace(){
  document.form1.racechoice[0].checked=true;
  document.form1.racechoice[0].checked=false;
 }

function ClearGender(){
 z=0; while (z<2){
  document.form1.sexchoice[z].checked=false; 
  z++ ; 
  }
 }

function ClearAlignment(){
 z=0; while (z<9){
  document.form1.alignments[z].checked=false; 
  z++ ; 
  }
 }

function ClearAllAbilityAssignments(){
 z=0; while (z<6){
  document.form1.firststat[z].checked=false; 
  document.form1.secondstat[z].checked=false; 
  document.form1.thirdstat[z].checked=false; 
  document.form1.fourthstat[z].checked=false; 
  document.form1.fifthstat[z].checked=false; 
  document.form1.sixthstat[z].checked=false; 
 z++ ; }
 }

function roll4d6(){
 d1=Math.floor (6*Math.random() + 1); 
 d2=Math.floor (6*Math.random() + 1); 
 d3=Math.floor (6*Math.random() + 1); 
 d4=Math.floor (6*Math.random() + 1); 
 if ((d4<=d3)&(d4<=d2)&(d4<=d1)){return d1 + d2 + d3; }
 else if ((d3<=d4)&(d3<=d2)&(d3<=d1)){return d1 + d2 + d4; }
 else if ((d2<=d4)&(d2<=d2)&(d2<=d1)){return d1 + d3 + d4; }
 else {return d2 + d3 + d4; }
 }

function roll5d6(){

 d1=Math.floor (6*Math.random() + 1); 
 d2=Math.floor (6*Math.random() + 1); 
 d3=Math.floor (6*Math.random() + 1); 
 d4=Math.floor (6*Math.random() + 1); 
 d5=Math.floor (6*Math.random() + 1); 
 if (d2>d1){x=d2; d2=d1; d1=x; }
 if (d3>d2){x=d3; d3=d2; d2=x; }
 if (d4>d3){x=d4; d4=d3; d3=x; }
 if (d5>d4){x=d5; d5=d4; d4=x; }
 if (d2>d1){x=d2; d2=d1; d1=x; }
 if (d3>d2){x=d3; d3=d2; d2=x; }
 if (d4>d3){x=d4; d4=d3; d3=x; }
 if (d5>d4){x=d5; d5=d4; d4=x; }
 if (d2>d1){x=d2; d2=d1; d1=x; }
 if (d3>d2){x=d3; d3=d2; d2=x; }
 if (d4>d3){x=d4; d4=d3; d3=x; }
 if (d5>d4){x=d5; d5=d4; d4=x; }
 if (d2>d1){x=d2; d2=d1; d1=x; }
 if (d3>d2){x=d3; d3=d2; d2=x; }
 if (d4>d3){x=d4; d4=d3; d3=x; }
 if (d5>d4){x=d5; d5=d4; d4=x; }

 return (d1 + d2 + d3); 
 }

function roll3d6(){
 d1=Math.floor (6*Math.random() + 1); 
 d2=Math.floor (6*Math.random() + 1); 
 d3=Math.floor (6*Math.random() + 1); 
 return d1 + d2 + d3; 
 }

function roll2d6plus6(){
 d1=Math.floor (6*Math.random() + 1); 
 d2=Math.floor (6*Math.random() + 1); 
 return d1 + d2 + 6; 
 }

function RollTheDice(){
 stat1=roll4d6(); 
 stat2=roll4d6(); 
 stat3=roll4d6(); 
 stat4=roll4d6(); 
 stat5=roll4d6(); 
 stat6=roll4d6(); 
 AdjustIfTooLow4(); 
 if (document.form1.methods_list.selectedIndex==1)
  {
   stat1=roll5d6(); 
   stat2=roll5d6(); 
   stat3=roll5d6(); 
   stat4=roll5d6(); 
   stat5=roll5d6(); 
   stat6=roll5d6(); 
   AdjustIfTooLow5(); 
  }
 if (document.form1.methods_list.selectedIndex==2)
  {
   stat1=roll2d6plus6(); 
   stat2=roll2d6plus6(); 
   stat3=roll2d6plus6(); 
   stat4=roll2d6plus6(); 
   stat5=roll2d6plus6(); 
   stat6=roll2d6plus6(); 
   AdjustIfTooLow3(); 
  }
 if (document.form1.methods_list.selectedIndex==6)
  {
   stat1=roll3d6(); 
   stat2=roll3d6(); 
   stat3=roll3d6(); 
   stat4=roll3d6(); 
   stat5=roll3d6(); 
   stat6=roll3d6(); 
   AdjustIfTooLow3(); 
  }
 if (document.form1.methods_list.selectedIndex==3)
  {
   stat1=15; 
   stat2=14; 
   stat3=13; 
   stat4=12; 
   stat5=10; 
   stat6=8; 
  }
 if (document.form1.methods_list.selectedIndex==5)
  {
   stat1=13; 
   stat2=12; 
   stat3=11; 
   stat4=10; 
   stat5=9; 
   stat6=8; 
  }
 if (document.form1.methods_list.selectedIndex==4)
  {
   stat1=8; 
   stat2=8; 
   stat3=8; 
   stat4=8; 
   stat5=8; 
   stat6=8; 
   document.form1.stat1_list.selectedIndex=5; 
   document.form1.stat2_list.selectedIndex=5; 
   document.form1.stat3_list.selectedIndex=5; 
   document.form1.stat4_list.selectedIndex=5; 
   document.form1.stat5_list.selectedIndex=5; 
   document.form1.stat6_list.selectedIndex=5; 
   DiceHaveBeenRolled=true; 
   DisplayTrueStatistics(); 

  }
 if (document.form1.methods_list.selectedIndex==7)
  {
   stat1=3; 
   stat2=3; 
   stat3=3; 
   stat4=3; 
   stat5=3; 
   stat6=3; 
   document.form1.stat1_list.selectedIndex=0; 
   document.form1.stat2_list.selectedIndex=0; 
   document.form1.stat3_list.selectedIndex=0; 
   document.form1.stat4_list.selectedIndex=0; 
   document.form1.stat5_list.selectedIndex=0; 
   document.form1.stat6_list.selectedIndex=0; 
   DiceHaveBeenRolled=true; 
   DisplayTrueStatistics(); 
  }
 if (document.form1.methods_list.selectedIndex==7)
  {
   stat1=3; 
   stat2=3; 
   stat3=3; 
   stat4=3; 
   stat5=3; 
   stat6=3; 
   document.form1.stat1_list.selectedIndex=0; 
   document.form1.stat2_list.selectedIndex=0; 
   document.form1.stat3_list.selectedIndex=0; 
   document.form1.stat4_list.selectedIndex=0; 
   document.form1.stat5_list.selectedIndex=0; 
   document.form1.stat6_list.selectedIndex=0; 
   DiceHaveBeenRolled=true; 
   DisplayTrueStatistics(); 
  }


 }


function assignlevel(i){
  if (CharacterTypeHasBeenEstablished==true)
   {
    ClearTotalLevels(); 
    document.form1.totallevels[total_levels-1].checked=true; 
   }
  else if (AbilitiesHaveBeenEstablished==false){ClearTotalLevels(); } 
  else {total_levels=i; ThisTakesAMoment(); }
   ArrowShow(); 
  }

 function assigngender(i){
  if (CharacterTypeHasBeenEstablished==true)
   {
    ClearGender(); 
    document.form1.sexchoice[2-gender].checked=true; 
   }

  else if (AbilitiesHaveBeenEstablished==false){ClearGender(); } else
  {gender=i; ThisTakesAMoment(); ArrowShow(); }
  }

 function assignrace(i){
  if (CharacterTypeHasBeenEstablished==true)
   {
    ClearRace(); 
    if (rayce==1){document.form1.racechoice[0].checked=true; }
    if (rayce==2){document.form1.racechoice[4].checked=true; }
    if (rayce==3){document.form1.racechoice[2].checked=true; }
    if (rayce==4){document.form1.racechoice[1].checked=true; }
    if (rayce==5){document.form1.racechoice[3].checked=true; }
    if (rayce==6){document.form1.racechoice[5].checked=true; }
    if (rayce==7){document.form1.racechoice[6].checked=true; }
    if (rayce==28){document.form1.racechoice[7].checked=true; } // aasimar
    if (rayce==9){document.form1.racechoice[8].checked=true; } // Dhampir
    if (rayce==12){document.form1.racechoice[9].checked=true; } // drow
    if (rayce==22){document.form1.racechoice[10].checked=true; } // ifrit
    if (rayce==22){document.form1.racechoice[11].checked=true; } // orc
    if (rayce==30){document.form1.racechoice[12].checked=true; } // oread
    if (rayce==29){document.form1.racechoice[13].checked=true; } // sylph
    if (rayce==33){document.form1.racechoice[14].checked=true; } // tiefling
    if (rayce==32){document.form1.racechoice[15].checked=true; } // undine
//zzzzzzzzzz
   }

  else if (AbilitiesHaveBeenEstablished==false){ClearRace(); } else
  {rayce=i; ThisTakesAMoment(); ArrowShow(); FriendlyLanguages(); }
  }


function FriendlyLanguages(){
//zzzzzzzzzzzzzzz
every_language_friendly=false; 
   if ((rayce==1) || (rayce==2) |(rayce==9))
  

{every_language_friendly=true; }



abyssal_friendly=false; 
   if ((every_language_friendly==true)
    || (cleric_levels!=0) | (rayce==12) | (rayce==7))
{abyssal_friendly=true; }


aquan_friendly=false; 
   if ((every_language_friendly==true)|(rayce==12)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32))
  
{aquan_friendly=true; }



aklo_friendly=false; 
   if ((every_language_friendly==true)
   
   
                 || (rayce==12) )
{aklo_friendly=true; }



auran_friendly=false; 
   if ((every_language_friendly==true) || (rayce==101)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32))
{auran_friendly=true; }


celestial_friendly=false; 
   if ((every_language_friendly==true) || (rayce==84) || (rayce==83) ||
   (rayce==51)  || (rayce==9) || (cleric_levels!=0))
{celestial_friendly=true; }


draconic_friendly=false; 
   if ((every_language_friendly==true) || (rayce==7) |(rayce==28)|(rayce==12)|(rayce==33)|(wizard_levels>0))
 {draconic_friendly=true; }


dwarven_friendly=false; 
   if ((every_language_friendly==true)|(rayce==22) |(rayce==5)|(rayce==6)|(rayce==28)|(rayce==33)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32))
{dwarven_friendly=true; }


common_friendly=false;
  if (rayce==12)
  {common_friendly=true;}

elven_friendly=false; 
   if ((every_language_friendly==true) | (rayce==6) |(rayce==5)|(rayce==28)|(rayce==33)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32))
{elven_friendly=true; }


darkelfsilent_friendly=false; 
   if ((every_language_friendly)|(rayce==12))
{darkelfsilent_friendly=true; }


giant_friendly=false; 
   if ((every_language_friendly==true)|(rayce==22) |(rayce==4)|(rayce==5)|(rayce==7))
{giant_friendly=true; }


gith_friendly=false; 
   if ((every_language_friendly==true))
{gith_friendly=true; }


gnoll_friendly=false; 
   if ((every_language_friendly==true)|(rayce==22) ||(rayce==3)|(rayce==7))
{gnoll_friendly=true; }


gnome_friendly=false; 
   if ((every_language_friendly==true) |(rayce==3)|(rayce==4)|(rayce==6)|(rayce==28)|(rayce==12)|(rayce==33)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32))           
{gnome_friendly=true; }


goblin_friendly=false; 
   if ((every_language_friendly==true) |(rayce==22)|(rayce==6)|(rayce==7)|(rayce==4)|(rayce==3)|(rayce==5)|(rayce==12)|(rayce==33))
{goblin_friendly=true; }


halfling_friendly=false; 
   if ((every_language_friendly==true) |(rayce==28)|(rayce==33)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32))       

{halfling_friendly=true; }


ignan_friendly=false; 
   if ((every_language_friendly==true) |(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32))
{ignan_friendly=true; }


infernal_friendly=false; 
   if ((every_language_friendly==true)||
    (cleric_levels!=0))
{infernal_friendly=true; }


aboleth_friendly=false; 
   if ((every_language_friendly==true))
{aboleth_friendly=true; }


orc_friendly=false; 
   if ((every_language_friendly==true)||(rayce==4)|(rayce==3)|(rayce==5)|(rayce==33))
{orc_friendly=true; }


sylvan_friendly=false; 
   if ((every_language_friendly==true) || (rayce==3)|(rayce==28)|(druid_levels!=0))
{sylvan_friendly=true; }


terran_friendly=false; 
   if ((every_language_friendly==true) || (rayce==4)|(rayce==29)|(rayce==30)|(rayce==31)|(rayce==32))
{terran_friendly=true; }


thrikreen_friendly=false; 
   if ((every_language_friendly==true))
{thrikreen_friendly=true; }


aarakocra_friendly=false; 
   if ((every_language_friendly==true))
{aarakocra_friendly=true; }


pterran_friendly=false; 
   if ((every_language_friendly==true))
{pterran_friendly=true; }


sahuagin_friendly=false; 
   if ((every_language_friendly==true) )
{sahuagin_friendly=true; }


undercommon_friendly=false; 
   if ((every_language_friendly==true) |(rayce==22)|| (rayce==4)){undercommon_friendly=true; }


xeph_friendly=false; 
   if ((every_language_friendly==true))
{xeph_friendly=true; }

if (rayce==33){abyssal_nativespeaker=true;abyssal_friendly=false;} else {abyssal_nativespeaker=false;}


if ((rayce==32))
 {aquan_nativespeaker=true; aquan_friendly=false; }
  else {aquan_nativespeaker=false; }


aklo_nativespeaker=false;


if (rayce==29){auran_nativespeaker=true;auran_friendly=false;} else {auran_nativespeaker=false;}


if (rayce==28)
 {celestial_nativespeaker=true;celestial_friendly=false;}
  else {celestial_nativespeaker=false;}

if ((rayce==20) | (rayce==25) | (rayce==72) | (rayce==63) | (rayce==54) | (rayce==45) | (rayce==27))
 {
  draconic_nativespeaker=true; draconic_friendly=false; }
  else {draconic_nativespeaker=false; }

if ((rayce==4) )
 {dwarven_nativespeaker=true; dwarven_friendly=false; }
  else {dwarven_nativespeaker=false; }

//zzzzzzzzzz
if (rayce==12){common_nativespeaker=false;common_friendy=true;}
 else {common_friendly=false;common_nativespeaker=true;}


if ((rayce==3) |(rayce==12))
 {elven_nativespeaker=true; elven_friendly=false; }
  else {elven_nativespeaker=false; }

if ((rayce==75) | (rayce==76))
 {giant_nativespeaker=true; giant_friendly=false; }
  else {giant_nativespeaker=false; }

if ((rayce==83) | (rayce==84))
 {gith_nativespeaker=true; gith_friendly=false; }
  else {gith_nativespeaker=false; }

if ((rayce==24))
 {gnoll_nativespeaker=true; gnoll_friendly=false; }
  else {gnoll_nativespeaker=false; }

if ((rayce==5) )
 {gnome_nativespeaker=true; gnome_friendly=false; }
  else {gnome_nativespeaker=false; }

if ((rayce==21) | (rayce==23) | (rayce==26) | (rayce==68) | (rayce==59) | (rayce==50) | (rayce==40))
 {goblin_nativespeaker=true; goblin_friendly=false; }
  else {goblin_nativespeaker=false; }

if ((rayce==6))
 {halfling_nativespeaker=true; halfling_friendly=false; }
  else {halfling_nativespeaker=false; }

if (rayce==31){ignan_nativespeaker=true;ignan_friendly=false;} else {ignan_nativespeaker=false;}


if (rayce==33){infernal_nativespeaker=true;infernal_friendly=false;} else {infernal_nativespeaker=false;}

aboleth_nativespeaker=false; 

if ((rayce==7)|(rayce==22) )
 {orc_nativespeaker=true; orc_friendly=false; }
  else {orc_nativespeaker=false; }

if ((rayce==74) | (rayce==93))
 {sylvan_nativespeaker=true; sylvan_friendly=false; }
  else {sylvan_nativespeaker=false; }

if (rayce==30){terran_nativespeaker=true;terran_friendly=false;} else {terran_nativespeaker=false;}



if ((rayce==34))
 {thrikreen_nativespeaker=true; thrikreen_friendly=false; }
  else {thrikreen_nativespeaker=false; }

if ((rayce==101))
 {aarakocra_nativespeaker=true; aarakocra_friendly=false; }
  else {aarakocra_nativespeaker=false; }

if ((rayce==106))
 {pterran_nativespeaker=true; pterran_friendly=false; }
  else {pterran_nativespeaker=false; }

if ((rayce==104))
 {xeph_nativespeaker=true; xeph_friendly=false; }
  else {xeph_nativespeaker=false; }

if (rayce==12){undercommon_nativespeaker=true;undercommon_friendly=false;} else {undercommon_nativespeaker=false;}



}



 function assignalignment(i){
  if (CharacterTypeHasBeenEstablished==true)
   {
    ClearAlignment(); 
    document.form1.alignments[alignment-1].checked=true; 
   }
  else if (AbilitiesHaveBeenEstablished==false){ClearAlignment(); } else
  {alignment=i; ThisTakesAMoment(); ArrowShow(); }
  }



function WriteTextForCharacterSheet(){

    wt=0;
   DoHPAndOtherClassStuff();
   
   CalculateHitPoints()
   CalculateArmorClass()
   PrepareBardSpellArrays()
   PrepareClericSpellArrays()
   PrepareDruidSpellArrays()
   PreparePaladinSpellArrays()
   PrepareRangerSpellArrays()
   PrepareSorcererSpellArrays()
   PrepareWizardSpellArrays()
  genderandrace_string="";
   if (gender==1){genderandrace_string +="Male "}
   if (gender==2){genderandrace_string +="Female "}
   if (rayce==1){genderandrace_string +="Human "}
   if (rayce==2){genderandrace_string +="Half-Elf "}
   if (rayce==3){genderandrace_string +="Elf "}
   if (rayce==4){genderandrace_string +="Dwarf "}
   if (rayce==5){genderandrace_string +="Gnome "}
   if (rayce==6){genderandrace_string +="Halfling "}
   if (rayce==7){genderandrace_string +="Half-Orc "}
   if (rayce==28){genderandrace_string +="Aasimar "}
   if (rayce==12){genderandrace_string +="Drow "}
   if (rayce==33){genderandrace_string +="Tiefling "}
   if (rayce==29){genderandrace_string +="Sylph "}
   if (rayce==30){genderandrace_string +="Oread "}
   if (rayce==31){genderandrace_string +="Ifrit "}
   if (rayce==32){genderandrace_string +="Undine "}
   if (rayce==9){genderandrace_string +="Dhampir "}
   if (rayce==22){genderandrace_string +="Orc "}
//zzzzzzzzzz


   stringy=document.form1.moniker.value;
   x=document.form1.title_list.selectedIndex; 
   if (x>0){stringy+=document.form1.title_list.options[x].value; }
   if ((stringy=="")&(genderandrace_string+class_string!="")){stringy="Unnamed "+genderandrace_string+class_string};
   if (stringy==""){stringy="Unnamed Character";}

   SWD="<html><head><style type=text/css media-screen><!--  body {font-family: Arial; font-size: 12 pt;}  --></style><title>"+stringy+"</title></head>\r<body>"

   if (FeatsAreLocked==false)
    {
     SWD +="<b>Your character is not yet completed.</b><p>"
    }
   else {my_character_is_done=true; ArrowShow(); document.form1.want_another_character.src="another_character.jpg"; }
   SWD +="<center><b><font size=\" + 2\">"
   SWD +=document.form1.moniker.value; 
   x=document.form1.title_list.selectedIndex; 
   if (x>0){SWD+=document.form1.title_list.options[x].value; }
   SWD +="</font size></b></center><p>\r"
   SWD +=genderandrace_string+class_string + "<br>"
   if (alignment==1){SWD +="Lawful Good"}
   if (alignment==2){SWD +="Neutral Good"}
   if (alignment==3){SWD +="Chaotic Good"}
   if (alignment==4){SWD +="Lawful Neutral"}
   if (alignment==5){SWD +="True Neutral"}
   if (alignment==6){SWD +="Chaotic Neutral"}
   if (alignment==7){SWD +="Lawful Evil"}
   if (alignment==8){SWD +="Neutral Evil"}
   if (alignment==9){SWD +="Chaotic Evil"}
   SWD +="<br>"
   if (document.form1.sect.value!=""){SWD +=document.form1.sect.value + "<p>"; }
   if (document.form1.playerName.value!=""){SWD +="Representing " + document.form1.playerName.value; }
   SWD +="<p>\r"



  SWD +="<p><table width=100%><tr width=100%><td width=50%>"


   SWD +="<table><tr> <td>"
   SWD +="Strength</td> <td align=\"right\">" + strength + "</td><td>(" + modifier_string(strength) + ")</td></tr>\r<tr> <td>"
   SWD +="Dexterity</td> <td align=\"right\">" + dexterity + "</td><td>(" + modifier_string(dexterity) + ")</td></tr>\r<tr> <td>"
   SWD +="Constitution</td> <td align=\"right\">" + constitution + "</td><td>(" + modifier_string(constitution) + ")</td></tr>\r<tr> <td>"
   SWD +="Intelligence</td> <td align=\"right\">" + intelligence + "</td><td>(" + modifier_string(intelligence) + ")</td></tr>\r<tr> <td>"
   SWD +="Wisdom</td> <td align=\"right\">" + wisdom + "</td><td>(" + modifier_string(wisdom) + ")</td></tr>\r<tr> <td>"
   SWD +="Charisma</td> <td align=\"right\">" + charisma + "</td><td>(" + modifier_string(charisma) + ")</td></tr>\r</table>\r"

   SWD +="</td><td width=50%>"


   SWD +="<table>"

   if (small==false){stringy="Medium"} else {stringy="Small"}
   SWD +="<tr> <td>Size:</td> <td>" + stringy + "</td></tr>\r"
   stringy=""
   switch(document.form1.how_tall.selectedIndex){
    case 0:{stringy="---"; break; }
    case 1:{stringy="2' 8\""; break; }
    case 2:{stringy="2' 9\""; break; }
    case 3:{stringy="2' 10\""; break; }
    case 4:{stringy="2' 11\""; break; }
    case 5:{stringy="3' 0\""; break; }
    case 6:{stringy="3' 1\""; break; }
    case 7:{stringy="3' 2\""; break; }
    case 8:{stringy="3' 3\""; break; }
    case 9:{stringy="3' 4\""; break; }
    case 10:{stringy="3' 5\""; break; }
    case 11:{stringy="3' 6\""; break; }
    case 12:{stringy="3' 7\""; break; }
    case 13:{stringy="3' 8\""; break; }
    case 14:{stringy="3' 9\""; break; }
    case 15:{stringy="3' 10\""; break; }
    case 16:{stringy="3' 11\""; break; }
    case 17:{stringy="4' 0\""; break; }
    case 18:{stringy="4' 1\""; break; }
    case 19:{stringy="4' 2\""; break; }
    case 20:{stringy="4' 3\""; break; }
    case 21:{stringy="4' 4\""; break; }
    case 22:{stringy="4' 5\""; break; }
    case 23:{stringy="4' 6\""; break; }
    case 24:{stringy="4' 7\""; break; }
    case 25:{stringy="4' 8\""; break; }
    case 26:{stringy="4' 9\""; break; }
    case 27:{stringy="4' 10\""; break; }
    case 28:{stringy="4' 11\""; break; }
    case 29:{stringy="5' 0\""; break; }
    case 30:{stringy="5' 1\""; break; }
    case 31:{stringy="5' 2\""; break; }
    case 32:{stringy="5' 3\""; break; }
    case 33:{stringy="5' 4\""; break; }
    case 34:{stringy="5' 5\""; break; }
    case 35:{stringy="5' 6\""; break; }
    case 36:{stringy="5' 7\""; break; }
    case 37:{stringy="5' 8\""; break; }
    case 38:{stringy="5' 9\""; break; }
    case 39:{stringy="5' 10\""; break; }
    case 40:{stringy="5' 11\""; break; }
    case 41:{stringy="6' 0\""; break; }
    case 42:{stringy="6' 1\""; break; }
    case 43:{stringy="6' 2\""; break; }
    case 44:{stringy="6' 3\""; break; }
    case 45:{stringy="6' 4\""; break; }
    case 46:{stringy="6' 5\""; break; }
    case 47:{stringy="6' 6\""; break; }
    case 48:{stringy="6' 7\""; break; }
    case 49:{stringy="6' 8\""; break; }
    case 50:{stringy="6' 9\""; break; }
    case 51:{stringy="6' 10\""; break; }
    }     
   SWD +="<tr> <td>Height:</td> <td>" + stringy + "</td></tr>\r"
   stringy=""
   switch(document.form1.how_heavy.selectedIndex){
    case 0:{stringy="--- lb"; break; }
    case 1:{stringy=" 30 lb"; break; }
    case 2:{stringy=" 31 lb"; break; }
    case 3:{stringy=" 32 lb"; break; }
    case 4:{stringy=" 33 lb"; break; }
    case 5:{stringy=" 34 lb"; break; }
    case 6:{stringy=" 35 lb"; break; }
    case 7:{stringy=" 36 lb"; break; }
    case 8:{stringy=" 37 lb"; break; }
    case 9:{stringy=" 38 lb"; break; }
    case 10:{stringy=" 39 lb"; break; }
    case 11:{stringy=" 40 lb"; break; }
    case 12:{stringy=" 41 lb"; break; }
    case 13:{stringy=" 42 lb"; break; }
    case 14:{stringy=" 43 lb"; break; }
    case 15:{stringy=" 44 lb"; break; }
    case 16:{stringy=" 45 lb"; break; }
    case 17:{stringy=" 46 lb"; break; }
    case 18:{stringy=" 47 lb"; break; }
    case 19:{stringy=" 48 lb"; break; }
    case 20:{stringy=" 49 lb"; break; }
    case 21:{stringy=" 50 lb"; break; }
    case 22:{stringy=" 55 lb"; break; }
    case 23:{stringy=" 60 lb"; break; }
    case 24:{stringy=" 65 lb"; break; }
    case 25:{stringy=" 70 lb"; break; }
    case 26:{stringy=" 75 lb"; break; }
    case 27:{stringy=" 80 lb"; break; }
    case 28:{stringy=" 85 lb"; break; }
    case 29:{stringy=" 90 lb"; break; }
    case 30:{stringy=" 95 lb"; break; }
    case 31:{stringy="100 lb"; break; }
    case 32:{stringy="105 lb"; break; }
    case 33:{stringy="110 lb"; break; }
    case 34:{stringy="115 lb"; break; }
    case 35:{stringy="120 lb"; break; }
    case 36:{stringy="125 lb"; break; }
    case 37:{stringy="130 lb"; break; }
    case 38:{stringy="135 lb"; break; }
    case 39:{stringy="140 lb"; break; }
    case 40:{stringy="145 lb"; break; }
    case 41:{stringy="150 lb"; break; }
    case 42:{stringy="155 lb"; break; }
    case 43:{stringy="160 lb"; break; }
    case 44:{stringy="165 lb"; break; }
    case 45:{stringy="170 lb"; break; }
    case 46:{stringy="175 lb"; break; }
    case 47:{stringy="180 lb"; break; }
    case 48:{stringy="185 lb"; break; }
    case 49:{stringy="190 lb"; break; }
    case 50:{stringy="195 lb"; break; }
    case 51:{stringy="200 lb"; break; }
    case 52:{stringy="210 lb"; break; }
    case 53:{stringy="220 lb"; break; }
    case 54:{stringy="230 lb"; break; }
    case 55:{stringy="240 lb"; break; }
    case 56:{stringy="250 lb"; break; }
    case 57:{stringy="260 lb"; break; }
    case 58:{stringy="270 lb"; break; }
    case 59:{stringy="280 lb"; break; }
    case 60:{stringy="290 lb"; break; }
    case 61:{stringy="300 lb"; break; }
    case 62:{stringy="310 lb"; break; }
    case 63:{stringy="320 lb"; break; }
    case 64:{stringy="330 lb"; break; }
    case 65:{stringy="340 lb"; break; }
    case 66:{stringy="350 lb"; break; }
    case 67:{stringy="360 lb"; break; }
    case 68:{stringy="370 lb"; break; }
    case 69:{stringy="380 lb"; break; }
    case 70:{stringy="390 lb"; break; }
    case 71:{stringy="400 lb"; break; }
    case 72:{stringy="410 lb"; break; }
    case 73:{stringy="420 lb"; break; }
    case 74:{stringy="430 lb"; break; }
    case 75:{stringy="440 lb"; break; }
    }    
   SWD +="<tr> <td>Weight:</td> <td>" + stringy + "</td></tr>\r"
   stringy=""
   if (document.form1.eye_color[0].checked==true){stringy="Red"; }
   if (document.form1.eye_color[1].checked==true){stringy="Green"; }
   if (document.form1.eye_color[2].checked==true){stringy="Blue"; }
   if (document.form1.eye_color[3].checked==true){stringy="Hazel"; }
   if (document.form1.eye_color[4].checked==true){stringy="Light Brown"; }
   if (document.form1.eye_color[5].checked==true){stringy="Dark Brown"; }
   if (document.form1.eye_color[6].checked==true){stringy="Black"; }
   if (document.form1.eye_color[7].checked==true){stringy="Gray"; }
   if (document.form1.eye_color[8].checked==true){stringy="Amber"; }
   if (document.form1.eye_color[9].checked==true){stringy="Violet"; }
   if (document.form1.eye_color[10].checked==true){stringy="Silver"; }
   SWD +="<tr> <td>Eyes:</td> <td>" + stringy + "</td></tr>\r"
   stringy=""
   if (document.form1.hair_color[0].checked==true){stringy="White"; }
   if (document.form1.hair_color[1].checked==true)
    {
     if (gender==1){stringy="Blond"; }
     if (gender==2){stringy="Blonde"; }
    }
   if (document.form1.hair_color[2].checked==true){stringy="Red"; }
   if (document.form1.hair_color[3].checked==true){stringy="Light Brown"; }
   if (document.form1.hair_color[4].checked==true){stringy="Dark Brown"; }
   if (document.form1.hair_color[5].checked==true){stringy="Black"; }
   if (document.form1.hair_color[6].checked==true){stringy="Gray"; }
   if (document.form1.hair_color[7].checked==true){stringy="Silver"; }
   if (document.form1.hair_color[8].checked==true){stringy="Gold"; }
   if (document.form1.hair_color[9].checked==true){stringy="Green"; }
   if (document.form1.hair_color[10].checked==true){stringy="Blue"; }
   if (document.form1.hair_color[11].checked==true)
    {
     stringy="None"; 
    }
   if (document.form1.hair_type[0].checked==true){stringy+=" Straight"; }
   if (document.form1.hair_type[1].checked==true){stringy+=" Wavy"; }
   if (document.form1.hair_type[2].checked==true){stringy+=" Curly"; }
   if (document.form1.beard_type[0].checked){stringy+="; Beardless";}
   if (document.form1.beard_type[1].checked){stringy+="; Thin Beard";}
   if (document.form1.beard_type[2].checked){stringy+="; Average Beard";}
   if (document.form1.beard_type[3].checked){stringy+="; Thick Beard";}
   SWD +="<tr> <td>Hair:</td> <td>" + stringy + "</td></tr>\r"
   stringy=""
   if (document.form1.skin_color[0].checked==true){stringy="Pale"; }
   if (document.form1.skin_color[1].checked==true){stringy="Light"; }
   if (document.form1.skin_color[2].checked==true){stringy="Yellow"; }
   if (document.form1.skin_color[3].checked==true){stringy="Tan"; }
   if (document.form1.skin_color[4].checked==true){stringy="Brown"; }
   if (document.form1.skin_color[5].checked==true){stringy="Black"; }
   if (document.form1.skin_color[6].checked==true){stringy="Silvery"; }
   if (document.form1.skin_color[7].checked==true){stringy="Green"; }
   if (document.form1.skin_color[8].checked==true){stringy="Gray"; }
   if (document.form1.skin_color[9].checked==true){stringy="Blue"; }
   if (document.form1.skin_color[10].checked==true){stringy="Red"; }
   SWD +="<tr> <td>Skin:</td> <td>" + stringy + "</td></tr>\r"

   SWD +="</td></tr>\r</table>\r"
   SWD +="</td></tr>\r</table>\r"


SWD +="<p>\r"

if (cleric_levels>0){
 SWD +="Domains: "; 
 if (has_air_domain==true){SWD +=" Air "; }
 if (has_animal_domain==true){SWD +=" Animal "; }
 if (has_chaos_domain==true){SWD +=" Chaos "; }
 if (has_death_domain==true){SWD +=" Death "; }
 if (has_destruction_domain==true){SWD +=" Destruction "; }
 if (has_earth_domain==true){SWD +=" Earth "; }
 if (has_evil_domain==true){SWD +=" Evil "; }
 if (has_fire_domain==true){SWD +=" Fire "; }
 if (has_good_domain==true){SWD +=" Good "; }
 if (has_healing_domain==true){SWD +=" Healing "; }
 if (has_knowledge_domain==true){SWD +=" Knowledge "; }
 if (has_law_domain==true){SWD +=" Law "; }
 if (has_luck_domain==true){SWD +=" Luck "; }
 if (has_magic_domain==true){SWD +=" Magic "; }
 if (has_plant_domain==true){SWD +=" Plant "; }
 if (has_protection_domain==true){SWD +=" Protection "; }
 if (has_strength_domain==true){SWD +=" Strength "; }
 if (has_sun_domain==true){SWD +=" Sun "; }
 if (has_travel_domain==true){SWD +=" Travel "; }
 if (has_trickery_domain==true){SWD +=" Trickery "; }
 if (has_war_domain==true){SWD +=" War "; }
 if (has_water_domain==true){SWD +=" Water "; }
  if (has_artifice_domain){SWD+=" Artifice ";}
  if (has_charm_domain){SWD+=" Charm ";}
  if (has_community_domain){SWD+=" Community ";}
  if (has_darkness_domain){SWD+=" Darkness ";}
  if (has_glory_domain){SWD+=" Glory ";}
  if (has_liberation_domain){SWD+=" Liberation ";}
  if (has_madness_domain){SWD+=" Madness ";}
  if (has_nobility_domain){SWD+=" Nobility ";}
  if (has_repose_domain){SWD+=" Repose ";}
  if (has_rune_domain){SWD+=" Rune ";}
  if (has_weather_domain){SWD+=" Weather ";}
 SWD +="<p>Energy: "
 if (channels_energy==1){SWD +="Positive [Healing / Damages Undead]<p>\r"}
 if (channels_energy==2){SWD +="Negative [Harmful / Heals Undead]<p>\r"}
 }



if (druid_levels>0){
 if (no_druid_domain){SWD+="<p>Druid domain: None.  Choose an animal companion.<p>";}
 if (air_druid_domain){SWD+="<p>Druid domain: Air<p>";}
 if (animal_druid_domain){SWD+="<p>Druid domain: Animal<p>";}
 if (earth_druid_domain){SWD+="<p>Druid domain: Earth<p>";}
 if (fire_druid_domain){SWD+="<p>Druid domain: Fire<p>";}
 if (water_druid_domain){SWD+="<p>Druid domain: Water<p>";}
 if (weather_druid_domain){SWD+="<p>Druid domain: Weather<p>";}
 }

if ((wizard_levels>0)&(no_specialist==false))
 {
  if (abjuration_specialist==true){SWD +="Specialty: Abjuration<p>"}
  if (conjuration_specialist==true){SWD +="Specialty: Conjuration<p>"}
  if (divination_specialist==true){SWD +="Specialty: Divination<p>"}
  if (enchantment_specialist==true){SWD +="Specialty: Enchantment<p>"}
  if (evocation_specialist==true){SWD +="Specialty: Evocation<p>"}
  if (illusion_specialist==true){SWD +="Specialty: Illusion<p>"}
  if (necromancy_specialist==true){SWD +="Specialty: Necromancy<p>"}
  if (transmutation_specialist==true){SWD +="Specialty: Transmutation<p>"}
  SWD +="Gave up: "; 

  if (gave_up_abjuration==true){SWD +=" Abjuration "; }
  if (gave_up_conjuration==true){SWD +=" Conjuration "; }
  if (gave_up_divination==true){SWD +=" Divination "; }
  if (gave_up_enchantment==true){SWD +=" Enchantment "; }
  if (gave_up_evocation==true){SWD +=" Evocation "; }
  if (gave_up_illusion==true){SWD +=" Illusion "; }
  if (gave_up_necromancy==true){SWD +=" Necromancy "; }
  if (gave_up_transmutation==true){SWD +=" Transmutation "; }
 }
SWD +="\r<p>Total Hit Points: " + total_hit_points; 
if (has_toughness==true){SWD +=" [includes toughness] "}
if (toad_familiar==true){SWD +=" [includes toad bonus] "}
SWD +="<p>\r"
if (age_adjustment==1){SWD+="Middle-aged<p>";}
if (age_adjustment==2){SWD+="Old age>";}
if (age_adjustment==3){SWD+="Venerable<p>";}
SWD +="Speed: " + speed_string + "<p>\r"
SWD +="Armor Class: " + total_armor_class
if (armor_class_string!=""){SWD +=" = 10 " + armor_class_string}

SWD +="<ul>Touch AC: " + touch_armor_class
SWD +="<br>Flat-footed: " + flatfooted_armor_class
if (has_uncanny_dodge==true){SWD +=" [uncanny dodge] "}
SWD +="</ul><p>\r"
SWD +="<table>"

SWD +="<tr><td>Initiative modifier:</td><td>" + initiative_string_1 + "</td><td>" + initiative_string_2 + "</td></tr>\r"
SWD +="<tr><td>Fortitude save:</td><td>" + fortitude_string_1 + "</td><td>" + fortitude_string_2 + "</td></tr>\r"
SWD +="<tr><td>Reflex save:</td><td>" + reflex_string_1 + "</td><td>" + reflex_string_2 + "</td></tr>\r"
SWD +="<tr><td>Will save:</td><td>" + will_string_1 + "</td><td>" + will_string_2 + "</td></tr>\r"
SWD +="<tr><td>Attack (handheld):</td><td>" + handheld_attack_string_1 + "</td><td>" + handheld_attack_string_2 + "</td></tr>\r"

if (has_weaponfinesse==true){
SWD+="<tr><td>&nbsp;&nbsp;&nbsp;Weapon Finesse:</td><td>"+finesse_attack_string_1+"</td><td>"+finesse_attack_string_2+"</td></tr>\r"
}


if (monk_levels>0){
//SWD +="<tr><td>Flurry of Blows:</td><td>" + flurry_of_blows_string + "</td><td></td></tr>\r"
stringy="";
if ((strength!=10)&(strength!=11)){stringy="&nbsp;&nbsp;&nbsp;&nbsp;[includes strength modifier]";}
SWD+="<tr><td>Flurry of Blows:</td><td>"+flurry_of_blows_string+"</td><td>"+stringy+"</td></tr>\r"
}

SWD +="<tr><td>Attack (missile):</td><td>" + missile_attack_string_1 + "</td><td>" + missile_attack_string_2 + "</td></tr>\r"
SWD +="<tr><td>Combat Maneuver Bonus:</td><td>" + CMB_string_1 + "</td><td>" + CMB_string_2 + "</td></tr>\r"
SWD +="<tr><td>Combat Maneuver Defense:</td><td>" + CMD_string_1 + "</td><td>" + CMD_string_2 + "</td></tr>\r"
SWD +="</table><p>\r"
SWD +="<table><tr><td>Light load:<br>Medium load:<br>Heavy load:<br>Lift over head:<br>Lift off ground:<br>Push or drag:<br></td><td>"
x=0; z=0; 
x_and_heft()
if (small==false){SWD +=x + " lb. or less<br>"; }
if (small==true){SWD +=Math.round(x*3/4) + " or less<br>"; }
x++ ; 
z=0; 
if (strength== 1){z=6; }
if (strength== 2){z=13; }
if (strength== 3){z=20; }
if (strength== 4){z=26; }
if (strength== 5){z=33; }
if (strength== 6){z=40; }
if (strength== 7){z=46; }
if (strength== 8){z=53; }
if (strength== 9){z=60; }
if (strength==10){z=66; }
if (strength==11){z=76; }
if (strength==12){z=86; }
if (strength==13){z=100; }
if (strength==14){z=116; }
if (strength==15){z=133; }
if (strength==16){z=153; }
if (strength==17){z=173; }
if (strength==18){z=200; }
if (strength==19){z=233; }
if (strength==20){z=266; }
if (strength==21){z=306; }
if (strength==22){z=346; }
if (strength==23){z=400; }
if (strength==24){z=466; }
if (strength==25){z=533; }
if (strength==26){z=613; }
if (strength==27){z=693; }
if (strength==28){z=800; }
if (strength==29){z=933; }
if (small==false){SWD +=x + "-" + z + " lb.<br>"; }
if (small==true){SWD +=Math.round(x*3/4) + "-" + Math.round(z*3/4) + " lb.<br>"; }
x=z + 1; 
if (strength== 1){z=10; }
if (strength== 2){z=20; }
if (strength== 3){z=30; }
if (strength== 4){z=40; }
if (strength== 5){z=50; }
if (strength== 6){z=60; }
if (strength== 7){z=70; }
if (strength== 8){z=80; }
if (strength== 9){z=90; }
if (strength==10){z=100; }
if (strength==11){z=115; }
if (strength==12){z=130; }
if (strength==13){z=150; }
if (strength==14){z=175; }
if (strength==15){z=200; }
if (strength==16){z=230; }
if (strength==17){z=260; }
if (strength==18){z=300; }
if (strength==19){z=350; }
if (strength==20){z=400; }
if (strength==21){z=460; }
if (strength==22){z=520; }
if (strength==23){z=600; }
if (strength==24){z=700; }
if (strength==25){z=800; }
if (strength==26){z=920; }
if (strength==27){z=1040; }
if (strength==28){z=1200; }
if (strength==29){z=1400; }
if (small==false){SWD +=x + "-" + z + " lb.<br>"; }
if (small==true){SWD +=Math.round(x*3/4) + "-" + Math.round(z*3/4) + " lb.<br>"; }

if (small==false){SWD +=z + " lb.<br>"; }
if (small==true){SWD +=Math.round(z*3/4) + " lb.<br>"; }

if (small==false){SWD +=(2*z) + " lb.<br>"; }
if (small==true){SWD +=Math.round(z*3/2) + " lb.<br>"; }

if (small==false){SWD +=(5*z) + " lb.<br>"; }
if (small==true){SWD +=Math.round(z*15/4) + " lb.<br>"; }

SWD +="</td></tr></table><p>"

SWD +="<p><table><tr><td valign=\"top\">Languages:</td><td>"
if ((document.form1.speak_aarakocra.checked==true)|(aarakocra_nativespeaker==true)){SWD +="Aarakocra  "}
if ((document.form1.speak_aboleth.checked==true)|(aboleth_nativespeaker==true)){SWD +="Aboleth  "}
if (document.form1.speak_abyssal.checked==true){SWD +="Abyssal  "}
if ((document.form1.speak_aklo.checked==true)|(aklo_nativespeaker==true)){SWD +="Aklo  "}
if ((document.form1.speak_aquan.checked==true)|(aquan_nativespeaker==true)){SWD +="Aquan  "}
if ((document.form1.speak_auran.checked==true)|(auran_nativespeaker)){SWD +="Auran  "}
if (document.form1.speak_celestial.checked==true){SWD +="Celestial  "}
if ((document.form1.speak_common.checked==true)|(common_nativespeaker==true)){SWD +="Common  "}

if ((document.form1.speak_dwarven.checked==true)|(dwarven_nativespeaker==true)){SWD +="Dwarven  "}
if ((document.form1.speak_draconic.checked==true)|(draconic_nativespeaker==true)){SWD +="Draconic  "}
if (druid_levels>0){SWD +="Druidic  "}
if ((document.form1.speak_elven.checked==true)|(elven_nativespeaker==true)){SWD +="Elven  "}
if ((document.form1.speak_darkelfsilent.checked==true)){SWD +="Dark_Elf_Silent "}
if ((document.form1.speak_giant.checked==true)|(giant_nativespeaker==true)){SWD +="Giant  "}
if ((document.form1.speak_gith.checked==true)|(gith_nativespeaker==true)){SWD +="Gith  "}
if ((document.form1.speak_gnoll.checked==true)|(gnoll_nativespeaker)){SWD +="Gnoll  "}
if ((document.form1.speak_gnome.checked==true)|(gnome_nativespeaker==true)){SWD +="Gnome  "}
if ((document.form1.speak_goblin.checked==true)|(goblin_nativespeaker==true)){SWD +="Goblin  "}
if ((document.form1.speak_halfling.checked==true)|(halfling_nativespeaker==true)){SWD +="Halfling  "}
if ((document.form1.speak_ignan.checked==true)|(ignan_nativespeaker==true)){SWD +="Ignan  "}
if (document.form1.speak_infernal.checked==true){SWD +="Infernal  "}
if ((document.form1.speak_orc.checked==true)|(orc_nativespeaker==true)){SWD +="Orc  "}
if ((document.form1.speak_pterran.checked==true)|(pterran_nativespeaker)){SWD +="Pterran  "}
if ((document.form1.speak_sylvan.checked==true)|(sylvan_nativespeaker)){SWD +="Sylvan  "}
if ((document.form1.speak_terran.checked==true)|(terran_nativespeaker)){SWD +="Terran  "}
if ((document.form1.speak_thrikreen.checked==true)|(thrikreen_nativespeaker)){SWD +="Thri-Kreen  "}
if ((document.form1.speak_undercommon.checked==true)|(undercommon_nativespeaker)){SWD +="Undercommon  "}
if ((document.form1.speak_xeph.checked==true)|(xeph_nativespeaker==true)){SWD +="Xeph  "}
if (document.form1.speak_otherlanguage1.checked==true){SWD +=document.form1.other_language_1_name.value + "  "}
if (document.form1.speak_otherlanguage2.checked==true){SWD +=document.form1.other_language_2_name.value + "  "}
if (document.form1.speak_otherlanguage3.checked==true){SWD +=document.form1.other_language_3_name.value + "  "}
if (document.form1.speak_otherlanguage4.checked==true){SWD +=document.form1.other_language_4_name.value + "  "}
if (document.form1.speak_otherlanguage5.checked==true){SWD +=document.form1.other_language_5_name.value + "  "}
if (document.form1.speak_otherlanguage6.checked==true){SWD +=document.form1.other_language_6_name.value + "  "}



Languages(); if (total_bonus_languages<total_bonus_language_entitlement)
 {SWD +=" (? " + (total_bonus_language_entitlement-total_bonus_languages) + " more)"}


SWD +="</td></tr></table><p>"
if (monk_levels>0)
 {
  
  SWD +="Unarmed Damage: "
  if (monk_levels==1)
    {
     if (small==false){SWD +="1d6"}
     if (small==true){SWD +="1d4"}
    }
  if (monk_levels==2)
    {
     if (small==false){SWD +="1d6"}
     if (small==true){SWD +="1d4"}
    }
  if (monk_levels==3)
    {
     if (small==false){SWD +="1d6"}
     if (small==true){SWD +="1d4"}
    }
  if (monk_levels==4)
    {
     if (small==false){SWD +="1d8"}
     if (small==true){SWD +="1d6"}
    }
  if (monk_levels==5)
    {
     if (small==false){SWD +="1d8"}
     if (small==true){SWD +="1d6"}
    }
  if (monk_levels==6)
    {
     if (small==false){SWD +="1d8"}
     if (small==true){SWD +="1d6"}
    }
  if (monk_levels==7)
    {
     if (small==false){SWD +="1d8"}
     if (small==true){SWD +="1d6"}
    }
  if (monk_levels==8)
    {
     if (small==false){SWD +="1d10"}
     if (small==true){SWD +="1d8"}
    }
  if (monk_levels==9)
    {
     if (small==false){SWD +="1d10"}
     if (small==true){SWD +="1d8"}
    }
  if (monk_levels==10)
    {
     if (small==false){SWD +="1d10"}
     if (small==true){SWD +="1d8"}
    }
  if (monk_levels==11)
    {
     if (small==false){SWD +="1d10"}
     if (small==true){SWD +="1d8"}
    }
  if (monk_levels==12)
    {
     if (small==false){SWD +="2d6"}
     if (small==true){SWD +="1d10"}
    }
  if (monk_levels==13)
    {
     if (small==false){SWD +="2d6"}
     if (small==true){SWD +="1d10"}
    }
  if (monk_levels==14)
    {
     if (small==false){SWD +="2d6"}
     if (small==true){SWD +="1d10"}
    }
  if (monk_levels==15)
    {
     if (small==false){SWD +="2d6"}
     if (small==true){SWD +="1d10"}
    }
  if (monk_levels==16)
    {
     if (small==false){SWD +="2d8"}
     if (small==true){SWD +="2d6"}
    }
  if (monk_levels==17)
    {
     if (small==false){SWD +="2d8"}
     if (small==true){SWD +="2d6"}
    }
  if (monk_levels==18)
    {
     if (small==false){SWD +="2d8"}
     if (small==true){SWD +="2d6"}
    }
  if (monk_levels==19)
    {
     if (small==false){SWD +="2d8"}
     if (small==true){SWD +="2d6"}
    }
  if (monk_levels==20)
    {
     if (small==false){SWD +="2d10"}
     if (small==true){SWD +="2d8"}
    }
   if (strength>11){SWD+=" +"+modifier_number(strength)+" [strength]";}
   if (strength<10){SWD+=modifier_number(strength)+" [strength]";}
  SWD +="<p>"
 }
if (document.form1.gauntlet.checked==true){
  if (small==true){SWD +="Gauntlet [1d2, crit x2, 1/2 lb,  light, bludgeoning]<p>\r"; wt +=0.5}
  if (small==false){SWD +="Gauntlet [1d3, crit x2, 1 lb,  light, bludgeoning]<p>\r"; wt +=1}}
if ((document.form1.dagger.checked==true)|(document.form1.throwingdaggers.selectedIndex>0)){
  if (small==true){SWD +="Dagger [1d3, crit 19-20/x2, range inc 10 ft., 1/2 lb., light, piercing]<p>\r"; wt +=0.5}
  if (small==false){SWD +="Dagger [1d4, crit 19-20/x2, range inc 10 ft., 1 lb., light, piercing]<p>\r"; wt +=1}}
if (document.form1.punchingdagger.checked==true){
  if (small==true){SWD +="Punching Dagger [1d3, crit x3, 1/2 lb.,  light, piercing or slashing]<p>\r"; wt +=0.5}
  if (small==false){SWD +="Punching Dagger [1d4, crit x3, 1 lb.,  light, piercing or slashing]<p>\r"; wt +=1}}
if (document.form1.spikedgauntlet.checked==true){
  if (small==true){SWD +="Spiked Gauntlet [1d3, crit x2, 1/2 lb,  light, piercing]<p>\r"; wt +=0.5}
  if (small==false){SWD +="Spiked Gauntlet [1d4, crit x2, 1 lb,  light, piercing]<p>\r"; wt +=1}}
if (document.form1.lightmace.checked==true){
  if (small==true){SWD +="Light Mace [1d4, crit x2, 1/2 lb,  light, bludgeoning]<p>\r"; wt +=0.5}
  if (small==false){SWD +="Light Mace [1d6, crit x2, 1 lb,  light, bludgeoning]<p>\r"; wt +=1}}
if (document.form1.sickle.checked==true){
  if (small==true){SWD +="Sickle [1d4, crit x2, 1 lb,  light, slashing]<p>\r"; wt +=1}
  if (small==false){SWD +="Sickle [1d6, crit x2, 2 lb,  light, slashing]<p>\r"; wt +=2}}
if (document.form1.club.checked==true){
  if (small==true){SWD +="Club [1d4, crit x2, range incr. 10 ft., 1 1/2 lb, one-handed, bludgeoning]<p>\r"; wt +=1.5}
  if (small==false){SWD +="Club [1d6, crit x2, range incr. 10 ft., 3 lb, one-handed, bludgeoning]<p>\r"; wt +=3}}
if (document.form1.heavymace.checked==true){
  if (small==true){SWD +="Heavy Mace [1d6, crit x2, 4 lb., one-handed, bludgeoning]<p>\r"; wt +=4}
  if (small==false){SWD +="Heavy Mace [1d8, crit x2, 8 lb., one-handed, bludgeoning]<p>\r"; wt +=8}}
if (document.form1.morningstar.checked==true){
  if (small==true){SWD +="Morningstar [1d6, crit x2, 3 lb,  one-handed, bludgeoning/piercing]<p>\r"; wt +=3}
  if (small==false){SWD +="Morningstar [1d8, crit x2, 6 lb,  one-handed, bludgeoning/piercing]<p>\r"; wt +=6}}
if (document.form1.shortspear.checked==true){
  if (small==true){SWD +="Short Spear [1d4, crit x2, range inc 20 ft., 1 1/2 lb, one-handed, piercing]<p>\r"; wt +=1.5}
  if (small==false){SWD +="Short Spear [1d6, crit x2, range inc 20 ft., 3 lb, one-handed, piercing]<p>\r"; wt +=3}}
if (document.form1.longspear.checked==true){
  if (small==true){SWD +="Long Spear [1d6, crit x3, 4 1/2 lb.,  two-handed, piercing]<p>\r"; wt +=4.5}
  if (small==false){SWD +="Long Spear [1d8, crit x3, 9 lb.,  two-handed, piercing]<p>\r"; wt +=9}}
if (document.form1.quarterstaff.checked==true){
  if (small==true){SWD +="Quarterstaff [1d4/1d4, crit x2, 2 lb., two-handed, bludgeoning]<p>\r"; wt +=2}
  if (small==false){SWD +="Quarterstaff [1d6/1d6, crit x2, 4 lb., two-handed, bludgeoning]<p>\r"; wt +=4}}
if (document.form1.spear.checked==true){
  if (small==true){SWD +="Spear [1d6, crit x3, range incr 20 ft., 3 lb.,  two-handed, piercing]<p>\r"; wt +=3}
  if (small==false){SWD +="Spear [1d8, crit x3, range incr 20 ft., 6 lb.,  two-handed, piercing]<p>\r"; wt +=6}}
if (document.form1.heavycrossbow.checked==true){
  if (small==true){SWD +="Heavy Crossbow [1d8, crit 19-20/x2, range inc 120 ft., 4 lb., piercing]<p>\r"; wt +=4}
  if (small==false){SWD +="Heavy Crossbow [1d10, crit 19-20/x2, range inc 120 ft., 8 lb., piercing]<p>\r"; wt +=8}}
if (document.form1.lightcrossbow.checked==true){
  if (small==true){SWD +="Light Crossbow [1d6, crit 19-20/x2, range inc 80 ft., 2 lb, piercing]]<p>\r"; wt +=2}
  if (small==false){SWD +="Light Crossbow [1d8, crit 19-20/x2, range inc 80 ft., 4 lb, piercing]]<p>\r"; wt +=4}}
if (document.form1.dart.checked==true){
  if (small==true){SWD +="Dart [1d3, crit x2, range inc. 20 ft., 1/4 lb, piercing]<p>\r"; wt +=0.25}
  if (small==false){SWD +="Dart [1d4, crit x2, range inc. 20 ft., 1/2 lb, piercing]<p>\r"; wt +=0.50}}
if (document.form1.javelin.checked==true){
  if (small==true){SWD +="Javelin [1d4, crit x2, range inc 30 ft., 1 lb, piercing]<p>\r"; wt +=1}
  if (small==false){SWD +="Javelin [1d6, crit x2, range inc 30 ft., 2 lb, piercing]<p>\r"; wt +=2}}
if (document.form1.sling.checked==true){
  if (small==true){SWD +="Sling [1d3, crit x2, range inc. 50 ft., 0 lb, bludgeoning]<p>\r"; wt +=0}
  if (small==false){SWD +="Sling [1d4, crit x2, range inc. 50 ft., 0 lb, bludgeoning]<p>\r"; wt +=0}}
if (document.form1.throwingaxe.checked==true){
  if (small==true){SWD +="Throwing Axe [1d4, crit x2, range inc 10 ft., 1 lb, light, slashing]<p>\r"; wt +=1}
  if (small==false){SWD +="Throwing Axe [1d6, crit x2, range inc 10 ft., 2 lb, light, slashing]<p>\r"; wt +=2}}
if (document.form1.lighthammer.checked==true){
  if (small==true){SWD +="Light Hammer [1d3, crit x2, range inc 20 ft., 1 lb., light,  bludgeoning]<p>\r"; wt +=1}
  if (small==false){SWD +="Light Hammer [1d4, crit x2, range inc 20 ft., 2 lb., light,  bludgeoning]<p>\r"; wt +=2}}
if (document.form1.handaxe.checked==true){
  if (small==true){SWD +="Hand Axe [1d4, crit x3, crit x2., 1 1/2 lb.,  light, slashing]<p>\r"; wt +=1.5}
  if (small==false){SWD +="Hand Axe [1d6, crit x3, crit x2., 3 lb.,  light, slashing]<p>\r"; wt +=3}}
if (document.form1.kukri.checked==true){
  if (small==true){SWD +="Kukri [1d3, crit 18-20/x2, 1 lb.,  light, slashing]<p>\r"; wt +=1}
  if (small==false){SWD +="Kukri [1d4, crit 18-20/x2, 2 lb.,  light, slashing]<p>\r"; wt +=2}}
if (document.form1.lightpick.checked==true){
  if (small==true){SWD +="Light Pick [1d3, crit x4, 1 1/2 lb., light,  piercing]<p>\r"; wt +=1.5}
  if (small==false){SWD +="Light Pick [1d4, crit x4, 3 lb., light,  piercing]<p>\r"; wt +=3}}
if (document.form1.sap.checked==true){
  if (small==true){SWD +="Sap [1d4 nonlethal, crit x2., 1 lb.,  light, bludgeoning]<p>\r"; wt +=1}
  if (small==false){SWD +="Sap [1d6 nonlethal, crit x2., 2 lb.,  light, bludgeoning]<p>\r"; wt +=2}}
if (document.form1.lightshield.checked==true){
  if (small==true){SWD +="Light Shield [1d2, crit x2.,  light, bludgeoning]<p>\r"; }
  if (small==false){SWD +="Light Shield [1d3, crit x2.,  light, bludgeoning]<p>\r"; }}
if (document.form1.spikedarmor.checked==true){
  if (small==true){SWD +="Spiked Armor [1d4, crit x2.,  light, piercing]<p>\r"; }
  if (small==false){SWD +="Spiked Armor [1d6, crit x2.,  light, piercing]<p>\r"; }}
if (document.form1.lightspikedshield.checked==true){
  if (small==true){SWD +="Light Spiked Shield [1d3, crit x2,  light, piercing]<p>\r"; }
  if (small==false){SWD +="Light Spiked Shield [1d4, crit x2,  light, piercing]<p>\r"; }}
if (document.form1.shortsword.checked==true){
  if (small==true){SWD +="Short Sword [1d4, crit 19-20/x2, 1/2 lb, light, piercing]<p>\r"; wt +=0.5}
  if (small==false){SWD +="Short Sword [1d6, crit 19-20/x2, 1 lb, light, piercing]<p>\r"; wt +=1}}
if (document.form1.battleaxe.checked==true){
  if (small==true){SWD +="Battle Axe [1d6, crit x3, 3 lb., one-handed, slashing]<p>\r"; wt +=3}
  if (small==false){SWD +="Battle Axe [1d8, crit x3, 6 lb., one-handed, slashing]<p>\r"; wt +=6}}
if (document.form1.flail.checked==true){
  if (small==true){SWD +="Flail [1d6, crit x2, 2 1/2 lb.,  one-handed, bludgeoning]<p>\r"; wt +=2.5}
  if (small==false){SWD +="Flail [1d8, crit x2, 5 lb.,  one-handed, bludgeoning]<p>\r"; wt +=5}}
if (document.form1.longsword.checked==true){
  if (small==true){SWD +="Longsword [1d6, crit 19-20/x2 2 lb, one-handed, slashing]<p>\r"; wt +=2}
  if (small==false){SWD +="Longsword [1d8, crit 19-20/x2 4 lb, one-handed, slashing]<p>\r"; wt +=4}}
if (document.form1.heavypick.checked==true){
  if (small==true){SWD +="Heavy Pick [1d4, crit x4, 3 lb.,  one-handed, piercing]<p>\r"; wt +=3}
  if (small==false){SWD +="Heavy Pick [1d6, crit x4, 6 lb.,  one-handed, piercing]<p>\r"; wt +=6}}
if (document.form1.rapier.checked==true){
  if (small==true){SWD +="Rapier [1d4, crit 18-20/x2, 1 lb.,  one-handed, piercing]<p>\r"; wt +=1}
  if (small==false){SWD +="Rapier [1d6, crit 18-20/x2, 2 lb.,  one-handed, piercing]<p>\r"; wt +=2}}
if (document.form1.scimitar.checked==true){
  if (small==true){SWD +="Scimitar [1d4, crit 18-20/x2, 2 lb, one-handed, slashing]<p>\r"; wt +=2}
  if (small==false){SWD +="Scimitar [1d6, crit 18-20/x2, 4 lb, one-handed, slashing]<p>\r"; wt +=4}}
if (document.form1.heavyshield.checked==true){
  if (small==true){SWD +="Heavy Shield [1d3, crit x2,  one-handed, bludgeoning]<p>\r"; }
  if (small==false){SWD +="Heavy Shield [1d4, crit x2,  one-handed, bludgeoning]<p>\r"; }}
if (document.form1.trident.checked==true){
  if (small==true){SWD +="Trident [1d6, crit x2, range incr. 10 ft., 2 lb.,  one-handed, piercing]<p>\r"; wt +=2}
  if (small==false){SWD +="Trident [1d8, crit x2, range incr. 10 ft., 4 lb.,  one-handed, piercing]<p>\r"; wt +=4}}
if (document.form1.warhammer.checked==true){
  if (small==true){SWD +="War Hammer [1d6, crit x3., 2 1/2 lb.,  one-handed, bludgeoning]<p>\r"; wt +=2.5}
  if (small==false){SWD +="War Hammer [1d8, crit x3., 5 lb.,  one-handed, bludgeoning]<p>\r"; wt +=5}}
if (document.form1.falchion.checked==true){
  if (small==true){SWD +="Falchion [1d6, crit 18-20/x2, 4 lb, two-handed, slashing]<p>\r"; wt +=4}
  if (small==false){SWD +="Falchion [2d4, crit 18-20/x2, 8 lb, two-handed, slashing]<p>\r"; wt +=8}}
if (document.form1.glaive.checked==true){
  if (small==true){SWD +="Glaive [1d8, crit x3, 5 lb., two-handed,  slashing]<p>\r"; wt +=5}
  if (small==false){SWD +="Glaive [1d10, crit x3, 10 lb., two-handed,  slashing]<p>\r"; wt +=10}}
if (document.form1.greataxe.checked==true){
  if (small==true){SWD +="Greataxe [1d10, crit x3, 6 lb,  two-handed, two-handed, slashing]<p>\r"; wt +=6}
  if (small==false){SWD +="Greataxe [1d12, crit x3, 12 lb,  two-handed, two-handed, slashing]<p>\r"; wt +=12}}
if (document.form1.greatclub.checked==true){
  if (small==true){SWD+="Greatclub [1d8, crit x2, 4 lb,  two-handed,  bludgeoning]<p>\r"; wt+=4}
  if ((small==false)){SWD+="Greatclub [1d10, crit x2, 8 lb,   two-handed, bludgeoning]<p>\r"; wt+=8}}
if (document.form1.heavyflail.checked==true){
  if (small==true){SWD +="Heavy Flail [1d8, crit 19-20/x2, 5 lb., two-handed,  bludgeoning]<p>\r"; wt +=5}
  if (small==false){SWD +="Heavy Flail [1d10, crit 19-20/x2, 10 lb., two-handed,  bludgeoning]<p>\r"; wt +=10}}
if (document.form1.greatsword.checked==true){
  if (small==true){SWD +="Greatsword [1d10, crit 19-20/x2, 4 lb., two-handed, slashing]<p>\r"; wt +=4}
  if (small==false){SWD +="Greatsword [2d6, crit 19-20/x2, 8 lb., two-handed, slashing]<p>\r"; wt +=8}}
if (document.form1.guisarme.checked==true){
  if (small==true){SWD +="Guisarme [1d6, crit x3, 6 lb.,  two-handed, slashing]<p>\r"; wt +=6}
  if (small==false){SWD +="Guisarme [2d4, crit x3, 12 lb.,  two-handed, slashing]<p>\r"; wt +=12}}
if (document.form1.halberd.checked==true){
  if (small==true){SWD +="Halberd [1d8, crit x3, 6 lb.,  two-handed, piercing or slashing]<p>\r"; wt +=6}
  if (small==false){SWD +="Halberd [1d10, crit x3, 12 lb.,  two-handed, piercing or slashing]<p>\r"; wt +=12}}
if (document.form1.lance.checked==true){
  if (small==true){SWD +="Lance [1d6, crit x3, 6 lb.,  two-handed, piercing]<p>\r"; wt +=6}
  if (small==false){SWD +="Lance [2d4, crit x3, 12 lb.,  two-handed, piercing]<p>\r"; wt +=12}}
if (document.form1.ranseur.checked==true){
  if (small==true){SWD +="Ranseur [1d6, crit x3, 6 lb.,  two-handed, piercing]<p>\r"; wt +=6}
  if (small==false){SWD +="Ranseur [2d4, crit x3, 12 lb.,  two-handed, piercing]<p>\r"; wt +=12}}
if (document.form1.scythe.checked==true){
  if (small==true){SWD +="Scythe [1d6, crit x4, 5 lb.,  two-handed, piercing or slashing]<p>\r"; wt +=5}
  if (small==false){SWD +="Scythe [2d4, crit x4, 10 lb.,  two-handed, piercing or slashing]<p>\r"; wt +=10}}
if (document.form1.longbow.checked==true){
  if (small==true){SWD +="Longbow [1d6, crit x3, range inc. 100 ft, 1 1/2 lb, piercing]<p>\r"; wt +=1.5}
  if (small==false){SWD +="Longbow [1d8, crit x3, range inc. 100 ft, 3 lb, piercing]<p>\r"; wt +=3}}
if (document.form1.compositelongbow.checked==true){
  if (small==true){SWD +="Composite Longbow [1d6, crit x3, range incr. 110 ft., 1 1/2 lb, piercing]<p>\r"; wt +=1.5}
  if (small==false){SWD +="Composite Longbow [1d8, crit x3, range incr. 110 ft., 3 lb, piercing]<p>\r"; wt +=3}}
if (document.form1.shortbow.checked==true){
  if (small==true){SWD +="Shortbow [1d4, crit x3, range inc. 60 ft., 1 lb., piercing]<p>\r"; wt +=1}
  if (small==false){SWD +="Shortbow [1d6, crit x3, range inc. 60 ft., 2 lb., piercing]<p>\r"; wt +=2}}
if (document.form1.compositeshortbow.checked==true){
  if (small==true){SWD +="Composite Shortbow [1d4, crit x3, range incr. 70 ft., 1 lb., piercing]<p>\r"; wt +=1}
  if (small==false){SWD +="Composite Shortbow [1d6, crit x3, range incr. 70 ft., 2 lb., piercing]<p>\r"; wt +=2}}
if (document.form1.kama.checked==true){
  if (small==true){SWD +="Kama [1d4, crit x2, 1 lb., light, slashing]<p>\r"; wt +=1}
  if (small==false){SWD +="Kama [1d6, crit x2, 2 lb., light, slashing]<p>\r"; wt +=2}}
if (document.form1.nanchaku.checked==true){
  if (small==true){SWD +="Nanchaku [1d4 crit x2, 1 lb.,  light, bludgeoning]<p>\r"; wt +=1}
  if (small==false){SWD +="Nanchaku [1d6 crit x2, 2 lb.,  light, bludgeoning]<p>\r"; wt +=2}}
if (document.form1.sai.checked==true){
  if (small==true){SWD +="Sai [1d3, crit x2, range incr 10 ft., 1/2 lb.,  light, bludgeoning]<p>\r"; wt +=0.5}
  if (small==false){SWD +="Sai [1d4, crit x2, range incr 10 ft., 1 lb.,  light, bludgeoning]<p>\r"; wt +=1}}
if (document.form1.siangham.checked==true){
  if (small==true){SWD +="Siangham [1d4, crit x2, 1/2 lb.,  light, piercing]<p>\r"; wt +=0.5}
  if (small==false){SWD +="Siangham [1d6, crit x2, 1 lb.,  light, piercing]<p>\r"; wt +=1}}
if (document.form1.bastardsword.checked==true){
  if (small==true){SWD +="Bastard Sword [1d8, crit 19-20/x2, 3 lb., one-handed, slashing]<p>\r"; wt +=3}
  if (small==false){SWD +="Bastard Sword [1d10, crit 19-20/x2, 6 lb., one-handed, slashing]<p>\r"; wt +=6}}
if (document.form1.dwarvenwaraxe.checked==true){
  if (small==true){SWD +="Dwarven Waraxe [1d8, crit x3, 4 lb.,  one-handed, slashing]<p>\r"; wt +=4}
  if (small==false){SWD +="Dwarven Waraxe [1d10, crit x3, 8 lb.,  one-handed, slashing]<p>\r"; wt +=8}}
if (document.form1.whip.checked==true){
  if (small==true){SWD +="Whip [1d2 (nonlethal), crit x2, 1 lb., one-handed,  slashing]<p>\r"; wt +=1}
  if (small==false){SWD +="Whip [1d3 (nonlethal), crit x2, 2 lb., one-handed,  slashing]<p>\r"; wt +=2}}
if (document.form1.orcdoubleaxe.checked==true){
  if (small==true){SWD +="Orc Double Axe [1d6/1d6, crit x3, 7 1/2 lb., two-handed, slashing]<p>\r"; wt +=7.5}
  if (small==false){SWD +="Orc Double Axe [1d8/1d8, crit x3, 15 lb., two-handed, slashing]<p>\r"; wt +=15}}
if (document.form1.spikedchain.checked==true){
  if (small==true){SWD +="Spiked Chain [1d6, crit x2, 5 lb.,  two-handed, piercing]<p>\r"; wt +=5}
  if (small==false){SWD +="Spiked Chain [2d4, crit x2, 10 lb.,  two-handed, piercing]<p>\r"; wt +=10}}
if (document.form1.direflail.checked==true){
  if (small==true){SWD +="Dire Flail [1d6/1d6, crit x2, 5 lb., two-handed,  bludgeoning]<p>\r"; wt +=5}
  if (small==false){SWD +="Dire Flail [1d8/1d8, crit x2, 10 lb., two-handed,  bludgeoning]<p>\r"; wt +=10}}
if (document.form1.gnomehookedhammer.checked==true){
  if (small==true){SWD +="Gnome Hooked Hammer [1d6/1d4, crit x3/x4, 3 lb.,  two-handed, bludgeoning and piercing]<p>\r"; wt +=3}
  if (small==false){SWD +="Gnome Hooked Hammer [1d8/1d6, crit x3/x4, 6 lb.,  two-handed, bludgeoning and piercing]<p>\r"; wt +=6}}
if (document.form1.twobladedsword.checked==true){
  if (small==true){SWD +="Two-bladed Sword [1d6/1d6, crit 19-20/x2, 5 lb.,  two-handed, slashing]<p>\r"; wt +=5}
  if (small==false){SWD +="Two-bladed Sword [1d8/1d8, crit 19-20/x2, 10 lb.,  two-handed, slashing]<p>\r"; wt +=10}}
if (document.form1.dwarvenurgrosh.checked==true){
  if (small==true){SWD +="Dwarven Urgrosh [1d6/1d4, crit x3, 6 lb.,  two-handed, slashing or piercing]<p>\r"; wt +=6}
  if (small==false){SWD +="Dwarven Urgrosh [1d8/1d6, crit x3, 12 lb.,  two-handed, slashing or piercing]<p>\r"; wt +=12}}
if (document.form1.bolas.checked==true){
  if (small==true){SWD +="Bolas [1d3 (nonlethal), crit x2, range incr 10 ft., 1 lb, bludgeoning]<p>\r"; wt +=1}
  if (small==false){SWD +="Bolas [1d4 (nonlethal), crit x2, range incr 10 ft., 2 lb, bludgeoning]<p>\r"; wt +=2}}
if (document.form1.handcrossbow.checked==true){
  if (small==true){SWD +="Hand Crossbow [1d3, 19-20/x2, range incr 30 ft., 1 lb., piercing]<p>\r"; wt +=1}
  if (small==false){SWD +="Hand Crossbow [1d4, 19-20/x2, range incr 30 ft., 2 lb., piercing]<p>\r"; wt +=2}}
if (document.form1.repeatingheavycrossbow.checked==true){
  if (small==true){SWD +="Repeating Heavy Crossbow [1d8, 19-20/x2, range incr 120 ft., 6 lb., piercing]<p>\r"; wt +=6}
  if (small==false){SWD +="Repeating Heavy Crossbow [1d10, 19-20/x2, range incr 120 ft., 12 lb., piercing]<p>\r"; wt +=12}}
if (document.form1.repeatinglightcrossbow.checked==true){
  if (small==true){SWD +="Repeating Light Crossbow [1d6, 19-20/x2, range incr 80 ft., 3 lb., piercing]<p>\r"; wt +=3}
  if (small==false){SWD +="Repeating Light Crossbow [1d8, 19-20/x2, range incr 80 ft., 6 lb., piercing]<p>\r"; wt +=6}}
if (document.form1.net.checked==true){
  if (small==true){SWD +="Net [--, 10 ft., 3 lb., --]<p>\r"; wt +=3}
  if (small==false){SWD +="Net [--, 10 ft., 6 lb., --]<p>\r"; wt +=6}}
if (document.form1.shuriken.checked==true){
  if (small==true){SWD +="Shuriken [1, crit x2, range incr 10 ft, 1/2 lb, piercing]<p>\r"; wt +=0.5}
  if (small==false){SWD +="Shuriken [1d2, crit x2, range incr 10 ft, 1/2 lb, piercing]<p>\r"; wt +=0.5}}
if (document.form1.pistol.checked==true){
   SWD +="Pistol [1d10, crit x3, range incr 50 ft, 3 lb, piercing]<p>\r"; wt +=3}
if (document.form1.musket.checked==true){
   SWD +="Musket [1d12, crit x3, range incr 150 ft, 10 lb, piercing]<p>\r"; wt +=10}



if (armor_string!=""){SWD +=armor_string + "<p>\r"; }
if (shield_string!=""){SWD +=shield_string + "<p>\r"; }
if (wizard_levels>0)
 {
   if (no_familiar==true){SWD +="No familiar yet -- option to create your bonded object instead"}
   if (bat_familiar==true){SWD +="Bat familiar: See rules in Core Handbook and stats in Bestiary"}
   if (cat_familiar==true){SWD +="Cat familiar: See rules in Core Handbook and stats in Bestiary"}
   if (hawk_familiar==true){SWD +="Hawk familiar: See rules in Core Handbook and stats in Bestiary"}
   if (lizard_familiar==true){SWD +="Lizard familiar: See rules in Core Handbook and stats in Bestiary"}
   if (monkey_familiar==true){SWD +="Monkey familiar: See rules in Core Handbook and stats in Bestiary"}
   if (owl_familiar==true){SWD +="Owl familiar: See rules in Core Handbook and stats in Bestiary"}
   if (rat_familiar==true){SWD +="Rat familiar: See rules in Core Handbook and stats in Bestiary"}
   if (raven_familiar==true){SWD +="Raven familiar: See rules in Core Handbook and stats in Bestiary"}
   if (snake_familiar==true){SWD +="Snake familiar: See rules in Core Handbook and stats in Bestiary"}
   if (toad_familiar==true){SWD +="Toad familiar: See rules in Core Handbook and stats in Bestiary"}
   if (weasel_familiar==true){SWD +="Weasel familiar: See rules in Core Handbook and stats in Bestiary"}
    SWD +="<p>\r"
 }

SWD +="<p>Feats:<ul>"
SWD +="<table>"

if (has_acrobatic==true){SWD +="<tr><td valign=\"top\">Acrobatic</td><td>+2 on acrobatics and fly checks</td></tr>\r"}
if (has_agilemaneuvers==true){SWD +="<tr><td valign=\"top\">Agile Maneuvers</td><td>Use dexterity instead of strength for combat maneuvers</td></tr>\r"}
if (has_alertness==true){SWD +="<tr><td valign=\"top\">Alertness</td><td>+2 on perception and sense motive</td></tr>\r"}
if (has_animalaffinity==true){SWD +="<tr><td valign=\"top\">Animal Affinity</td><td>+2 on handle animal and ride</td></tr>\r"}
if (has_arcanestrike==true){SWD +="<tr><td valign=\"top\">Arcane Strike</td><td>Give a weapon a magical plus for one round</td></tr>\r"}
if (has_armorproficiencylight==true){SWD +="<tr><td valign=\"top\">Armor Proficiency (light)</td><td>Removes attack penalty</td></tr>\r"}
if (has_armorproficiencymedium==true){SWD +="<tr><td valign=\"top\">Armor Proficiency (medium)</td><td>Removes attack penalty</td></tr>\r"}
if (has_armorproficiencyheavy==true){SWD +="<tr><td valign=\"top\">Armor Proficiency (heavy)</td><td>Removes attack penalty</td></tr>\r"}
if (has_athletic==true){SWD +="<tr><td valign=\"top\">Athletic</td><td>+1 on climb and swim</td></tr>\r"}
if (has_augmentsummoning==true){SWD +="<tr><td valign=\"top\">Augment Summoning</td><td>+4 strength and +4 constitution for summoned creatures</td></tr>\r"}
if ((has_blindfight==true)|(has_blindfight==true)){SWD +="<tr><td valign=\"top\">Blind-fight</td><td>Re-roll misses due to concealment</td></tr>\r"}

if (has_combatcasting==true){SWD +="<tr><td valign=\"top\">Combat Casting</td><td>+4 on concentration checks for defensive casting</td></tr>\r"}
if ((has_combatexpertise==true)){SWD +="<tr><td valign=\"top\">Combat Expertise</td><td>Reduce attack bonus to obtain AC bonus</td></tr>\r"}
if ((has_improveddisarm==true)){SWD +="<tr><td valign=\"top\">Improved Disarm</td><td>+2 on disarm attempts, no opportunity attack</td></tr>\r"}
if ((has_improvedfeint==true)){SWD +="<tr><td valign=\"top\">Improved Feint</td><td>Feint becomes a move action</td></tr>\r"}
if ((has_improvedtrip==true)){SWD +="<tr><td valign=\"top\">Improved Trip</td><td>+2 on trip attempts, no opportunity attack</td></tr>\r"}
if ((has_whirlwindattack==true)){SWD +="<tr><td valign=\"top\">Whirlwind Attack</td><td>Make 1 melee attack against each enemy in reach</td></tr>\r"}
if ((has_combatreflexes==true)){SWD +="<tr><td valign=\"top\">Combat Reflexes</td><td>Additional opportunity attacks</td></tr>\r"}
if (has_deceitful==true){SWD +="<tr><td valign=\"top\">Deceitful</td><td>+2 on bluff and disguise</td></tr>\r"}
if (has_defthands==true){SWD +="<tr><td valign=\"top\">Deft Hands</td><td>+2 on disable device and sleight of hand</td></tr>\r"}
if ((has_dodge==true)){SWD +="<tr><td valign=\"top\">Dodge</td><td>+1 dodge bonus on AC</td></tr>\r"}
if ((has_mobility==true)|(has_mobility==true)){SWD +="<tr><td valign=\"top\">Mobility</td><td>+4 on AC vs opportunity attacks caused by movement</td></tr>\r"}
if ((has_springattack==true)|(has_springattack==true)){SWD +="<tr><td valign=\"top\">Spring Attack</td><td>Move before and after attack</td></tr>\r"}
if (has_endurance==true){SWD +="<tr><td valign=\"top\">Endurance</td><td>+4 on saves vs. nonlethal damage </td></tr>\r"}
if (ranger_levels>2){SWD +="<tr><td valign=\"top\">Endurance</td><td>+4 on saves vs. nonlethal damage [free to rangers]</td></tr>\r"}
if (has_diehard==true){SWD +="<tr><td valign=\"top\">Die Hard</td><td>Remain conscious and stabilized below 0 hp</td></tr>\r"}
if (has_eschewmaterials==true){SWD +="<tr><td valign=\"top\">Eschew Materials</td><td>No need for cheap material components</td></tr>\r"}
if ((has_exoticweaponproficiency==true)){SWD +="<tr><td valign=\"top\">Exotic Weapon Proficiency</td><td>Weapon: </td></tr>\r"}
if (has_extrachannel>0){SWD +="<tr><td valign=\"top\">Extra Channel x" + has_extrachannel + "</td><td>Channel energy two additional times per day per feat</td></tr>\r"}
if (has_extraki>0){SWD +="<tr><td valign=\"top\">Extra Ki x" + has_extraki + "</td><td>Gain 2 points for ki pool per feat</td></tr>\r"}
if (has_extralayonhands>0){SWD +="<tr><td valign=\"top\">Extra Lay on Hands x" + has_extralayonhands + "</td><td></td></tr>\r"}
if (has_extramercy>0){SWD +="<tr><td valign=\"top\">Extra Mercy x" + has_extramercy + "</td><td>Gain an additional mercy per feat</td></tr>\r"}
if (has_extraperformance>0){SWD +="<tr><td valign=\"top\">Extra Performance x" + has_extraperformance + "</td><td>Perform six extra rounds per day per feat</td></tr>\r"}
if (has_extrarage>0){SWD +="<tr><td valign=\"top\">Extra Rage x" + has_extrarage + "</td><td>Rage 6 extra rounds per day per feat</td></tr>\r"}
if (has_greatfortitude==true){SWD +="<tr><td valign=\"top\">Great Fortitude</td><td>+2 on fortitude saves</td></tr>\r"}
if (has_improvedcounterspell==true){SWD +="<tr><td valign=\"top\">Improved Counterspell</td><td>Use spell of same schol to counterspell</td></tr>\r"}
if ((has_improvedcritical>0)){SWD +="<tr><td valign=\"top\">Improved Critical x" + has_improvedcritical + "</td><td>Weapon(s):</td></tr>\r"}
if ((has_improvedinitiative==true)){SWD +="<tr><td valign=\"top\">Improved Initiative</td><td>+4</td></tr>\r"}
if ((has_improvedunarmedstrike==true)|(has_improvedunarmedstrike==true)){SWD +="<tr><td valign=\"top\">Improved Unarmed Strike</td><td>Always considered armed</td></tr>\r"}
if (monk_levels>0){SWD +="<tr><td valign=\"top\">Improved Unarmed Strike [free to monk]</td><td>Always considered armed</td></tr>\r"}
if ((has_improvedgrapple==true)){SWD +="<tr><td valign=\"top\">Improved Grapple</td><td>+2 on grapple attempts, no attack of opportunity</td></tr>\r"}
if ((has_deflectarrows==true)){SWD +="<tr><td valign=\"top\">Deflect Arrows</td><td>Avoid one ranged attack per round</td></tr>\r"}
if ((has_snatcharrows==true)){SWD +="<tr><td valign=\"top\">Snatch Arrows</td><td>Catch one ranged attack per round</td></tr>\r"}
if ((has_stunningfist==true)){SWD +="<tr><td valign=\"top\">Stunning Fist</td><td>Stun opponent with unarmed strike</td></tr>\r"}
if (monk_levels>0){SWD +="<tr><td valign=\"top\">Stunning Fist</td><td>Stun opponent with unarmed strike [free to monks]</td></tr>\r"}
if (has_ironwill==true){SWD +="<tr><td valign=\"top\">Iron Will</td><td>+2 on will saves</td></tr>\r"}
if (has_leadership==true){SWD +="<tr><td valign=\"top\">Leadership</td><td>Cohort and followers</td></tr>\r"}
if (has_lightningreflexes==true){SWD +="<tr><td valign=\"top\">Lightning Reflexes</td><td></td></tr>\r"}
if (has_magicalaptitude==true){SWD +="<tr><td valign=\"top\">Magical Aptitude</td><td>+2 on spellcraft and use magical device</td></tr>\r"}
if (has_martialweaponproficiency==true){SWD +="<tr><td valign=\"top\">Martial Weapon Proficiency</td><td>Weapon:</td></tr>\r"}
if ((has_mountedcombat==true)){SWD +="<tr><td valign=\"top\">Mounted Combat</td><td>Ride check enables you to avoid attacks on mount</td></tr>\r"}
if ((has_mountedarchery==true)|(has_mountedarchery==true)){SWD +="<tr><td valign=\"top\">Mounted Archery</td><td>Half penalty for ranged attacks while mounted</td></tr>\r"}
if ((has_ridebyattack==true)){SWD +="<tr><td valign=\"top\">Rideby Attack</td><td>Move both before and after a charge while mounted</td></tr>\r"}
if ((has_spiritedcharge==true)|(has_spiritedcharge==true)){SWD +="<tr><td valign=\"top\">Spirited Charge</td><td>Double damage on a mounted charge</td></tr>\r"}
if ((has_trample==true)){SWD +="<tr><td valign=\"top\">Trample</td><td>Overrun oponents when mounted</td></tr>\r"}
if (has_naturalspell==true){SWD +="<tr><td valign=\"top\">Natural Spell</td><td>Cast spells in animal shape</td></tr>\r"}
if (has_persuasive==true){SWD +="<tr><td valign=\"top\">Persuasive</td><td>+2 on diplomacy and intimidate</td></tr>\r"}
if ((has_pointblankshot==true)){SWD +="<tr><td valign=\"top\">Point Blank Shot</td><td>+1 attack on damage on ranged targets within 30 feet</td></tr>\r"}
if ((has_farshot==true)){SWD +="<tr><td valign=\"top\">Far Shot</td><td>Decreased penalties for ranged attacks by half</td></tr>\r"}
if ((has_preciseshot==true)|(has_preciseshot==true)){SWD +="<tr><td valign=\"top\">Precise Shot</td><td>Fire into melee without penalty</td></tr>\r"}
if ((has_rapidshot==true)){SWD +="<tr><td valign=\"top\">Rapid Shot</td><td>One extra arrow / round, all at -2 to hit</td></tr>\r"}
if ((has_manyshot==true)){SWD +="<tr><td valign=\"top\">Many Shot</td><td>Shoot two arrows at once</td></tr>\r"}
if ((has_shotontherun==true)){SWD +="<tr><td valign=\"top\">Shot on the Run</td><td>Shoot at any time while moving</td></tr>\r"}
if ((has_improvedpreciseshot==true)|(has_improvedpreciseshot==true)){SWD +="<tr><td valign=\"top\">Improved Precise Shot</td><td>Ranged attacks ignore cover and concealment</td></tr>\r"}
if ((has_powerattack==true)|(has_powerattack==true)){SWD +="<tr><td valign=\"top\">Power Attack</td><td>Take penalty on attack for larger bonus on damage</td></tr>\r"}
if ((has_cleave==true)|(has_cleave==true)){SWD +="<tr><td valign=\"top\">Cleave</td><td>One attack, AC-2, make additional attack if first one hits</td></tr>\r"}
if ((has_greatcleave==true)|(has_greatcleave==true)){SWD +="<tr><td valign=\"top\">Great Cleave</td><td>One attack, AC-2, make additional attacks as each one hits</td></tr>\r"}
if ((has_improvedbullrush==true)|(has_improvedbullrush==true)){SWD +="<tr><td valign=\"top\">Improved Bull Rush</td><td>+2 on bull rush attempts, no attack of opportunity</td></tr>\r"}
if ((has_improvedoverrun==true)|(has_improvedoverrun==true)){SWD +="<tr><td valign=\"top\">Improved Overrun</td><td>+2 on overrun attempts, no attack of opportunity</td></tr>\r"}
if ((has_improvedsunder==true)|(has_improvedsunder==true)){SWD +="<tr><td valign=\"top\">Improved Sunder</td><td>+2 on sunder attempts, no attack of opportunity</td></tr>\r"}
if ((has_quickdraw==true)|(has_quickdraw==true)){SWD +="<tr><td valign=\"top\">Quick Draw</td><td>Draw weapon is free action</td></tr>\r"}
if ((has_rapidreload==true)){SWD +="<tr><td valign=\"top\">Rapid Reload</td><td></td></tr>\r"}
if (has_run==true){SWD +="<tr><td valign=\"top\">Run</td><td>Run at 5x normal speed</td></tr>\r"}
if (has_selfsufficient==true){SWD +="<tr><td valign=\"top\">Self-Sufficient</td><td>+2 on heal and survival</td></tr>\r"}
if (has_shieldproficiency==true){SWD +="<tr><td valign=\"top\">Shield Proficiency</td><td></td></tr>\r"}
if ((has_improvedshieldbash==true)|(has_improvedshieldbash==true)){SWD +="<tr><td valign=\"top\">Improved Shield Bash</td><td>Shield bonus still applies when bashing</td></tr>\r"}
if (has_towershieldproficiency==true){SWD +="<tr><td valign=\"top\">Tower Shield Proficiency</td><td></td></tr>\r"}
if (has_simpleweaponproficiency==true){SWD +="<tr><td valign=\"top\">Simple Weapon Proficiency</td><td></td></tr>\r"}
if (has_skillfocusacrobatics==true){SWD +="<tr><td valign=\"top\">Skill Focus (Acrobatics)</td><td></td></tr>\r"}
if (has_skillfocusappraise==true){SWD +="<tr><td valign=\"top\">Skill Focus (Appraise)</td><td></td></tr>\r"}
if (has_skillfocusbluff==true){SWD +="<tr><td valign=\"top\">Skill Focus (Bluff)</td><td></td></tr>\r"}
if (has_skillfocusclimb==true){SWD +="<tr><td valign=\"top\">Skill Focus (Climb)</td><td></td></tr>\r"}
if (has_skillfocuscraft_1==true){SWD +="<tr><td valign=\"top\">Skill Focus (Craft_1)</td><td></td></tr>\r"}
if (has_skillfocuscraft_2==true){SWD +="<tr><td valign=\"top\">Skill Focus (Craft_2)</td><td></td></tr>\r"}
if (has_skillfocuscraft_3==true){SWD +="<tr><td valign=\"top\">Skill Focus (Craft_3)</td><td></td></tr>\r"}
if (has_skillfocusdiplomacy==true){SWD +="<tr><td valign=\"top\">Skill Focus (Diplomacy)</td><td></td></tr>\r"}
if (has_skillfocusdisabledevice==true){SWD +="<tr><td valign=\"top\">Skill Focus (Disable Device)</td><td></td></tr>\r"}
if (has_skillfocusdisguise==true){SWD +="<tr><td valign=\"top\">Skill Focus (Disguise)</td><td></td></tr>\r"}
if (has_skillfocusescapeartist==true){SWD +="<tr><td valign=\"top\">Skill Focus (Escape Artist)</td><td></td></tr>\r"}
if (has_skillfocusfly==true){SWD +="<tr><td valign=\"top\">Skill Focus (Fly)</td><td></td></tr>\r"}
if (has_skillfocushandleanimal==true){SWD +="<tr><td valign=\"top\">Skill Focus (Handle Animal)</td><td></td></tr>\r"}
if (has_skillfocusheal==true){SWD +="<tr><td valign=\"top\">Skill Focus (Heal)</td><td></td></tr>\r"}
if (has_skillfocusstealth==true){SWD +="<tr><td valign=\"top\">Skill Focus (Stealth)</td><td></td></tr>\r"}
//if (has_skillfocushypnosis==true){SWD +="<tr><td valign=\"top\">Skill Focus (hypnosis)</td><td></td></tr>\r"}
if (has_skillfocusintimidate==true){SWD +="<tr><td valign=\"top\">Skill Focus (Intimidate)</td><td></td></tr>\r"}
if (has_skillfocusknowledgearcana==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know Arcana)</td><td></td></tr>\r"}
if (has_skillfocusknowledgedungeoneering==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know Dungeoneering)</td><td></td></tr>\r"}
if (has_skillfocusknowledgeengineering==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know Engineering)</td><td></td></tr>\r"}
if (has_skillfocusknowledgegeography==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know Geography)</td><td></td></tr>\r"}
if (has_skillfocusknowledgehistory==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know History)</td><td></td></tr>\r"}
if (has_skillfocusknowledgelocal==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know Local)</td><td></td></tr>\r"}
if (has_skillfocusknowledgenature==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know Nature)</td><td></td></tr>\r"}
if (has_skillfocusknowledgenobility==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know Nobility)</td><td></td></tr>\r"}
if (has_skillfocusknowledgereligion==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know Religion)</td><td></td></tr>\r"}


if (has_skillfocusknowledgeplanes==true){SWD +="<tr><td valign=\"top\">Skill Focus (Know Planes)</td><td></td></tr>\r"}
if (has_skillfocuslinguistics==true){SWD +="<tr><td valign=\"top\">Skill Focus (Linguistics)</td><td></td></tr>\r"}
if (has_skillfocusperception==true){SWD +="<tr><td valign=\"top\">Skill Focus (Perception)</td><td></td></tr>\r"}
if (has_skillfocusperform_1==true){SWD +="<tr><td valign=\"top\">Skill Focus (Perform_1)</td><td></td></tr>\r"}
if (has_skillfocusperform_2==true){SWD +="<tr><td valign=\"top\">Skill Focus (Perform_2)</td><td></td></tr>\r"}
if (has_skillfocusperform_3==true){SWD +="<tr><td valign=\"top\">Skill Focus (Perform_3)</td><td></td></tr>\r"}
if (has_skillfocusperform_4==true){SWD +="<tr><td valign=\"top\">Skill Focus (Perform_4)</td><td></td></tr>\r"}
if (has_skillfocusperform_5==true){SWD +="<tr><td valign=\"top\">Skill Focus (Perform_5)</td><td></td></tr>\r"}
if (has_skillfocusprofession==true){SWD +="<tr><td valign=\"top\">Skill Focus (Profession)</td><td></td></tr>\r"}
if (has_skillfocusride==true){SWD +="<tr><td valign=\"top\">Skill Focus (Ride)</td><td></td></tr>\r"}

if (has_skillfocussensemotive==true){SWD +="<tr><td valign=\"top\">Skill Focus (Sense Motive)</td><td></td></tr>\r"}
if (has_skillfocussleightofhand==true){SWD +="<tr><td valign=\"top\">Skill Focus (Sleight of Hand)</td><td></td></tr>\r"}
if (has_skillfocusspellcraft==true){SWD +="<tr><td valign=\"top\">Skill Focus (Spellcraft)</td><td></td></tr>\r"}
if (has_skillfocussurvival==true){SWD +="<tr><td valign=\"top\">Skill Focus (Survival)</td><td></td></tr>\r"}
if (has_skillfocusswim==true){SWD +="<tr><td valign=\"top\">Skill Focus (Swim)</td><td></td></tr>\r"}
if (has_skillfocususemagicdevice==true){SWD +="<tr><td valign=\"top\">Skill Focus (Use Magic Device)</td><td></td></tr>\r"}



if (has_spellfocusabjuration==true){SWD +="<tr><td valign=\"top\">Spell Focus (Abjuration)</td><td></td></tr>\r"}
if (has_spellfocusconjuration==true){SWD +="<tr><td valign=\"top\">Spell Focus (Conjuration)</td><td></td></tr>\r"}
if (has_spellfocusdivination==true){SWD +="<tr><td valign=\"top\">Spell Focus (Divination)</td><td></td></tr>\r"}
if (has_spellfocusenchantment==true){SWD +="<tr><td valign=\"top\">Spell Focus (Enchantment)</td><td></td></tr>\r"}
if (has_spellfocusevocation==true){SWD +="<tr><td valign=\"top\">Spell Focus (Evocation)</td><td></td></tr>\r"}
if (has_spellfocusillusion==true){SWD +="<tr><td valign=\"top\">Spell Focus (Illusion)</td><td></td></tr>\r"}
if (has_spellfocusnecromancy==true){SWD +="<tr><td valign=\"top\">Spell Focus (Necromancy)</td><td></td></tr>\r"}
if (has_spellfocustransmutation==true){SWD +="<tr><td valign=\"top\">Spell Focus (Transmutation)</td><td></td></tr>\r"}
if (has_greaterspellfocusabjuration==true){SWD +="<tr><td valign=\"top\">Greater Spell Focus (Abjuration)</td><td></td></tr>\r"}
if (has_greaterspellfocusconjuration==true){SWD +="<tr><td valign=\"top\">Greater Spell Focus (Conjuration)</td><td></td></tr>\r"}
if (has_greaterspellfocusdivination==true){SWD +="<tr><td valign=\"top\">Greater Spell Focus (Divination)</td><td></td></tr>\r"}
if (has_greaterspellfocusenchantment==true){SWD +="<tr><td valign=\"top\">Greater Spell Focus (Enchantment)</td><td></td></tr>\r"}
if (has_greaterspellfocusevocation==true){SWD +="<tr><td valign=\"top\">Greater Spell Focus (Evocation)</td><td></td></tr>\r"}
if (has_greaterspellfocusillusion==true){SWD +="<tr><td valign=\"top\">Greater Spell Focus (Illusion)</td><td></td></tr>\r"}
if (has_greaterspellfocusnecromancy==true){SWD +="<tr><td valign=\"top\">Greater Spell Focus (Necromancy)</td><td></td></tr>\r"}
if (has_greaterspellfocustransmutation==true){SWD +="<tr><td valign=\"top\">Greater Spell Focus (Transmutation)</td><td></td></tr>\r"}
if (has_spellmastery>0){SWD +="<tr><td valign=\"top\">Spell Mastery x" + has_spellmastery + "</td><td>No spellbook required.  Spells:</td></tr>\r"}
if (has_spellpenetration==true){SWD +="<tr><td valign=\"top\">Spell Penetration</td><td>+2 to beat spell resistance</td></tr>\r"}
if (has_greaterspellpenetration==true){SWD +="<tr><td valign=\"top\">Greater Spell Penetration</td><td>+2 to beat spell resistance</td></tr>\r"}
if (has_stealthy==true){SWD +="<tr><td valign=\"top\">Stealthy</td><td></td></tr>\r"}
if (has_stepup==true){SWD +="<tr><td valign=\"top\">Step Up</td><td>Take 5 foot step as immediate action</td></tr>\r"}
if (has_strikeback==true){SWD +="<tr><td valign=\"top\">Strike Back</td><td>Reach attack against any opponent who may use superior reach to attack you</td></tr>\r"}
if (has_throwanything==true){SWD +="<tr><td valign=\"top\">Throw Anything</td><td>No penalty on improvised ranged weapons</td></tr>\r"}
if (has_toughness==true){SWD +="<tr><td valign=\"top\">Toughness</td><td>+3 hp + 1/level over 3</td></tr>\r"}
if ((has_twoweaponfighting==true)|(has_twoweaponfighting==true)){SWD +="<tr><td valign=\"top\">Two-Weapon Fighting</td><td>Reduce 2-weapon fighting penalties</td></tr>\r"}
if ((has_twoweapondefense==true)|(has_twoweapondefense==true)){SWD +="<tr><td valign=\"top\">Two-Weapon Defense</td><td>+1 shield bonus if fighting with two weapons</td></tr>\r"}
if ((has_improvedtwoweaponfighting==true)|(has_improvedtwoweaponfighting==true)){SWD +="<tr><td valign=\"top\">Improved Two-Weapon Fighting</td><td>Additional off-hand attack</td></tr>\r"}
if ((has_greatertwoweaponfighting==true)|(has_greatertwoweaponfighting==true)){SWD +="<tr><td valign=\"top\">Greater Two-Weapon Fighting</td><td>Additional off-hand attack</td></tr>\r"}
if ((has_weaponfinesse==true)){SWD +="<tr><td valign=\"top\">Weapon Finesse </td><td></td></tr>\r"}
if ((has_otherfeat1==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_1.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_otherfeat2==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_2.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_otherfeat3==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_3.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_otherfeat4==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_4.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_otherfeat5==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_5.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_otherfeat6==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_6.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_otherfeat7==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_7.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_otherfeat8==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_8.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_otherfeat9==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_9.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_otherfeat10==true)){SWD +="<tr><td valign=\"top\">" + document.form1.other_feat_10.value + "</td><td>[hand-edit as needed]</td></tr>\r"}
if ((has_weaponfocus>0)){SWD +="<tr><td valign=\"top\">Weapon Focus x" + has_weaponfocus + "</td><td>+1 to hit; Weapon(s):</td></tr>\r"}
//if ((has_war_domain==true)){SWD +="<tr><td valign=\"top\">Weapon Focus</td><td>[war domain, sect weapon]</td></tr>\r"}
if ((has_weaponspecialization>0)){SWD +="<tr><td valign=\"top\">Weapon Specialization x" + has_weaponspecialization + "</td><td>+2 damage; Weapon(s):</td></tr>\r"}
if ((has_greaterweaponfocus>0)){SWD +="<tr><td valign=\"top\">Greater Weapon Focus x" + has_greaterweaponfocus + "</td><td>Additional +2 to hit; Weapon(s):</td></tr>\r"}
if ((has_greaterweaponspecialization>0)){SWD +="<tr><td valign=\"top\">Greater Weapon Specialization x" + has_greaterweaponspecialization + "</td><td>Additional +2 damage; Weapon(s):</td></tr>\r"}
if (has_brewpotion==true){SWD +="<tr><td valign=\"top\">Brew Potion</td><td></td></tr>\r"}
if (has_craftmaa==true){SWD +="<tr><td valign=\"top\">Craft Magic Arms and Armor</td><td></td></tr>\r"}
if (has_craftrod==true){SWD +="<tr><td valign=\"top\">Craft Rod</td><td></td></tr>\r"}
if (has_craftstaff==true){SWD +="<tr><td valign=\"top\">Craft Staff</td><td></td></tr>\r"}
if (has_craftwand==true){SWD +="<tr><td valign=\"top\">Craft Wand</td><td></td></tr>\r"}
if (has_craftwondrousitem==true){SWD +="<tr><td valign=\"top\">Craft Wondrous Item</td><td></td></tr>\r"}
if (has_forgering==true){SWD +="<tr><td valign=\"top\">Forge Ring</td><td></td></tr>\r"}
if (has_scribescroll==true){SWD +="<tr><td valign=\"top\">Scribe Scroll</td><td></td></tr>\r"}
if (wizard_levels>0){SWD +="<tr><td valign=\"top\">Scribe Scroll</td><td>[free to wizard]</td></tr>\r"}
if (has_empowerspell==true){SWD +="<tr><td valign=\"top\">Empower Spell</td><td></td></tr>\r"}
if (has_enlargespell==true){SWD +="<tr><td valign=\"top\">Enlarge Spell</td><td></td></tr>\r"}
if (has_extendspell==true){SWD +="<tr><td valign=\"top\">Extend Spell</td><td></td></tr>\r"}
if (has_heightenspell==true){SWD +="<tr><td valign=\"top\">Heighten Spell</td><td></td></tr>\r"}
if (has_maximizespell==true){SWD +="<tr><td valign=\"top\">Maximize Spell</td><td></td></tr>\r"}
if (has_quickenspell==true){SWD +="<tr><td valign=\"top\">Quicken Spell</td><td></td></tr>\r"}
if (has_silentspell==true){SWD +="<tr><td valign=\"top\">Silent Spell</td><td></td></tr>\r"}
if (has_stillspell==true){SWD +="<tr><td valign=\"top\">Still Spell</td><td></td></tr>\r"}
if (has_widenspell==true){SWD +="<tr><td valign=\"top\">Widen Spell</td><td></td></tr>\r"}

if (has_alignmentchannel){SWD+="<tr><td valign=\"top\">Alignment Channel</td><td>Channeled energy can heal / harm outsiders</td></tr>\r"}
if (has_arcanearmortraining){SWD+="<tr><td valign=\"top\">Arcane Armor Training</td><td>Reduce chance of arcane spell failure by 10%</td></tr>\r"}
if (has_arcanearmormastery){SWD+="<tr><td valign=\"top\">Arcane Armor Mastery</td><td>Reduce chance of arcane spell failure by 20%</td></tr>\r"}
if (has_catchoffguard){SWD+="<tr><td valign=\"top\">Catch Off Guard</td><td>No penalties for improvised melee weapons</td></tr>\r"}
if (has_channelsmite){SWD+="<tr><td valign=\"top\">Channel Smite</td><td>Attack channels energy</td></tr>\r"}
if (has_greaterdisarm){SWD+="<tr><td valign=\"top\">Greater Disarm</td><td>Disarmed weapons are knocked away</td></tr>\r"}
if (has_greaterfeint){SWD+="<tr><td valign=\"top\">Greater Feint</td><td>Enemies you feint lose dexterity bonus for a round</td></tr>\r"}
if (has_greatertrip){SWD+="<tr><td valign=\"top\">Greater Trip</td><td>Get attack of opportunity against enemies you trip</td></tr>\r"}
if (has_standstill){SWD+="<tr><td valign=\"top\">Stand Still</td><td>You can stop enemies from moving past you</td></tr>\r"}
if (has_commandundead){SWD+="<tr><td valign=\"top\">Command Undead</td><td>Use channel energy to try to enslave up to you HD in undead</td></tr>\r"}
if (has_criticalfocus){SWD+="<tr><td valign=\"top\">Critical Focus</td><td>+4 on rolls to confirm a critical hit</td></tr>\r"}
if (has_bleedingcritical){SWD+="<tr><td valign=\"top\">Bleeding Critical</td><td>Critical hit causes 2d6 bleeding</td></tr>\r"}
if (has_blindingcritical){SWD+="<tr><td valign=\"top\">Blinding Critical</td><td>Critical hit blinds the target</td></tr>\r"}
if (has_criticalmastery){SWD+="<tr><td valign=\"top\">Critical Mastery</td><td>Can use two effects on your critical hits</td></tr>\r"}
if (has_deafeningcritical){SWD+="<tr><td valign=\"top\">Deafening Critical</td><td>Critical hit deafens the target</td></tr>\r"}
if (has_sickeningcritical){SWD+="<tr><td valign=\"top\">Sickening Critical</td><td>Critical hit sickens the target</td></tr>\r"}
if (has_staggeringcritical){SWD+="<tr><td valign=\"top\">Staggering Critical</td><td>Critical hit staggers the target</td></tr>\r"}
if (has_stunningcritical){SWD+="<tr><td valign=\"top\">Stunning Critical</td><td>Critical hit stuns the target</td></tr>\r"}
if (has_tiringcritical){SWD+="<tr><td valign=\"top\">Tiring Critical</td><td>Critical hit tires the target</td></tr>\r"}
if (has_exhaustingcritical){SWD+="<tr><td valign=\"top\">Exhausting Critical</td><td>Critical hit exhausts the target</td></tr>\r"}
if (has_deadlyaim){SWD+="<tr><td valign=\"top\">Deadly Aim</td><td>Reduce ranged attack roll to increase damage</td></tr>\r"}
if (has_defensivecombattraining){SWD+="<tr><td valign=\"top\">Defensive Combat Training</td><td>Use total levels as base attack bonus for CMD</td></tr>\r"}
if (has_disruptive){SWD+="<tr><td valign=\"top\">Disruptive</td><td>Higher DC to cast spells adjacent to you</td></tr>\r"}
if (has_spellbreaker){SWD+="<tr><td valign=\"top\">Spellbreaker</td><td>Attack of opportunity against enemies whose spells fail</td></tr>\r"}
if (has_windstance){SWD+="<tr><td valign=\"top\">Wind Stance</td><td>20% concealment if you move</td></tr>\r"}
if (has_lightningstance){SWD+="<tr><td valign=\"top\">Lightning Stance</td><td>50% concealment if you move</td></tr>\r"}
if (has_elementalchannel){SWD+="<tr><td valign=\"top\">Elemental Channel</td><td>Harm / heal elementals</td></tr>\r"}
if (has_fleet){SWD+="<tr><td valign=\"top\">Fleet</td><td>Add 5 feet to base speed</td></tr>\r"}
if (has_improvedgreatfortitude){SWD+="<tr><td valign=\"top\">Improved Great Fortitude</td><td>Re-roll a fortitude save once a day</td></tr>\r"}
if (has_improvedchannel){SWD+="<tr><td valign=\"top\">Improved Channel</td><td>+2 bonus on DC for enemy saves</td></tr>\r"}
if (has_improvedfamiliar){SWD+="<tr><td valign=\"top\">Improved Familiar</td><td></td></tr>\r"}
if (has_greatergrapple){SWD+="<tr><td valign=\"top\">Greater Grapple</td><td>Maintaining grapple is a move action</td></tr>\r"}
if (has_scorpionstyle){SWD+="<tr><td valign=\"top\">Scorpion Style</td><td>Slow target to speed of five feet</td></tr>\r"}
if (has_gorgonsfist){SWD+="<tr><td valign=\"top\">Gorgon's Fist</td><td>Stagger a foe whose speed is reduced</td></tr>\r"}
if (has_medusaswrath){SWD+="<tr><td valign=\"top\">Medusa's Wrath</td><td>Get 2 extra attacks vs. hindered foe</td></tr>\r"}
if (has_improvisedweaponmastery){SWD+="<tr><td valign=\"top\">Improvised Weapon Mastery</td><td>Increase damage from improvised weapon</td></tr>\r"}
if (has_intimidatingprowess){SWD+="<tr><td valign=\"top\">Intimidating Prowess</td><td></td></tr>\r"}
if (has_improvedironwill){SWD+="<tr><td valign=\"top\">Improved Iron Will</td><td>Re-roll a will save once a day</td></tr>\r"}
if (has_improvedlightningreflexes){SWD+="<tr><td valign=\"top\">Improved Lightning Reflexes</td><td>Re-roll a reflex save once a day</td></tr>\r"}
if (has_lunge){SWD+="<tr><td valign=\"top\">Lunge</td><td>-2 on AC to gain extra five feet reach</td></tr>\r"}
if (has_mastercraftsman){SWD+="<tr><td valign=\"top\">Master Craftsman</td><td>Make magic arms, armor, wondrous items</td></tr>\r"}
if (has_unseat){SWD+="<tr><td valign=\"top\">Unseat</td><td>Knock opponents off mount</td></tr>\r"}
if (has_nimblemoves){SWD+="<tr><td valign=\"top\">Nimble Moves</td><td>Ignore five feet of diffficult terrain</td></tr>\r"}
if (has_acrobaticsteps){SWD+="<tr><td valign=\"top\">Acrobatic Steps</td><td>Ignore twenty feet of difficult terran</td></tr>\r"}
if (has_pinpointtargeting){SWD+="<tr><td valign=\"top\">Pinpoint Targeting</td>As a standard action, shoot one arrow, ignores opponent armor, natural armor and shield<td></td></tr>\r"}
if (has_greaterbullrush){SWD+="<tr><td valign=\"top\">Greater Bull Rush</td><td>Enemies you bullrush provoke attacks of opportunity</td></tr>\r"}
if (has_greateroverrun){SWD+="<tr><td valign=\"top\">Greater Overrun</td><td>Enemies you overrun provoke attacks of opportunity</td></tr>\r"}
if (has_greatersunder){SWD+="<tr><td valign=\"top\">Greater Sunder</td><td>Damage from sunder can be used instead to destroy weapon / armor</td></tr>\r"}
if (has_selectivechanneling){SWD+="<tr><td valign=\"top\"><font face=\"Arial\"Selective Channeling</td><td>Decide who to affect and not affect</td></tr>\r"}
if (has_shieldslam){SWD+="<tr><td valign=\"top\">Shield Slam</td><td>Free bull rush with bash attack</td></tr>\r"}
if (has_shieldmaster){SWD+="<tr><td valign=\"top\">Shield Master</td><td>No two-hand penalty if attacking with shield</td></tr>\r"}
if (has_shieldfocus){SWD+="<tr><td valign=\"top\">Shield Focus</td><td>+1 on AC when using shieild</td></tr>\r"}
if (has_greatershieldfocus){SWD+="<tr><td valign=\"top\">Greater Shield Focus</td><td>+1 on AC when using shieild</td></tr>\r"}
if (has_turnundead){SWD+="<tr><td valign=\"top\">Turn Undead</td><td>Positive energy can make undead flee</td></tr>\r"}
if (has_doubleslice){SWD+="<tr><td valign=\"top\">Double Slice</td><td>Add strength bonus to off-hand damage</td></tr>\r"}
if (has_twoweaponrend){SWD+="<tr><td valign=\"top\">Two Weapon Rend</td><td>If hit by both weapons, foe is rended</td></tr>\r"}
if (has_vitalstrike){SWD+="<tr><td valign=\"top\">Vital Strike</td><td>One attack, roll the damage dice x2</td></tr>\r"}
if (has_improvedvitalstrike){SWD+="<tr><td valign=\"top\">Improved Vital Strike</td><td>One attack, roll the damage dice x3</td></tr>\r"}
if (has_greatervitalstrike){SWD+="<tr><td valign=\"top\">Greater Vital Strike</td><td>One attack, roll the damage dice x4</td></tr>\r"}
if (has_dazzlingdisplay){SWD+="<tr><td valign=\"top\">Dazzling Display</td><td>Using focus weapon, intimidate all in 30 feet</td></tr>\r"}
if (has_shatterdefenses){SWD+="<tr><td valign=\"top\">Shatter Defenses</td><td>Using focus weapon, hindered foes are flat-footed`</td></tr>\r"}
if (has_deadlystroke){SWD+="<tr><td valign=\"top\">Deadly Stroke</td><td>Using focus weapon, do double damage plus 1 point of constitution loss from bleeding</td></tr>\r"}
if (has_penetratingstrike){SWD+="<tr><td valign=\"top\">Penetrating Strike</td><td>Using focus weapon, ignore five points of damage reduction</td></tr>\r"}
if (has_greaterpenetratingstrike){SWD+="<tr><td valign=\"top\">Greater Penetrating Strike</td><td>Using focus weapon, ignore ten points of damage reduction</td></tr>\r"}



SWD +="</table>\r</ul><p>\r"


SWD +="<table>"
SWD +="<tr> <td><center><i>Skill Name</i></center></td> <td><center><i>Key<br>Ability</td> <td><center><i>Skill<br>Modifier</td><td><center><i>Ability<br>Modifier</td> <td><center><i>Ranks</td> <td><center><i>Misc.<br>Modifier</td></tr>\r"


x=modifier_number(dexterity) + acrobatics + armor_check_penalty + shield_check_penalty;
if ((document.form1.acrobatics_ics.checked)&(acrobatics>0)){x+=3;}
if (monkey_familiar==true){x+=3}
if (has_acrobatic){x+=2}
if (rayce==6){x+=2}
if (has_skillfocusacrobatics==true){x=x + 3; if (acrobatics>=10){x+=3;}}
SWD +="<tr> <td>Acrobatics</td> <td>Dex<sup>*</sup></td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(dexterity) + "</td><td>"
if (acrobatics>0){SWD +=" + " + acrobatics; }
SWD +="</td> <td>"
if ((document.form1.acrobatics_ics.checked)&(acrobatics>0)){SWD +="  + 3 [class skill] "}
if (monkey_familiar==true){SWD +="  + 3 [monkey] "}
if (has_acrobatic){SWD +="  + 2 [acrobatic] "}
if (rayce==6){SWD +="  + 2 [halfling] "}
if (has_skillfocusacrobatics==true){SWD +="  + "+SixOrThree(acrobatics)+" [skill focus] "}
if (armor_check_penalty!=0){SWD+=armor_check_penalty+" [armor] ";}
if (shield_check_penalty!=0){SWD+=shield_check_penalty+" [shield] ";}
SWD +="</td></tr>\r"





x=modifier_number(intelligence) + appraise; 
if ((document.form1.appraise_ics.checked)&(appraise>0)){x+=3;}
if (raven_familiar==true){x=x + 2; }
if (has_skillfocusappraise==true){x=x + 3;  if (appraise>=10){x+=3;}}
SWD +="<tr> <td>Appraise</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (appraise>0){SWD +=" + " + appraise}; 
SWD +="</td> <td>"
if ((document.form1.appraise_ics.checked)&(appraise>0)){SWD +="  + 3 [class skill] "}
if (raven_familiar==true){SWD +="  + 2 [raven] "}
if (has_skillfocusappraise==true){SWD +="  + "+SixOrThree(appraise)+" [skill focus] "}
SWD +="</td></tr>\r"




x=modifier_number(charisma) + bluff; 
if ((document.form1.bluff_ics.checked)&(bluff>0)){x+=3;}
if (snake_familiar==true){x=x + 3; }
if (rayce==33){x=x + 2; }
if (rayce==9){x=x + 2; }
if (has_deceitful){x+=2;}
if (wizard_specialty_name=="Enchanter"){x+=TwoToSix(wizard_levels);}
if (has_persuasive==true){x=x + 2; }
if (has_skillfocusbluff==true){x=x + 3;  if (bluff>=10){x+=3;}}
SWD +="<tr> <td>Bluff</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (bluff>0){SWD +=" + " + bluff; }
SWD +="</td> <td>"
if ((document.form1.bluff_ics.checked)&(bluff>0)){SWD +="  + 3 [class skill] "}
if (snake_familiar==true){SWD +="  + 3 [snake] "}
if (has_persuasive==true){SWD +="  + 2 [persuasive] "}
if (rayce==33){SWD +="  + 2 [tiefling] "}
if (rayce==9){SWD +="  + 2 [dhampir] "}
if (has_deceitful==true){SWD+=" +2 [deceitful] "}
if (wizard_specialty_name=="Enchanter"){SWD+="<font face=\"Arial\" +"+TwoToSix(wizard_levels)+" [enchanter] ";}
if (has_skillfocusbluff==true){SWD +="  + "+SixOrThree(bluff)+" [skill focus] "}
SWD +="</td></tr>\r"

x=modifier_number(strength) + climb + armor_check_penalty + shield_check_penalty; 
if ((document.form1.climb_ics.checked)&(climb>0)){x+=3;}
if (rayce==6){x=x + 2; }
if (has_athletic){x=x + 2; }
if (lizard_familiar==true){x=x + 3; }
if (has_skillfocusclimb==true){x=x + 3;  if (climb>=10){x+=3;}}
SWD +="<tr> <td>Climb</td> <td>Str<sup>*</sup></td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(strength) + "</td> <td>"
if (climb>0){SWD +=" + " + climb; }
SWD +="</td> <td>"
if ((document.form1.climb_ics.checked)&(climb>0)){SWD +="  + 3 [class skill] "}
if (rayce==6){SWD +="  + 2 [halfling] "}
if (has_athletic){SWD +="  + 2 [athletic] "}
if (lizard_familiar==true){SWD +="  + 3 [lizard] "}
if (has_skillfocusclimb==true){SWD +="  + "+SixOrThree(climb)+" [skill focus] "}
if (armor_check_penalty!=0){SWD+=armor_check_penalty+" [armor] ";}
if (shield_check_penalty!=0){SWD+=shield_check_penalty+" [shield] ";}
SWD +="</td></tr>\r"

x=modifier_number(intelligence) + craft_1; 
if ((document.form1.craft_1_ics.checked)&(craft_1>0)){x+=3;}
if (has_skillfocuscraft_1==true){x=x + 3;  if (craft_1>=10){x+=3;}}
SWD +="<tr> <td>Craft_1</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (craft_1>0){SWD +=" + " + craft_1; }
SWD +="</td> <td>"
if ((document.form1.craft_1_ics.checked)&(craft_1>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocuscraft_1==true){SWD +="  + "+SixOrThree(craft_1)+" [skill focus] "}
SWD +="</td></tr>\r"


x=modifier_number(intelligence) + craft_2; 
if ((document.form1.craft_2_ics.checked)&(craft_2>0)){x+=3;}
if (has_skillfocuscraft_2==true){x=x + 3;  if (craft_2>=10){x+=3;}}
SWD +="<tr> <td>Craft_2</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (craft_2>0){SWD +=" + " + craft_2; }
SWD +="</td> <td>"
if ((document.form1.craft_2_ics.checked)&(craft_2>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocuscraft_2==true){SWD +="  + "+SixOrThree(craft_2)+" [skill focus] "}
SWD +="</td></tr>\r"


x=modifier_number(intelligence) + craft_3; 
if ((document.form1.craft_3_ics.checked)&(craft_3>0)){x+=3;}
if (has_skillfocuscraft_3==true){x=x + 3;  if (craft_3>=10){x+=3;} }
SWD +="<tr> <td>Craft_3</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (craft_3>0){SWD +=" + " + craft_3; }
SWD +="</td> <td>"
if ((document.form1.craft_3_ics.checked)&(craft_3>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocuscraft_3==true){SWD +="  + "+SixOrThree(craft_3)+" [skill focus] "}
SWD +="</td></tr>\r"




x=modifier_number(charisma) + diplomacy; 
if ((document.form1.diplomacy_ics.checked)&(diplomacy>0)){x+=3;}
if (rayce==2){x=x + 2; }
if (rayce==28){x=x + 2; }
if (wizard_specialty_name=="Enchanter"){x+=TwoToSix(wizard_levels);}
if (has_skillfocusdiplomacy==true){x=x + 3;  if (diplomacy>=10){x+=3;}}
SWD +="<tr> <td>Diplomacy</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (diplomacy>0){SWD +=" + " + diplomacy; }
SWD +="</td> <td>"
if ((document.form1.diplomacy_ics.checked)&(diplomacy>0)){SWD +="  + 3 [class skill] "}
if (rayce==2){SWD +="  + 2 [half-elf] "}
if (rayce==28){SWD +="  + 2 [aasimar] "}
if (wizard_specialty_name=="Enchanter"){SWD+="<font face=\"Arial\" +"+TwoToSix(wizard_levels)+" [enchanter] ";}
if (has_skillfocusdiplomacy==true){SWD +="  + "+SixOrThree(diplomacy)+" [skill focus] "}
SWD +="</td></tr>\r"

if ((disabledevice>0)|(bard_levels>=10)){
x=modifier_number(dexterity) + disabledevice; 
if ((document.form1.disabledevice_ics.checked)&(disabledevice>0)){x+=3;}
if (has_skillfocusdisabledevice==true){x=x + 3;  if (disabledevice>=10){x+=3;}}
if (has_defthands==true){x=x + 2; }
SWD +="<tr> <td>Disable Device</td> <td>Dex</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(dexterity) + "</td> <td>"
if (disabledevice>0){SWD +=" + " + disabledevice; }
SWD +="</td> <td>"
if ((document.form1.disabledevice_ics.checked)&(disabledevice>0)){SWD +="  + 3 [class skill] "}
if (disabledevice==0){SWD +="[cannot use untrained] "}
if (has_defthands){SWD +="  + 2 [deft hands] "}
if (has_skillfocusdisabledevice==true){SWD +="  + "+SixOrThree(disabledevice)+" [skill focus] "}
SWD +="</td></tr>\r"}

x=modifier_number(charisma) + disguise;
if ((document.form1.disguise_ics.checked)&(disguise>0)){x+=3;}
if (has_deceitful){x+=2;}
if (has_skillfocusdisguise==true){x=x + 3;  if (disguise>=10){x+=3;}}
SWD +="<tr> <td>Disguise</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (disguise>0){SWD +=" + " + disguise; }
SWD +="</td> <td>"
if ((document.form1.disguise_ics.checked)&(disguise>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocusdisguise==true){SWD +="  + "+SixOrThree(disguise)+" [skill focus] "}
if (has_deceitful==true){SWD+=" +2 [deceitful] "}
SWD +="</td></tr>\r"

x=modifier_number(dexterity) + escapeartist + armor_check_penalty + shield_check_penalty; 
if ((document.form1.escapeartist_ics.checked)&(escapeartist>0)){x+=3;}
if (has_skillfocusescapeartist==true){x=x + 3;  if (escapeartist>=10){x+=3;}}
SWD +="<tr> <td>Escape Artist</td> <td>Dex<sup>*</sup></td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(dexterity) + "</td> <td>"
if (escapeartist>0){SWD +=" + " + escapeartist; }
SWD +="</td> <td>"
if ((document.form1.escapeartist_ics.checked)&(escapeartist>0)){SWD +="  + 3 [class skill] "}
if (armor_check_penalty!=0){SWD+=armor_check_penalty+" [armor] ";}
if (shield_check_penalty!=0){SWD+=shield_check_penalty+" [shield] ";}
if (has_skillfocusescapeartist==true){SWD +="  + "+SixOrThree(escapeartist)+" [skill focus] "}
SWD +="</td></tr>\r"

x=modifier_number(dexterity) + fly + armor_check_penalty + shield_check_penalty; 
if ((document.form1.fly_ics.checked)&(fly>0)){x+=3;}
if (bat_familiar==true){x=x + 3; }
if (has_acrobatic==true){x=x + 2; }
if (has_skillfocusfly==true){x=x + 3;  if (fly>=10){x+=3;}}
SWD +="<tr> <td>Fly</td> <td>Dex<sup>*</sup></td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(dexterity) + "</td> <td>"
if (fly>0){SWD +=" + " + fly; }
SWD +="</td> <td>"
if ((document.form1.fly_ics.checked)&(fly>0)){SWD +="  + 3 [class skill] "}
if (bat_familiar==true){SWD +="  + 3 [bat] "}
if (has_acrobatic){SWD +="  + 2 [acrobatic] "}
if (armor_check_penalty!=0){SWD+=armor_check_penalty+" [armor] ";}
if (shield_check_penalty!=0){SWD+=shield_check_penalty+" [shield] ";}
if (has_skillfocusfly==true){SWD +="  + "+SixOrThree(fly)+" [skill focus] "}
SWD +="</td></tr>\r"



if ((handleanimal>0)|(bard_levels>10)){
x=modifier_number(charisma) + handleanimal; 
if ((document.form1.handleanimal_ics.checked)&(handleanimal>0)){x+=3;}
if (has_animalaffinity==true){x=x + 2; }
if (has_skillfocushandleanimal==true){x=x + 3; if (handleanimal>=10){x+=3;} }
SWD +="<tr> <td>Handle Animal</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (handleanimal>0){SWD +=" + " + handleanimal; }
SWD +="</td> <td>"
if ((document.form1.handleanimal_ics.checked)&(handleanimal>0)){SWD +="  + 3 [class skill] "}
if (handleanimal==0){SWD +="[cannot use untrained] "}
if (has_animalaffinity==true){SWD +="  + 2 [animal affinity] "}
if (has_skillfocushandleanimal==true){SWD +="  + "+SixOrThree(handleanimal)+" [skill focus] "}
SWD +="</td></tr>\r"}

x=modifier_number(wisdom) + heal; 
if ((document.form1.heal_ics.checked)&(heal>0)){x+=3;}
if (has_selfsufficient==true){x=x + 2; }
if (has_skillfocusheal==true){x=x + 3;  if (heal>=10){x+=3;}}
SWD +="<tr> <td>Heal</td> <td>Wis</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(wisdom) + "</td> <td>"
if (heal>0){SWD +=" + " + heal; }
SWD +="</td> <td>"
if ((document.form1.heal_ics.checked)&(heal>0)){SWD +="  + 3 [class skill] "}
if (has_selfsufficient){SWD +="  + 2 [self-sufficient] "}
if (has_skillfocusheal==true){SWD +="  + "+SixOrThree(heal)+" [skill focus] "}
SWD +="</td></tr>\r"





x=modifier_number(charisma) + intimidate; 
if (has_intimidatingprowess){x+=modifier_number(strength);}
if ((document.form1.intimidate_ics.checked)&(intimidate>0)){x+=3;}
if (has_persuasive==true){x=x + 2; }
if (rayce==7){x=x + 2; }
if (wizard_specialty_name=="Enchanter"){x+=TwoToSix(wizard_levels);}
if (has_skillfocusintimidate==true){x=x + 3;  if (intimidate>=10){x+=3;}}
SWD +="<tr> <td>Intimidate</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (intimidate>0){SWD +=" + " + intimidate; }
SWD +="</td> <td>"
if ((document.form1.intimidate_ics.checked)&(intimidate>0)){SWD +="  + 3 [class skill] "}
if (has_persuasive==true){SWD +="  + 2 [persuasive] "}
if (rayce==7){SWD +="  + 2 [half-orc] "}
if (has_intimidatingprowess){SWD+=" + "+modifier_number(strength)+" [intimidating prowess]"}
if (wizard_specialty_name=="Enchanter"){SWD+="<font face=\"Arial\" +"+TwoToSix(wizard_levels)+" [enchanter] ";}
if (has_skillfocusintimidate==true){SWD +="  + "+SixOrThree(intimidate)+" [skill focus] "}
SWD +="</td></tr>\r"


if ((knowledgearcana>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgearcana + BardKnow(); 
if ((document.form1.knowledgearcana_ics.checked)&(knowledgearcana>0)){x+=3;}
if (has_skillfocusknowledgearcana==true){x=x + 3;  if (knowledgearcana>=10){x+=3;}}
SWD +="<tr> <td>Knowledge (arcana)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (knowledgearcana>0){SWD +=" + "  +  knowledgearcana; }
SWD +="</td> <td>"
if ((document.form1.knowledgearcana_ics.checked)&(knowledgearcana>0)){SWD +="  + 3 [class skill] "}
if (knowledgearcana==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgearcana==true){SWD +="  + "+SixOrThree(knowledgearcana)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}


if ((knowledgedungeoneering>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgedungeoneering + BardKnow(); 
if ((document.form1.knowledgedungeoneering_ics.checked)&(knowledgedungeoneering>0)){x+=3; if (knowledgedungeoneering>=10){x+=3;}}
if (has_skillfocusknowledgedungeoneering==true){x=x + 3; }
SWD +="<tr> <td> Knowledge (dungeoneering)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (knowledgedungeoneering>0){SWD +=" + "  +  knowledgedungeoneering; }
SWD +="</td> <td>"
if ((document.form1.knowledgedungeoneering_ics.checked)&(knowledgedungeoneering>0)){SWD +="  + 3 [class skill] "}
if (knowledgedungeoneering==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgedungeoneering==true){SWD +="  + "+SixOrThree(knowledgedungeoneering)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}

if ((knowledgeengineering>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgeengineering + BardKnow(); 
if ((document.form1.knowledgeengineering_ics.checked)&(knowledgeengineering>0)){x+=3;}
if (has_skillfocusknowledgeengineering==true){x=x + 3;  if (knowledgeengineering>=10){x+=3;}}
SWD +="<tr> <td> Knowledge (engineering)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td><td>"
if (knowledgeengineering>0){SWD +=" + "  +  knowledgeengineering; }
SWD +="</td> <td>"
if ((document.form1.knowledgeengineering_ics.checked)&(knowledgeengineering>0)){SWD +="  + 3 [class skill] "}
if (knowledgeengineering==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgeengineering==true){SWD +="  + "+SixOrThree(knowledgeengineering)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}



if ((knowledgegeography>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgegeography + BardKnow(); 
if ((document.form1.knowledgegeography_ics.checked)&(knowledgegeography>0)){x+=3;}
if (has_skillfocusknowledgegeography==true){x=x + 3;  if (knowledgegeography>=10){x+=3;}}
SWD +="<tr> <td> Knowledge (geography)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (knowledgegeography>0){SWD +=" + "  +  knowledgegeography; }
SWD +="</td> <td>"
if ((document.form1.knowledgegeography_ics.checked)&(knowledgegeography>0)){SWD +="  + 3 [class skill] "}
if (knowledgegeography==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgegeography==true){SWD +="  + "+SixOrThree(knowledgegeography)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}

if ((knowledgehistory>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgehistory + BardKnow(); 
if ((document.form1.knowledgehistory_ics.checked)&(knowledgehistory>0)){x+=3;}
if (has_skillfocusknowledgehistory==true){x=x + 3;  if (knowledgehistory>=10){x+=3;}}
SWD +="<tr> <td> Knowledge (history)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (knowledgehistory>0){SWD +=" + "  +  knowledgehistory; }
SWD +="</td> <td>"
if ((document.form1.knowledgehistory_ics.checked)&(knowledgehistory>0)){SWD +="  + 3 [class skill] "}
if (knowledgehistory==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgehistory==true){SWD +="  + "+SixOrThree(knowledgehistory)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}

if ((knowledgelocal>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgelocal + BardKnow(); 
if ((document.form1.knowledgelocal_ics.checked)&(knowledgelocal>0)){x+=3;}
if (has_skillfocusknowledgelocal==true){x=x + 3;  if (knowledgelocal>=10){x+=3;} }
SWD +="<tr> <td> Knowledge (local)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (knowledgelocal>0){SWD +=" + "  +  knowledgelocal; }
SWD +="</td> <td>"
if ((document.form1.knowledgelocal_ics.checked)&(knowledgelocal>0)){SWD +="  + 3 [class skill] "}
if (knowledgelocal==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgelocal==true){SWD +="  + "+SixOrThree(knowledgelocal)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}

if ((knowledgenature>0)|(druid_levels>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgenature + BardKnow(); 
if ((document.form1.knowledgenature_ics.checked)&(knowledgenature>0)){x+=3;}
if (has_skillfocusknowledgenature==true){x=x + 3;  if (knowledgenature>=10){x+=3;}}
SWD +="<tr> <td> Knowledge (nature)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (knowledgenature>0){SWD +=" + "  +  knowledgenature; }
SWD +="</td> <td>"
if ((document.form1.knowledgenature_ics.checked)&(knowledgenature>0)){SWD +="  + 3 [class skill] "}
if (knowledgenature==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgenature==true){SWD +="  + "+SixOrThree(knowledgenature)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}

if ((knowledgenobility>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgenobility + BardKnow(); 
if ((document.form1.knowledgenobility_ics.checked)&(knowledgenobility>0)){x+=3;}
if (has_skillfocusknowledgenobility==true){x=x + 3;  if (knowledgenobility>=10){x+=3;}}
SWD +="<tr> <td> Knowledge (nobility)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (knowledgenobility>0){SWD +=" + "  +  knowledgenobility; }
SWD +="</td> <td>"
if ((document.form1.knowledgenobility_ics.checked)&(knowledgenobility>0)){SWD +="  + 3 [class skill] "}
if (knowledgenobility==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgenobility==true){SWD +="  + "+SixOrThree(knowledgenobility)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}

if ((knowledgeplanes>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgeplanes + BardKnow(); 
if ((document.form1.knowledgeplanes_ics.checked)&(knowledgeplanes>0)){x+=3; if (knowledgeplanes>=10){x+=3;}}
if (has_skillfocusknowledgeplanes==true){x=x + 3; }
SWD +="<tr> <td> Knowledge (planes)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (knowledgeplanes>0){SWD +=" + "  +  knowledgeplanes; }
SWD +="</td> <td>"
if ((document.form1.knowledgeplanes_ics.checked)&(knowledgeplanes>0)){SWD +="  + 3 [class skill] "}
if (knowledgeplanes==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgeplanes==true){SWD +="  + "+SixOrThree(knowledgeplanes)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}





if ((knowledgereligion>0)|(bard_levels>0)){
x=modifier_number(intelligence)  +  knowledgereligion + BardKnow(); 
if ((document.form1.knowledgereligion_ics.checked)&(knowledgereligion>0)){x+=3; if (knowledgereligion>=10){x+=3;}}
if (has_skillfocusknowledgereligion==true){x=x + 3; }
SWD +="<tr> <td> Knowledge (religion)</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (knowledgereligion>0){SWD +=" + "  +  knowledgereligion; }
SWD +="</td> <td>"
if ((document.form1.knowledgereligion_ics.checked)&(knowledgereligion>0)){SWD +="  + 3 [class skill] "}
if (knowledgereligion==0){SWD +="[cannot use untrained] "}
if (has_skillfocusknowledgereligion==true){SWD +="  + "+SixOrThree(knowledgereligion)+" [skill focus] "}
if (bard_levels>0){SWD+=" + "+BardKnow()+" [bardic knowledge] "}
SWD +="</td></tr>\r"}


if ((linguistics>0)){
x=modifier_number(intelligence)  +  linguistics; 
if ((document.form1.linguistics_ics.checked)&(linguistics>0)){x+=3;}
if (has_skillfocuslinguistics==true){x=x + 3;  if (linguistics>=10){x+=3;}}
SWD +="<tr> <td>Linguistics</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (linguistics>0){SWD +=" + "  +  linguistics; }
SWD +="</td> <td>"
if ((document.form1.linguistics_ics.checked)&(linguistics>0)){SWD +="  + 3 [class skill] "}
if (linguistics==0){SWD +="[cannot use untrained] "}
if (has_skillfocuslinguistics==true){SWD +="  + "+SixOrThree(linguistics)+" [skill focus] "}
SWD +="</td></tr>\r"}







x=modifier_number(wisdom) + perception; 
if ((document.form1.perception_ics.checked)&(perception>0)){x+=3;}
if (rayce==3){x=x + 2; }
if (rayce==28){x=x + 2; }
if (rayce==5){x=x + 2; }
if (rayce==6){x=x + 2; }
if (rayce==9){x=x + 2; }
if (rayce==12){x=x + 2; }
if (has_alertness){x=x + 2; }
if (rayce==2){x=x + 2; }
if (has_skillfocusperception==true){x=x + 3;  if (perception>=10){x+=3;}}
SWD +="<tr> <td>Perception</td> <td>Wis</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(wisdom) + "</td> <td>"
if (perception>0){SWD +=" + " + perception; }
SWD +="</td> <td>"
if ((document.form1.perception_ics.checked)&(perception>0)){SWD +="  + 3 [class skill] "}
if (rayce==3){SWD +="  + 2 [elf] "}
if (rayce==28){SWD +="  + 2 [aasimar] "}
if (rayce==5){SWD +="  + 2 [gnome] "}
if (rayce==2){SWD +="  + 2 [half-elf] "}
if (rayce==6){SWD +="  + 2 [halfling] "}
if (rayce==9){SWD +="  + 2 [dhampir] "}
if (rayce==12){SWD +="  + 2 [drow] "}
if (has_alertness){SWD +="  + 2 [alertness] "}
if (has_skillfocusperception==true){SWD +="  + "+SixOrThree(perception)+" [skill focus] "}
SWD +="</td></tr>\r"




x=modifier_number(charisma) + perform_1; 
if ((document.form1.perform_1_ics.checked)&(perform_1>0)){x+=3;}
if (has_skillfocusperform_1==true){x=x + 3;  if (perform_1>=10){x+=3;}}
SWD +="<tr> <td>Perform_1</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (perform_1>0){SWD +=" + " + perform_1; }
SWD +="</td> <td>"
if ((document.form1.perform_1_ics.checked)&(perform_1>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocusperform_1==true){SWD +="  + "+SixOrThree(perform_1)+" [skill focus] "}
SWD +="</td></tr>\r"

x=modifier_number(charisma) + perform_2; 
if ((document.form1.perform_2_ics.checked)&(perform_2>0)){x+=3;}
if (has_skillfocusperform_2==true){x=x + 3;  if (perform_2>=10){x+=3;}}
SWD +="<tr> <td>Perform_2</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (perform_2>0){SWD +=" + " + perform_2; }
SWD +="</td> <td>"
if ((document.form1.perform_2_ics.checked)&(perform_2>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocusperform_2==true){SWD +="  + "+SixOrThree(perform_2)+" [skill focus] "}
SWD +="</td></tr>\r"

x=modifier_number(charisma) + perform_3; 
if ((document.form1.perform_3_ics.checked)&(perform_3>0)){x+=3;}
if (has_skillfocusperform_3==true){x=x + 3;  if (perform_3>=10){x+=3;}}
SWD +="<tr> <td>Perform_3</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (perform_3>0){SWD +=" + " + perform_3; }
SWD +="</td> <td>"
if ((document.form1.perform_3_ics.checked)&(perform_3>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocusperform_3==true){SWD +="  + "+SixOrThree(perform_3)+" [skill focus] "}
SWD +="</td></tr>\r"


x=modifier_number(charisma) + perform_4; 
if ((document.form1.perform_4_ics.checked)&(perform_4>0)){x+=3;}
if (has_skillfocusperform_4==true){x=x + 3;  if (perform_4>=10){x+=3;}}
SWD +="<tr> <td>Perform_4</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (perform_4>0){SWD +=" + " + perform_4; }
SWD +="</td> <td>"
if ((document.form1.perform_4_ics.checked)&(perform_4>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocusperform_4==true){SWD +="  + "+SixOrThree(perform_4)+" [skill focus] "}
SWD +="</td></tr>\r"


x=modifier_number(charisma) + perform_5; 
if ((document.form1.perform_5_ics.checked)&(perform_5>0)){x+=3;}
if (has_skillfocusperform_5==true){x=x + 3;  if (perform_5>=10){x+=3;}}
SWD +="<tr> <td>Perform_5</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (perform_5>0){SWD +=" + " + perform_5; }
SWD +="</td> <td>"
if ((document.form1.perform_5_ics.checked)&(perform_5>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocusperform_5==true){SWD +="  + "+SixOrThree(perform_5)+" [skill focus] "}
SWD +="</td></tr>\r"

if ((profession>0)|(bard_levels>=10)){
x=modifier_number(wisdom) + profession; 
if ((document.form1.profession_ics.checked)&(profession>0)){x+=3;}
if (has_skillfocusprofession==true){x=x + 3;  if (profession>=10){x+=3;}}
SWD +="<tr> <td>Profession</td> <td>Wis</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(wisdom) + "</td> <td>"
if (profession>0){SWD +=" + " + profession; }
SWD +="</td> <td>"
if ((document.form1.profession_ics.checked)&(profession>0)){SWD +="  + 3 [class skill] "}
if (profession==0){SWD +="[cannot use untrained] "}
if (has_skillfocusprofession==true){SWD +="  + "+SixOrThree(profession)+" [skill focus] "}
SWD +="</td></tr>\r"}

x=modifier_number(dexterity) + ride + armor_check_penalty +  shield_check_penalty; 
if ((document.form1.ride_ics.checked)&(ride>0)){x+=3;}
if (handleanimal>=5){x=x + 2; }
if (has_animalaffinity==true){x=x + 2; }
if (has_skillfocusride==true){x=x + 3;  if (ride>=10){x+=3;}}
SWD +="<tr> <td>Ride</td> <td>Dex<sup>*</sup></td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(dexterity) + "</td> <td>"
if (ride>0){SWD +=" + " + ride; }
SWD +="</td> <td>"
if ((document.form1.ride_ics.checked)&(ride>0)){SWD +="  + 3 [class skill] "}
if (handleanimal>=5){SWD +="  + 2 [handle animal] "}
if (has_animalaffinity==true){SWD +="  + 2 [animal affinity] "}
if (has_skillfocusride==true){SWD +="  + "+SixOrThree(ride)+" [skill focus] "}
if (armor_check_penalty!=0){SWD+=armor_check_penalty+" [armor] ";}
if (shield_check_penalty!=0){SWD+=shield_check_penalty+" [shield] ";}
SWD +="</td></tr>\r"


x=modifier_number(wisdom) + sensemotive; 
if ((document.form1.sensemotive_ics.checked)&(sensemotive>0)){x+=3;}
if (has_skillfocussensemotive==true){x=x + 3;  if (sensemotive>=10){x+=3;}}
if (has_alertness){x+=2}
SWD +="<tr> <td>Sense Motive</td> <td>Wis</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(wisdom) + "</td> <td>"
if (sensemotive>0){SWD +=" + " + sensemotive; }
SWD +="</td> <td>"
if ((document.form1.sensemotive_ics.checked)&(sensemotive>0)){SWD +="  + 3 [class skill] "}
if (has_skillfocussensemotive==true){SWD +="  + "+SixOrThree(sensemotive)+" [skill focus] "}
if (has_alertness){SWD +="  + 2 [alertness] "}
SWD +="</td></tr>\r"

if ((sleightofhand>0)|(bard_levels>=10)){
x=modifier_number(dexterity) + sleightofhand; 
if ((document.form1.sleightofhand_ics.checked)&(sleightofhand>0)){x+=3;}
if (has_defthands==true){x=x + 2; }
if (has_skillfocussleightofhand==true){x=x + 3;  if (sleightofhand>=10){x+=3;}}
SWD +="<tr> <td>Sleight of Hand</td> <td>Dex<sup>*</sup></td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(dexterity) + "</td> <td>"
if (sleightofhand>0){SWD +=" + " + sleightofhand; }
SWD +="</td> <td>"
if ((document.form1.sleightofhand_ics.checked)&(sleightofhand>0)){SWD +="  + 3 [class skill] "}
if (sleightofhand==0){SWD +="[cannot use untrained] "}
if (has_defthands){SWD +="  + 2 [deft hands] "}
if (has_skillfocussleightofhand==true){SWD +="  + "+SixOrThree(sleightofhand)+" [skill focus] "}
SWD +="</td></tr>\r"}



if ((spellcraft>0)|(bard_levels>=10)){
x=modifier_number(intelligence) + spellcraft; 
if ((document.form1.spellcraft_ics.checked)&(spellcraft>0)){x+=3;}
if (has_magicalaptitude==true){x=x + 2; }
if (has_skillfocusspellcraft==true){x=x + 3;  if (ride>=10){x+=3;}}
SWD +="<tr> <td>Spellcraft</td> <td>Int</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(intelligence) + "</td> <td>"
if (spellcraft>0){SWD +=" + " + spellcraft; }
SWD +="</td> <td>"
if ((document.form1.spellcraft_ics.checked)&(spellcraft>0)){SWD +="  + 3 [class skill] "}
if (spellcraft==0){SWD +="[cannot use untrained] "}
if (has_magicalaptitude){SWD +="  + 2 [magical aptitude] "}
if (has_skillfocusspellcraft==true){SWD +="  + "+SixOrThree(spellcraft)+" [skill focus] "}
SWD +="</td></tr>\r"}





x=modifier_number(dexterity) + stealth + armor_check_penalty + shield_check_penalty;
if ((document.form1.stealth_ics.checked)&(stealth>0)){x+=3;}
if (cat_familiar==true){x+=3;}
if (small==true){x=x + 4; }
if (has_skillfocusstealth==true){x=x + 3;  if (stealth>=10){x+=3;}}
if (has_stealthy==true){x=x + 2; }
if (rayce==33){x=x + 2; }
SWD +="<tr> <td>Stealth</td> <td>Dex<sup>*</sup></td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(dexterity) + "</td> <td>"
if (stealth>0){SWD +=" + " + stealth; }
SWD +="</td> <td>"
if ((document.form1.stealth_ics.checked)&(stealth>0)){SWD +="  + 3 [class skill] "}
if (cat_familiar==true){SWD +="  + 3 [cat] "}
if (small==true){SWD +="  + 4 [small] "}
if (armor_check_penalty!=0){SWD+=armor_check_penalty+" [armor] ";}
if (shield_check_penalty!=0){SWD+=shield_check_penalty+" [shield] ";}
if (has_skillfocusstealth==true){SWD +="  + "+SixOrThree(stealth)+" [skill focus] "}
if (has_stealthy){SWD +="  + 2 [stealthy] "}
if (rayce==33){SWD +="  + 2 [tiefling] "}
SWD +="</td></tr>\r"




x=modifier_number(wisdom) + survival; 
if ((document.form1.survival_ics.checked)&(survival>0)){x+=3;}
if (has_selfsufficient==true){x=x + 2; }
if (has_skillfocussurvival==true){x=x + 3;  if (survival>=10){x+=3;}}
SWD +="<tr> <td>Survival</td> <td>Wis</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(wisdom) + "</td> <td>"
if (survival>0){SWD +=" + " + survival; }
SWD +="</td> <td>"
if ((document.form1.survival_ics.checked)&(survival>0)){SWD +="  + 3 [class skill] "}
if (has_selfsufficient){SWD +="  + 2 [self-sufficient] "}
if (has_skillfocussurvival==true){SWD +="  + "+SixOrThree(survival)+" [skill focus] "}
SWD +="</td></tr>\r"



x=modifier_number(strength) + swim + armor_check_penalty + shield_check_penalty;
if ((document.form1.swim_ics.checked)&(swim>0)){x+=3;}
if (has_athletic==true){x=x + 2; }
if (has_skillfocusswim==true){x=x + 3;  if (swim>=10){x+=3;}}
SWD +="<tr> <td>Swim</td> <td>Str<sup>**</sup></td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(strength) + "</td> <td>"
if (swim>0){SWD +=" + " + swim; }
SWD +="</td> <td>"
if ((document.form1.swim_ics.checked)&(swim>0)){SWD +="  + 3 [class skill] "}
if (has_athletic){SWD +="  + 2 [athletic] "}
if (armor_check_penalty!=0){SWD+=armor_check_penalty+" [armor] ";}
if (shield_check_penalty!=0){SWD+=shield_check_penalty+" [shield] ";}
if (has_skillfocusswim==true){SWD +="  + "+SixOrThree(swim)+" [skill focus] "}
SWD +="</td></tr>\r"




if ((usemagicdevice>0)|(bard_levels>=10)){
x=modifier_number(charisma) + usemagicdevice; 
if ((document.form1.usemagicdevice_ics.checked)&(usemagicdevice>0)){x+=3;}
if (has_magicalaptitude==true){x=x + 2; }
if (has_skillfocususemagicdevice==true){x=x + 3;  if (usemagicdevice>=10){x+=3;}}
SWD +="<tr> <td>Use Magic Device</td> <td>Cha</td> <td align=\"right\">" + x + " = </td> <td><center>" + modifier_string(charisma) + "</td> <td>"
if (usemagicdevice>0){SWD +=" + " + usemagicdevice; }
SWD +="</td> <td>"
if ((document.form1.usemagicdevice_ics.checked)&(usemagicdevice>0)){SWD +="  + 3 [class skill] "}
if (usemagicdevice==0){SWD +="[cannot use untrained] "}
if (has_magicalaptitude==true){SWD +="  + 2 [magical aptitude] "}
if (has_skillfocususemagicdevice==true){SWD +="  + "+SixOrThree(usemagicdevice)+" [skill focus] "}
SWD +="</td></tr>\r" }



if (otherskill1>0){
if (document.form1.otherskill1_ability_list.selectedIndex==0){y=modifier_number(strength); x=y + otherskill1; stringy="Str"; }
if (document.form1.otherskill1_ability_list.selectedIndex==1){y=modifier_number(dexterity); x=y + otherskill1; stringy="Dex"; }
if (document.form1.otherskill1_ability_list.selectedIndex==2){y=modifier_number(constitution); x=y + otherskill1; stringy="Con"; }
if (document.form1.otherskill1_ability_list.selectedIndex==3){y=modifier_number(intelligence); x=y + otherskill1; stringy="Int"; }
if (document.form1.otherskill1_ability_list.selectedIndex==4){y=modifier_number(wisdom); x=y + otherskill1; stringy="Wis"; }
if (document.form1.otherskill1_ability_list.selectedIndex==5){y=modifier_number(charisma); x=y + otherskill1; stringy="Chr"; }
SWD +="<tr> <td>" + document.form1.otherskill1_name.value + "</td> <td>" + stringy + "</td> <td align=\"right\">" + x + " = </td> <td><center>" + y + "</td> <td>"
SWD +=" + " + otherskill1;  
SWD +="</td> <td></td></tr>\r" }


if (otherskill2>0){
if (document.form1.otherskill2_ability_list.selectedIndex==0){y=modifier_number(strength); x=y + otherskill2; stringy="Str"; }
if (document.form1.otherskill2_ability_list.selectedIndex==1){y=modifier_number(dexterity); x=y + otherskill2; stringy="Dex"; }
if (document.form1.otherskill2_ability_list.selectedIndex==2){y=modifier_number(constitution); x=y + otherskill2; stringy="Con"; }
if (document.form1.otherskill2_ability_list.selectedIndex==3){y=modifier_number(intelligence); x=y + otherskill2; stringy="Int"; }
if (document.form1.otherskill2_ability_list.selectedIndex==4){y=modifier_number(wisdom); x=y + otherskill2; stringy="Wis"; }
if (document.form1.otherskill2_ability_list.selectedIndex==5){y=modifier_number(charisma); x=y + otherskill2; stringy="Chr"; }
SWD +="<tr> <td>" + document.form1.otherskill2_name.value + "</td> <td>" + stringy + "</td> <td align=\"right\">" + x + " = </td> <td><center>" + y + "</td> <td>"
SWD +=" + " + otherskill2;  
SWD +="</td> <td></td></tr>\r" }


if (otherskill3>0){
if (document.form1.otherskill3_ability_list.selectedIndex==0){y=modifier_number(strength); x=y + otherskill3; stringy="Str"; }
if (document.form1.otherskill3_ability_list.selectedIndex==1){y=modifier_number(dexterity); x=y + otherskill3; stringy="Dex"; }
if (document.form1.otherskill3_ability_list.selectedIndex==2){y=modifier_number(constitution); x=y + otherskill3; stringy="Con"; }
if (document.form1.otherskill3_ability_list.selectedIndex==3){y=modifier_number(intelligence); x=y + otherskill3; stringy="Int"; }
if (document.form1.otherskill3_ability_list.selectedIndex==4){y=modifier_number(wisdom); x=y + otherskill3; stringy="Wis"; }
if (document.form1.otherskill3_ability_list.selectedIndex==5){y=modifier_number(charisma); x=y + otherskill3; stringy="Chr"; }
SWD +="<tr> <td>" + document.form1.otherskill3_name.value + "</td> <td>" + stringy + "</td> <td align=\"right\">" + x + " = </td> <td><center>" + y + "</td> <td>"
SWD +=" + " + otherskill3;  
SWD +="</td> <td></td></tr>\r" }






SWD +="</table>\r<p>\r* = check penalty for armor/shield<br>\r** = some groups double armor/shield penalties for swimmers<br><p>\r"

if (linguistics>0){SWD +="This character also has " + linguistics + " ranks in Linguistics.<br>"}
if (hawk_familiar==true){SWD +="The hawk confers  + 3 on visual perception checks in well-lit conditions.<br>"}
if (owl_familiar==true){SWD +="The owl confers  + 3 on visual perception checks in dimly-lit conditions.<br>"}

if ((bat_familiar==true)|(cat_familiar==true)|(hawk_familiar==true)|
  (lizard_familiar==true)|(monkey_familiar)|(owl_familiar==true)|(rat_familiar==true)|
  (raven_familiar==true)|(snake_familiar==true)|(toad_familiar==true)|
  (weasel_familiar==true))
   {
    if (has_alertness==false)
    {
       SWD +="If the familiar is within reach,  + 2 on  perception and sense motive (\"alertness\").<br>"
     }
   }


if (BardSpells0!=""){SWD +=BardSpells0 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (BardSpells1!=""){SWD +=BardSpells1 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (BardSpells2!=""){SWD +=BardSpells2 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (BardSpells3!=""){SWD +=BardSpells3 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (BardSpells4!=""){SWD +=BardSpells4 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (BardSpells5!=""){SWD +=BardSpells5 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (BardSpells6!=""){SWD +=BardSpells6 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells0!=""){SWD +=ClericSpells0 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells1!=""){SWD +=ClericSpells1 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells2!=""){SWD +=ClericSpells2 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells3!=""){SWD +=ClericSpells3 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells4!=""){SWD +=ClericSpells4 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells5!=""){SWD +=ClericSpells5 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells6!=""){SWD +=ClericSpells6 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells7!=""){SWD +=ClericSpells7 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells8!=""){SWD +=ClericSpells8 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (ClericSpells9!=""){SWD +=ClericSpells9 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells0!=""){SWD +=DruidSpells0 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells1!=""){SWD +=DruidSpells1 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells2!=""){SWD +=DruidSpells2 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells3!=""){SWD +=DruidSpells3 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells4!=""){SWD +=DruidSpells4 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells5!=""){SWD +=DruidSpells5 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells6!=""){SWD +=DruidSpells6 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells7!=""){SWD +=DruidSpells7 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells8!=""){SWD +=DruidSpells8 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (DruidSpells9!=""){SWD +=DruidSpells9 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (PaladinSpells1!=""){SWD +=PaladinSpells1 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (PaladinSpells2!=""){SWD +=PaladinSpells2 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (PaladinSpells3!=""){SWD +=PaladinSpells3 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (PaladinSpells4!=""){SWD +=PaladinSpells4 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}

if (RangerSpells1!=""){SWD +=RangerSpells1 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (RangerSpells2!=""){SWD +=RangerSpells2 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (RangerSpells3!=""){SWD +=RangerSpells3 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (RangerSpells4!=""){SWD +=RangerSpells4 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}


if (SorcererSpells0!=""){SWD +=SorcererSpells0 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (SorcererSpells1!=""){SWD +=SorcererSpells1 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (SorcererSpells2!=""){SWD +=SorcererSpells2 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (SorcererSpells3!=""){SWD +=SorcererSpells3 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (SorcererSpells4!=""){SWD +=SorcererSpells4 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (SorcererSpells5!=""){SWD +=SorcererSpells5 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (SorcererSpells6!=""){SWD +=SorcererSpells6 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (SorcererSpells7!=""){SWD +=SorcererSpells7 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (SorcererSpells8!=""){SWD +=SorcererSpells8 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (SorcererSpells9!=""){SWD +=SorcererSpells9 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells0!=""){SWD +=WizardSpells0 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells1!=""){SWD +=WizardSpells1 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells2!=""){SWD +=WizardSpells2 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells3!=""){SWD +=WizardSpells3 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells4!=""){SWD +=WizardSpells4 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells5!=""){SWD +=WizardSpells5 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells6!=""){SWD +=WizardSpells6 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells7!=""){SWD +=WizardSpells7 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells8!=""){SWD +=WizardSpells8 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
if (WizardSpells9!=""){SWD +=WizardSpells9 + "<p>\r<img src=\"spellbar.gif\"><p>\r"}
SWD +="<p>Favored class points: Hit points +"+favored_for_hp+"; Skill points +"+favored_for_skill+"<br>";
SWD +="<p>Adjust weapon attack rolls and armor penalties as required for masterwork / magic equipment.<p>";

if (rayce==1)
 {
  SWD +="Human<p><ul>"
  stringy=whichabilityup();
  SWD +="<li>This human chose +2 to "+stringy+" (already included)</li>"
  SWD +="<li>Extra feat at first level (already included)</li>"
  SWD +="<li>Four extra skill points at first level (already included)</li>"
  SWD +="<li>One extra skill point at each additional level (already included)</li>"
  SWD +="</ul>"
 }
if (rayce==4)
 {
  SWD +="Dwarf<p><ul>"
  SWD +="<li> + 2 constitution, +2 wisdom, -2 charisma (already included)</li><br>"
  SWD +="<li>Can move 20 feet even if in heavy armor</li><br>"
  SWD +="<li>Darkvision (see 60 feet in pitch-dark)</li><br>"
  SWD +="<li>Stonecunning ( + 2 on perception checks regarding stonework; automatic check if passing in ten feet)</li><br>"
  SWD +="<li>All dwarves are proficient with battleaxes, heavy picks, and warhammers. </li><br>"
  SWD +="<li> + 4 to avoid being bullrushed / tripped while standing on ground</li><br>"
  SWD +="<li> + 2 racial bonus on saves vs. poison</li><br>"
  SWD +="<li> + 2 racial bonus on saves vs. spells / spell-like abilities</li><br>"
  SWD +="<li> + 1 racial bonus to hit orcs and goblinoids</li><br>"
  SWD +="<li> + 4 dodge bonus on AC against giants</li><br>"
  SWD +="<li> + 2 racial bonus on appraise checks if stone/metal</li><br>"
  SWD +="</ul>"
 }
if (rayce==3)
 {
  SWD +="Elf<p><ul>"
  SWD +="<li> + 2 dexterity, +2 intelligence, -2 constitution (already included)</li><br>"
  SWD +="<li>Immune to magical sleep</li><br>"
  SWD +="<li> + 2 racial bonus to saves vs. enchantments</li><br>"
  SWD +="<li>Low-light vision -- see twice as far as humans in dim light</li><br>"
  SWD +="<li>Proficient with longswords, rapiers, longbows, composite longbows, & shortbow</li><br>"
  SWD +="<li> + 2 racial bonus on perception checks</li><br>"
  SWD +="<li> + 2 racial bonus to overcome spell restance</li><br>"
  SWD +="<li> + 2 racial bonus on spellcraft to identify properties of magic items</li><br>"
  SWD +="</ul>"
 }
if (rayce==5)
 {
  SWD +="Gnome<p><ul>"
  SWD +="<li> + 2 constitution, +2 charisma, -2 strength (already included)</li><br>"
  SWD +="<li>Small (combat bonuses,  + 4 to stealth already included)</li><br>"
  SWD +="<li>Low-light vision</li><br>"
  SWD +="<li> + 2 racial bonus on saves vs. illusions</li><br>"
  SWD +="<li> + 1 on DC of opponent's save vs. gnomish illusions</li><br>"
  SWD +="<li> + 1 racial bonus to hit reptilians and goblinoids</li><br>"
  SWD +="<li> + 4 dodge bonus on AC against giants</li><br>"
  SWD +="<li> + 2 bonus on perception checks (already included)</li><br>"
  if (charisma>=11){
  SWD +="<li>1/day <i>dancing lights, ghost sound, prestidigitation, speak with animals</i></li><br>"}
  SWD +="</ul>"
 }
if (rayce==2)
 {
  SWD +="Half-Elf<p><ul>"
  stringy=whichabilityup();
  SWD +="<li>This half-elf chose +2 to "+stringy+" (already included)</li>"
  SWD +="<li>Immune to magical sleep</li><br>"
  SWD +="<li>Allowed two favored classes.  Here I am assuming it is the first two favored classes.</li><br>"
  SWD +="<li>Take a skill focus as a bonus feat at level 1</li><br>"
  SWD +="<li> + 2 racial bonus on saves vs. enchantments</li><br>"
  SWD +="<li>Low-light vision</li><br>"
  SWD +="<li> + 1 racial bonus on perception checks</li><br>"
  SWD +="<li> + 2 racial bonus on diplomacy and gather information checks</li><br>"
  SWD +="</ul>"
 }
if (rayce==7)
 {
  SWD +="Half-Orc<p><ul>"
  stringy=whichabilityup();
  SWD +="<li>This half-orc chose +2 to "+stringy+" (already included)</li>"
  SWD +="<li>Darkvision (see 60 feet in pitch-dark)</li><br>"
  SWD +="<li>+2 on intimidate (already included)</li><br>"
  SWD +="<li>Orc Ferocity -- if brought below 0 hp, fight for 1 round anyway</li><br>"
  SWD +="<li>All orcs know greataxes and falchions</li><br>"
  SWD +="</ul>"
 }
if (rayce==6)
 {
  SWD +="Halfling<p><ul>"
  SWD +="<li> + 2 dexterity, +2 charisma, -2 strength (already included)</li><br>"
  SWD +="<li>Small (combat bonuses,  + 4 to stealth already included)</li><br>"
  SWD +="<li> + 2 racial bonus on acrobatics, climb, and perception (already included)</li><br>"
  SWD +="<li> + 1 racial bonus on all saving throws (already included)</li><br>"
  SWD +="<li> + 2 morale bonus on saves vs. fear (stacks with racial bonus to all saves)</li><br>"
  SWD +="<li> + 1 to hit with thrown weapons and slings</li><br>"
  SWD +="</ul>"
 }
if (rayce==9)
 {
  SWD +="Dhampir<p><ul>"
  SWD +="<li>Dhampirs are people with vampiric heredity.</li><br>"
  SWD +="<li> + 2 dexterity, +2 charisma, -2 constitution (already included)</li><br>"
  SWD +="<li>Small (combat bonuses,  + 4 to stealth already included)</li><br>"
  SWD +="<li> + 2 racial bonus on bluff and perception</li><br>"
  SWD +="<li> + 2 on saves against disease and mind-affecting spels</li><br>"
  SWD +="<li>No penalties for negative levels, except dying when negative levels equals total levels; all are gone by next day with no save required</li><br>"
  SWD +="<li>Dazzled in bright light</li><br>"
  SWD +="<li>Detect unded x3 daily</li><br>"
  SWD +="<li>Reputedly, negative energy heals these characters and positive energy harms them.  Whether this is workable in your campaign is up to your referee.</li><br>"
  SWD +="</ul>"
 }

if (rayce==22)
 {
  SWD +="Orc<p><ul>"
  SWD +="<li>+4 strength, -2 intelligence, -2 wisdom, -2 charisma (already included).</li><br>"
  SWD +="<li>Darkvision to sixty feet</li><br>"
  SWD +="<li>Light-sensitive.  Dazzled in bright light.</li><br>"
  SWD +="<li>Always proficient with greataxes and falchions.</li><br>"
  SWD +="</ul>"
 }
if (rayce==28)
 {
  SWD +="Aasimar<p><ul>"
  SWD +="<li>Aasimar are people with celestial heredity and count as native outsiders.</li><br>"
  SWD +="<li>This aasimar was allowed to choose one ability to raise by +2 (already included).  Aasimar conventionally get +2 wisdom, +2 charisma.  Hand-edit if needed.</li><br>"
  SWD +="<li>Darkvision to sixty feet</li><br>"
  SWD +="<li>+2 racial bonus to diplomacy and perception (already included)</li><br>"
  SWD +="<li>+5 resistance to acid, cold, electricity</li><br>"
  SWD +="<li>Daylight spell once daily</li><br>"
  if ((sorcerer_levels>0)&(has_celestial_bloodline)){SWD+="<li>Aasimar sorcerers with the celestial bloodline have an effective bonus of +2 charisma with regards to sorcery.</li><br>"}
  SWD +="</ul>"
 }
if (rayce==29)
 {
  SWD +="Sylph<p><ul>"
  SWD +="<li>Sylphs are people with elemental air heredity and count as native outsiders.</li><br>"
  SWD +="<li>This sylph was allowed to choose one ability to raise by +2 (already included).  Sylphs conventionally get +2 dexterity, +2 intelligence, -2 constitution.  Hand-edit if needed.</li><br>"
  SWD +="<li>Darkvision to sixty feet</li><br>"
  SWD +="<li>Sylphs do not breathe and therefore cannot drown or be suffocated or harmed by inhalant poison</li><br>"
  SWD +="<li>+5 resistance to electricity</li><br>"
//  SWD +="<li>Immune to magic sleep effects. A 25% chance thata critical or sneak attack misses.</li><br>"
  SWD +="<li>Feather fall spell once daily.  Some say gust of wind instead.</li><br>"
  if ((sorcerer_levels>0)&(has_elemental_bloodline)){SWD+="<li>Sylph sorcerers with the elemental (air) bloodline have an effective bonus of +2 charisma with regards to sorcery.</li><br>"}
  if ((cleric_levels>0)&(has_air_domain)){SWD+="<li>Sylph clerics with the air domain cast domain powers and air spells at +1 caster level.</li><br>"}
  if ((druid_levels>0)&(air_druid_domain)){SWD+="<li>Sylph druids with the air domain cast domain powers and air spells at +1 casterlevel.</li><br>"}
  SWD +="</ul>"
 }
if (rayce==30)
 {
  SWD +="Oread<p><ul>"
  SWD +="<li>Oreads are people with elemental earth heredity and count as native outsiders.</li><br>"
  SWD +="<li>This oread was allowed to choose one ability to raise by +2 (already included).  Oreads conventionally get +2 constitution, +2 wisdom, -2 dexterity.  Hand-edit if needed.</li><br>"
  SWD +="<li>Darkvision to sixty feet</li><br>"
  SWD +="<li>Oreads get +2 on perception to notice odd stonework, even if not looking.</li><br>"
  SWD +="<li>+5 resistance to acid</li><br>"
//  SWD +="<li>Immune to magic sleep effects. A 25% chance that a critical or sneak attack misses.</li><br>"
  SWD +="<li>Magic stone once daily</li><br>"
  if ((sorcerer_levels>0)&(has_elemental_bloodline)){SWD+="<li>Oread sorcerers with the elemental (earth) bloodline have an effective bonus of +2 charisma with regards to sorcery.</li><br>"}
  if ((cleric_levels>0)&(has_earth_domain)){SWD+="<li>Oread clerics with the earth domain cast domain powers and earth spells at +1 caster level.</li><br>"}
  if ((druid_levels>0)&(earth_druid_domain)){SWD+="<li>Oread druids with the earth domain cast domain powers and earth spells at +1 casterlevel.</li><br>"}
  SWD +="</ul>"
 }
if (rayce==31)
 {
  SWD +="Ifrit<p><ul>"
  SWD +="<li>Ifrits are people with elemental fire heredity and count as native outsiders.</li><br>"
  SWD +="<li>This ifrit was allowed to choose one ability to raise by +2 (already included).  Ifrits conventionally get +2 dexterity, +2 charisma, -2 wisdom.  Hand-edit if needed.</li><br>"
  SWD +="<li>Darkvision to sixty feet</li><br>"
  SWD +="<li>Ifrits can use a swift action to make an unarmed attack do 1d6 points of extra fire damage for one round.  Usable once daily.</li><br>"
  SWD +="<li>+5 resistance to fire</li><br>"
//  SWD +="<li>Immune to magic sleep effects. A 25% chance that a critical or sneak attack misses.</li><br>"
  SWD +="<li>Burning hands spell once daily</li><br>"
  if ((sorcerer_levels>0)&(has_elemental_bloodline)){SWD+="<li>Ifrit sorcerers with the elemental (fire) bloodline have an effective bonus of +2 charisma with regards to sorcery.</li><br>"}
  if ((cleric_levels>0)&(has_fire_domain)){SWD+="<li>Ifrit clerics with the fire domain cast domain powers and fire spells at +1 caster level.</li><br>"}
  if ((druid_levels>0)&(fire_druid_domain)){SWD+="<li>Ifrit druids with the fire domain cast domain powers and fire spells at +1 casterlevel.</li><br>"}
  SWD +="</ul>"
 }
if (rayce==32)
 {
  SWD +="Undine<p><ul>"
  SWD +="<li>Undines are people with elemental water heredity and count as native outsiders.</li><br>"
  SWD +="<li>This undine was allowed to choose one ability to raise by +2 (already included).  Undines conventionally get +2 strength, +2 constitution, -2 charisma.  Hand-edit if needed.</li><br>"
  SWD +="<li>Darkvision to sixty feet</li><br>"
  SWD +="<li>Undines breathe water as well as air and have swim speed 30.</li><br>"
  SWD +="<li>+5 resistance to cold</li><br>"
//  SWD +="<li>Immune to magic sleep effects. A 25% chance that a critical or sneak attack misses.</li><br>"
  SWD +="<li>Slipstream / hydraulic push spell once daily</li><br>"
  if ((sorcerer_levels>0)&(has_elemental_bloodline)){SWD+="<li>Undine sorcerers with the elemental (water) bloodline have an effective bonus of +2 charisma with regards to sorcery.</li><br>"}
  if ((cleric_levels>0)&(has_water_domain)){SWD+="<li>Undine clerics with the water domain cast domain powers and water spells at +1 caster level.</li><br>"}
  if ((druid_levels>0)&(water_druid_domain)){SWD+="<li>Undine druids with the water domain cast domain powers and water spells at +1 casterlevel.</li><br>"}
  SWD +="</ul>"
 }
if (rayce==33)
 {
  SWD +="Tiefling<p><ul>"
  SWD +="<li>Tieflings are people with fiendish heredity and count as native outsiders.</li><br>"
  SWD +="<li>This tiefling was allowed to choose one ability to raise by +2 (already included).  Tieflings conventionally get +2 dexterity, +2 intelligence, -2 charisma.  Hand-edit if needed.</li><br>"
  SWD +="<li>This tiefling was given both infernal and abyssal as native languages.  Delete one if this does not fit your character concept.</li><br>"
  SWD +="<li>Darkvision to sixty feet</li><br>"
  SWD +="<li>+2 racial bonus to bluff and stealth (already included)</li><br>"
  SWD +="<li>+5 resistance to cold, electricity, and fire</li><br>"
  SWD +="<li>Darkness spell once daily</li><br>"
  if ((sorcerer_levels>0)&(has_infernal_bloodline)){SWD+="<li>Tiefling sorcerers with the infernal bloodline have an effective bonus of +2 charisma with regards to sorcery.</li><br>"}
  if ((sorcerer_levels>0)&(has_abyssal_bloodline)){SWD+="<li>Tiefling sorcerers with the abyssal bloodline have an effective bonus of +2 charisma with regards to sorcery.</li><br>"}
  SWD +="</ul>"
 }
if (rayce==12)
 {
  SWD +="Drow [Dark Elf]<p><ul>"
  SWD +="<li>+2 dexterity, +2 charisma, -2 constitution (already included).</li><br>"
  SWD +="<li>Darkvision to 120 feet</li><br>"
  SWD +="<li>Immune to magical sleep; +2 on saves vs. enchantments</li><br>"
  SWD +="<li>Dancing lights, darkness, faerie fire each once daily</li><br>"
  SWD +="<li>+2 racial bonus to perception (already included)</li><br>"
  SWD +="<li>6 + level resistance to magic spells</li><br>"
  SWD +="<li>Proficient with hand crossbow, rapier, and short sword</li><br>"
  SWD +="<li>Abrupt exposure to bright light blinds for one round, dazzles afterwards</li><br>"
  SWD +="</ul>"
 }

if (barbarian_levels>0)
 {
  SWD +="Barbarian<p><ul>"
  SWD +="<li>Fast Movement (+10 feet, already included)</li><br>"
  SWD +="<li>Rage -- 4 + con mod rounds per day.  Two more rounds / day for each level above 1.  +4 strength, +4 constitution, +2 on will saves, -2 on AC.</li><br>"
  SWD +="<li>At each even-numbered level, barbabarians gain a new rage power</li><br>"
  SWD +="<li>Uncanny Dodge (level 2) -- cannot be caught flat-footed, keeps dexterity bonus to AC unless feinted or immobilized</li><br>"
  SWD +="<li>Trap Sense (level 3) -- bonuses on AC / reflex to avoid trap damage</li><br>"
  SWD +="<li>Improved Uncanny Dodge (level 5) -- cannot be flanked</li><br>"
  SWD +="<li>Damage Reduction 1 from any natural or weapon attack (level 7)</li><br>"
  SWD +="<li>Damage Reduction 2 from any natural or weapon attack (level 10)</li><br>"
  SWD +="<li>Greater Rage (level 11) -- +6 strength, +6 constitution, +3 will</li><br>"
  SWD +="<li>Damage Reduction 3 from any natural or weapon attack (level 13)</li><br>"
  SWD +="<li>Indominitable Will (level 14) -- +4 on will, stacks with rage and all other plusses</li><br>"
  SWD +="<li>Damage Reduction 4 from any natural or weapon attack (level 16)</li><br>"
  SWD +="<li>Tireless Rage (level 17) -- no longer fatigued after raging</li><br>"
  SWD +="<li>Damage Reduction 5 from any natural or weapon attack (level 19)</li><br>"
  SWD +="<li>Mighty Rage (level 20) -- +8 strength, +8 constitution, +4 will</li><br>"
  SWD +="</ul>"
 }

if (bard_levels>0)
 {
  SWD +="Bard<p><ul>"
  SWD +="<li>Bardic Knowledge</li><br>"
  SWD +="<li>Bardic Performance -- 4 + chr mod rounds per day.  Two more rounds day for each level above 1.</li><br>"
  SWD +="<li>Cantrips</li><br>"
  SWD +="<li>Can know only limited numbers of spells</li><br>"
  if (charisma>=12){SWD +="<li>High charisma gains bonus spells daily</li><br>"}
  SWD +="<li>Countersong</li><br>"
  SWD +="<li>Distraction</li><br>"
  SWD +="<li>Fascination</li><br>"
  SWD +="<li>Inspire Courage +1</li><br>"
  SWD +="<li>Versatile Performance (Level 2) -- you'll need to hand-edit</li><br>"
  SWD +="<li>Well-Versed (Level 2) -- +4 on saves vs other bards, and sounds in general</li><br>"
  SWD +="<li>Inspire Competence +2 (Level 3)</li><br>"
  SWD +="<li>Inspire Competence +4 (Level 11)</li><br>"
  SWD +="<li>Inspire Competence +5 (Level 15)</li><br>"
  SWD +="<li>Inspire Competence +6 (Level 19)</li><br>"
  SWD +="<li>Mass Suggestion (Level 18)</li><br>"
  SWD +="<li>Inspire Courage +2 (Level 5)</li><br>"
  SWD +="<li>Lore Master 1/day (Level 5)</li><br>"
  SWD +="<li>Lore Master 2/day (Level 11)</li><br>"
  SWD +="<li>Suggestion (Level 6)</li><br>"
  SWD +="<li>Versatile Performance (Level 6) -- you'll need to hand-edit</li><br>"
  SWD +="<li>Inspire Competence +3 (Level 7)</li><br>"
  SWD +="<li>Dirge of Doom (Level 8)</li><br>"
  SWD +="<li>Inspire Greatness (Level 9)</li><br>"
  SWD +="<li>Versatile Performance (Level 10) -- you'll need to hand-edit</li><br>"
  SWD +="<li>Jack of All Trades (Level 10)</li><br>"
  SWD +="<li>Soothing Performance (Level 12)</li><br>"
  SWD +="<li>Frightening Tune (Level 14)</li><br>"
  SWD +="<li>Versatile Performance (Level 14) -- you'll need to hand-edit</li><br>"
  SWD +="<li>Inspire Heroics (Level 15)</li><br>"
  SWD +="<li>Lore Master 3/day (Level 17)</li><br>"
  SWD +="<li>Versatile Performance (Level 18) -- you'll need to hand-edit</li><br>"
  SWD +="<li>Deadly Performance (Level 20)</li><br>"
  SWD +="<li>Concentration check: d20 + bard level + charisma modifier vs. DC</li><br>"
  SWD +="</ul>"
 }

if (cleric_levels>0)
 {
  SWD +="Cleric<p><ul>"
  SWD +="<li>Alignment Aura</li><br>"
  SWD +="<li>Spontaneous casting -- trade prepared spells for curative spells</li><br>"
  if (channels_energy==1){SWD +="<li>Channels positive energy"}
  if (channels_energy==2){SWD +="<li>Channels negative energy"}
  if (3 + modifier_number(charisma) + 4*has_extrachannel>0)
   {SWD +=" (" + (3 + modifier_number(charisma) + 4*has_extrachannel) + "x/day)</li><br>"}

  if (wisdom>=12){SWD +="<li>High wisdom gains bonus spells daily</li><br>"}
  SWD +="<li>Domain choices give additional abilities.  See the rulebook for details</li><br>"
  if (has_air_domain){SWD +="<li>Air clergy can throw lightning arcs, and at 6th level resist electric damage.</li><br>"}
  if (has_animal_domain){SWD +="<li>Animal clergy can speak with animals, and get an animal companion at 4th level.</li><br>"}
  if (has_artifice_domain){SWD +="<li>Artifice clergy can case Mending at will, fix things, and at 8th level make weapons danc.</li><br>"}
  if (has_chaos_domain){SWD +="<li>Chaos clergy can touch an enemy and force to roll all d20s twice, taking the worse result. At8th level, can make a weapon anarchic.</li><br>"}
  if (has_charm_domain){SWD +="<li>Charm clergy can daze an opponent, and cast Charm Person as a swift action</li><br>"}
  if (has_community_domain){SWD +="<li>Community clergy can heal and remove fatigued, shaken, and sickened by touch, an at 8th level let others use yoursaves</li><br>"}
  if (has_darkness_domain){SWD +="<li>Darkness clergy get a free Blind-Fight feat, can blur an opponent's vision, and at 8th level you can make yourself see perfectly even in magical darkness.</li><br>"}
  if (has_death_domain){SWD +="<li>Death clergy can cause bleeding by touch, and at 8th level negative energy heals you</li><br>"}
  if (has_destruction_domain){SWD +="<li>Destruction clergy can sometimes add half their level to their melee to-hit rolls, and at 8th level can cause all attacks against friend and foes within 30 feet to have half your level added to the attack roll</li><br>"}
  if (has_earth_domain){SWD +="<li>Earth clergy can squirt acid, and at 6th level resist acid damage</li><br>"}
  if (has_evil_domain){SWD +="<li>Evil clergy can sicken by touch, and at 8th level make a weapon unholy</li><br>"}
  if (has_fire_domain){SWD +="<li>Fire clergy can shoot flames, and at 6th level develop fire resistance</li><br>"}
  if (has_glory_domain){SWD +="<li>Glory clergy can bestow massive bonuses on charisma-based skill chcks, and at 8th level offer sanctuary to all friends within 30 feet</li><br>"}
  if (has_good_domain){SWD +="<li>Good clergy can bestow a sacred bonus on d20 rolls for a round, and at 8th level make a weapon holy</li><br>"}
  if (has_healing_domain){SWD +="<li>Healing clergy can touch the dying to restore them, and at 6th level all cure spells are enhanced by half as if empowered</li><br>"}
  if (has_knowledge_domain){SWD +="<li>All knowledge skills are class skills.  clergy can touch a creature at will to learn its strengthsand waknesses, and at level 6 can remote-view.</li><br>"}
  if (has_law_domain){SWD +="<li>Law clergy can cause an ally to roll 11s on all d20s, and at 8th level can make a weapon axiomatic.</li><br>"}
  if (has_liberation_domain){SWD +="<li>Liberation clergy can grant themselves freedom of movement, and at 8th level cause all allys to be unaffected by confusion, grappling, fright, panic, paralysis, pins, or shaken.</li><br>"}
  if (has_luck_domain){SWD +="<li>Luck clergy can grant a friend the power to roll all d20s twice and take the better result, and at 6th level you can reroll a d20 yourself.</li><br>"}
  if (has_madness_domain){SWD +="<li>Madness clergy can bestow bonuses on attacks, saves, or skill checks with a penalty on the other two</li><br>"}
  if (has_magic_domain){SWD +="<li>Magic clergy can make weapons fly and dispel magic with a touch.</li><br>"}
  if (has_nobility_domain){SWD +="<li>Nobility clergy can speak an inspiring word to an ally and give +2 bonuses, and receive Leadership at 8th level as a free feat with +2 on leadership score.</li><br>"}
  if (has_plant_domain){SWD +="<li>Plant clergy can turn their hands to thorny wood, and at 6th level develop bramgle armor.</li><br>"}
  if (has_protection_domain){SWD +="<li>Protection clergy get bonuses on saving throws which they can transfer to another, and at 8th level create an aura that helps protect friends from acid, cold, electricity, fire, and sound.</li><br>"}
  if (has_repose_domain){SWD +="<li>Repose clergy can induce lethargy, and at 8th level suppress death effects, energy drain, and negative levels within 30 feet.</li><br>"}
  if (has_rune_domain){SWD +="<li>Rune clergy get a free Scribe Scroll feat, can make exploding runes, and at 8th level put another spell into the exploding rune.</li><br>"}
  if (has_strength_domain){SWD +="<li>Strength clergy can confer half their leevel to melee attacks and combat maneuver checks, plus strength basedskills and strength checks At 8th level, you can add cleric level to your strength score for a number of rounds per day equal to your cleric level.</li><br>"}
  if (has_sun_domain){SWD +="<li>Sun clergy can add their cleric level to positive energy damate to the undead and undead cannot use their channel restance.  At 8th level you give off light in a 30 foot radius that causes unead to take yourlevel damage per round, and that dispels darkness.</li><br>"}
  if (has_travel_domain){SWD +="<li>Travel clergy can give themselves theability to ignore difficult terrain, and at 8th level dimension-hop 10 feet per clericlevel per day; if you bring friends this counts as distance.</li><br>"}
  if (has_trickery_domain){SWD +="<li>Tricky clergy take bluff, disguise, and stealth as class skills.  They can make illusions of themselves and at 8th level of their group.</li><br>"}
  if (has_war_domain){SWD +="<li>War clergy can bestow bonuses on melee damage, and at 8th level can give themselves temporary combat feats for which they meet pre-requisites. </li><br>"}
  if (has_water_domain){SWD +="<li>Water clergy can shoot icicles, and at 8th level resist cold.</li><br>"}
  if (has_weather_domain){SWD +="<li>Weather clergy can make storms that do non-lethal damage, and at 8th level call lightning bolts.</li><br>"}
  SWD +="<li>Concentration check: d20 + cleric level + wisdom modifier vs. DC</li><br>"

  SWD +="</ul>"
 }

if (druid_levels>0)
 {
  SWD +="Druid<p><ul>"
  if (air_druid_domain){SWD +="<li>Air druids can throw lightning arcs, and at 6th level resist electric damage.</li><br>"}
  if (animal_druid_domain){SWD +="<li>Animal druids can speak with animals, and get an animal companion at 4th level.</li><br>"}
  if (earth_druid_domain){SWD +="<li>Earth druids can squirt acid, and at 6th level resist acid damage</li><br>"}
  if (fire_druid_domain){SWD +="<li>Fire druids can shoot flames, and at 6th level develop fire resistance</li><br>"}
  if (plant_druid_domain){SWD +="<li>Plant druids can turn their hands to thorny wood, and at 6th level develop bramgle armor.</li><br>"}
  if (water_druid_domain){SWD +="<li>Water druids can shoot icicles, and at 8th level resist cold.</li><br>"}
  if (weather_druid_domain){SWD +="<li>Weather 	 can make storms that do non-lethal damage, and at 8th level call lightning bolts.</li><br>"}
  SWD +="<li>Orisons</li><br>"
  SWD +="<li>Spontaneous Casting (summon nature's ally)</li><br>"
  SWD +="<li>Animal Companion, or may instead choose a cleric domain and bonus spells (hand-edit)</li><br>"
  SWD +="<li>Nature sense: + 2 on Knowledge (nature) and Survival (already included)</li><br>"
  SWD +="<li>Wild Empathy</li><br>"
  SWD +="<li>Woodland Stride (level 2)</li><br>"
  SWD +="<li>Trackless Step (level 3)</li><br>"
  SWD +="<li>Resist Nature's Lure (level 4)</li><br>"
  SWD +="<li>Wild Shape (level 4 now)</li><br>"
  SWD +="<li>Venom Immunity (level 9)</li><br>"
  SWD +="<li>A Thousand Faces (level 13)</li><br>"
  SWD +="<li>Timeless Body (level 15)</li><br>"
  if (wisdom>=12){SWD +="<li>High wisdom gains bonus spells daily</li><br>"}
  SWD +="<li>Concentration check: d20 + druid level + wisdom modifier vs. DC</li><br>"
  SWD +="</ul>"
 }

if (fighter_levels>0)
 {
  SWD +="Fighter<p><ul>"
  SWD +="<li>Bonus Feats (already included)</li><br>"
  SWD +="<li>Armor training -- penalties for armor decrease by one each at levels 3, 7, 11, and 15</li><br>"
  SWD +="<li>At level 3, moves at normal speed in medium armor.  At level 7, moves at normal speed in any armor.</li><br>"
  SWD +="<li>Bravery -- +1 on saves vs fear (level 2), increases by one at level 6, 10, 14, 18</li><br>"
  SWD +="<li>Weapon training 1; at levels 5, 9, 13, and 17, chooose one group of weapons and take +1 on attacks and damage from this group and all groups previously selected.  Mark here:</li><ul>"
  SWD +="<li>Level 5:</li>";
  SWD +="<li>Level 9:</li>";
  SWD +="<li>Level 13:</li>";
  SWD +="<li>Level 17:</li></ul><br>";
   SWD +="<li>Armor Mastery (level 19) -- Damage reduction 5/- wearing any armor or using any shield</li><br>";
  SWD +="<li>Weapon Mastery (level 20) -- choose one weapon for which all critical threats confirmed and damage multiplier increased by 1; cannot be disarmed when using it</li><br>"
  SWD +="</ul>"
 }


if (monk_levels>0)
 {
  SWD +="Monk<p><ul>"
  SWD +="<li>AC and CMD Bonus for Wisdom</li><br>"
  SWD +="<li>AC and CMD Bonus for level (begins level 4 now)</li><br>"
  SWD +="<li>Flurry of Blows -- must use unarmed strike or special monk weapon</li><br>"
  SWD +="<li>Unarmed Strike -- free Improved Unarmed Strike feat, can make unarmed strikes with hands full, lethal or non-lethal, extra damage</li><br>"
  SWD +="<li>Bonus Feats (levels 1 2 6 10 14 & 18)</li><br>"
  SWD +="<li>Evasion (level 2) -- no damage if saves</li><br>"
  SWD +="<li>Fast Movement (level 3)</li><br>"
  SWD +="<li>Still Mind (level 3) -- +2 on saves vs charm</li><br>"
  SWD +="<li>Maneuver Training (level 3) -- may use your monk level instead of attack base for combat maneuvers</li><br>"
  SWD +="<li>Ki Strike (level 4) -- half your monk level plus your wisdom modifier plus any feat bonuses; use these points for extra attacks, extra speed, or extra armor class</li><br>"
  SWD +="<li>Slow Fall (level 4) -- if a wall is near, fall is as if twenty feet less at level 4, improves as levels are gained</li><br>"
  SWD +="<li>Purity of Body (level 5) -- immune to all diseases</li><br>"
  SWD +="<li>Wholeness of Body (level 7) -- use 2 ki points to heal your monk level of hp</li><br>"
  SWD +="<li>Improved Evasion (level 9) -- half damage if save is failed</li><br>"
  SWD +="<li>Diamond Body (level 11) -- immune to poison</li><br>"
  SWD +="<li>Abundant Step (level 12) -- dimension door</li><br>"
  SWD +="<li>Diamond Soul (level 13) -- spell resistance 10 + monk level</li><br>"
  SWD +="<li>Quivering Palm (level 15)</li><br>"
  SWD +="<li>Timeless Body (level 17) -- no aging penalties</li><br>"
  SWD +="<li>Tongue of Sun and Moon (level 17) -- speak with any living creature</li><br>"
  SWD +="<li>Empty Body (level 19) -- use 3 ki points to turn ethereal</li><br>"
  SWD +="<li>Perfect Self (level 20) -- now an outsider, DR 10/chaotic</li><br>"
  SWD +="</ul>"
 }

if (paladin_levels>0)
 {
  SWD +="Paladin<p><ul>"
  SWD +="<li>Aura of Good</li><br>"
  SWD +="<li>Detect Evil</li><br>"
  SWD +="<li>Smite Evil ("
  if (paladin_levels>=19){SWD +="7x/day"} else
  if (paladin_levels>=16){SWD +="6x/day"} else
  if (paladin_levels>=13){SWD +="5x/day"} else
  if (paladin_levels>=10){SWD +="4x/day"} else
  if (paladin_levels>=7){SWD +="3x/day"} else
  if (paladin_levels>=4){SWD +="2x/day"} else
   {SWD +="1x/day"}

   x=modifier_number(charisma);
   if (x<0){x=0;}
  SWD+="; add +"+x+" to melee attack roll, paladin levels to damage";

  SWD +=")</li><br>"
  SWD +="<li>Divine Grace (level 2) -- apply charisma bonus, if any, to saving throws</li><br>"
  SWD +="<li>Lay on Hands (level 2) -- half your paladin level, plus your charisma modifiers, times per day.  This heals 1d6 per two paladin levels, as standard action, or on self is swift action.  Can damage undea, no save.  Only one free hand required.</li><br>"
  SWD +="<li>Aura of Courage (level 3) -- immune to all fear, +4 to saves for all allies in ten feet</li><br>"
  SWD +="<li>Divine Health (level 3) -- immune to all disesaes, including magical ones</li><br>"
  SWD +="<li>Mercy -- at level 3, and every 3rd level after, choose one mercy to augment laying on of hands</li><br>"
  SWD +="<li>Channel positive energy(level 4) -- use two Lay on Hands to do as a cleric does"
  if ((paladin_levels>3)&(3 + modifier_number(charisma) + 4*has_extrachannel>0))
   {SWD +=" (" + (3 + modifier_number(charisma) + 4*has_extrachannel) + "x/day)"}
  SWD +="</li><br>"
  SWD +="<li>Divine bond (level 5) -- may be various weapon enhancements or a steed</li><br>"
  SWD +="<li>Aura of Resolve (level 8) -- immune to all charm, +4 to saves for all allies in ten feet</li><br>"
  SWD +="<li>Aura of Justice (level 11) -- spend two uses of smite evil to give the power to smite evil to all non-evil allies</li><br>"
  SWD +="<li>Aura of Faith (level 14) -- your weapons are good-aligned, as are all allied attacks within 10 feet of you</li><br>"
  SWD +="<li>Aura of Righteousness (level 17) -- DR5/evil; immune to compulsion, +4 to saves for all allies in ten feet</li><br>"
  SWD +="<li>Holy Champion (level 20) -- DR10/evil; smite evil successful against an evil outsides, the outsider is subject to banishment</li><br>"
  SWD +="<li>Code of Conduct / Association</li><br>"
  if (wisdom>=12){SWD +="<li>High charisma gains bonus spells daily</li><br>"}
  SWD +="<li>Concentration check: d20 + paladin level + charisma modifier vs. DC</li><br>"
  SWD +="</ul>"
 }


if (ranger_levels>0)
 {
  SWD +="Ranger<p><ul>"
  SWD +="<li>Favored enemies.  Bonus applies to attack (unlike 3.5), damage, bluff, knowledge (can always make checks), perception, sense motive, survival.   </li><br>"
  SWD +="<li>Favored terrains.   Bonus applies to initiative, geography, perception, stealth, surival; need not leave tracks.  </li><br>"
  SWD +="<li>Bonus to tracking</li><br>"
  SWD +="<li>Combat Style</li><br>"
  SWD +="<li>Endurance</li><br>"
  SWD +="<li>Wild empathy (roll level  +  charisma bonus)</li><br>"
  SWD +="<li>Endurance (level 3)</li><br>"
  SWD +="<li>Hunter's bond -- either an animal companion or bond with companions and grant some favored enemy bonuses to them(level 4)</li><br>"
  SWD +="<li>Woodland Stride (level 7)</li><br>"
  SWD +="<li>Swift Tracker (level 8)</li><br>"
  SWD +="<li>Evasion (level 9)</li><br>"
  SWD +="<li>Quarry (level 11)</li><br>"
  SWD +="<li>Camouflage (level 12)</li><br>"
  SWD +="<li>Improved Evasion (level 16)</li><br>"
  SWD +="<li>Hide in Plain Sight (level 17) -- any favored terrain</li><br>"
  SWD +="<li>Improved quarry (level 19) -- any favored terrain</li><br>"
  SWD +="<li>Master Hunter (level 20) -- lethal attacks, superior tracking</li><br>"
  if (wisdom>=12){SWD +="<li>High wisdom gains bonus spells daily</li><br>"}
  SWD +="<li>Concentration check: d20 + rangre level + wisdom modifier vs. DC</li><br>"

  SWD +="</ul><p>Favored Enemies:<p><ul>"
   if (rf_aberration>0){SWD +="<li>Aberrations  + " + (2*rf_aberration) + "</li><br>"}
   if (rf_animal>0){SWD +="<li>Animals  + " + (2*rf_animal) + "</li><br>"}
   if (rf_construct>0){SWD +="<li>Constructs  + " + (2*rf_construct) + "</li><br>"}
   if (rf_dragon>0){SWD +="<li>Dragons  + " + (2*rf_dragon) + "</li><br>"}
   if (rf_fey>0){SWD +="<li>Feys  + " + (2*rf_fey) + "</li><br>"}
   if (rf_aquatic>0){SWD +="<li>Humanoids (aquatic)  + " + (2*rf_aquatic) + "</li><br>"}
   if (rf_dwarf>0){SWD +="<li>Humanoids (dwarf)  + " + (2*rf_dwarf) + "</li><br>"}
   if (rf_elf>0){SWD +="<li>Humanoids (elf)  + " + (2*rf_elf) + "</li><br>"}
   if (rf_giant>0){SWD +="<li>Humanoids (giant)  + " + (2*rf_giant) + "</li><br>"}
   if (rf_goblinoid>0){SWD +="<li>Humanoids (goblinoid)  + " + (2*rf_goblinoid) + "</li><br>"}
   if (rf_gnoll>0){SWD +="<li>Humanoids (gnoll)  + " + (2*rf_gnoll) + "</li><br>"}
   if (rf_gnome>0){SWD +="<li>Humanoids (gnome)  + " + (2*rf_gnome) + "</li><br>"}
   if (rf_halfling>0){SWD +="<li>Humanoids (halfling)  + " + (2*rf_halfling) + "</li><br>"}
   if (rf_human>0){SWD +="<li>Humanoids (human)  + " + (2*rf_human) + "</li><br>"}
   if (rf_orc>0){SWD +="<li>Humanoids (orc)  + " + (2*rf_orc) + "</li><br>"}
   if (rf_reptilian>0){SWD +="<li>Humanoids (reptilian)  + " + (2*rf_reptilian) + "</li><br>"}
   if (rf_humanoidothersubtype>0){SWD +="<li>Humanoids (other subtype)  + " + (2*rf_humanoidothersubtype) + "</li><br>"}
   if (rf_magicalbeast>0){SWD +="<li>Magical Beasts  + " + (2*rf_magicalbeast) + "</li><br>"}
   if (rf_monstroushumanoid>0){SWD +="<li>Monstrous Humanoids  + " + (2*rf_monstroushumanoid) + "</li><br>"}
   if (rf_ooze>0){SWD +="<li>Oozes  + " + (2*rf_ooze) + "</li><br>"}
   if (rf_air>0){SWD +="<li>Outsiders (air)  + " + (2*rf_air) + "</li><br>"}
   if (rf_chaotic>0){SWD +="<li>Outsiders (chaotic)  + " + (2*rf_chaotic) + "</li><br>"}
   if (rf_earth>0){SWD +="<li>Outsiders (earth)  + " + (2*rf_earth) + "</li><br>"}
   if (rf_evil>0){SWD +="<li>Outsiders (evil)  + " + (2*rf_evil) + "</li><br>"}
   if (rf_fire>0){SWD +="<li>Outsiders (fire)  + " + (2*rf_fire) + "</li><br>"}
   if (rf_good>0){SWD +="<li>Outsiders (good)  + " + (2*rf_good) + "</li><br>"}
   if (rf_lawful>0){SWD +="<li>Outsiders (lawful)  + " + (2*rf_lawful) + "</li><br>"}
   if (rf_native>0){SWD +="<li>Outsiders (native)  + " + (2*rf_native) + "</li><br>"}
   if (rf_water>0){SWD +="<li>Outsiders (water)  + " + (2*rf_water) + "</li><br>"}
   if (rf_plant>0){SWD +="<li>Plants  + " + (2*rf_plant) + "</li><br>"}
   if (rf_undead>0){SWD +="<li>Undead  + " + (2*rf_undead) + "</li><br>"}
   if (rf_vermin>0){SWD +="<li>Vermin  + " + (2*rf_vermin) + "</li><br>"}
  SWD +="</ul>"

  if (ranger_levels>=3)
   {
   SWD +="</ul><p>Favored Terrains:<p><ul>"
   if (rt_cold>0){SWD +="<li>Cold  + " + (2*rt_cold) + "</li><br>"}
 if (rt_desert>0){SWD+="<li>Fesert + "+(2*rt_desert)+"</li><br>"}
 if (rt_forest>0){SWD+="<li>Forest + "+(2*rt_forest)+"</li><br>"}
 if (rt_jungle>0){SWD+="<li>Jungle + "+(2*rt_jungle)+"</li><br>"}
 if (rt_mountain>0){SWD+="<li>Mountain + "+(2*rt_mountain)+"</li><br>"}
 if (rt_plains>0){SWD+="<li>Plains + "+(2*rt_plains)+"</li><br>"}
 if (rt_planeabyss>0){SWD+="<li>Plane -- abyss + "+(2*rt_planeabyss)+"</li><br>"}
 if (rt_planeabaddon>0){SWD+="<li>Plane -- Abaddon + "+(2*rt_planeabaddon)+"</li><br>"}
 if (rt_planeair>0){SWD+="<li>Plane -- Air + "+(2*rt_planeair)+"</li><br>"}
 if (rt_planeastral>0){SWD+="<li>Plane -- Astral + "+(2*rt_planeastral)+"</li><br>"}
 if (rt_planeaxis>0){SWD+="<li>Plane -- Axis + "+(2*rt_planeaxis)+"</li><br>"}
 if (rt_planeearth>0){SWD+="<li>Plane -- Earth + "+(2*rt_planeearth)+"</li><br>"}
 if (rt_planeelysium>0){SWD+="<li>Plane -- Elysium + "+(2*rt_planeelysium)+"</li><br>"}
 if (rt_planeethereal>0){SWD+="<li>Plane -- Ethereal + "+(2*rt_planeethereal)+"</li><br>"}
 if (rt_planefire>0){SWD+="<li>Plane -- Fire + "+(2*rt_planefire)+"</li><br>"}
 if (rt_planeheaven>0){SWD+="<li>Plane -- Heaven + "+(2*rt_planeheaven)+"</li><br>"}
 if (rt_planehell>0){SWD+="<li>Plane -- Hell + "+(2*rt_planehell)+"</li><br>"}
 if (rt_planemaelstrom>0){SWD+="<li>Plane -- Maelstrom + "+(2*rt_planemaelstrom)+"</li><br>"}
 if (rt_planenirvana>0){SWD+="<li>Plane -- Nirvana + "+(2*rt_planenirvana)+"</li><br>"}
 if (rt_planeshadow>0){SWD+="<li>Plane -- Shadow + "+(2*rt_planeshadow)+"</li><br>"}
 if (rt_planewater>0){SWD+="<li>Plane -- Water + "+(2*rt_planewater)+"</li><br>"}
 if (rt_swamp>0){SWD+="<li>swamp + "+(2*rt_swamp)+"</li><br>"}
 if (rt_underground>0){SWD+="<li>underground + "+(2*rt_underground)+"</li><br>"}
 if (rt_urban>0){SWD+="<li>urban + "+(2*rt_urban)+"</li><br>"}
 if (rt_water>0){SWD+="<li>water + "+(2*rt_water)+"</li><br>"}
 if (rt_other1>0){SWD+="<li>"+document.form1.other_ranger_terrain_1.value+" + "+(2*rt_other1)+"</li><br>"}
 if (rt_other2>0){SWD+="<li>"+document.form1.other_ranger_terrain_2.value+" + "+(2*rt_other2)+"</li><br>"}
  SWD +="</ul>"
  }
  SWD +="</ul>"

 }

if (rogue_levels>0)
 {
  SWD +="Rogue<p><ul>"
  x = Math.floor ((rogue_levels  + 1)/2) ;
  SWD+="<li>Sneak Attack +" + x + "d6</li><br>"
  SWD +="<li>Trapfinding -- add half of rogue level to find traps, minimum +1</li><br>"
  SWD +="<li>Evasion (level 2) -- no damage on a successful reflex save</li><br>"
  SWD +="<li>Rogue talents -- gain one at every even-numbered level.  At level 10 and above, advanced talents are available.  Add by hand.</li><br>"
  SWD +="<li>Trap sense (level 3) -- armor class and reflex bonuses against traps</li><br>"
  SWD +="<li>Uncanny Dodge (level 4) -- cannot be caught flat-footed, keep dexterity bonus to AC if attacker is invisible</li><br>"
  SWD +="<li>Improved Uncanny Dodge (level 8) -- cannot be flanked</li><br>"
  SWD +="<li>Master strike (level 20) -- each sneak attack either kills, paralyzes, or puts into coma.</li><br>"
  SWD +="</ul>"
 }

if (sorcerer_levels>0)
 {
  SWD +="Sorcerer<p><ul>"
  SWD +="<li>Can know only limited numbers of spells</li><br>"
  SWD +="<li>Sorcerer spells no longer require cheap material components.</li><br>"
  if (charisma>=12){SWD +="<li>High charisma gains bonus spells daily</li><br>"}
  SWD +="<li>Concentration check: d20 + sorcerer level + charisma modifier vs. DC</li><br>"
  SWD +="<li>Pathfinder sorcerers each choose a bloodline, which provides a class skill, extra spells, powers, and feats. Please write these in.  Thanks for understanding.</li><ul><br>"
if (has_aberrant_bloodline){SWD+="Aberrant bloodline sorcerers can increase the durations of polymorph spells, shoot acid, and as they gain levels increase reach on melee touch, gain chances to ignore critical hits and sneak attacks, gain spell resistance, gain blindsight, nad damage reduction 5/-.</li><br>";}
if (has_abyssal_bloodline){SWD+="Abyssal bloodline sorcerers can grow claws,give damage resistance to summoned creatures, and as they gain levels get resistance to electricity, better saves against poison, physical strength [added as applicable], getan extra creature on sumon monster spells, and eventually rest acid cold and fire and gain telepathy.</li><br>";}
if (has_arcane_bloodline){SWD+="Arcane bloodline sorcerers can have a familiar or bonded object like a wizards, increase DC on saves when metamagic spells are used, and as they gain level add spells known, increase DC for spells of one schol, and use spell slots to power magic items.</li><br>";}
if (has_celestial_bloodline){SWD+="Celestial bloodline sorcerers can impart damage resistance to summoned creatures, shoot heavenly fire that harms evil creatures and heals good creatures, resist acid and cold, grow rings, reroll d20's, and eventually become immune to petrification and resist electricity and fire.</li><br>";}
if (has_destined_bloodline){SWD+="Destined bloodline sorcerers can have a luck bonus on all saves after casting a personal spell, grant d20 bonuses to others, reroll soem dice, make a will save to avoid death, avoid criticals, and automatically succeed checks to overcome spell resistance</li><br>";}
if (has_draconic_bloodline){SWD+="Draconic bloodline sorcerers choose a dragon type, get +1 per point of damage rolled on its energy type, grow claws, beta bonus on armor, get a breath weapon, get wings, and become immune to paralysis, sleep, damage of your energy type, and get blindsense to 60 feet.</li><br>";}
if (has_elemental_bloodline){SWD+="Elemental bloodline sorcerers can choose an element, change a spell that deals energy to match the type of your bloodline, shoot rays, and as level increases resist damage from your energy type, unleash blasts, gain special movement type / bonus, and become immune to sneak attacks, critical hits, and damage of your type.</li><br>";}
if (has_fey_bloodline){SWD+="Fey bloodline sorcerers can gain +2 on DC saves versusconpulsions, cause a creature to burst outlaughing by touch, and as levels are gained move at normal speed and without damage through undergrowth, turn invisible, reroll levelchecks to overcome spell resistance,, and finally become imune to poison, gain D 10/cold iron, animals will not attack you, and you can cast shadow walk</li><br>";}
if (has_infernal_bloodline){SWD+="Infernal bloodline sorcerers get +1 on DC for saves when they cast a charm spell, make a creature shaken by touch, and as levels are gained resist fire, get save bonuses vs.poison, call down columns of fire, grow bat wings, and finally be immune to fire and poison, resist acid and cold, and see perfectly in all sorts of darkness</li><br>";}
if (has_undead_bloodline){SWD+="Undead bloodline sorcerers can affect the minds of corporeal undead, cause creatures to become shaken on a touch, and as levels are gained get resistance to cold and damage reduction against nonlethal damage, make skeletal arms come out of the ground, become incorporeal, look undead, and eventually become immune to cold, nonlethal damage, paralysis, and sleep, get DR 5/-, and +2 on saves vs. spells by the undead </li><br>";}
  SWD +="</ul></ul>"
 }


if (wizard_levels>0)
 {
  SWD +="Wizard"
  if (wizard_specialty_name!="Wizard"){SWD +=" (" + wizard_specialty_name + ")"}
  SWD +="<p><ul><li>Familiar / Alertness, etc.; or bound object that can contain one known spell</li><br>"
  SWD +="<li>Bonus Feats (already included)</li><br>"
  SWD +="<li>Armor causes a chance of arcane spell failure only if there is a somatic component.</li><br>"
  if (intelligence>=12){SWD +="<li>High intelligence gains bonus spells daily</li><br>"}
  SWD +="<li>Concentration check: d20 + wizard level + intelligence modifier vs. DC</li><br>"
  if (abjuration_specialist==true){
  SWD +="<li>Specialist gets 1 extra abjuration spell/level/day.  Abjurers can now gain resistance to 5/10/immune to an energy type of their choice, create protective wards, and absorb energy.</li><br>"}
  if (conjuration_specialist==true){
  SWD +="<li>Specialist gets 1 extra conjuration spell/level/day.  Conjurors increase duration of summoning by half their wizard level in rounds; at level 20, one at a time cna be permaent.  Conjurors can now use acid darts and dimensional steps.</li><br>"}
  if (divination_specialist==true){
  SWD +="<li>Specialist gets 1 extra divination spell/level/day.  Diviners always act in the surprise round, and get initiative bonuses.  They can give insight bonuses, and at 8th level always notice being scryed.</li><br>"}

  if (enchantment_specialist==true){
  SWD +="<li>Specialist gets 1 extra enchantment spell/level/day.  Enchanters now get bonuses on bluff, diplomacy, and intimidate, at level 20 reflect enchantments that you save against, daze by touch; at level 8 create aura of despair.</li><br>"}
  if (evocation_specialist==true){
  SWD +="<li>Specialist gets 1 extra evocation spell/level/day.  Evokers now add half theirlevels to evocation damage, minimum +1.  Free force missiles daily, at level 8 can create elemental wall.</li><br>"}
  if (illusion_specialist==true){
  SWD +="<li>Specialist gets 1 extra illusion spell/level/day</li><br>"}
  if (necromancy_specialist==true){
  SWD +="<li>Specialist gets 1 extra necromancy spell/level/day.  Necromancers can now channel energy to command or turn undead without taking a feat.  Touch can make creatures shaken, at level 8 can see life and death.</li><br>"}
  if (transmutation_specialist==true){
  SWD +="<li>Specialist gets 1 extra transmutation spell/level/day.  Transmuters can now transform themselves daily to take a bonus on strength, constitution, or dexterity. They can make telekinetic fists, and at 8th level change shape for a number of rounds equal to wizard level.</li><br>"}
  if (wizard_specialty_name=="Wizard"){SWD +="<li>Non-specializing wizards can now use melee wepons to 30 feet, the return to thehand, int mod to hit, strength mod fordamage.  At level 8, apply one metamagic to a spell you are casting.</li>"}
  SWD +="</ul>"
 }

if (prestige_levels>0){
  SWD +=prestige_class_name + "<ul><p>"; 
  SWD +="<li>Hit dice d" + prestige_hit_point_dice + "</li><br>"
  if (prestige_attack_bonus_progress==1){SWD +="<li>Slow increase in attack bonuses</li><br>"}
  if (prestige_attack_bonus_progress==2){SWD +="<li>Average increase in attack bonuses</li><br>"}
  if (prestige_attack_bonus_progress==3){SWD +="<li>Fast increase in attack bonuses</li><br>"}
  if (prestige_fortitude_save_bonus==1){SWD +="<li>Slow increase in fortitude saves</li><br>"}
  if (prestige_fortitude_save_bonus==2){SWD +="<li>Fast increase in fortitude saves</li><br>"}
  if (prestige_reflex_save_bonus==1){SWD +="<li>Slow increase in reflex saves</li><br>"}
  if (prestige_reflex_save_bonus==2){SWD +="<li>Fast increase in reflex saves</li><br>"}
  if (prestige_will_save_bonus==1){SWD +="<li>Slow increase in will saves</li><br>"}
  if (prestige_will_save_bonus==2){SWD +="<li>Fast increase in will saves</li><br>"}
  SWD +="<li>Base " + prestige_skill_points_per_level + " skill points per level</li><br>"
  if (prestige_bonus_feat_entitlement==0){SWD+="<li>No bonus feats</li><br>"} //qqq
  if (prestige_bonus_feat_entitlement==1){SWD+="<li>One bonus feat</li><br>"} //qqq
  if (prestige_bonus_feat_entitlement==2){SWD+="<li>Two bonus feats</li><br>"} //qqq
  if (prestige_bonus_feat_entitlement==3){SWD+="<li>Three bonus feats</li><br>"} //qqq
  if (prestige_bard_spell_levels>0){SWD +="<li>Additional bard spell levels: " + prestige_bard_spell_levels + "</li><br>"}
  if (prestige_cleric_spell_levels>0){SWD +="<li>Additional cleric spell levels: " + prestige_cleric_spell_levels + "</li><br>"}
  if (prestige_druid_spell_levels>0){SWD +="<li>Additional druid spell levels: " + prestige_druid_spell_levels + "</li><br>"}
  if (prestige_paladin_spell_levels>0){SWD +="<li>Additional paladin spell levels: " + prestige_paladin_spell_levels + "</li><br>"}
  if (prestige_ranger_spell_levels>0){SWD +="<li>Additional ranger spell levels: " + prestige_ranger_spell_levels + "</li><br>"}
  if (prestige_sorcerer_spell_levels>0){SWD +="<li>Additional sorcerer spell levels: " + prestige_sorcerer_spell_levels + "</li><br>"}
  if (prestige_wizard_spell_levels>0){SWD +="<li>Additional wizard spell levels: " + prestige_wizard_spell_levels + "</li>"}
  SWD +="<br>More:"

  SWD +="<p><img src=\"spellbar.gif\"></ul><p>"; 
 }


if (rangercombattrack==1){SWD +="This ranger chose the archery track.<br>"}
if (rangercombattrack==2){SWD +="This ranger chose the two-weapon combat track.<br>"}
   SWD +="<p><table><tr> <td>"
   SWD +="<tr> <td></td> <td><i>Class</i></td> <td><i>HP rolled</i></td> <td></td></tr>\r"
   SWD +="<tr> <td>Level 1:</td> <td>" + ClassName(class01) + "</td> <td align=\"center\">" + newHP01 + "</td> <td></td></tr>\r"
   if (total_levels>=2){SWD +="<tr> <td>Level 2:</td> <td>" + ClassName(class02) + "</td> <td align=\"center\">" + newHP02 + "</td> <td></td></tr>\r"}
   if (total_levels>=3){SWD +="<tr> <td>Level 3:</td> <td>" + ClassName(class03) + "</td> <td align=\"center\">" + newHP03 + "</td> <td></td></tr>\r"}
   if (total_levels>=4){SWD +="<tr> <td>Level 4:</td> <td>" + ClassName(class04) + "</td> <td align=\"center\">" + newHP04 + "</td> <td> + 1 to " + NumberToAbility(upitat04) + "</td></tr>\r"}
   if (total_levels>=5){SWD +="<tr> <td>Level 5:</td> <td>" + ClassName(class05) + "</td> <td align=\"center\">" + newHP05 + "</td> <td></td></tr>\r"}
   if (total_levels>=6){SWD +="<tr> <td>Level 6:</td> <td>" + ClassName(class06) + "</td> <td align=\"center\">" + newHP06 + "</td> <td></td></tr>\r"}
   if (total_levels>=7){SWD +="<tr> <td>Level 7:</td> <td>" + ClassName(class07) + "</td> <td align=\"center\">" + newHP07 + "</td> <td></td></tr>\r"}
   if (total_levels>=8){SWD +="<tr> <td>Level 8:</td> <td>" + ClassName(class08) + "</td> <td align=\"center\">" + newHP08 + "</td> <td> + 1 to " + NumberToAbility(upitat08) + "</td></tr>\r"}
   if (total_levels>=9){SWD +="<tr> <td>Level 9:</td> <td>" + ClassName(class09) + "</td> <td align=\"center\">" + newHP09 + "</td> <td></td></tr>\r"}
   if (total_levels>=10){SWD +="<tr> <td>Level 10:</td> <td>" + ClassName(class10) + "</td> <td align=\"center\">" + newHP10 + "</td> <td></td></tr>\r"}
   if (total_levels>=11){SWD +="<tr> <td>Level 11:</td> <td>" + ClassName(class11) + "</td> <td align=\"center\">" + newHP11 + "</td> <td></td></tr>\r"}
   if (total_levels>=12){SWD +="<tr> <td>Level 12:</td> <td>" + ClassName(class12) + "</td> <td align=\"center\">" + newHP12 + "</td> <td> + 1 to " + NumberToAbility(upitat12) + "</td></tr>\r"}
   if (total_levels>=13){SWD +="<tr> <td>Level 13:</td> <td>" + ClassName(class13) + "</td> <td align=\"center\">" + newHP13 + "</td> <td></td></tr>\r"}
   if (total_levels>=14){SWD +="<tr> <td>Level 14:</td> <td>" + ClassName(class14) + "</td> <td align=\"center\">" + newHP14 + "</td> <td></td></tr>\r"}
   if (total_levels>=15){SWD +="<tr> <td>Level 15:</td> <td>" + ClassName(class15) + "</td> <td align=\"center\">" + newHP15 + "</td> <td></td></tr>\r"}
   if (total_levels>=16){SWD +="<tr> <td>Level 16:</td> <td>" + ClassName(class16) + "</td> <td align=\"center\">" + newHP16 + "</td> <td> + 1 to " + NumberToAbility(upitat16) + "</td></tr>\r"}
   if (total_levels>=17){SWD +="<tr> <td>Level 17:</td> <td>" + ClassName(class17) + "</td> <td align=\"center\">" + newHP17 + "</td> <td></td></tr>\r"}
   if (total_levels>=18){SWD +="<tr> <td>Level 18:</td> <td>" + ClassName(class18) + "</td> <td align=\"center\">" + newHP18 + "</td> <td></td></tr>\r"}
   if (total_levels>=19){SWD +="<tr> <td>Level 19:</td> <td>" + ClassName(class19) + "</td> <td align=\"center\">" + newHP19 + "</td> <td></td></tr>\r"}
   if (total_levels>=20){SWD +="<tr> <td>Level 20:</td> <td>" + ClassName(class20) + "</td> <td align=\"center\">" + newHP20 + "</td> <td> + 1 to " + NumberToAbility(upitat20) + "</td></tr>\r"}
   SWD +="</table>\r<p><table width=100%><tr width=100%><td align=\"center\"><img src=\"portrait.gif\"></td><td align=\"center\"><img src=\"insignia.gif\"></td></tr></table>\r"
   
   if (document.form1.moniker.value==""){SWD +="Equipment:<p><ul><p>"}
   else {SWD +=document.form1.moniker.value + "'s Equipment:<p><ul><p>"}


SWD +="<table><tr><td align=\"right\">"
x=Math.ceil(wt);  
SWD +=x + " lb<br>"; 
if (document.form1.crossbowbolts.selectedIndex>0)
 {x=Math.ceil(1*document.form1.crossbowbolts.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.arrows.selectedIndex>0)
 {x=Math.ceil(3*document.form1.arrows.selectedIndex); 
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.bullets.selectedIndex>0)
 {x=Math.ceil(2*document.form1.bullets.selectedIndex); 
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.slingbullets.selectedIndex>0)
 {x=Math.ceil(5*document.form1.slingbullets.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }

if (document.form1.throwingdaggers.selectedIndex>0)
 {
  if (!small){x=Math.ceil(1*document.form1.throwingdaggers.selectedIndex)}
  if (small){x=Math.ceil(0.5*document.form1.throwingdaggers.selectedIndex)}
  SWD +=x + " lb<br>"; wt +=x; }


if (document.form1.backpack.checked==true)
 {x=2; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.barrel.checked==true)
 {x=30; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.basket.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.bedroll.checked==true)
 {x=5; if (small==true){x=1; }wt +=x; SWD +=x + " lb<br>"}
if (document.form1.bell.checked==true)
 {SWD +="<br>"}
if (document.form1.blanketwinter_list.selectedIndex>0)
 {
  x=Math.ceil(3*document.form1.blanketwinter_list.selectedIndex)
  if (small==true){x=Math.ceil(0.75*document.form1.blanketwinter_list.selectedIndex)}
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.blockandtackle.checked==true)
 {x=5; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.bottle.checked==true)
 {SWD +="<br>"}
if (document.form1.bucket.checked==true)
 {x=2; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.caltrops.checked==true)
 {x=2; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.candle.checked==true)
 {SWD +="<br>"}
if (document.form1.canvas.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.casemaporscroll.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.chain.selectedIndex>0)
 {x=Math.ceil(2*document.form1.chain.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.chalk.checked==true)
 {SWD +="<br>"}
if (document.form1.chest.checked==true)
 {x=25; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.crowbar.checked==true)
 {x=5; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.firewood.selectedIndex>0)
 {x=Math.ceil(20*document.form1.firewood.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.fishhook.checked==true)
 {SWD +="<br>"}
if (document.form1.fishingnet.checked==true)
 {x=5; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.flask.selectedIndex>0)
 {x=Math.ceil(1.5*document.form1.flask.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.flintandsteel.checked==true)
 {SWD +="<br>"}
if (document.form1.grapplinghook.checked==true)
 {x=4; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.hammer.checked==true)
 {x=2; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.inkvial.checked==true)
 {SWD +="<br>"}
if (document.form1.inkpen.checked==true)
 {SWD +="<br>"}
if (document.form1.jugclay.checked==true)
 {x=9; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.ladder.checked==true)
 {x=20; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.lampcommon.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}

if (document.form1.lanternbullseye.checked==true)
 {x=3; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.lanternhooded.checked==true)
 {x=2; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.lock.selectedIndex>0)
 {x=Math.ceil(1*document.form1.lock.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.manacles.selectedIndex>0)
 {x=Math.ceil(2*document.form1.manacles.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.mirror.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.mug.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.oilflask.selectedIndex>0)
 {x=Math.ceil(1*document.form1.oilflask.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.paper.selectedIndex>0)
 {x=Math.ceil(0*document.form1.paper.selectedIndex)
  SWD +="<br>"; wt +=0; }
if (document.form1.parchment.selectedIndex>0)
 {x=Math.ceil(0*document.form1.parchment.selectedIndex)
  SWD +="<br>"; wt +=0; }
if (document.form1.pick.checked==true)
 {x=10; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.pitcher.checked==true)
 {x=5; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.piton.selectedIndex>0)
 {x=Math.ceil(0.5*document.form1.piton.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.pole.checked==true)
 {x=8; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.pot.checked==true)
 {x=10; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.pouch.selectedIndex>0)
 {
  x=Math.ceil(0.5*document.form1.pouch.selectedIndex)
  if (small==true){x=Math.ceil(0.125*document.form1.pouch.selectedIndex)}
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.ram.checked==true)
 {x=20; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.rations.selectedIndex>0)
 {
  x=Math.ceil(1*document.form1.rations.selectedIndex)
  if (small==true){x=Math.ceil(0.25*document.form1.rations.selectedIndex)}
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.ropehempen.selectedIndex>0)
 {x=Math.ceil(10*document.form1.ropehempen.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.ropesilk.selectedIndex>0)
 {x=Math.ceil(5*document.form1.ropesilk.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.sack.selectedIndex>0)
 {x=Math.ceil(0.5*document.form1.sack.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }

if (document.form1.sealingwax.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.sewingneedle.checked==true)
 {SWD +="<br>"}
if (document.form1.signalwhistle.checked==true)
 {SWD +="<br>"}
if (document.form1.signetring.checked==true)
 {SWD +="<br>"}
if (document.form1.sledge.checked==true)
 {x=10; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.soap.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.spadeorshovel.checked==true)
 {x=8; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.spyglass.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.tent.checked==true)
 {x=20; if (small==true){x=5; }wt +=x; SWD +=x + " lb<br>"}
if (document.form1.torch.selectedIndex>0)
 {x=Math.ceil(1*document.form1.torch.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.vialinkorpotion.selectedIndex>0)
 {x=Math.ceil(0.1*document.form1.vialinkorpotion.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.waterskin.selectedIndex>0)
 {
  x=Math.ceil(4*document.form1.waterskin.selectedIndex)
  if (small==true){x=Math.ceil(1*document.form1.waterskin.selectedIndex)}
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.whetstone.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.alchemistlab.checked==true)
 {x=40; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.artisantools.checked==true)
 {x=5; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.climberskit.checked==true)
 {x=5; if (small==true){x=1; }wt +=x; SWD +=x + " lb<br>"}
if (document.form1.disguisekit.checked==true)
 {x=8; if (small==true){x=2; }wt +=x; SWD +=x + " lb<br>"}
if (document.form1.healerkit.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.hollyandmistletoe.checked==true)
 {SWD +="<br>"}
if (document.form1.holysymbolwooden.checked==true)
 {SWD +="<br>"}
if (document.form1.holysymbolsilver.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.hourglass.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.magnifyingglass.checked==true)
 {SWD +="<br>"}
if (document.form1.musicalinstrument.checked==true)
 {x=3; if (small==true){x=1; }wt +=x; SWD +=x + " lb<br>"}
if (document.form1.scale.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.spellcomponentpouch.checked==true)
 {x=2; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.spellbook.selectedIndex>0)
 {x=Math.ceil(3*document.form1.spellbook.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
if (document.form1.thievestools.checked==true)
 {x=1; wt +=x; SWD +=x + " lb<br>"}
if (document.form1.tool.selectedIndex>0)
 {x=Math.ceil(2*document.form1.tool.selectedIndex)
  SWD +=x + " lb<br>"; wt +=x; }
x=Math.ceil(wt);  
SWD +="_____<br>" + x + " lb"; 


SWD +="</td><td>"
SWD +="Weapons / Armor / Shield (from above)<br>"; 
if (document.form1.crossbowbolts.selectedIndex>0)
 {SWD +="Crossbow bolts (quiver of 10) x" + document.form1.crossbowbolts.selectedIndex + "<br>"; }
if (document.form1.arrows.selectedIndex>0)
 {SWD +="Arrows (quiver of 20) x" + document.form1.arrows.selectedIndex + "<br>"; }
if (document.form1.bullets.selectedIndex>0)
 {SWD +="Bullets (10) x" + document.form1.bullets.selectedIndex + "<br>"; }
if (document.form1.slingbullets.selectedIndex>0)
 {SWD +="Sling bullets (group of 10) x" + document.form1.slingbullets.selectedIndex + "<br>"; }
if (document.form1.throwingdaggers.selectedIndex>0)
 {SWD +="Throwing daggers x" + document.form1.throwingdaggers.selectedIndex + "<br>"; }


if (document.form1.backpack.checked==true)
 {SWD +="Backpack<br>"}
if (document.form1.barrel.checked==true)
 {SWD +="Barrel<br>"}
if (document.form1.basket.checked==true)
 {SWD +="Basket<br>"}
if (document.form1.bedroll.checked==true)
 {SWD +="Bedroll<br>"}
if (document.form1.bell.checked==true)
 {SWD +="Bell<br>"}
if (document.form1.blanketwinter_list.selectedIndex>0)
 {SWD +="Blanket, winter x" + document.form1.blanketwinter_list.selectedIndex + "<br>"; }
if (document.form1.blockandtackle.checked==true)
 {SWD +="Block and tackle<br>"}
if (document.form1.bottle.checked==true)
 {SWD +="Bottle<br>"}
if (document.form1.bucket.checked==true)
 {SWD +="Bucket<br>"}
if (document.form1.caltrops.checked==true)
 {SWD +="Caltrops<br>"}
if (document.form1.candle.checked==true)
 {SWD +="Candle<br>"}
if (document.form1.canvas.checked==true)
 {SWD +="Canvas (10 x 10)<br>"}
if (document.form1.casemaporscroll.checked==true)
 {SWD +="Case (for map or scroll)<br>"}
if (document.form1.chain.selectedIndex>0)
 {SWD +="Chain (10 feet) x" + document.form1.chain.selectedIndex + "<br>"; }
if (document.form1.chalk.checked==true)
 {SWD +="Chalk<br>"}
if (document.form1.chest.checked==true)
 {SWD +="Chest<br>"}
if (document.form1.crowbar.checked==true)
 {SWD +="Crowbar<br>"}
if (document.form1.firewood.selectedIndex>0)
 {SWD +="Firewood (1 day) x" + document.form1.firewood.selectedIndex + "<br>"; }
if (document.form1.fishhook.checked==true)
 {SWD +="Fishhook<br>"}
if (document.form1.fishingnet.checked==true)
 {SWD +="Fishing net<br>"}
if (document.form1.flask.selectedIndex>0)
 {SWD +="Flasks x" + document.form1.flask.selectedIndex + "<br>"; }
if (document.form1.flintandsteel.checked==true)
 {SWD +="Flint and steel<br>"}
if (document.form1.grapplinghook.checked==true)
 {SWD +="Grappling hook<br>"}
if (document.form1.hammer.checked==true)
 {SWD +="Hammer<br>"}
if (document.form1.inkvial.checked==true)
 {SWD +="Ink vial<br>"}
if (document.form1.inkpen.checked==true)
 {SWD +="Ink pen<br>"}
if (document.form1.jugclay.checked==true)
 {SWD +="Jug (clay)<br>"}
if (document.form1.ladder.checked==true)
 {SWD +="Ladder<br>"}
if (document.form1.lampcommon.checked==true)
 {SWD +="Lamp (common)<br>"}
if (document.form1.lanternbullseye.checked==true)
 {SWD +="Lantern (bullseye)<br>"}
if (document.form1.lanternhooded.checked==true)
 {SWD +="Lantern (hooded)<br>"}
if (document.form1.lock.selectedIndex>0)
 {SWD +="Locks x" + document.form1.lock.selectedIndex + "<br>"; }
if (document.form1.manacles.selectedIndex>0)
 {SWD +="Manacles x" + document.form1.manacles.selectedIndex + "<br>"; }
if (document.form1.mirror.checked==true)
 {SWD +="Mirror<br>"}
if (document.form1.mug.checked==true)
 {SWD +="Mug<br>"}
if (document.form1.oilflask.selectedIndex>0)
 {SWD +="Oil flasks x" + document.form1.oilflask.selectedIndex + "<br>"; }
if (document.form1.paper.selectedIndex>0)
 {SWD +="Paper sheets x" + document.form1.paper.selectedIndex + "<br>"; }
if (document.form1.parchment.selectedIndex>0)
 {SWD +="Parchment sheets x" + document.form1.parchment.selectedIndex + "<br>"; }
if (document.form1.pick.checked==true)
 {SWD +="Pick<br>"}
if (document.form1.pitcher.checked==true)
 {SWD +="Pitcher<br>"}
if (document.form1.piton.selectedIndex>0)
 {SWD +="Pitons x" + document.form1.piton.selectedIndex + "<br>"; }
if (document.form1.pole.checked==true)
 {SWD +="Pole<br>"}
if (document.form1.pot.checked==true)
 {SWD +="Pot<br>"}
if (document.form1.pouch.selectedIndex>0)
 {SWD +="Pouch x" + document.form1.pouch.selectedIndex + "<br>"; }
if (document.form1.ram.checked==true)
 {SWD +="Ram<br>"}
if (document.form1.rations.selectedIndex>0)
 {SWD +="Rations (1 day) x" + document.form1.rations.selectedIndex + "<br>"; }
if (document.form1.ropehempen.selectedIndex>0)
 {SWD +="Rope (50', hempen) x" + document.form1.ropehempen.selectedIndex + "<br>"; }
if (document.form1.ropesilk.selectedIndex>0)
 {SWD +="Rope (50', silk) x" + document.form1.ropesilk.selectedIndex + "<br>"; }
if (document.form1.sack.selectedIndex>0)
 {SWD +="Sacks x" + document.form1.sack.selectedIndex + "<br>"; }

if (document.form1.sealingwax.checked==true)
 {SWD +="Sealing wax<br>"}
if (document.form1.sewingneedle.checked==true)
 {SWD +="Sewing needle<br>"}
if (document.form1.signalwhistle.checked==true)
 {SWD +="Signal whistle<br>"}
if (document.form1.signetring.checked==true)
 {SWD +="Signet ring<br>"}
if (document.form1.sledge.checked==true)
 {SWD +="Sledge<br>"}
if (document.form1.soap.checked==true)
 {SWD +="Soap<br>"}
if (document.form1.spadeorshovel.checked==true)
 {SWD +="Spade / shovel<br>"}
if (document.form1.spyglass.checked==true)
 {SWD +="Spyglass<br>"}
if (document.form1.tent.checked==true)
 {SWD +="Tent<br>"}
if (document.form1.torch.selectedIndex>0)
 {SWD +="Torches x" + document.form1.torch.selectedIndex + "<br>"; }
if (document.form1.vialinkorpotion.selectedIndex>0)
 {SWD +="Vial (for ink or potions) x" + document.form1.vialinkorpotion.selectedIndex + "<br>"; }
if (document.form1.waterskin.selectedIndex>0)
 {SWD +="Waterskins x" + document.form1.waterskin.selectedIndex + "<br>"; }
if (document.form1.whetstone.checked==true)
 {SWD +="Whetstone<br>"}
if (document.form1.alchemistlab.checked==true)
 {SWD +="Alchemist lab<br>"}
if (document.form1.artisantools.checked==true)
 {SWD +="Artisan tools<br>"}
if (document.form1.climberskit.checked==true)
 {SWD +="Climber's kit<br>"}
if (document.form1.disguisekit.checked==true)
 {SWD +="Disguise kit<br>"}
if (document.form1.healerkit.checked==true)
 {SWD +="Healer kit<br>"}
if (document.form1.hollyandmistletoe.checked==true)
 {SWD +="Holly and mistletoe<br>"}
if (document.form1.holysymbolwooden.checked==true)
 {SWD +="Holy symbol (wooden)<br>"}
if (document.form1.holysymbolsilver.checked==true)
 {SWD +="Holy symbol (silver)<br>"}
if (document.form1.hourglass.checked==true)
 {SWD +="Hourglass<br>"}
if (document.form1.magnifyingglass.checked==true)
 {SWD +="Magnifying glass<br>"}
if (document.form1.musicalinstrument.checked==true)
 {SWD +="Musical instrument<br>"}
if (document.form1.scale.checked==true)
 {SWD +="Scale, merchant's<br>"}
if (document.form1.spellcomponentpouch.checked==true)
 {SWD +="Spell component pouch<br>"}
if (document.form1.spellbook.selectedIndex>0)
 {SWD +="Spellbook x" + document.form1.spellbook.selectedIndex + "<br>"; }
if (document.form1.thievestools.checked==true)
 {SWD +="Thieves' tools<br>"}
if (document.form1.tool.selectedIndex>0)
 {SWD +="Tools (miscellaneous) x" + document.form1.tool.selectedIndex + "<br>"; }


SWD +="<br>Total<br></td></tr></table><p>"


if (document.form1.additionalEquipment.value!="")
 {SWD+="Also...<p><ul>"+document.form1.additionalEquipment.value+"</ul><p>";
 }


SWD +="<p></ul><img src=\"spellbar.gif\">"
//   if (document.form1.moniker.value==""){SWD +="More about this character:<p>"}
//   else {SWD +="More about " + document.form1.moniker.value + ":"}
//   SWD +="</body></html>"
if (ac_species_name!="")
{
 SWD+="Animal companion: "+ac_species_name+"<ul>";
stringy=modifier_number(ac_strength);if (modifier_number(ac_strength)>=0){stringy="+"+stringy};SWD+="Strength "+ac_strength+"<br>";
 SWD+="Constitution "+ac_constitution+"<br>";
 SWD+="Dexterity "+ac_dexterity+"<br>";
 SWD+="Intelligence "+ac_intelligence+"<br>";
 SWD+="Wisdom "+ac_wisdom+"<br>";
 SWD+="Charisma "+ac_charisma+"<br>";
 SWD+="Total Hit Points: "+ac_hp+"<br>";
 if (ac_small){SWD+="Size: Small<br>"} else
 if (ac_large){SWD+="Size: Large<br>"} else
 {SWD+="Size: Medium<br>"} 
 SWD+="Speed: "+ac_speed+"<br>";


 

 x=ac_bab+ac_natural_armor;
 if (document.form1.ac_dodge_box.checked){x++;}
 SWD+="Natural Armor Class: +"+x+" = "+ac_bab+" [base] + "+ac_natural_armor+" [natural armor]";
 if (document.form1.ac_dodge_box.checked){SWD+=" +1 [dodge] ";}
 SWD+=" -- add size, dexterity and armor modifiers as applicable)<br>";
 
 x=modifier_number(ac_dexterity);if (document.form1.ac_improvedinitiative_box.checked){x+=4;}
 SWD+="Initiative modifier: "+x+" = "+modifier_number(ac_dexterity)+" [dexterity]";
if (document.form1.ac_improvedinitiative_box.checked){SWD+=" + 4 [improved initiative]";}
 SWD+="<br>";


 x=ac_fort+modifier_number(ac_constitution);if (document.form1.ac_greatfortitude_box.checked){x+=2;}
 SWD+="Fortitude save: "+x+" = "+ac_fort+" [base] +"+modifier_number(ac_constitution)+" [constitution]";
if (document.form1.ac_greatfortitude_box.checked){SWD+=" + 2 [great fortitude]";}
 SWD+="<br>";



 x=ac_reflex+modifier_number(ac_dexterity);if (document.form1.ac_lightningreflexes_box.checked){x+=2;}
 SWD+="Reflex save: "+x+" = "+ac_reflex+" [base] +"+modifier_number(ac_dexterity)+" [dexterity]";
if (document.form1.ac_lightningreflexes_box.checked){SWD+=" + 2 [lightning reflexes]";}
 SWD+="<br>";



 x=ac_will+modifier_number(ac_wisdom);if (document.form1.ac_ironwill_box.checked){x+=2;}
 SWD+="Will save: "+x+" = "+ac_will+" [base] +"+modifier_number(ac_wisdom)+" [wisdom]";
if (document.form1.ac_ironwill_box.checked){SWD+=" + 2 [iron will]";}
 SWD+="<br>";



 x=ac_bab+modifier_number(ac_strength);
 SWD+="Attack: +"+x+" = +"+ac_bab+" [base] + "+modifier_number(ac_strength)+" [strength]; "+ac_attacks+"<br>";


SWD +="Combat Maneuver Bonus: "+ ac_CMB_string_1 +" "+ ac_CMB_string_2 + "<br>\r"
SWD +="Combat Maneuver Defense: "+ac_CMD_string_1 + " " + ac_CMD_string_2 + "<br>\r"


 SWD+="Special: "+ac_special+"<br>";

 x=document.form1.ac_acrobatics_list.selectedIndex+modifier_number(ac_dexterity)
 if (document.form1.ac_skillfocusacrobatics_box.checked){x+=3;}
 if (document.form1.ac_acrobatics_list.selectedIndex>0){x+=3;}
 if (document.form1.ac_acrobatic_box.checked){x+=2;}
 SWD+="Skill: Acrobatics "+x+" ["+modifier_number(ac_dexterity)+" dexterity + "+document.form1.ac_acrobatics_list.selectedIndex+" ranks";
 if (document.form1.ac_acrobatics_list.selectedIndex>0){SWD+=" + 3 class skill ";}
 if (document.form1.ac_skillfocusacrobatics_box.checked){SWD+=" + 3 skill focus ";}
 if (document.form1.ac_acrobatic_box.checked){SWD+=" + 2 acrobatic";}
 SWD+="]<br>";




 x=document.form1.ac_climb_list.selectedIndex+modifier_number(ac_strength)
 if (document.form1.ac_skillfocusclimb_box.checked){x+=3;}
 if (document.form1.ac_climb_list.selectedIndex>0){x+=3;}
 if (document.form1.ac_athletic_box.checked){x+=2;}
 SWD+="Skill: Climb "+x+" ["+modifier_number(ac_strength)+" strength + "+document.form1.ac_climb_list.selectedIndex+" ranks";
 if (document.form1.ac_climb_list.selectedIndex>0){SWD+=" + 3 class skill ";}
 if (document.form1.ac_skillfocusclimb_box.checked){SWD+=" + 3 skill focus ";}
 if (document.form1.ac_athletic_box.checked){SWD+=" + 2 athletic";}
 SWD+="]<br>";



 x=document.form1.ac_escapeartist_list.selectedIndex+modifier_number(ac_dexterity)
 if (document.form1.ac_skillfocusescapeartist_box.checked){x+=3;}
 if (document.form1.ac_stealthy_box.checked){x+=2;}
// if (document.form1.ac_escapeartist_list.selectedIndex>0){x+=3;}
 SWD+="Skill: Escape Artist "+x+" ["+modifier_number(ac_dexterity)+" dexterity + "+document.form1.ac_escapeartist_list.selectedIndex+" ranks";
 if (document.form1.ac_stealthy_box.checked){x+=2;}
// if (document.form1.ac_escapeartist_list.selectedIndex>0){SWD+=" + 3 class skill ";}
 if (document.form1.ac_skillfocusescapeartist_box.checked){SWD+=" + 3 skill focus ";}
 if (document.form1.ac_stealthy_box.checked){SWD+=" + 2 stealthy";}
 SWD+="]<br>";



 x=document.form1.ac_fly_list.selectedIndex+modifier_number(ac_dexterity)
 if (document.form1.ac_skillfocusfly_box.checked){x+=3;}
 if (document.form1.ac_fly_list.selectedIndex>0){x+=3;}
 if (document.form1.ac_acrobatic_box.checked){x+=2;}
 SWD+="Skill: Fly "+x+" ["+modifier_number(ac_dexterity)+" dexterity + "+document.form1.ac_fly_list.selectedIndex+" ranks";
 if (document.form1.ac_fly_list.selectedIndex>0){SWD+=" + 3 class skill ";}
 if (document.form1.ac_skillfocusfly_box.checked){SWD+=" + 3 skill focus ";}
 if (document.form1.ac_acrobatic_box.checked){SWD+=" + 2 acrobatic";}
 SWD+="]<br>";



 x=document.form1.ac_intimidate_list.selectedIndex+modifier_number(ac_charisma)
 if (document.form1.ac_skillfocusintimidate_box.checked){x+=3;}
 if (document.form1.ac_intimidatingprowess_box.checked){x+=modifier_number(ac_strength);}
// if (document.form1.ac_intimidate_list.selectedIndex>0){x+=3;}
 SWD+="Skill: Intimidate "+x+" ["+modifier_number(ac_charisma)+" charisma + "+document.form1.ac_intimidate_list.selectedIndex+" ranks";
// if (document.form1.ac_intimidate_list.selectedIndex>0){SWD+=" + 3 class skill ";}
 if (document.form1.ac_skillfocusintimidate_box.checked){SWD+=" + 3 skill focus ";}
 if (document.form1.ac_intimidatingprowess_box.checked){SWD+=" + "+modifier_number(ac_strength)+" intimidating prowess";}
 SWD+="]<br>";



 x=document.form1.ac_perception_list.selectedIndex+modifier_number(ac_wisdom)
 if (document.form1.ac_skillfocusperception_box.checked){x+=3;}
 if (document.form1.ac_perception_list.selectedIndex>0){x+=3;}
 SWD+="Skill: Perception "+x+" ["+modifier_number(ac_wisdom)+" wisdom + "+document.form1.ac_perception_list.selectedIndex+" ranks";
 if (document.form1.ac_perception_list.selectedIndex>0){SWD+=" + 3 class skill ";}
 if (document.form1.ac_skillfocusperception_box.checked){SWD+=" + 3 skill focus ";}
 SWD+="]<br>";



 x=document.form1.ac_stealth_list.selectedIndex+modifier_number(ac_dexterity)
 if (document.form1.ac_skillfocusstealth_box.checked){x+=3;}
 if (document.form1.ac_stealth_list.selectedIndex>0){x+=3;}
 if (document.form1.ac_stealthy_box.checked){x+=2;}
 SWD+="Skill: Stealth "+x+" ["+modifier_number(ac_dexterity)+" dexterity + "+document.form1.ac_stealth_list.selectedIndex+" ranks";
 if (document.form1.ac_stealth_list.selectedIndex>0){SWD+=" + 3 class skill ";}
 if (document.form1.ac_skillfocusstealth_box.checked){SWD+=" + 3 skill focus ";}
 if (document.form1.ac_stealthy_box.checked){SWD+=" + 2 stealthy";}
 SWD+="]<br>";



 x=document.form1.ac_survival_list.selectedIndex+modifier_number(ac_wisdom)
 if (document.form1.ac_skillfocussurvival_box.checked){x+=3;}
 if (document.form1.ac_skillfocussurvival_box.checked){x+=3;}
 SWD+="Skill: Survival "+x+" ["+modifier_number(ac_wisdom)+" wisdom + "+document.form1.ac_survival_list.selectedIndex+" ranks";
 if (document.form1.ac_survival_list.selectedIndex>0){SWD+=" + 3 class skill ";}
 if (document.form1.ac_skillfocussurvival_box.checked){SWD+=" + 3 skill focus ";}
 SWD+="]<br>";


 x=document.form1.ac_swim_list.selectedIndex+modifier_number(ac_strength)
 if (document.form1.ac_skillfocusswim_box.checked){x+=3;}
 if (document.form1.ac_swim_list.selectedIndex>0){x+=3;}
 if (document.form1.ac_athletic_box.checked){x+=2;}
 SWD+="Skill: Swim "+x+" ["+modifier_number(ac_strength)+" strength + "+document.form1.ac_swim_list.selectedIndex+" ranks";
 if (document.form1.ac_swim_list.selectedIndex>0){SWD+=" + 3 class skill ";}
 if (document.form1.ac_skillfocusswim_box.checked){SWD+=" + 3 skill focus ";}
 if (document.form1.ac_athletic_box.checked){SWD+=" + 2 athletic";}
 SWD+="]<br>";




if (document.form1.ac_acrobatic_box.checked){SWD+="Feat: Acrobatic<br>\r";}
if (document.form1.ac_agilemaneuvers_box.checked){SWD+="Feat: Agile Maneuvers<br>\r";}
if (document.form1.ac_armorproficiencylight_box.checked){SWD+="Feat: Armor Proficiency -- Light<br>\r";}
if (document.form1.ac_armorproficiencymedium_box.checked){SWD+="Feat: Armor Proficiency -- Medium<br>\r";}
if (document.form1.ac_armorproficiencyheavy_box.checked){SWD+="Feat: Armor Proficiency -- Heavy<br>\r";}
if (document.form1.ac_athletic_box.checked){SWD+="Feat: Athletic<br>\r";}
if (document.form1.ac_blindfight_box.checked){SWD+="Feat: Blind Fight<br>\r";}
if (document.form1.ac_combatreflexes_box.checked){SWD+="Feat: Combat Reflexes<br>\r";}
if (document.form1.ac_diehard_box.checked){SWD+="Feat: Die Hard<br>\r";}
if (document.form1.ac_dodge_box.checked){SWD+="Feat: Dodge<br>\r";}
if (document.form1.ac_endurance_box.checked){SWD+="Feat: Endurance<br>\r";}
if (document.form1.ac_greatfortitude_box.checked){SWD+="Feat: Great Fortitude<br>\r";}
if (document.form1.ac_improvedbullrush_box.checked){SWD+="Feat: Improved Bull Rush<br>\r";}
if (document.form1.ac_improvedinitiative_box.checked){SWD+="Feat: Improved Initiative<br>\r";}
if (document.form1.ac_improvednaturalarmor_list.selectedIndex>0){SWD+="Feat: Improved Natural Armor x "+document.form1.ac_improvednaturalarmor_list.selectedIndex+"<br>\r";}
if (document.form1.ac_improvednaturalattack_box.checked){SWD+="Feat: Improved Natural Attack -- choose and hand-edit<br>\r";}
if (document.form1.ac_improvedoverrun_box.checked){SWD+="Feat: Improved Overrun<br>\r";}
if (document.form1.ac_intimidatingprowess_box.checked){SWD+="Feat: Intimidating Prowess<br>\r";}
if (document.form1.ac_ironwill_box.checked){SWD+="Feat: Iron Will<br>\r";}
if (document.form1.ac_lightningreflexes_box.checked){SWD+="Feat: Lightning Reflexes<br>\r";}
if (document.form1.ac_mobility_box.checked){SWD+="Feat: Mobility<br>\r";}
if (document.form1.ac_powerattack_box.checked){SWD+="Feat: Power Attack<br>\r";}
if (document.form1.ac_run_box.checked){SWD+="Feat: Run<br>\r";}
if (document.form1.ac_skillfocusacrobatics_box.checked){SWD+="Feat: Skill Focus -- Acrobatics<br>\r";}
if (document.form1.ac_skillfocusclimb_box.checked){SWD+="Feat: Skill Focus -- Climb<br>\r";}
if (document.form1.ac_skillfocusescapeartist_box.checked){SWD+="Feat: Skill Focus -- Escape Artist<br>\r";}
if (document.form1.ac_skillfocusfly_box.checked){SWD+="Feat: Skill Focus -- Fly<br>\r";}
if (document.form1.ac_skillfocusintimidate_box.checked){SWD+="Feat: Skill Focus -- Intimidate<br>\r";}
if (document.form1.ac_skillfocusperception_box.checked){SWD+="Feat: Skill Focus -- Perception<br>\r";}
if (document.form1.ac_skillfocusstealth_box.checked){SWD+="Feat: Skill Focus -- Stealth<br>\r";}
if (document.form1.ac_skillfocussurvival_box.checked){SWD+="Feat: Skill Focus -- Survival<br>\r";}
if (document.form1.ac_skillfocusswim_box.checked){SWD+="Feat: Skill Focus -- Swim<br>\r";}
if (document.form1.ac_springattack_box.checked){SWD+="Feat: Spring Attack<br>\r";}
if (document.form1.ac_stealthy_box.checked){SWD+="Feat: Stealthy<br>\r";}
if (document.form1.ac_toughness_box.checked){SWD+="Feat: Toughness<br>\r";}
if (document.form1.ac_weaponfinesse_box.checked){SWD+="Feat: Weapon Finesse<br>\r";}
if (document.form1.ac_weaponfocus_box.checked){SWD+="Feat: Weapon Focus<br>\r";}
SWD+="Link, share spells (level 1)<br>"
SWD+="Evasion (level 3)<br>"
SWD+="Devotion (level 6)<br>"
SWD+="Multiattack (level 9)<br>"
SWD+="Improved evasion (level 15)<br>"


 SWD+="</ul>";
}
 
   if (document.form1.moniker.value==""){SWD+="More about this character:<ul><p>"}
   else {SWD+="More about "+document.form1.moniker.value+":<p><ul>"}
   SWD+=document.form1.moreAbout.value;
   SWD+="</ul></body></html>";


   SecondWindow.document.write(SWD)
   SecondWindow.document.close()

 }




  
function RewriteLockedAbilityAssignments(){
 ClearAllAbilityAssignments(); 
 document.form1.firststat[firststatwentto].checked=true; 
 document.form1.secondstat[secondstatwentto].checked=true; 
 document.form1.thirdstat[thirdstatwentto].checked=true; 
 document.form1.fourthstat[fourthstatwentto].checked=true; 
 document.form1.fifthstat[fifthstatwentto].checked=true; 
 document.form1.sixthstat[sixthstatwentto].checked=true; 
 }

function setCase (caseSelection){
 if (caseSelection=="upper"){
  document.form1.moniker.value=
   document.form1.moniker.value.toUpperCase()
  document.form1.playerName.value=
   document.form1.playerName.value.toUpperCase()
  }
 else {
  document.form1.firstName.value=
    document.form1.firstName.value.toLowerCase()
  document.form1.lastName.value=
    document.form1.lastName.value.toLowerCase()
 }
 }

function RememberFeats(){
  document.form1.acrobatic.checked=has_acrobatic; 
  document.form1.agilemaneuvers.checked=has_agilemaneuvers; 
  document.form1.alertness.checked=has_alertness; 
  document.form1.animalaffinity.checked=has_animalaffinity; 
  document.form1.arcanestrike.checked=has_arcanestrike; 
  document.form1.armorproficiencylight.checked=has_armorproficiencylight; 
  document.form1.armorproficiencymedium.checked=has_armorproficiencymedium; 
  document.form1.armorproficiencyheavy.checked=has_armorproficiencyheavy; 
  document.form1.athletic.checked=has_athletic; 
  document.form1.augmentsummoning.checked=has_augmentsummoning; 
  document.form1.blindfight.checked=has_blindfight; 
  document.form1.combatcasting.checked=has_combatcasting; 
  document.form1.combatexpertise.checked=has_combatexpertise; 
  document.form1.improveddisarm.checked=has_improveddisarm; 
  document.form1.improvedfeint.checked=has_improvedfeint; 
  document.form1.improvedtrip.checked=has_improvedtrip; 
  document.form1.whirlwindattack.checked=has_whirlwindattack; 
  document.form1.combatreflexes.checked=has_combatreflexes; 
  document.form1.deceitful.checked=has_deceitful; 
  document.form1.defthands.checked=has_defthands; 
  document.form1.dodge.checked=has_dodge; 
  document.form1.mobility.checked=has_mobility; 
  document.form1.springattack.checked=has_springattack; 
  document.form1.endurance.checked=has_endurance; 
  document.form1.diehard.checked=has_diehard; 
  document.form1.eschewmaterials.checked=has_eschewmaterials; 
  document.form1.exoticweaponproficiency.checked=has_exoticweaponproficiency; 
  document.form1.extrachannel_list.selectedIndex=has_extrachannel; 
  document.form1.extraki_list.selectedIndex=has_extraki; 
  document.form1.extralayonhands_list.selectedIndex=has_extralayonhands; 
  document.form1.extramercy_list.selectedIndex=has_extramercy; 
  document.form1.extraperformance_list.selectedIndex=has_extraperformance; 
  document.form1.extrarage_list.selectedIndex=has_extrarage; 
  document.form1.greatfortitude.checked=has_greatfortitude; 
  document.form1.improvedcounterspell.checked=has_improvedcounterspell; 
  document.form1.improvedcritical_list.selectedIndex=has_improvedcritical; 
  document.form1.improvedinitiative.checked=has_improvedinitiative; 
  document.form1.improvedunarmedstrike.checked=has_improvedunarmedstrike; 
  document.form1.improvedgrapple.checked=has_improvedgrapple; 
  document.form1.deflectarrows.checked=has_deflectarrows; 
  document.form1.snatcharrows.checked=has_snatcharrows; 
  document.form1.stunningfist.checked=has_stunningfist; 
  document.form1.ironwill.checked=has_ironwill; 
  document.form1.leadership.checked=has_leadership; 
  document.form1.lightningreflexes.checked=has_lightningreflexes; 
  document.form1.magicalaptitude.checked=has_magicalaptitude; 
  document.form1.martialweaponproficiency.checked=has_martialweaponproficiency; 
  document.form1.mountedcombat.checked=has_mountedcombat; 
  document.form1.mountedarchery.checked=has_mountedarchery; 
  document.form1.ridebyattack.checked=has_ridebyattack; 
  document.form1.spiritedcharge.checked=has_spiritedcharge; 
  document.form1.trample.checked=has_trample; 
  document.form1.naturalspell.checked=has_naturalspell; 
  document.form1.persuasive.checked=has_persuasive; 
  document.form1.pointblankshot.checked=has_pointblankshot; 
  document.form1.farshot.checked=has_farshot; 
  document.form1.preciseshot.checked=has_preciseshot; 
  document.form1.rapidshot.checked=has_rapidshot; 
  document.form1.manyshot.checked=has_manyshot; 
  document.form1.shotontherun.checked=has_shotontherun; 
  document.form1.improvedpreciseshot.checked=has_improvedpreciseshot; 
  document.form1.powerattack.checked=has_powerattack; 
  document.form1.cleave.checked=has_cleave; 
  document.form1.greatcleave.checked=has_greatcleave; 
  document.form1.improvedbullrush.checked=has_improvedbullrush; 
  document.form1.improvedoverrun.checked=has_improvedoverrun; 
  document.form1.improvedsunder.checked=has_improvedsunder; 
  document.form1.quickdraw.checked=has_quickdraw; 
  document.form1.rapidreload.checked=has_rapidreload; 
  document.form1.run.checked=has_run; 
  document.form1.selfsufficient.checked=has_selfsufficient; 
  document.form1.shieldproficiency.checked=has_shieldproficiency; 
  document.form1.improvedshieldbash.checked=has_improvedshieldbash; 
  document.form1.towershieldproficiency.checked=has_towershieldproficiency; 
  document.form1.simpleweaponproficiency.checked=has_simpleweaponproficiency; 
  document.form1.skillfocusappraise.checked=has_skillfocusappraise; 
  document.form1.skillfocusbluff.checked=has_skillfocusbluff
  document.form1.skillfocusclimb.checked=has_skillfocusclimb
  document.form1.skillfocusacrobatics.checked=has_skillfocusacrobatics
  document.form1.skillfocuscraft_1.checked=has_skillfocuscraft_1
  document.form1.skillfocuscraft_2.checked=has_skillfocuscraft_2
  document.form1.skillfocuscraft_3.checked=has_skillfocuscraft_3
  document.form1.skillfocusdiplomacy.checked=has_skillfocusdiplomacy
  document.form1.skillfocusdisabledevice.checked=has_skillfocusdisabledevice
  document.form1.skillfocusdisguise.checked=has_skillfocusdisguise
  document.form1.skillfocusescapeartist.checked=has_skillfocusescapeartist
  document.form1.skillfocusfly.checked=has_skillfocusfly
  document.form1.skillfocushandleanimal.checked=has_skillfocushandleanimal
  document.form1.skillfocusheal.checked=has_skillfocusheal
  document.form1.skillfocusstealth.checked=has_skillfocusstealth
//  document.form1.skillfocushypnosis.checked=has_skillfocushypnosis
  document.form1.skillfocusintimidate.checked=has_skillfocusintimidate
  document.form1.skillfocusknowledgearcana.checked=has_skillfocusknowledgearcana
  document.form1.skillfocusknowledgeengineering.checked=has_skillfocusknowledgeengineering
  document.form1.skillfocusknowledgedungeoneering.checked=has_skillfocusknowledgedungeoneering
  document.form1.skillfocusknowledgegeography.checked=has_skillfocusknowledgegeography
  document.form1.skillfocusknowledgehistory.checked=has_skillfocusknowledgehistory
  document.form1.skillfocusknowledgelocal.checked=has_skillfocusknowledgelocal
  document.form1.skillfocusknowledgenature.checked=has_skillfocusknowledgenature
  document.form1.skillfocusknowledgenobility.checked=has_skillfocusknowledgenobility
  document.form1.skillfocusknowledgereligion.checked=has_skillfocusknowledgereligion
  document.form1.skillfocusknowledgeplanes.checked=has_skillfocusknowledgeplanes
  document.form1.skillfocusperception.checked=has_skillfocusperception
  document.form1.skillfocuslinguistics.checked=has_skillfocuslinguistics
  document.form1.skillfocusperform_1.checked=has_skillfocusperform_1
  document.form1.skillfocusperform_2.checked=has_skillfocusperform_2
  document.form1.skillfocusperform_3.checked=has_skillfocusperform_3
  document.form1.skillfocusperform_4.checked=has_skillfocusperform_4
  document.form1.skillfocusperform_5.checked=has_skillfocusperform_5
  document.form1.skillfocusprofession.checked=has_skillfocusprofession
  document.form1.skillfocusride.checked=has_skillfocusride
  document.form1.skillfocussensemotive.checked=has_skillfocussensemotive
  document.form1.skillfocussleightofhand.checked=has_skillfocussleightofhand
  document.form1.skillfocusspellcraft.checked=has_skillfocusspellcraft
  document.form1.skillfocussurvival.checked=has_skillfocussurvival
  document.form1.skillfocusswim.checked=has_skillfocusswim
  document.form1.skillfocususemagicdevice.checked=has_skillfocususemagicdevice



  document.form1.spellfocusabjuration.checked=has_spellfocusabjuration; 
  document.form1.spellfocusconjuration.checked=has_spellfocusconjuration; 
  document.form1.spellfocusdivination.checked=has_spellfocusdivination; 
  document.form1.spellfocusenchantment.checked=has_spellfocusenchantment; 
  document.form1.spellfocusevocation.checked=has_spellfocusevocation; 
  document.form1.spellfocusillusion.checked=has_spellfocusillusion; 
  document.form1.spellfocusnecromancy.checked=has_spellfocusnecromancy; 
  document.form1.spellfocustransmutation.checked=has_spellfocustransmutation; 
  
  document.form1.greaterspellfocusabjuration.checked=has_greaterspellfocusabjuration; 
  document.form1.greaterspellfocusconjuration.checked=has_greaterspellfocusconjuration; 
  document.form1.greaterspellfocusdivination.checked=has_greaterspellfocusdivination; 
  document.form1.greaterspellfocusenchantment.checked=has_greaterspellfocusenchantment; 
  document.form1.greaterspellfocusevocation.checked=has_greaterspellfocusevocation; 
  document.form1.greaterspellfocusillusion.checked=has_greaterspellfocusillusion; 
  document.form1.greaterspellfocusnecromancy.checked=has_greaterspellfocusnecromancy; 
  document.form1.greaterspellfocustransmutation.checked=has_greaterspellfocustransmutation; 
  document.form1.spellmastery_list.selectedIndex=has_spellmastery; 
  document.form1.spellpenetration.checked=has_spellpenetration; 
  document.form1.greaterspellpenetration.checked=has_greaterspellpenetration; 
  document.form1.stealthy.checked=has_stealthy; 

  document.form1.toughness.checked=has_toughness; 
  document.form1.twoweaponfighting.checked=has_twoweaponfighting; 
  document.form1.twoweapondefense.checked=has_twoweapondefense; 
  document.form1.improvedtwoweaponfighting.checked=has_improvedtwoweaponfighting; 
  document.form1.greatertwoweaponfighting.checked=has_greatertwoweaponfighting; 
  document.form1.weaponfinesse.checked=has_weaponfinesse; 
  document.form1.otherfeat1.checked=has_otherfeat1; 
  document.form1.otherfeat2.checked=has_otherfeat2; 
  document.form1.otherfeat3.checked=has_otherfeat3; 
  document.form1.otherfeat4.checked=has_otherfeat4; 
  document.form1.otherfeat5.checked=has_otherfeat5; 
  document.form1.otherfeat6.checked=has_otherfeat6; 
  document.form1.otherfeat7.checked=has_otherfeat7; 
  document.form1.otherfeat8.checked=has_otherfeat8; 
  document.form1.otherfeat9.checked=has_otherfeat9; 
  document.form1.otherfeat10.checked=has_otherfeat10; 
  document.form1.weaponfocus_list.selectedIndex=has_weaponfocus; 
  document.form1.weaponspecialization_list.selectedIndex=has_weaponspecialization; 
  document.form1.greaterweaponfocus_list.selectedIndex=has_greaterweaponfocus; 
  document.form1.greaterweaponspecialization_list.selectedIndex=has_greaterweaponspecialization; 
  document.form1.brewpotion.checked=has_brewpotion; 
  document.form1.craftmaa.checked=has_craftmaa; 
  document.form1.craftrod.checked=has_craftrod; 
  document.form1.craftstaff.checked=has_craftstaff; 
  document.form1.craftwand.checked=has_craftwand; 
  document.form1.craftwondrousitem.checked=has_craftwondrousitem; 
  document.form1.forgering.checked=has_forgering; 
  document.form1.scribescroll.checked=has_scribescroll; 
  document.form1.empowerspell.checked=has_empowerspell; 
  document.form1.enlargespell.checked=has_enlargespell; 
  document.form1.extendspell.checked=has_extendspell; 
  document.form1.heightenspell.checked=has_heightenspell; 
  document.form1.maximizespell.checked=has_maximizespell; 
  document.form1.quickenspell.checked=has_quickenspell; 
  document.form1.silentspell.checked=has_silentspell; 
  document.form1.stillspell.checked=has_stillspell; 
  document.form1.widenspell.checked=has_widenspell; 
  document.form1.alignmentchannel.checked=has_alignmentchannel;
  document.form1.arcanearmortraining.checked=has_arcanearmortraining;
  document.form1.arcanearmormastery.checked=has_arcanearmormastery;
  document.form1.catchoffguard.checked=has_catchoffguard;
  document.form1.channelsmite.checked=has_channelsmite;
  document.form1.greaterdisarm.checked=has_greaterdisarm;
  document.form1.greaterfeint.checked=has_greaterfeint;
  document.form1.greatertrip.checked=has_greatertrip;
  document.form1.standstill.checked=has_standstill;
  document.form1.commandundead.checked=has_commandundead;
  document.form1.criticalfocus.checked=has_criticalfocus;
  document.form1.bleedingcritical.checked=has_bleedingcritical;
  document.form1.blindingcritical.checked=has_blindingcritical;
  document.form1.criticalmastery.checked=has_criticalmastery;
  document.form1.deafeningcritical.checked=has_deafeningcritical;
  document.form1.sickeningcritical.checked=has_sickeningcritical;
  document.form1.staggeringcritical.checked=has_staggeringcritical;
  document.form1.stunningcritical.checked=has_stunningcritical;
  document.form1.tiringcritical.checked=has_tiringcritical;
  document.form1.exhaustingcritical.checked=has_exhaustingcritical;
  document.form1.deadlyaim.checked=has_deadlyaim;
  document.form1.defensivecombattraining.checked=has_defensivecombattraining;
  document.form1.disruptive.checked=has_disruptive;
  document.form1.spellbreaker.checked=has_spellbreaker;
  document.form1.windstance.checked=has_windstance;
  document.form1.lightningstance.checked=has_lightningstance;
  document.form1.elementalchannel.checked=has_elementalchannel;
  document.form1.fleet.checked=has_fleet;
  document.form1.improvedgreatfortitude.checked=has_improvedgreatfortitude;
  document.form1.improvedchannel.checked=has_improvedchannel;
  document.form1.improvedfamiliar.checked=has_improvedfamiliar;
  document.form1.greatergrapple.checked=has_greatergrapple;
  document.form1.scorpionstyle.checked=has_scorpionstyle;
  document.form1.gorgonsfist.checked=has_gorgonsfist;
  document.form1.medusaswrath.checked=has_medusaswrath;
  document.form1.improvisedweaponmastery.checked=has_improvisedweaponmastery;
  document.form1.intimidatingprowess.checked=has_intimidatingprowess;
  document.form1.improvedironwill.checked=has_improvedironwill;
  document.form1.improvedlightningreflexes.checked=has_improvedlightningreflexes;
  document.form1.lunge.checked=has_lunge;
  document.form1.mastercraftsman.checked=has_mastercraftsman;
  document.form1.unseat.checked=has_unseat;
  document.form1.nimblemoves.checked=has_nimblemoves;
  document.form1.acrobaticsteps.checked=has_acrobaticsteps;
  document.form1.pinpointtargeting.checked=has_pinpointtargeting;
  document.form1.greaterbullrush.checked=has_greaterbullrush;
  document.form1.greateroverrun.checked=has_greateroverrun;
  document.form1.greatersunder.checked=has_greatersunder;
  document.form1.selectivechanneling.checked=has_selectivechanneling;
  document.form1.shieldslam.checked=has_shieldslam;
  document.form1.shieldmaster.checked=has_shieldmaster;
  document.form1.shieldfocus.checked=has_shieldfocus;
  document.form1.greatershieldfocus.checked=has_greatershieldfocus;
  document.form1.turnundead.checked=has_turnundead;
  document.form1.doubleslice.checked=has_doubleslice;
  document.form1.twoweaponrend.checked=has_twoweaponrend;
  document.form1.vitalstrike.checked=has_vitalstrike;
  document.form1.improvedvitalstrike.checked=has_improvedvitalstrike;
  document.form1.greatervitalstrike.checked=has_greatervitalstrike;
  document.form1.dazzlingdisplay.checked=has_dazzlingdisplay;
  document.form1.shatterdefenses.checked=has_shatterdefenses;
  document.form1.deadlystroke.checked=has_deadlystroke;
  document.form1.penetratingstrike.checked=has_penetratingstrike;
  document.form1.greaterpenetratingstrike.checked=has_greaterpenetratingstrike;

 }

function RecordFeats(){
 NegateFeats(); 
 if (document.form1.acrobatic.checked==true){has_acrobatic=true; }
 if (document.form1.agilemaneuvers.checked==true){has_agilemaneuvers=true; }
 if (document.form1.alertness.checked==true){has_alertness=true; }
 if (document.form1.animalaffinity.checked==true){has_animalaffinity=true; }
 if (document.form1.arcanestrike.checked==true){has_arcanestrike=true; }
 if (document.form1.armorproficiencylight.checked==true){has_armorproficiencylight=true; }
 if (document.form1.armorproficiencymedium.checked==true){has_armorproficiencymedium=true; }
 if (document.form1.armorproficiencyheavy.checked==true){has_armorproficiencyheavy=true; }
 if (document.form1.athletic.checked==true){has_athletic=true; }
 if (document.form1.augmentsummoning.checked==true){has_augmentsummoning=true; }
 if (document.form1.blindfight.checked==true){has_blindfight=true; }
 if (document.form1.combatcasting.checked==true){has_combatcasting=true; }
 if (document.form1.combatexpertise.checked==true){has_combatexpertise=true; }
 if (document.form1.improveddisarm.checked==true){has_improveddisarm=true; }
 if (document.form1.improvedfeint.checked==true){has_improvedfeint=true; }
 if (document.form1.improvedtrip.checked==true){has_improvedtrip=true; }
 if (document.form1.whirlwindattack.checked==true){has_whirlwindattack=true; }
 if (document.form1.combatreflexes.checked==true){has_combatreflexes=true; }
 if (document.form1.deceitful.checked==true){has_deceitful=true; }
 if (document.form1.defthands.checked==true){has_defthands=true; }
 if (document.form1.dodge.checked==true){has_dodge=true; }
 if (document.form1.mobility.checked==true){has_mobility=true; }
 if (document.form1.springattack.checked==true){has_springattack=true; }
 if (document.form1.endurance.checked==true){has_endurance=true; }
 if (document.form1.diehard.checked==true){has_diehard=true; }
 if (document.form1.eschewmaterials.checked==true){has_eschewmaterials=true; }
 if (document.form1.exoticweaponproficiency.checked==true){has_exoticweaponproficiency=true; }
 has_extrachannel=document.form1.extrachannel_list.selectedIndex; 
 has_extraki=document.form1.extraki_list.selectedIndex; 
 has_extralayonhands=document.form1.extralayonhands_list.selectedIndex; 
 has_extramercy=document.form1.extramercy_list.selectedIndex; 
 has_extraperformance=document.form1.extraperformance_list.selectedIndex; 
 has_extrarage=document.form1.extrarage_list.selectedIndex; 
 if (document.form1.greatfortitude.checked==true){has_greatfortitude=true; }
 if (document.form1.improvedcounterspell.checked==true){has_improvedcounterspell=true; }
 has_improvedcritical=document.form1.improvedcritical_list.selectedIndex; 
 if (document.form1.improvedinitiative.checked==true){has_improvedinitiative=true; }
 if (document.form1.improvedunarmedstrike.checked==true){has_improvedunarmedstrike=true; }
 if (document.form1.improvedgrapple.checked==true){has_improvedgrapple=true; }
 if (document.form1.deflectarrows.checked==true){has_deflectarrows=true; }
 if (document.form1.snatcharrows.checked==true){has_snatcharrows=true; }
 if (document.form1.stunningfist.checked==true){has_stunningfist=true; }
 if (document.form1.ironwill.checked==true){has_ironwill=true; }
 if (document.form1.leadership.checked==true){has_leadership=true; }
 if (document.form1.lightningreflexes.checked==true){has_lightningreflexes=true; }
 if (document.form1.magicalaptitude.checked==true){has_magicalaptitude=true; }
 if (document.form1.martialweaponproficiency.checked==true){has_martialweaponproficiency=true; }
 if (document.form1.mountedcombat.checked==true){has_mountedcombat=true; }
 if (document.form1.mountedarchery.checked==true){has_mountedarchery=true; }
 if (document.form1.ridebyattack.checked==true){has_ridebyattack=true; }
 if (document.form1.spiritedcharge.checked==true){has_spiritedcharge=true; }
 if (document.form1.trample.checked==true){has_trample=true; }
 if (document.form1.naturalspell.checked==true){has_naturalspell=true; }
 if (document.form1.persuasive.checked==true){has_persuasive=true; }
 if (document.form1.pointblankshot.checked==true){has_pointblankshot=true; }
 if (document.form1.farshot.checked==true){has_farshot=true; }
 if (document.form1.preciseshot.checked==true){has_preciseshot=true; }
 if (document.form1.rapidshot.checked==true){has_rapidshot=true; }
 if (document.form1.manyshot.checked==true){has_manyshot=true; }
 if (document.form1.shotontherun.checked==true){has_shotontherun=true; }
 if (document.form1.improvedpreciseshot.checked==true){has_improvedpreciseshot=true; }
 if (document.form1.powerattack.checked==true){has_powerattack=true; }
 if (document.form1.cleave.checked==true){has_cleave=true; }
 if (document.form1.greatcleave.checked==true){has_greatcleave=true; }
 if (document.form1.improvedbullrush.checked==true){has_improvedbullrush=true; }
 if (document.form1.improvedoverrun.checked==true){has_improvedoverrun=true; }
 if (document.form1.improvedsunder.checked==true){has_improvedsunder=true; }
 if (document.form1.quickdraw.checked==true){has_quickdraw=true; }
 if (document.form1.rapidreload.checked==true){has_rapidreload=true; }
 if (document.form1.run.checked==true){has_run=true; }
 if (document.form1.selfsufficient.checked==true){has_selfsufficient=true; }
 if (document.form1.shieldproficiency.checked==true){has_shieldproficiency=true; }
 if (document.form1.improvedshieldbash.checked==true){has_improvedshieldbash=true; }
 if (document.form1.towershieldproficiency.checked==true){has_towershieldproficiency=true; }
 if (document.form1.simpleweaponproficiency.checked==true){has_simpleweaponproficiency=true; }
 if (document.form1.skillfocusappraise.checked==true){has_skillfocusappraise=true; }
 if (document.form1.skillfocusbluff.checked==true){has_skillfocusbluff=true; }
 if (document.form1.skillfocusclimb.checked==true){has_skillfocusclimb=true; }
 if (document.form1.skillfocusacrobatics.checked==true){has_skillfocusacrobatics=true; }
 if (document.form1.skillfocuscraft_1.checked==true){has_skillfocuscraft_1=true; }
 if (document.form1.skillfocuscraft_2.checked==true){has_skillfocuscraft_2=true; }
 if (document.form1.skillfocuscraft_3.checked==true){has_skillfocuscraft_3=true; }
 if (document.form1.skillfocusdiplomacy.checked==true){has_skillfocusdiplomacy=true; }
 if (document.form1.skillfocusdisabledevice.checked==true){has_skillfocusdisabledevice=true; }
 if (document.form1.skillfocusdisguise.checked==true){has_skillfocusdisguise=true; }
 if (document.form1.skillfocusescapeartist.checked==true){has_skillfocusescapeartist=true; }
 if (document.form1.skillfocusfly.checked==true){has_skillfocusfly=true; }
 if (document.form1.skillfocushandleanimal.checked==true){has_skillfocushandleanimal=true; }
 if (document.form1.skillfocusheal.checked==true){has_skillfocusheal=true; }
 if (document.form1.skillfocusstealth.checked==true){has_skillfocusstealth=true; }
 if (document.form1.skillfocusintimidate.checked==true){has_skillfocusintimidate=true; }
 if (document.form1.skillfocusknowledgearcana.checked==true){has_skillfocusknowledgearcana=true; }
 if (document.form1.skillfocusknowledgeengineering.checked==true){has_skillfocusknowledgeengineering=true; }
 if (document.form1.skillfocusknowledgedungeoneering.checked==true){has_skillfocusknowledgedungeoneering=true; }
 if (document.form1.skillfocusknowledgegeography.checked==true){has_skillfocusknowledgegeography=true; }
 if (document.form1.skillfocusknowledgehistory.checked==true){has_skillfocusknowledgehistory=true; }
 if (document.form1.skillfocusknowledgelocal.checked==true){has_skillfocusknowledgelocal=true; }
 if (document.form1.skillfocusknowledgenature.checked==true){has_skillfocusknowledgenature=true; }
 if (document.form1.skillfocusknowledgenobility.checked==true){has_skillfocusknowledgenobility=true; }
 if (document.form1.skillfocusknowledgereligion.checked==true){has_skillfocusknowledgereligion=true; }
 if (document.form1.skillfocusknowledgeplanes.checked==true){has_skillfocusknowledgeplanes=true; }
 if (document.form1.skillfocusperception.checked==true){has_skillfocusperception=true; }
 if (document.form1.skillfocuslinguistics.checked==true){has_skillfocuslinguistics=true; }
 if (document.form1.skillfocusperform_1.checked==true){has_skillfocusperfrom=true; }
 if (document.form1.skillfocusperform_2.checked==true){has_skillfocusperfrom=true; }
 if (document.form1.skillfocusperform_3.checked==true){has_skillfocusperfrom=true; }
 if (document.form1.skillfocusperform_4.checked==true){has_skillfocusperfrom=true; }
 if (document.form1.skillfocusperform_5.checked==true){has_skillfocusperfrom=true; }
 if (document.form1.skillfocusprofession.checked==true){has_skillfocusprofession=true; }
 if (document.form1.skillfocusride.checked==true){has_skillfocusride=true; }
 if (document.form1.skillfocussensemotive.checked==true){has_skillfocussensemotive=true; }
 if (document.form1.skillfocussleightofhand.checked==true){has_skillfocussleightofhand=true; }
 if (document.form1.skillfocusspellcraft.checked==true){has_skillfocusspellcraft=true; }
 if (document.form1.skillfocussurvival.checked==true){has_skillfocussurvival=true; }
 if (document.form1.skillfocusswim.checked==true){has_skillfocusswim=true; }
 if (document.form1.skillfocususemagicdevice.checked==true){has_skillfocususemagicdevice=true; }



 if (document.form1.spellfocusabjuration.checked==true){has_spellfocusabjuration=true; }
 if (document.form1.spellfocusconjuration.checked==true){has_spellfocusconjuration=true; }
 if (document.form1.spellfocusdivination.checked==true){has_spellfocusdivination=true; }
 if (document.form1.spellfocusenchantment.checked==true){has_spellfocusenchantment=true; }
 if (document.form1.spellfocusevocation.checked==true){has_spellfocusevocation=true; }
 if (document.form1.spellfocusillusion.checked==true){has_spellfocusillusion=true; }
 if (document.form1.spellfocusnecromancy.checked==true){has_spellfocusnecromancy=true; }
 if (document.form1.spellfocustransmutation.checked==true){has_spellfocustransmutation=true; }
 if (document.form1.greaterspellfocusabjuration.checked==true){has_greaterspellfocusabjuration=true; }
 if (document.form1.greaterspellfocusconjuration.checked==true){has_greaterspellfocusconjuration=true; }
 if (document.form1.greaterspellfocusdivination.checked==true){has_greaterspellfocusdivination=true; }
 if (document.form1.greaterspellfocusenchantment.checked==true){has_greaterspellfocusenchantment=true; }
 if (document.form1.greaterspellfocusevocation.checked==true){has_greaterspellfocusevocation=true; }
 if (document.form1.greaterspellfocusillusion.checked==true){has_greaterspellfocusillusion=true; }
 if (document.form1.greaterspellfocusnecromancy.checked==true){has_greaterspellfocusnecromancy=true; }
 if (document.form1.greaterspellfocustransmutation.checked==true){has_greaterspellfocustransmutation=true; }
 has_spellmastery=document.form1.spellmastery_list.selectedIndex; 
 if (document.form1.spellpenetration.checked==true){has_spellpenetration=true; }
 if (document.form1.greaterspellpenetration.checked==true){has_greaterspellpenetration=true; }
 if (document.form1.stealthy.checked==true){has_stealthy=true; }
 has_toughness=document.form1.toughness.checked; 
 has_strikeback=document.form1.strikeback.checked; 
 has_throwanything=document.form1.throwanything.checked; 
 has_stepup=document.form1.stepup.checked; 
 if (document.form1.twoweaponfighting.checked==true){has_twoweaponfighting=true; }
 if (document.form1.twoweapondefense.checked==true){has_twoweapondefense=true; }
 if (document.form1.improvedtwoweaponfighting.checked==true){has_improvedtwoweaponfighting=true; }
 if (document.form1.greatertwoweaponfighting.checked==true){has_greatertwoweaponfighting=true; }
 has_weaponfinesse=document.form1.weaponfinesse.checked; 
 if (document.form1.otherfeat1.checked==true){has_otherfeat1=true; }
 if (document.form1.otherfeat2.checked==true){has_otherfeat2=true; }
 if (document.form1.otherfeat3.checked==true){has_otherfeat3=true; }
 if (document.form1.otherfeat4.checked==true){has_otherfeat4=true; }
 if (document.form1.otherfeat5.checked==true){has_otherfeat5=true; }
 if (document.form1.otherfeat6.checked==true){has_otherfeat6=true; }
 if (document.form1.otherfeat7.checked==true){has_otherfeat7=true; }
 if (document.form1.otherfeat8.checked==true){has_otherfeat8=true; }
 if (document.form1.otherfeat9.checked==true){has_otherfeat9=true; }
 if (document.form1.otherfeat10.checked==true){has_otherfeat10=true; }
 has_weaponfocus=document.form1.weaponfocus_list.selectedIndex; 
 has_weaponspecialization=document.form1.weaponspecialization_list.selectedIndex; 
 has_greaterweaponfocus=document.form1.greaterweaponfocus_list.selectedIndex; 
 has_greaterweaponspecialization=document.form1.greaterweaponspecialization_list.selectedIndex; 
 if (document.form1.brewpotion.checked==true){has_brewpotion=true; }
 if (document.form1.craftmaa.checked==true){has_craftmaa=true; }
 if (document.form1.craftrod.checked==true){has_craftrod=true; }
 if (document.form1.craftstaff.checked==true){has_craftstaff=true; }
 if (document.form1.craftwand.checked==true){has_craftwand=true; }
 if (document.form1.craftwondrousitem.checked==true){has_craftwondrousitem=true; }
 if (document.form1.forgering.checked==true){has_forgering=true; }
 if (document.form1.scribescroll.checked==true){has_scribescroll=true; }
 if (document.form1.empowerspell.checked==true){has_empowerspell=true; }
 if (document.form1.enlargespell.checked==true){has_enlargespell=true; }
 if (document.form1.extendspell.checked==true){has_extendspell=true; }
 if (document.form1.heightenspell.checked==true){has_heightenspell=true; }
 if (document.form1.maximizespell.checked==true){has_maximizespell=true; }
 if (document.form1.quickenspell.checked==true){has_quickenspell=true; }
 if (document.form1.silentspell.checked==true){has_silentspell=true; }
 if (document.form1.stillspell.checked==true){has_stillspell=true; }
 if (document.form1.widenspell.checked==true){has_widenspell=true; }
  if (document.form1.alignmentchannel.checked){has_alignmentchannel=true;}
  if (document.form1.arcanearmortraining.checked){has_arcanearmortraining=true;}
  if (document.form1.arcanearmormastery.checked){has_arcanearmormastery=true;}
  if (document.form1.catchoffguard.checked){has_catchoffguard=true;}
  if (document.form1.channelsmite.checked){has_channelsmite=true;}
  if (document.form1.greaterdisarm.checked){has_greaterdisarm=true;}
  if (document.form1.greaterfeint.checked){has_greaterfeint=true;}
  if (document.form1.greatertrip.checked){has_greatertrip=true;}
  if (document.form1.standstill.checked){has_standstill=true;}
  if (document.form1.commandundead.checked){has_commandundead=true;}
  if (document.form1.criticalfocus.checked){has_criticalfocus=true;}
  if (document.form1.bleedingcritical.checked){has_bleedingcritical=true;}
  if (document.form1.blindingcritical.checked){has_blindingcritical=true;}
  if (document.form1.criticalmastery.checked){has_criticalmastery=true;}
  if (document.form1.deafeningcritical.checked){has_deafeningcritical=true;}
  if (document.form1.sickeningcritical.checked){has_sickeningcritical=true;}
  if (document.form1.staggeringcritical.checked){has_staggeringcritical=true;}
  if (document.form1.stunningcritical.checked){has_stunningcritical=true;}
  if (document.form1.tiringcritical.checked){has_tiringcritical=true;}
  if (document.form1.exhaustingcritical.checked){has_exhaustingcritical=true;}
  if (document.form1.deadlyaim.checked){has_deadlyaim=true;}
  if (document.form1.defensivecombattraining.checked){has_defensivecombattraining=true;}
  if (document.form1.disruptive.checked){has_disruptive=true;}
  if (document.form1.spellbreaker.checked){has_spellbreaker=true;}
  if (document.form1.windstance.checked){has_windstance=true;}
  if (document.form1.lightningstance.checked){has_lightningstance=true;}
  if (document.form1.elementalchannel.checked){has_elementalchannel=true;}
  if (document.form1.fleet.checked){has_fleet=true;}
  if (document.form1.improvedgreatfortitude.checked){has_improvedgreatfortitude=true;}
  if (document.form1.improvedchannel.checked){has_improvedchannel=true;}
  if (document.form1.improvedfamiliar.checked){has_improvedfamiliar=true;}
  if (document.form1.greatergrapple.checked){has_greatergrapple=true;}
  if (document.form1.scorpionstyle.checked){has_scorpionstyle=true;}
  if (document.form1.gorgonsfist.checked){has_gorgonsfist=true;}
  if (document.form1.medusaswrath.checked){has_medusaswrath=true;}
  if (document.form1.improvisedweaponmastery.checked){has_improvisedweaponmastery=true;}
  if (document.form1.intimidatingprowess.checked){has_intimidatingprowess=true;}
  if (document.form1.improvedironwill.checked){has_improvedironwill=true;}
  if (document.form1.improvedlightningreflexes.checked){has_improvedlightningreflexes=true;}
  if (document.form1.lunge.checked){has_lunge=true;}
  if (document.form1.mastercraftsman.checked){has_mastercraftsman=true;}
  if (document.form1.unseat.checked){has_unseat=true;}
  if (document.form1.nimblemoves.checked){has_nimblemoves=true;}
  if (document.form1.acrobaticsteps.checked){has_acrobaticsteps=true;}
  if (document.form1.pinpointtargeting.checked){has_pinpointtargeting=true;}
  if (document.form1.greaterbullrush.checked){has_greaterbullrush=true;}
  if (document.form1.greateroverrun.checked){has_greateroverrun=true;}
  if (document.form1.greatersunder.checked){has_greatersunder=true;}
  if (document.form1.selectivechanneling.checked){has_selectivechanneling=true;}
  if (document.form1.shieldslam.checked){has_shieldslam=true;}
  if (document.form1.shieldmaster.checked){has_shieldmaster=true;}
  if (document.form1.shieldfocus.checked){has_shieldfocus=true;}
  if (document.form1.greatershieldfocus.checked){has_greatershieldfocus=true;}
  if (document.form1.turnundead.checked){has_turnundead=true;}
  if (document.form1.doubleslice.checked){has_doubleslice=true;}
  if (document.form1.twoweaponrend.checked){has_twoweaponrend=true;}
  if (document.form1.vitalstrike.checked){has_vitalstrike=true;}
  if (document.form1.improvedvitalstrike.checked){has_improvedvitalstrike=true;}
  if (document.form1.greatervitalstrike.checked){has_greatervitalstrike=true;}
  if (document.form1.dazzlingdisplay.checked){has_dazzlingdisplay=true;}
  if (document.form1.shatterdefenses.checked){has_shatterdefenses=true;}
  if (document.form1.deadlystroke.checked){has_deadlystroke=true;}
  if (document.form1.penetratingstrike.checked){has_penetratingstrike=true;}
  if (document.form1.greaterpenetratingstrike.checked){has_greaterpenetratingstrike=true;}

}

function NegateFeats(){
  has_acrobatic=false
  has_agilemaneuvers=false
  has_alertness=false
  has_animalaffinity=false
  has_arcanestrike=false
  has_armorproficiencylight=false
  has_armorproficiencymedium=false
  has_armorproficiencyheavy=false
  has_athletic=false
  has_augmentsummoning=false
  has_blindfight=false
  has_combatcasting=false
  has_combatexpertise=false
  has_improveddisarm=false
  has_improvedfeint=false
  has_improvedtrip=false
  has_whirlwindattack=false
  has_combatreflexes=false
  has_deceitful=false
  has_defthands=false
  has_dodge=false
  has_mobility=false
  has_springattack=false
  has_endurance=false
  has_diehard=false
  has_eschewmaterials=false
  has_exoticweaponproficiency=false
  has_extrachannel=0
  has_extraki=0
  has_extralayonhands=0
  has_extramercy=0
  has_extraperformance=0
  has_extrarage=0
  has_greatfortitude=false
  has_improvedcounterspell=false
  has_improvedcritical=0
  has_improvedinitiative=false
  has_improvedunarmedstrike=false
  has_improvedgrapple=false
  has_deflectarrows=false
  has_snatcharrows=false
  has_stunningfist=false
  has_ironwill=false
  has_leadership=false
  has_lightningreflexes=false
  has_magicalaptitude=false
  has_martialweaponproficiency=false
  has_mountedcombat=false
  has_mountedarchery=false
  has_ridebyattack=false
  has_spiritedcharge=false
  has_trample=false
  has_naturalspell=false
  has_persuasive=false
  has_pointblankshot=false
  has_farshot=false
  has_preciseshot=false
  has_rapidshot=false
  has_manyshot=false
  has_shotontherun=false
  has_improvedpreciseshot=false
  has_powerattack=false
  has_cleave=false
  has_greatcleave=false
  has_improvedbullrush=false
  has_improvedoverrun=false
  has_improvedsunder=false
  has_quickdraw=false
  has_rapidreload=false
  has_run=false
  has_selfsufficient=false
  has_shieldproficiency=false
  has_improvedshieldbash=false
  has_towershieldproficiency=false
  has_simpleweaponproficiency=false

  has_skillfocusappraise=false
  has_skillfocusbluff=false
  has_skillfocusclimb=false
  has_skillfocusacrobatics=false
  has_skillfocuscraft_1=false
  has_skillfocuscraft_2=false
  has_skillfocuscraft_3=false
  has_skillfocusdiplomacy=false
  has_skillfocusdisabledevice=false
  has_skillfocusdisguise=false
  has_skillfocusescapeartist=false
  has_skillfocusfly=false
  has_skillfocushandleanimal=false
  has_skillfocusheal=false
  has_skillfocusstealth=false
//  has_skillfocushypnosis=false
  has_skillfocusintimidate=false
  has_skillfocusknowledgearcana=false
  has_skillfocusknowledgeengineering=false
  has_skillfocusknowledgedungeoneering=false
  has_skillfocusknowledgegeography=false
  has_skillfocusknowledgehistory=false
  has_skillfocusknowledgelocal=false
  has_skillfocusknowledgenature=false
  has_skillfocusknowledgenobility=false
  has_skillfocusknowledgereligion=false
  has_skillfocusknowledgeplanes=false
  has_skillfocusperception=false
  has_skillfocuslinguistics=false
  has_skillfocusperform_1=false
  has_skillfocusperform_2=false
  has_skillfocusperform_3=false
  has_skillfocusperform_4=false
  has_skillfocusperform_5=false
  has_skillfocusprofession=false
  has_skillfocusride=false
  has_skillfocussensemotive=false
  has_skillfocussleightofhand=false
  has_skillfocusspellcraft=false
  has_skillfocussurvival=false
  has_skillfocusswim=false
  has_skillfocususemagicdevice=false




  has_spellfocusabjuration=false
  has_spellfocusconjuration=false
  has_spellfocusdivination=false
  has_spellfocusenchantment=false
  has_spellfocusevocation=false
  has_spellfocusillusion=false
  has_spellfocusnecromancy=false
  has_spellfocustransmutation=false
  has_greaterspellfocusabjuration=false
  has_greaterspellfocusconjuration=false
  has_greaterspellfocusdivination=false
  has_greaterspellfocusenchantment=false
  has_greaterspellfocusevocation=false
  has_greaterspellfocusillusion=false
  has_greaterspellfocusnecromancy=false
  has_greaterspellfocusconjuration=false
  has_spellmastery=0
  has_spellpenetration=false
  has_greaterspellpenetration=false
  has_stealthy=false
  has_toughness=false
  has_twoweaponfighting=false
  has_twoweapondefense=false
  has_improvedtwoweaponfighting=false
  has_greatertwoweaponfighting=false
  has_weaponfinesse=false
  has_otherfeat1=false
  has_otherfeat2=false
  has_otherfeat3=false
  has_otherfeat4=false
  has_otherfeat5=false
  has_otherfeat6=false
  has_otherfeat7=false
  has_otherfeat8=false
  has_otherfeat9=false
  has_otherfeat10=false
  has_weaponfocus=0
  has_weaponspecialization=0
  has_greaterweaponfocus=0
  has_greaterweaponspecialization=0
  has_brewpotion=false
  has_craftmaa=false
  has_craftrod=false
  has_craftstaff=false
  has_craftwand=false
  has_craftwondrousitem=false
  has_forgering=false
  has_scribescroll=false
  has_empowerspell=false
  has_enlargespell=false
  has_extendspell=false
  has_heightenspell=false
  has_maximizespell=false
  has_quickenspell=false
  has_silentspell=false
  has_stillspell=false
  has_widenspell=false
  has_alignmentchannel=false;
  has_arcanearmortraining=false;
  has_arcanearmormastery=false;
  has_catchoffguard=false;
  has_channelsmite=false;
  has_greaterdisarm=false;
  has_greaterfeint=false;
  has_greatertrip=false;
  has_standstill=false;
  has_commandundead=false;
  has_criticalfocus=false;
  has_bleedingcritical=false;
  has_blindingcritical=false;
  has_criticalmastery=false;
  has_deafeningcritical=false;
  has_sickeningcritical=false;
  has_staggeringcritical=false;
  has_stunningcritical=false;
  has_tiringcritical=false;
  has_exhaustingcritical=false;
  has_deadlyaim=false;
  has_defensivecombattraining=false;
  has_disruptive=false;
  has_spellbreaker=false;
  has_windstance=false;
  has_lightningstance=false;
  has_elementalchannel=false;
  has_extraki=0;
  has_extralayonhands=0;
  has_extramercy=0;
  has_extraperformance=0;
  has_extrarage=0;
  has_fleet=false;
  has_improvedgreatfortitude=false;
  has_improvedchannel=false;
  has_improvedfamiliar=false;
  has_greatergrapple=false;
  has_scorpionstyle=false;
  has_gorgonsfist=false;
  has_medusaswrath=false;
  has_improvisedweaponmastery=false;
  has_intimidatingprowess=false;
  has_improvedironwill=false;
  has_improvedlightningreflexes=false;
  has_lunge=false;
  has_mastercraftsman=false;
  has_unseat=false;
  has_nimblemoves=false;
  has_acrobaticsteps=false;
  has_pinpointtargeting=false;
  has_greaterbullrush=false;
  has_greateroverrun=false;
  has_greatersunder=false;
  has_selectivechanneling=false;
  has_shieldslam=false;
  has_shieldmaster=false;
  has_shieldfocus=false;
  has_greatershieldfocus=false;
  has_turnundead=false;
  has_doubleslice=false;
  has_twoweaponrend=false;
  has_vitalstrike=false;
  has_improvedvitalstrike=false;
  has_greatervitalstrike=false;
  has_dazzlingdisplay=false;
  has_shatterdefenses=false;
  has_deadlystroke=false;
  has_penetratingstrike=false;
  has_greaterpenetratingstrike=false;
 }

function CalculateHitPoints(){
 x=newHP01 + modifier_number(constitution); if (x<1){x=1; }
 total_hit_points=x; 
 if (total_levels>=2){x=newHP02 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=3){x=newHP03 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=4){x=newHP04 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=5){x=newHP05 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=6){x=newHP06 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=7){x=newHP07 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=8){x=newHP08 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=9){x=newHP09 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=10){x=newHP10 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=11){x=newHP11 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=12){x=newHP12 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=13){x=newHP13 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=14){x=newHP14 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=15){x=newHP15 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=16){x=newHP16 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=17){x=newHP17 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=18){x=newHP18 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=19){x=newHP19 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (total_levels>=20){x=newHP20 + modifier_number(constitution); if (x<1){x=1; } total_hit_points +=x; }
 if (has_toughness)
   {
    if (total_levels>3){total_hit_points +=total_levels}
     else {total_hit_points+=3;}
   }
 if (toad_familiar==true){total_hit_points +=3; }
 total_hit_points+=favored_for_hp;
 }

function CalculateArmorClass(){
  armor_check_penalty=0;
  shield_check_penalty=0;

  has_uncanny_dodge=false; 
  if ((barbarian_levels>1)|(rogue_levels>3)){has_uncanny_dodge=true; }
  total_armor_class=10; 
  touch_armor_class=10; 
  flatfooted_armor_class=10; 
  armor_class_string=""; 
  armor_string=""; 
  shield_string=""; 
  dexterity_bonus_in_this_armor=modifier_number(dexterity)
  unarmored=true; 

  if (document.form1.armor_radio[1].checked==true)
   {
    total_armor_class +=1; 
    flatfooted_armor_class +=1; 
    armor_class_string="  + 1 [padded] "
    y=8+ArmorTrain();z=ArmorTrain()-0;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Padded armor [light;   + 1 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 10 lb."; wt +=10; }
    if (small==true){armor_string +=" 5 lb."; wt +=5; }
    if ((sorcerer_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 5%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[2].checked==true)
   {
    total_armor_class +=2; 
    flatfooted_armor_class +=2; 
    armor_class_string="  + 2 [leather] "
    y=6+ArmorTrain();z=ArmorTrain()-0;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Leather armor [light;   + 2 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 15 lb."; wt +=15; }
    if (small==true){armor_string +=" 7.5 lb."; wt +=7.5; }
    if ((sorcerer_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 10%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[3].checked==true)
   {
    total_armor_class +=3; 
    flatfooted_armor_class +=3; 
    armor_class_string="  + 3 [studded] "
    y=5+ArmorTrain();z=ArmorTrain()-1;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Studded armor [light;   + 3 AC;  max dex  + "+y+";  check penalty "+z;  
    if (small==false){armor_string +=" 20 lb."; wt +=20; }
    if (small==true){armor_string +=" 10 lb."; wt +=10; }
    if ((sorcerer_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 15%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[4].checked==true)
   {
    total_armor_class +=4; 
    flatfooted_armor_class +=4; 
    armor_class_string="  + 4 [chain shirt] "
    y=4+ArmorTrain();z=ArmorTrain()-2;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Chain shirt [light;   + 4 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 25 lb."; wt +=25; }
    if (small==true){armor_string +=" 12.5 lb."; wt +=12.5; }
    if ((sorcerer_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 20%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[5].checked==true)
   {
    total_armor_class +=3; 
    flatfooted_armor_class +=3; 
    armor_class_string="  + 3 [hide] "
    y=4+ArmorTrain();z=ArmorTrain()-3;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Hide armor [medium;   + 3 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 25 lb."; wt +=25; }
    if (small==true){armor_string +=" 12.5 lb."; wt +=12.5; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 20%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[6].checked==true)
   {
    total_armor_class +=5; 
    flatfooted_armor_class +=5; 
    armor_class_string="  + 5 [scale] "
    y=3+ArmorTrain();z=ArmorTrain()-4;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Scale mail [medium;   + 5 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 30 lb."; wt +=30; }
    if (small==true){armor_string +=" 15 lb."; wt +=15; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 25%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[7].checked==true)
   {
    total_armor_class +=5; 
    flatfooted_armor_class +=5; 
    armor_class_string="  + 5 [chainmail] "
    y=2+ArmorTrain();z=ArmorTrain()-5;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Chain mail [medium;   + 5 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 40 lb."; wt +=40; }
    if (small==true){armor_string +=" 20 lb."; wt +=20; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 30%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[8].checked==true)
   {
    total_armor_class +=6; 
    flatfooted_armor_class +=6; 
    armor_class_string="  + 6 [breastplate] "
    y=3+ArmorTrain();z=ArmorTrain()-4;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Breast plate [medium;   + 6 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 30 lb."; wt +=30; }
    if (small==true){armor_string +=" 15 lb."; wt +=15; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 25%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[9].checked==true)
   {
    total_armor_class +=6; 
    flatfooted_armor_class +=6; 
    armor_class_string="  + 6 [splint] "
    y=0+ArmorTrain();z=ArmorTrain()-7;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Splint mail [heavy;   + 6 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 45 lb."; wt +=45; }
    if (small==true){armor_string +=" 22.5 lb."; wt +=22.5; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 40%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[10].checked==true)
   {
    total_armor_class +=6; 
    flatfooted_armor_class +=6; 
    armor_class_string="  + 6 [banded] "
    y=1+ArmorTrain();z=ArmorTrain()-6;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Banded mail [heavy;   + 6 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 35 lb."; wt +=35; }
    if (small==true){armor_string +=" 17.5 lb."; wt +=17.5; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 35%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[11].checked==true)
   {
    total_armor_class +=7; 
    flatfooted_armor_class +=7; 
    armor_class_string="  + 7 [half-plate] "
    y=0+ArmorTrain();z=ArmorTrain()-7;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Half-plate armor [heavy;   + 7 AC;  max dex  + "+y+";  check penalty "+z;  
    armor_check_penalty=z;
    if (small==false){armor_string +=" 50 lb."; wt +=50; }
    if (small==true){armor_string +=" 25 lb."; wt +=25; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 40%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.armor_radio[12].checked==true)
   {
    total_armor_class +=8; 
    flatfooted_armor_class +=8; 
    armor_class_string="  + 8 [full plate] "
    y=1+ArmorTrain();z=ArmorTrain()-6;if (z>0){z=0;}
    if (dexterity_bonus_in_this_armor>y){dexterity_bonus_in_this_armor=y; }
    armor_string="Full plate armor [heavy;   + 8 AC;  max dex  + "+y+";  check penalty "+z;
    armor_check_penalty=z;
    if (small==false){armor_string +=" 50 lb."; wt +=50; }
    if (small==true){armor_string +=" 25 lb."; wt +=25; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 35%"; }
    armor_string +="] "
    unarmored=false; 
   }
  if (document.form1.shield_radio[1].checked==true)
   {
    total_armor_class +=1; 
    flatfooted_armor_class +=1; 
    armor_class_string +="  + 1 [buckler] "
    shield_string="Buckler [ + 1 AC;  check penalty -1;  hardness 10;  hp 5; "
    if (small==false){shield_string +=" 5 lb."; wt +=5; }
    if (small==true){shield_string +=" 2.5 lb."; wt +=2.5; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 5%"; }
    shield_string +="] "
    unarmored=false; 
   }
  if (document.form1.shield_radio[2].checked==true)
   {
    total_armor_class +=1; 
    flatfooted_armor_class +=1; 
    armor_class_string +="  + 1 [light wooden] "
    shield_string="Light Wooden Shield [ + 1 AC;  check penalty -1;  hardness 5;  hp 7; "
    shield_check_penalty=-1;
    if (small==false){shield_string +=" 5 lb."; wt +=5; }
    if (small==true){shield_string +=" 2.5 lb."; wt +=2.5; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 5%"; }
    shield_string +="] "
    unarmored=false; 
   }
  if (document.form1.shield_radio[3].checked==true)
   {
    total_armor_class +=1; 
    flatfooted_armor_class +=1; 
    armor_class_string +="  + 1 [light steel] "
    shield_string="Light Steel Shield [ + 1 AC;  check penalty -1;  hardness 10;  hp 10; "
    shield_check_penalty=-1;
    if (small==false){shield_string +=" 6 lb."; wt +=6; }
    if (small==true){shield_string +=" 3 lb."; wt +=3; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 5%"; }
    shield_string +="] "
    unarmored=false; 
   }
  if (document.form1.shield_radio[4].checked==true)
   {
    total_armor_class +=2; 
    flatfooted_armor_class +=2; 
    armor_class_string +="  + 2 [heavy wooden] "
    shield_string="Heavy Wooden Shield [ + 2 AC;  check penalty -2;  hardness 5;  hp 15; "
    shield_check_penalty=-2;
    if (small==false){shield_string +=" 10 lb."; wt +=10; }
    if (small==true){shield_string +=" 5 lb."; wt +=5; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 15%"; }
    shield_string +="] "
    unarmored=false; 
   }
  if (document.form1.shield_radio[5].checked==true)
   {
    total_armor_class +=2; 
    flatfooted_armor_class +=2; 
    armor_class_string +="  + 2 [heavy steel] "
    shield_string="Heavy Steel Shield [ + 2 AC;  check penalty -2;  hardness 10;  hp 20; "
    shield_check_penalty=-2;
    if (small==false){shield_string +=" 15 lb."; wt +=15; }
    if (small==true){shield_string +=" 7.5 lb."; wt +=7.5; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 15%"; }
    shield_string +="] "
    unarmored=false; 
   }
  if (document.form1.shield_radio[6].checked==true)
   {
    total_armor_class +=4; 
    flatfooted_armor_class +=4; 
    armor_class_string +="  + 4 [tower shield] "
    if (dexterity_bonus_in_this_armor>2){dexterity_bonus_in_this_armor=2; }
    shield_string="Tower Shield [ + 4 AC;  max dex= + 2;  check penalty -10;  hardness 5;  hp 20; "
    shield_check_penalty=-10;
    if (small==false){shield_string +=" 45 lb."; wt +=45; }
    if (small==true){shield_string +=" 22.5 lb."; wt +=22.5; }
    if ((sorcerer_levels>0)|(bard_levels>0)|(wizard_levels>0))
     {armor_string +=";  arcane spell failure 50%"; }
    shield_string +="] "
    unarmored=false; 
   }
  total_armor_class +=dexterity_bonus_in_this_armor; 
  touch_armor_class +=dexterity_bonus_in_this_armor; 
  if (has_dodge)
   {
     touch_armor_class++;
     total_armor_class++;
   }
  if ((monk_levels>0)&(wisdom>11)&(unarmored==true))
   {
    total_armor_class +=modifier_number(wisdom); 
    touch_armor_class +=modifier_number(wisdom); 
    flatfooted_armor_class +=modifier_number(wisdom);  
   }
  if (monk_levels>=4)
   {
    total_armor_class +=1; 
    touch_armor_class +=1; 
    flatfooted_armor_class +=1; 
   }
  if (monk_levels>=8)
   {
    total_armor_class +=1; 
    touch_armor_class +=1; 
    flatfooted_armor_class +=1; 
   }
  if (monk_levels>=12)
   {
    total_armor_class +=1; 
    touch_armor_class +=1; 
    flatfooted_armor_class +=1; 
   }
  if (monk_levels>=16)
   {
    total_armor_class +=1; 
    touch_armor_class +=1; 
    flatfooted_armor_class +=1; 
   }
  if (monk_levels>=20)
   {
    total_armor_class +=1; 
    touch_armor_class +=1; 
    flatfooted_armor_class +=1; 
   }
  dexterity_A_string=modifier_number(dexterity) + " [dexterity] "; 
  dexterity_0_string=modifier_number(dexterity) + " [dexterity] "; 
  if (dexterity_bonus_in_this_armor<modifier_number(dexterity))
   {dexterity_A_string=dexterity_bonus_in_this_armor + " [dexterity in armor] "; }
  if ((dexterity_bonus_in_this_armor>0)&(has_uncanny_dodge==true)){flatfooted_armor_class +=dexterity_bonus_in_this_armor; }
  if ((dexterity_bonus_in_this_armor<0)){flatfooted_armor_class +=dexterity_bonus_in_this_armor; }
  if (dexterity_bonus_in_this_armor>0){armor_class_string +="  + " + dexterity_A_string; }
  if (dexterity_bonus_in_this_armor<0){armor_class_string +=" " + dexterity_A_string; }
  if (has_dodge){armor_class_string+=" + 1 [dodge]";}
  if ((monk_levels>0)&(wisdom>11)&(unarmored==true))
   {
    armor_class_string +=modifier_string(wisdom) + " [wisdom] "
   }
  if ((monk_levels>=5)&(unarmored==true))
   {
     if (monk_levels>=20){armor_class_string +="  + 5 [monk level] "} else
     if (monk_levels>=16){armor_class_string +="  + 4 [monk level] "} else
     if (monk_levels>=12){armor_class_string +="  + 3 [monk level] "} else
     if (monk_levels>=8){armor_class_string +="  + 2 [monk level] "} else
     if (monk_levels>=4){armor_class_string +="  + 1 [monk level] "} 
   }
  if (small==true)
   {
    total_armor_class +=1; 
    touch_armor_class +=1; 
    flatfooted_armor_class +=1; 
    armor_class_string +="  + 1 [small] "
   }
  if (has_draconic_bloodline)
   {
     if (sorcerer_levels>=15)
       {
         total_armor_class +=4; 
         touch_armor_class +=4; 
         flatfooted_armor_class +=4; 
         armor_class_string +="  + 4 [draconic bloodline] "
       }
     else if (sorcerer_levels>=9)
       {
         total_armor_class +=2; 
         touch_armor_class +=2; 
         flatfooted_armor_class +=2; 
         armor_class_string +="  + 2 [draconic bloodline] "
       }
     else if (sorcerer_levels>=3)
       {
         total_armor_class +=1; 
         touch_armor_class +=1; 
         flatfooted_armor_class +=1; 
         armor_class_string +="  + 1 [draconic bloodline] "
       }
   }
  x=30;
//zzzzzzzzzzzzzzzz
  if ((rayce==4)|(rayce==5)|(rayce==6)){x=20; }
  if ((document.form1.armor_radio[5].checked==true)|
     (document.form1.armor_radio[6].checked==true)|
     (document.form1.armor_radio[7].checked==true)|
     (document.form1.armor_radio[8].checked==true))
     {
      if (fighter_levels<3)
      {
      if ((rayce==5)|(rayce==6)){x=15; }
//zzzzzzzzzzzz
      else if (!DwarfArmorSpeed()){x=20; }
      }
     }
  if ((document.form1.armor_radio[9].checked==true)|
     (document.form1.armor_radio[10].checked==true)|
     (document.form1.armor_radio[11].checked==true)|
     (document.form1.armor_radio[12].checked==true))
     {
      if (fighter_levels<7)
      {
//zzzzzzzzzzzz
      if ((rayce==5)|(rayce==6)){x=15; }
      else if (!DwarfArmorSpeed()){x=20; }
      }
     }
   speed_string=""
   if ((barbarian_levels>0)&
     (document.form1.armor_radio[9].checked==false)&
     (document.form1.armor_radio[10].checked==false)&
     (document.form1.armor_radio[11].checked==false)&
     (document.form1.armor_radio[12].checked==false))
      {x=x + 10;  speed_string +=" [barbarian] "}; 
   if (has_fleet){x+=5;speed_string+=" [fleet] "};
   if ((monk_levels>2)&
     (document.form1.armor_radio[1].checked==false)&
     (document.form1.armor_radio[2].checked==false)&
     (document.form1.armor_radio[3].checked==false)&
     (document.form1.armor_radio[4].checked==false)&
     (document.form1.armor_radio[5].checked==false)&
     (document.form1.armor_radio[6].checked==false)&
     (document.form1.armor_radio[7].checked==false)&
     (document.form1.armor_radio[8].checked==false)&
     (document.form1.armor_radio[9].checked==false)&
     (document.form1.armor_radio[10].checked==false)&
     (document.form1.armor_radio[11].checked==false)&
     (document.form1.armor_radio[12].checked==false))
      {
       speed_string +=" [monk] "; 
       x=x + 10; 
       if (monk_levels>5){x=x + 10; }
       if (monk_levels>8){x=x + 10; }
       if (monk_levels>11){x=x + 10; }
       if (monk_levels>14){x=x + 10; }
       if (monk_levels>17){x=x + 10; }
      }
   speed_string=x + " feet" + speed_string; 
   final_speed=x; 



  initiative_modifier=modifier_number(dexterity); 

  initiative_string_1=""; 
  initiative_string_2=""; 
  if (modifier_number(dexterity)>=0){initiative_string_2=" + " + dexterity_0_string}
  if (modifier_number(dexterity)<0){initiative_string_2=dexterity_0_string}
  if (has_improvedinitiative==true)
   {
    initiative_modifier +=4; 
    initiative_string_2 +="  + 4 [improved initiative] "
   }
  if (wizard_specialty_name=="Diviner")
   {
    x=Math.floor(wizard_levels/2);
    initiative_modifier+=x;
    initiative_string_2+=" + "+x+" [diviner]";
   }

  if (initiative_string_2!=""){initiative_string_2=" = " + initiative_string_2; }
  initiative_string_1=initiative_modifier; 
  if (initiative_modifier>=0){initiative_string_1=" + " + initiative_string_1; }

  fear_save=modifier_number(wisdom); 
  fear_string_2=fear_save + " [wisdom] "; 
  if (paladin_levels>1){fear_save +=4; fear_string_2 +="  + 4 [paladin] "; }
  fear_string_1=fear_save; 
   if (fear_save>=0){fear_string_1=" + " + fear_string_1; }
   if (modifier_number(wisdom)>=0){fear_string_2=" + " + fear_string_2; }
  fear_string_2=" = " + fear_string_2; 

  horror_save=modifier_number(wisdom); 
  horror_string_2=horror_save + " [wisdom] "; 
  horror_string_1=horror_save; 
   if (horror_save>=0){horror_string_1=" + " + horror_string_1; }
   if (modifier_number(wisdom)>=0){horror_string_2=" + " + horror_string_2; }
  horror_string_2=" = " + horror_string_2; 

  madness_save=modifier_number(wisdom); 
  madness_string_2=madness_save + " [wisdom] "; 
  madness_string_1=madness_save; 
   if (madness_save>=0){madness_string_1=" + " + madness_string_1; }
   if (modifier_number(wisdom)>=0){madness_string_2=" + " + madness_string_2; }
  madness_string_2=" = " + madness_string_2; 


  fortitude_save=base_fortitude_bonus + modifier_number(constitution); 
  fortitude_string_2=base_fortitude_bonus + " [base] "; 
  if (modifier_number(constitution)>0){fortitude_string_2 +=" + " + modifier_number(constitution) + " [constitution] "}
  if (modifier_number(constitution)<0){fortitude_string_2 +=modifier_number(constitution) + " [constitution] "}
  if (has_greatfortitude==true)
   {
    fortitude_save +=2; 
    fortitude_string_2 +="  + 2 [great fortitude] "
   }
  if (rat_familiar==true)
   {
    fortitude_save +=2; 
    fortitude_string_2 +="  + 2 [rat] "
   }
  if ((paladin_levels>1)&(modifier_number(charisma)>0))
   {
    fortitude_save +=modifier_number(charisma); 
    fortitude_string_2 +="  + " + modifier_number(charisma) + " [paladin charisma] "
   }
  if (has_protection_domain)
   {
     x=1;
     if (cleric_levels>=5){x++;}
     if (cleric_levels>=10){x++;}
     if (cleric_levels>=15){x++;}
     if (cleric_levels>=20){x++;}
     fortitude_save+=x;
     fortitude_string_2+=" + "+x+" [protection domain] ";
   }
  if (rayce==6)
   {
    fortitude_save +=1; 
    fortitude_string_2 +="  + 1 [halfling] "
   }

  if (fortitude_string_2!=""){fortitude_string_2=" = " + fortitude_string_2; }

  fortitude_string_1=fortitude_save; 
   if (fortitude_save>=0){fortitude_string_1=" + " + fortitude_string_1; }


  reflex_save=base_reflex_bonus + modifier_number(dexterity); 
  reflex_string_2=base_reflex_bonus + " [base] "; 
  if (modifier_number(dexterity)>0){reflex_string_2 +=" + " + dexterity_0_string}
  if (modifier_number(dexterity)<0){reflex_string_2 +=dexterity_0_string}
  if (has_lightningreflexes==true)
   {
    reflex_save +=2; 
    reflex_string_2 +="  + 2 [lightning reflexes] "
   }
  if (weasel_familiar==true)
   {
    reflex_save +=2; 
    reflex_string_2 +="  + 2 [weasel] "
   }
  if (has_protection_domain)
   {
     x=1;
     if (cleric_levels>=5){x++;}
     if (cleric_levels>=10){x++;}
     if (cleric_levels>=15){x++;}
     if (cleric_levels>=20){x++;}
     reflex_save+=x;
     reflex_string_2+=" + "+x+" [protection domain] ";
   }
  if ((paladin_levels>1)&(modifier_number(charisma)>0))
   {
    reflex_save +=modifier_number(charisma); 
    reflex_string_2 +="  + " + modifier_number(charisma) + " [paladin charisma] "
   }
  if (rayce==6)
   {
    reflex_save +=1; 
    reflex_string_2 +="  + 1 [halfling] "
   }
  if (reflex_string_2!=""){reflex_string_2=" = " + reflex_string_2; }
  reflex_string_1=reflex_save; 
  if (reflex_save>=0){reflex_string_1=" + " + reflex_string_1; }


  will_save=base_will_bonus + modifier_number(wisdom); 
  will_string_2=base_will_bonus + " [base] "; 
  if (modifier_number(wisdom)>0){will_string_2 +=" + " + modifier_number(wisdom) + " [wisdom] "}
  if (modifier_number(wisdom)<0){will_string_2 +=modifier_number(wisdom) + " [wisdom] "}
  if (has_ironwill==true)
   {
    will_save +=2; 
    will_string_2 +="  + 2 [iron will] "
   }
  if (rayce==6)
   {
    will_save +=1; 
    will_string_2 +="  + 1 [halfling] "
   }
  if (has_protection_domain)
   {
     x=1;
     if (cleric_levels>=5){x++;}
     if (cleric_levels>=10){x++;}
     if (cleric_levels>=15){x++;}
     if (cleric_levels>=20){x++;}
     will_save+=x;
     will_string_2+=" + "+x+" [protection domain] ";
   }
  if ((paladin_levels>1)&(modifier_number(charisma)>0))
   {
    will_save +=modifier_number(charisma); 
    will_string_2 +="  + " + modifier_number(charisma) + " [paladin charisma] "
   }
  if (will_string_2!=""){will_string_2=" = " + will_string_2; }
  will_string_1=will_save; 
  if (will_save>=0){will_string_1=" + " + will_string_1; }


  handheld_attack=base_attack_bonus + modifier_number(strength); 
  if (small==true){handheld_attack++ ; }
  handheld_attack_string_1=handheld_attack; 
  if (base_attack_bonus>5){handheld_attack_string_1 +="/ + " + (handheld_attack-5); }
  if (base_attack_bonus>10){handheld_attack_string_1 +="/ + " + (handheld_attack-10); }
  if (base_attack_bonus>15){handheld_attack_string_1 +="/ + " + (handheld_attack-15); }
  handheld_attack_string_2=""
  handheld_attack_string_2 +=" = " + base_attack_bonus + " [base] "; 
  if (modifier_number(strength)>0){handheld_attack_string_2 +=" + " + modifier_number(strength) + " [strength] "}
  if (modifier_number(strength)<0){handheld_attack_string_2 +=modifier_number(strength) + " [strength] "}
  if (small==true){handheld_attack_string_2 +=" + 1 [small] "}
  if (handheld_attack>=0){handheld_attack_string_1=" + " + handheld_attack_string_1; }

 
//  x=handheld_attack; 
//  if (monk_levels<5){x=x-2; }
//  if (monk_levels<9){x=x-1; }

  x=monk_levels-2+modifier_number(strength); 

  flurry_of_blows_string=""
  if (x>0){flurry_of_blows_string +=" + "}
  flurry_of_blows_string +=x + " / "; 
  if (x>0){flurry_of_blows_string +=" + "}
  flurry_of_blows_string +=x; 
  if (monk_levels>=6)
   {
    flurry_of_blows_string +="/ "; 
    if (x-5>0){flurry_of_blows_string +=" + "}
    flurry_of_blows_string +=(x-5); 
   }
  if (monk_levels>=8)
   {
    flurry_of_blows_string +=" / "; 
    if (x-5>0){flurry_of_blows_string +=" + "}
    flurry_of_blows_string +=(x-5); 
   }
  if (monk_levels>=11)
   {
    flurry_of_blows_string +=" / "; 
    if (x-10>0){flurry_of_blows_string +=" + "}
    flurry_of_blows_string +=(x-10); 
   }
  if (monk_levels>=15)
   {
    flurry_of_blows_string +=" / "; 
    if (x-10>0){flurry_of_blows_string +=" + "}
    flurry_of_blows_string +=(x-10); 
   }
  if (monk_levels>=16)
   {
    flurry_of_blows_string +=" / "; 
    if (x-15>10){flurry_of_blows_string +=" + "}
    flurry_of_blows_string +=(x-15); 
   }


  

  CMB_attack=base_attack_bonus + modifier_number(strength);
  if (has_agilemaneuvers){CMB_attack=base_attack_bonus + modifier_number(dexterity);}
  if (small==true){CMB_attack=CMB_attack-1; }
  CMB_string_1=CMB_attack; 
  if (CMB_attack>=0){CMB_string_1=" + " + CMB_string_1; }
  CMB_string_2=""; 
  CMB_string_2 +=" = " + base_attack_bonus + " [base] "; 
  if (has_agilemaneuvers==false)
  {
  if (modifier_number(strength)>0){CMB_string_2 +=" + " + modifier_number(strength) + " [strength] "}
  if (modifier_number(strength)<0){CMB_string_2 +=modifier_number(strength) + " [strength] "}
  }
  if (has_agilemaneuvers==true)
  {
  if (modifier_number(dexterity)>0){CMB_string_2 +=" + " + modifier_number(dexterity) + " [dexterity] "}
  if (modifier_number(dexterity)<0){CMB_string_2 +=modifier_number(dexterity) + " [dexterity] "}
  }
  if (small==true){CMB_string_2 +="-1 [small] "}

  x=10+base_attack_bonus+modifier_number(strength)+modifier_number(dexterity);
  if (has_defensivecombattraining){x=10+total_levels+modifier_number(strength)+modifier_number(dexterity);} 
  if (small){x--;}
  if (unarmored)
  {
  if (monk_levels>=4){x++;}
  if (monk_levels>=8){x++;}
  if (monk_levels>=12){x++;}
  if (monk_levels>=16){x++;}
  if (monk_levels>=20){x++;}
  if ((monk_levels>0)&(modifier_number(wisdom)>0)){x+=modifier_number(wisdom);}
  }
 
  CMD_string_1=x; if (x>0){CMD_string_1=" + "+x;} 
  if (!has_defensivecombattraining){CMD_string_2=" = 10 + " + base_attack_bonus +" [base] ";}
  if (has_defensivecombattraining){CMD_string_2=" = 10 + " + total_levels +" [hit dice] ";}
  if (modifier_number(strength)>0){CMD_string_2 +=" + " + modifier_number(strength) + " [strength] "}
  if (modifier_number(strength)<0){CMD_string_2 +=modifier_number(strength) + " [strength] "}
  if (modifier_number(dexterity)>0){CMD_string_2 +=" + " + modifier_number(dexterity) + " [dexterity] "}
  if (modifier_number(dexterity)<0){CMD_string_2 +=modifier_number(dexterity) + " [dexterity] "}
  if (small==true){CMD_string_2 +="-1 [small] "}


  if (unarmored)
  {
  if (monk_levels>=20){CMD_string_2+=" + 5 [unarmored monk] "}
  else if (monk_levels>=16){CMD_string_2+=" + 4 [unarmored monk] "}
  else if (monk_levels>=12){CMD_string_2+=" + 31 [unarmored monk] "}
  else if (monk_levels>=8){CMD_string_2+=" + 2 [unarmored monk] "}
  else if (monk_levels>=4){CMD_string_2+=" + 1 [unarmored monk] "}
  if ((monk_levels>0)&(modifier_number(wisdom)>0)){CMD_string_2+=" + "+modifier_number(wisdom)+" [monk wisdom]";}
  }
  missile_attack=base_attack_bonus + modifier_number(dexterity); 
  if (small==true){missile_attack++ ; }
  missile_attack_string_1=missile_attack; 
  if (base_attack_bonus>5){missile_attack_string_1 +="/ + " + (missile_attack-5); }
  if (base_attack_bonus>10){missile_attack_string_1 +="/ + " + (missile_attack-10); }
  if (base_attack_bonus>15){missile_attack_string_1 +="/ + " + (missile_attack-15); }
  missile_attack_string_2=""
  missile_attack_string_2 +=" = " + base_attack_bonus + " [base] "; 
  if (modifier_number(dexterity)>0){missile_attack_string_2 +=" + " + dexterity_0_string}
  if (modifier_number(dexterity)<0){missile_attack_string_2 +=dexterity_0_string}
  if (small==true){missile_attack_string_2 +=" + 1 [small] "}
  if (missile_attack>=0){missile_attack_string_1=" + " + missile_attack_string_1; }


  finesse_attack=missile_attack;
  finesse_attack_string_1=missile_attack_string_1;
  finesse_attack_string_2=missile_attack_string_2;

}

function bspd(spell_level){
 if (bard_levels + prestige_bard_spell_levels==0){return -10; } else
 if (bard_levels + prestige_bard_spell_levels==1)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 1; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==2)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 2; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==3)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 3; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==4)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 3; }
   if (spell_level==2){return 1; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==5)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 2; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==6)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==7)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 1; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==8)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 2; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==9)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==10)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return 1; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==11)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 2; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==12)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 3; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==13)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 3; }
   if (spell_level==5){return 1; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==14)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 2; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==15)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 5; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return -10; }
  } else
 if (bard_levels + prestige_bard_spell_levels==16)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 5; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return 1; }
  } else
 if (bard_levels + prestige_bard_spell_levels==17)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 5; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return 2; }
  } else
 if (bard_levels + prestige_bard_spell_levels==18)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 5; }
   if (spell_level==4){return 5; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 3; }
  } else
 if (bard_levels + prestige_bard_spell_levels==19)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 5; }
   if (spell_level==4){return 5; }
   if (spell_level==5){return 5; }
   if (spell_level==6){return 4; }
  } else
 if (bard_levels + prestige_bard_spell_levels==20)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 5; }
   if (spell_level==4){return 5; }
   if (spell_level==5){return 5; }
   if (spell_level==6){return 5; }
  } else {return 0; }
 }

function cspd(spell_level,character_level){
 if (character_level==0){return -10; } else
 if (character_level==1)
  {
   if (spell_level==0){return 3; }
   if (spell_level==1){return 1; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==2)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 2; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==3)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 2; }
   if (spell_level==2){return 1; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==4)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 3; }
   if (spell_level==2){return 2; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==5)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 3; }
   if (spell_level==2){return 2; }
   if (spell_level==3){return 1; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==6)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 3; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 2; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==7)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 2; }
   if (spell_level==4){return 1; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==8)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return 2; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==9)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return 2; }
   if (spell_level==5){return 1; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==10)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return 3; }
   if (spell_level==5){return 2; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==11)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 3; }
   if (spell_level==5){return 2; }
   if (spell_level==6){return 1; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==12)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 3; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return 2; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==13)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return 2; }
   if (spell_level==7){return 1; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==14)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return 3; }
   if (spell_level==7){return 2; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==15)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 3; }
   if (spell_level==7){return 2; }
   if (spell_level==8){return 1; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==16)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 3; }
   if (spell_level==7){return 3; }
   if (spell_level==8){return 2; }
   if (spell_level==9){return -10; }
  } else
 if (character_level==17)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 4; }
   if (spell_level==7){return 3; }
   if (spell_level==8){return 2; }
   if (spell_level==9){return 1; }
  } else
 if (character_level==18)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 4; }
   if (spell_level==7){return 3; }
   if (spell_level==8){return 3; }
   if (spell_level==9){return 2; }
  } else
 if (character_level==19)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 4; }
   if (spell_level==7){return 4; }
   if (spell_level==8){return 3; }
   if (spell_level==9){return 3; }
  } else
 if (character_level==20)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 4; }
   if (spell_level==7){return 4; }
   if (spell_level==8){return 4; }
   if (spell_level==9){return 4; }
  } else {return 0; }
 }

function pspd(spell_level,character_level){
 if (character_level<4){return -10; } else
 if (character_level==4)
  {
   if (spell_level==1){return 0; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
  } else
 if (character_level==5)
  {
   if (spell_level==1){return 1; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
  } else
 if (character_level==6)
  {
   if (spell_level==1){return 1; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
  } else
 if (character_level==7)
  {
   if (spell_level==1){return 1; }
   if (spell_level==2){return 0; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
  } else
 if (character_level==8)
  {
   if (spell_level==1){return 1; }
   if (spell_level==2){return 1; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
  } else
 if (character_level==9)
  {
   if (spell_level==1){return 2; }
   if (spell_level==2){return 1; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
  } else
 if (character_level==10)
  {
   if (spell_level==1){return 2; }
   if (spell_level==2){return 1; }
   if (spell_level==3){return 0; }
   if (spell_level==4){return -10; }
  } else
 if (character_level==11)
  {
   if (spell_level==1){return 2; }
   if (spell_level==2){return 1; }
   if (spell_level==3){return 1; }
   if (spell_level==4){return -10; }
  } else
 if (character_level==12)
  {
   if (spell_level==1){return 2; }
   if (spell_level==2){return 2; }
   if (spell_level==3){return 1; }
   if (spell_level==4){return -10; }
  } else
 if (character_level==13)
  {
   if (spell_level==1){return 3; }
   if (spell_level==2){return 2; }
   if (spell_level==3){return 1; }
   if (spell_level==4){return 0; }
  } else
 if (character_level==14)
  {
   if (spell_level==1){return 3; }
   if (spell_level==2){return 2; }
   if (spell_level==3){return 1; }
   if (spell_level==4){return 0; }
  } else
 if (character_level==15)
  {
   if (spell_level==1){return 3; }
   if (spell_level==2){return 2; }
   if (spell_level==3){return 2; }
   if (spell_level==4){return 1; }
  } else
 if (character_level==16)
  {
   if (spell_level==1){return 3; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 2; }
   if (spell_level==4){return 1; }
  } else
 if (character_level==17)
  {
   if (spell_level==1){return 4; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 2; }
   if (spell_level==4){return 1; }
  } else
 if (character_level==18)
  {
   if (spell_level==1){return 4; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 2; }
   if (spell_level==4){return 2; }
  } else
 if (character_level==19)
  {
   if (spell_level==1){return 4; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return 2; }
  } else
 if (character_level==20)
  {
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return 3; }
  } else {return 0; }
 }

function sspd(spell_level){
 if (sorcerer_levels + prestige_sorcerer_spell_levels==0){return -10; } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==1)
  {
   if (spell_level==0){return 5; }
   if (spell_level==1){return 3; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==2)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==3)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 5; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==4)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==5)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==6)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 5; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==7)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==8)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 5; }
   if (spell_level==4){return 3; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==9)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==10)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 5; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==11)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==12)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 5; }
   if (spell_level==6){return 3; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==13)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 6; }
   if (spell_level==6){return 4; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==14)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 6; }
   if (spell_level==6){return 5; }
   if (spell_level==7){return 3; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==15)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 6; }
   if (spell_level==6){return 6; }
   if (spell_level==7){return 4; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==16)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 6; }
   if (spell_level==6){return 6; }
   if (spell_level==7){return 5; }
   if (spell_level==8){return 3; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==17)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 6; }
   if (spell_level==6){return 6; }
   if (spell_level==7){return 6; }
   if (spell_level==8){return 4; }
   if (spell_level==9){return -10; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==18)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 6; }
   if (spell_level==6){return 6; }
   if (spell_level==7){return 6; }
   if (spell_level==8){return 5; }
   if (spell_level==9){return 3; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==19)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 6; }
   if (spell_level==6){return 6; }
   if (spell_level==7){return 6; }
   if (spell_level==8){return 6; }
   if (spell_level==9){return 4; }
  } else
 if (sorcerer_levels + prestige_sorcerer_spell_levels==20)
  {
   if (spell_level==0){return 6; }
   if (spell_level==1){return 6; }
   if (spell_level==2){return 6; }
   if (spell_level==3){return 6; }
   if (spell_level==4){return 6; }
   if (spell_level==5){return 6; }
   if (spell_level==6){return 6; }
   if (spell_level==7){return 6; }
   if (spell_level==8){return 6; }
   if (spell_level==9){return 6; }
  } else {return 0; }
 }

function wspd(spell_level){
 if (wizard_levels + prestige_wizard_spell_levels==0){return -10; } else
 if (wizard_levels + prestige_wizard_spell_levels==1)
  {
   if (spell_level==0){return 3; }
   if (spell_level==1){return 1; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==2)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 2; }
   if (spell_level==2){return -10; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==3)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 2; }
   if (spell_level==2){return 1; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==4)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 3; }
   if (spell_level==2){return 2; }
   if (spell_level==3){return -10; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==5)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 3; }
   if (spell_level==2){return 2; }
   if (spell_level==3){return 1; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==6)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 3; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 2; }
   if (spell_level==4){return -10; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==7)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 2; }
   if (spell_level==4){return 1; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==8)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 3; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return 2; }
   if (spell_level==5){return -10; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==9)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return 2; }
   if (spell_level==5){return 1; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==10)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 3; }
   if (spell_level==4){return 3; }
   if (spell_level==5){return 2; }
   if (spell_level==6){return -10; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==11)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 3; }
   if (spell_level==5){return 2; }
   if (spell_level==6){return 1; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==12)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 3; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return 2; }
   if (spell_level==7){return -10; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==13)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return 2; }
   if (spell_level==7){return 1; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==14)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 3; }
   if (spell_level==6){return 3; }
   if (spell_level==7){return 2; }
   if (spell_level==8){return -10; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==15)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 3; }
   if (spell_level==7){return 2; }
   if (spell_level==8){return 1; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==16)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 3; }
   if (spell_level==7){return 3; }
   if (spell_level==8){return 2; }
   if (spell_level==9){return -10; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==17)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 4; }
   if (spell_level==7){return 3; }
   if (spell_level==8){return 2; }
   if (spell_level==9){return 1; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==18)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 4; }
   if (spell_level==7){return 3; }
   if (spell_level==8){return 3; }
   if (spell_level==9){return 2; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==19)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 4; }
   if (spell_level==7){return 4; }
   if (spell_level==8){return 3; }
   if (spell_level==9){return 3; }
  } else
 if (wizard_levels + prestige_wizard_spell_levels==20)
  {
   if (spell_level==0){return 4; }
   if (spell_level==1){return 4; }
   if (spell_level==2){return 4; }
   if (spell_level==3){return 4; }
   if (spell_level==4){return 4; }
   if (spell_level==5){return 4; }
   if (spell_level==6){return 4; }
   if (spell_level==7){return 4; }
   if (spell_level==8){return 4; }
   if (spell_level==9){return 4; }
  } else {return 0; }
 }





function bonus_spell(spell_level,ability_score){
 if (ability_score-spell_level<10){return -100; } else
 if (spell_level==0){return 0; } else
 if (ability_score<12){return 0; } else
 if (Math.floor(ability_score-2-2*spell_level<=0)){return 0;}
 else return Math.floor((ability_score-2-2*spell_level)/8);
 }


function PrepareBardSpellArrays(){
   BardSpells0=""; 
   BardSpells1=""; 
   BardSpells2=""; 
   BardSpells3=""; 
   BardSpells4=""; 
   BardSpells5=""; 
   BardSpells6=""; 
 if (bard_levels + prestige_bard_spell_levels>0)
  {
   x=bspd(0) + bonus_spell(0,charisma); 
   stringy=""; if (bonus_spell(0,charisma)>0){stringy=" (" + bspd(0) + " + " + bonus_spell(0,charisma) + ") "; }
   if (x>0){BardSpells0="<p>Zero-level Bard spells: Unlimited casting of cantrips known"; }
   x=bspd(1) + bonus_spell(1,charisma); 
   stringy=""; if (bonus_spell(1,charisma)>0){stringy=" (" + bspd(1) + " + " + bonus_spell(1,charisma) + ") "; }
   if (x>0){BardSpells1="First-level Bard spells: " + x  + stringy + " per day"; }
   x=bspd(2) + bonus_spell(2,charisma); 
   stringy=""; if (bonus_spell(2,charisma)>0){stringy=" (" + bspd(2) + " + " + bonus_spell(2,charisma) + ") "; }
   if (x>0){BardSpells2="Second-level Bard spells: " + x  + stringy + " per day"; }
   x=bspd(3) + bonus_spell(3,charisma); 
   stringy=""; if (bonus_spell(3,charisma)>0){stringy=" (" + bspd(3) + " + " + bonus_spell(3,charisma) + ") "; }
   if (x>0){BardSpells3="Third-level Bard spells: " + x  + stringy + " per day"; }
   x=bspd(4) + bonus_spell(4,charisma); 
   stringy=""; if (bonus_spell(4,charisma)>0){stringy=" (" + bspd(4) + " + " + bonus_spell(4,charisma) + ") "; }
   if (x>0){BardSpells4="Fourth-level Bard spells: " + x  + stringy + " per day"; }
   x=bspd(5) + bonus_spell(5,charisma); 
   stringy=""; if (bonus_spell(5,charisma)>0){stringy=" (" + bspd(5) + " + " + bonus_spell(5,charisma) + ") "; }
   if (x>0){BardSpells5="Fifth-level Bard spells: " + x  + stringy + " per day"; }
   x=bspd(6) + bonus_spell(6,charisma); 
   stringy=""; if (bonus_spell(6,charisma)>0){stringy=" (" + bspd(6) + " + " + bonus_spell(6,charisma) + ") "; }
   if (x>0){BardSpells6="Sixth-level Bard spells: " + x  + stringy + " per day"; }


   if (charisma<10){BardSpells1="Your charisma is too low to use bard magic.";  return; }

   x=bspd(1); 
   if ((charisma<11)&(bspd(1)>0)&(charisma>=10)){BardSpells1="Use your " + x + " first-level bard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=bspd(2); 
   if ((charisma<12)&(bspd(2)>0)&(charisma>=10)){BardSpells2="Use your " + x + " second-level bard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=bspd(3); 
   if ((charisma<13)&(bspd(3)>0)&(charisma>=10)){BardSpells3="Use your " + x + " third-level bard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=bspd(4); 
   if ((charisma<14)&(bspd(4)>0)&(charisma>=10)){BardSpells4="Use your " + x + " fourth-level bard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=bspd(5); 
   if ((charisma<15)&(bspd(5)>0)&(charisma>=10)){BardSpells5="Use your " + x + " fifth-level bard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=bspd(6); 
   if ((charisma<16)&(bspd(6)>0)&(charisma>=10)){BardSpells6="Use your " + x + " sixth-level bard spell " + slottage(x) + " to cast lower-level spells:"; }




  }
}

function PrepareClericSpellArrays(){


   ClericSpells0=""; 
   ClericSpells1=""; 
   ClericSpells2=""; 
   ClericSpells3=""; 
   ClericSpells4=""; 
   ClericSpells5=""; 
   ClericSpells6=""; 
   ClericSpells7=""; 
   ClericSpells8=""; 
   ClericSpells9=""; 
 if (cleric_levels + prestige_cleric_spell_levels>0)
  {

   x=cspd(0,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(0,wisdom); 
   stringy=""; if (bonus_spell(0,wisdom)>0){stringy=" (" + cspd(0,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(0,wisdom) + ") "; }
   if (x>0){ClericSpells0="<p>Zero-level Cleric spells: " + x  + stringy + " can be selected per day, unlimited casting"; }
   x=cspd(1,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(1,wisdom); 
   stringy=""; if (bonus_spell(1,wisdom)>0){stringy=" (" + cspd(1,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(1,wisdom) + ") "; }
   if (x>0){ClericSpells1="First-level Cleric spells: " + x  + stringy + " per day  + 1 from a domain:"; }
   x=cspd(2,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(2,wisdom); 
   stringy=""; if (bonus_spell(2,wisdom)>0){stringy=" (" + cspd(2,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(2,wisdom) + ") "; }
   if (x>0){ClericSpells2="Second-level Cleric spells: " + x  + stringy + " per day  + 1 from a domain:"; }
   x=cspd(3,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(3,wisdom); 
   stringy=""; if (bonus_spell(3,wisdom)>0){stringy=" (" + cspd(3,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(3,wisdom) + ") "; }
   if (x>0){ClericSpells3="Third-level Cleric spells: " + x  + stringy + " per day  + 1 from a domain:"; }
   x=cspd(4,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(4,wisdom); 
   stringy=""; if (bonus_spell(4,wisdom)>0){stringy=" (" + cspd(4,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(4,wisdom) + ") "; }
   if (x>0){ClericSpells4="Fourth-level Cleric spells: " + x  + stringy + " per day  + 1 from a domain:"; }
   x=cspd(5,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(5,wisdom); 
   stringy=""; if (bonus_spell(5,wisdom)>0){stringy=" (" + cspd(5,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(5,wisdom) + ") "; }
   if (x>0){ClericSpells5="Fifth-level Cleric spells: " + x  + stringy + " per day  + 1 from a domain:"; }
   x=cspd(6,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(6,wisdom); 
   stringy=""; if (bonus_spell(6,wisdom)>0){stringy=" (" + cspd(6,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(6,wisdom) + ") "; }
   if (x>0){ClericSpells6="Sixth-level Cleric spells: " + x  + stringy + " per day  + 1 from a domain:"; }
   x=cspd(7,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(7,wisdom); 
   stringy=""; if (bonus_spell(7,wisdom)>0){stringy=" (" + cspd(7,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(7,wisdom) + ") "; }
   if (x>0){ClericSpells7="Seventh-level Cleric spells: " + x  + stringy + " per day  + 1 from a domain:"; }
   x=cspd(8,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(8,wisdom); 
   stringy=""; if (bonus_spell(8,wisdom)>0){stringy=" (" + cspd(8,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(8,wisdom) + ") "; }
   if (x>0){ClericSpells8="Eighth-level Cleric spells: " + x  + stringy + " per day  + 1 from a domain:"; }
   x=cspd(9,cleric_levels + prestige_cleric_spell_levels) + bonus_spell(9,wisdom); 
   stringy=""; if (bonus_spell(9,wisdom)>0){stringy=" (" + cspd(9,cleric_levels + prestige_cleric_spell_levels) + " + " + bonus_spell(9,wisdom) + ") "; }
   if (x>0){ClericSpells9="Ninth-level Cleric spells: " + x  + stringy + " per day  + 1 from a domain:"; }


   if (wisdom<10){ClericSpells1="Your wisdom is too low to use clerical magic.";  return; }


   x=cspd(1,cleric_levels + prestige_cleric_spell_levels); 
   if ((wisdom<11)&(x>0)&(wisdom>=10)){ClericSpells1="Use your " + x + " + 1 first-level cleric spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(2,cleric_levels + prestige_cleric_spell_levels); 
   if ((wisdom<12)&(x>0)&(wisdom>=10)){ClericSpells2="Use your " + x + " + 1 second-level cleric spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(3,cleric_levels + prestige_cleric_spell_levels); 
   if ((wisdom<13)&(x>0)&(wisdom>=10)){ClericSpells3="Use your " + x + " + 1 third-level cleric spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(4,cleric_levels + prestige_cleric_spell_levels); 
   if ((wisdom<14)&(x>0)&(wisdom>=10)){ClericSpells4="Use your " + x + " + 1 fourth-level cleric spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(5,cleric_levels + prestige_cleric_spell_levels); 
   if ((wisdom<15)&(x>0)&(wisdom>=10)){ClericSpells5="Use your " + x + " + 1 fifth-level cleric spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(6,cleric_levels + prestige_cleric_spell_levels); 
   if ((wisdom<16)&(x>0)&(wisdom>=10)){ClericSpells6="Use your " + x + " + 1 sixth-level cleric spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(7,cleric_levels + prestige_cleric_spell_levels); 
   if ((wisdom<17)&(x>0)&(wisdom>=10)){ClericSpells7="Use your " + x + " + 1 seventh-level cleric spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(8,cleric_levels + prestige_cleric_spell_levels); 
   if ((wisdom<18)&(x>0)&(wisdom>=10)){ClericSpells8="Use your " + x + " + 1 eighth-level cleric spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(9,cleric_levels + prestige_cleric_spell_levels); 
   if ((wisdom<19)&(x>0)&(wisdom>=10)){ClericSpells9="Use your " + x + " + 1 ninth-level cleric spell " + slottage(x) + " to cast lower-level spells:"; }
  }

 }


function PrepareDruidSpellArrays(){
   DruidSpells0=""; 
   DruidSpells1=""; 
   DruidSpells2=""; 
   DruidSpells3=""; 
   DruidSpells4=""; 
   DruidSpells5=""; 
   DruidSpells6=""; 
   DruidSpells7=""; 
   DruidSpells8=""; 
   DruidSpells9=""; 
 if (druid_levels + prestige_druid_spell_levels>0)
  {
   x=cspd(0,druid_levels + prestige_druid_spell_levels) + bonus_spell(0,wisdom); 
   stringy=""; if (bonus_spell(0,wisdom)>0){stringy=" (" + cspd(0,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(0,wisdom) + ") "; }
   if (x>0){DruidSpells0="<p>Zero-level Druid spells: " + x  + stringy + " can be selected per day; unlimited casting"; }
   x=cspd(1,druid_levels + prestige_druid_spell_levels) + bonus_spell(1,wisdom); 
   stringy=""; if (bonus_spell(1,wisdom)>0){stringy=" (" + cspd(1,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(1,wisdom) + ") "}
   if (x>0){DruidSpells1="First-level Druid spells: " + x  + stringy + DruidDomainAddition() +  " per day"; }
   x=cspd(2,druid_levels + prestige_druid_spell_levels) + bonus_spell(2,wisdom); 
   stringy=""; if (bonus_spell(2,wisdom)>0){stringy=" (" + cspd(2,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(2,wisdom) + ") " }
   if (x>0){DruidSpells2="Second-level Druid spells: " + x  + stringy +  DruidDomainAddition() +  " per day"; }
   x=cspd(3,druid_levels + prestige_druid_spell_levels) + bonus_spell(3,wisdom); 
   stringy=""; if (bonus_spell(3,wisdom)>0){stringy=" (" + cspd(3,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(3,wisdom) + ") " }
   if (x>0){DruidSpells3="Third-level Druid spells: " + x  + stringy +  DruidDomainAddition() +  " per day"; }
   x=cspd(4,druid_levels + prestige_druid_spell_levels) + bonus_spell(4,wisdom); 
   stringy=""; if (bonus_spell(4,wisdom)>0){stringy=" (" + cspd(4,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(4,wisdom) + ") " }
   if (x>0){DruidSpells4="Fourth-level Druid spells: " + x  + stringy +  DruidDomainAddition() +  " per day"; }
   x=cspd(5,druid_levels + prestige_druid_spell_levels) + bonus_spell(5,wisdom); 
   stringy=""; if (bonus_spell(5,wisdom)>0){stringy=" (" + cspd(5,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(5,wisdom) + ") " }
   if (x>0){DruidSpells5="Fifth-level Druid spells: " + x  + stringy +  DruidDomainAddition() +  " per day"; }
   x=cspd(6,druid_levels + prestige_druid_spell_levels) + bonus_spell(6,wisdom); 
   stringy=""; if (bonus_spell(6,wisdom)>0){stringy=" (" + cspd(6,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(6,wisdom) + ") " }
   if (x>0){DruidSpells6="Sixth-level Druid spells: " + x  + stringy +  DruidDomainAddition() +  " per day"; }
   x=cspd(7,druid_levels + prestige_druid_spell_levels) + bonus_spell(7,wisdom); 
   stringy=""; if (bonus_spell(7,wisdom)>0){stringy=" (" + cspd(7,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(7,wisdom) + ") " }
   if (x>0){DruidSpells7="Seventh-level Druid spells: " + x  + stringy +  DruidDomainAddition() +  " per day"; }
   x=cspd(8,druid_levels + prestige_druid_spell_levels) + bonus_spell(8,wisdom); 
   stringy=""; if (bonus_spell(8,wisdom)>0){stringy=" (" + cspd(8,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(8,wisdom) + ") " }
   if (x>0){DruidSpells8="Eighth-level Druid spells: " + x  + stringy +  DruidDomainAddition() +  " per day"; }
   x=cspd(9,druid_levels + prestige_druid_spell_levels) + bonus_spell(9,wisdom); 
   stringy=""; if (bonus_spell(9,wisdom)>0){stringy=" (" + cspd(9,druid_levels + prestige_druid_spell_levels) + " + " + bonus_spell(9,wisdom) + ") " }
   if (x>0){DruidSpells9="Ninth-level Druid spells: " + x  + stringy +  DruidDomainAddition() +  " per day"; }


   if (wisdom<10){DruidSpells1="Your wisdom is too low to use druid magic.";  return; }


   x=cspd(1,druid_levels + prestige_druid_spell_levels); 
   if ((wisdom<11)&(x>0)&(wisdom>=10)){DruidSpells1="Use your " + x + " first-level druid spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(2,druid_levels + prestige_druid_spell_levels); 
   if ((wisdom<12)&(x>0)&(wisdom>=10)){DruidSpells2="Use your " + x + " second-level druid spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(3,druid_levels + prestige_druid_spell_levels); 
   if ((wisdom<13)&(x>0)&(wisdom>=10)){DruidSpells3="Use your " + x + " third-level druid spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(4,druid_levels + prestige_druid_spell_levels); 
   if ((wisdom<14)&(x>0)&(wisdom>=10)){DruidSpells4="Use your " + x + " fourth-level druid spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(5,druid_levels + prestige_druid_spell_levels); 
   if ((wisdom<15)&(x>0)&(wisdom>=10)){DruidSpells5="Use your " + x + " fifth-level druid spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(6,druid_levels + prestige_druid_spell_levels); 
   if ((wisdom<16)&(x>0)&(wisdom>=10)){DruidSpells6="Use your " + x + " sixth-level druid spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(7,druid_levels + prestige_druid_spell_levels); 
   if ((wisdom<17)&(x>0)&(wisdom>=10)){DruidSpells7="Use your " + x + " seventh-level druid spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(8,druid_levels + prestige_druid_spell_levels); 
   if ((wisdom<18)&(x>0)&(wisdom>=10)){DruidSpells8="Use your " + x + " eighth-level druid spell " + slottage(x) + " to cast lower-level spells:"; }
   x=cspd(9,druid_levels + prestige_druid_spell_levels); 
   if ((wisdom<19)&(x>0)&(wisdom>=10)){DruidSpells9="Use your " + x + " ninth-level druid spell " + slottage(x) + " to cast lower-level spells:"; }


  }

 }


function PreparePaladinSpellArrays(){
   PaladinSpells0=""; 
   PaladinSpells1=""; 
   PaladinSpells2=""; 
   PaladinSpells3=""; 
   PaladinSpells4=""; 
   PaladinSpells5=""; 
   PaladinSpells6=""; 
   PaladinSpells7=""; 
   PaladinSpells8=""; 
   PaladinSpells9=""; 
 if (paladin_levels + prestige_paladin_spell_levels>0)
  {
   x=pspd(1,paladin_levels + prestige_paladin_spell_levels) + bonus_spell(1,charisma); 
   stringy=""; if (bonus_spell(1,charisma)>0){stringy=" (" + pspd(1,paladin_levels + prestige_paladin_spell_levels) + " + " + bonus_spell(1,charisma) + ") "; }
   if (x>0){PaladinSpells1="<p>First-level Paladin spells: " + x  + stringy + " per day"; }
   x=pspd(2,paladin_levels + prestige_paladin_spell_levels) + bonus_spell(2,charisma); 
   stringy=""; if (bonus_spell(2,charisma)>0){stringy=" (" + pspd(2,paladin_levels + prestige_paladin_spell_levels) + " + " + bonus_spell(2,charisma) + ") "; }
   if (x>0){PaladinSpells2="Second-level Paladin spells: " + x  + stringy + " per day"; }
   x=pspd(3,paladin_levels + prestige_paladin_spell_levels) + bonus_spell(3,charisma); 
   stringy=""; if (bonus_spell(3,charisma)>0){stringy=" (" + pspd(3,paladin_levels + prestige_paladin_spell_levels) + " + " + bonus_spell(3,charisma) + ") "; }
   if (x>0){PaladinSpells3="Third-level Paladin spells: " + x  + stringy + " per day"; }
   x=pspd(4,paladin_levels + prestige_paladin_spell_levels) + bonus_spell(4,charisma); 
   stringy=""; if (bonus_spell(4,charisma)>0){stringy=" (" + pspd(4,paladin_levels + prestige_paladin_spell_levels) + " + " + bonus_spell(4,charisma) + ") "; }
   if (x>0){PaladinSpells4="Fourth-level Paladin spells: " + x  + stringy + " per day"; }


   if (charisma<11){PaladinSpells1="Your charisma is too low to use paladin magic.";  return; }


   x=pspd(1,paladin_levels + prestige_paladin_spell_levels); 
   if ((charisma<11)&(x>0)&(charisma>=10)){PaladinSpells1="Use your " + x + " first-level paladin spell " + slottage(x) + " to cast lower-level spells:"; }
   x=pspd(2,paladin_levels + prestige_paladin_spell_levels); 
   if ((charisma<12)&(x>0)&(charisma>=10)){PaladinSpells2="Use your " + x + " second-level paladin spell " + slottage(x) + " to cast lower-level spells:"; }
   x=pspd(3,paladin_levels + prestige_paladin_spell_levels); 
   if ((charisma<13)&(x>0)&(charisma>=10)){PaladinSpells3="Use your " + x + " third-level paladin spell " + slottage(x) + " to cast lower-level spells:"; }
   x=pspd(4,paladin_levels + prestige_paladin_spell_levels); 
   if ((charisma<14)&(x>0)&(charisma>=10)){PaladinSpells4="Use your " + x + " fourth-level paladin spell " + slottage(x) + " to cast lower-level spells:"; }
  }
 }



function PrepareRangerSpellArrays(){
   RangerSpells0=""; 
   RangerSpells1=""; 
   RangerSpells2=""; 
   RangerSpells3=""; 
   RangerSpells4=""; 
   RangerSpells5=""; 
   RangerSpells6=""; 
   RangerSpells7=""; 
   RangerSpells8=""; 
   RangerSpells9=""; 
 if (ranger_levels + prestige_ranger_spell_levels>0)
  {
   x=pspd(1,ranger_levels + prestige_ranger_spell_levels) + bonus_spell(1,wisdom); 
   stringy=""; if (bonus_spell(1,wisdom)>0){stringy=" (" + pspd(1,ranger_levels + prestige_ranger_spell_levels) + " + " + bonus_spell(1,wisdom) + ") "; }
   if (x>0){RangerSpells1="<p>First-level Ranger spells: " + x  + stringy + " per day"; }
   x=pspd(2,ranger_levels + prestige_ranger_spell_levels) + bonus_spell(2,wisdom); 
   stringy=""; if (bonus_spell(2,wisdom)>0){stringy=" (" + pspd(2,ranger_levels + prestige_ranger_spell_levels) + " + " + bonus_spell(2,wisdom) + ") "; }
   if (x>0){RangerSpells2="Second-level Ranger spells: " + x  + stringy + " per day"; }
   x=pspd(3,ranger_levels + prestige_ranger_spell_levels) + bonus_spell(3,wisdom); 
   stringy=""; if (bonus_spell(3,wisdom)>0){stringy=" (" + pspd(3,ranger_levels + prestige_ranger_spell_levels) + " + " + bonus_spell(3,wisdom) + ") "; }
   if (x>0){RangerSpells3="Third-level Ranger spells: " + x  + stringy + " per day"; }
   x=pspd(4,ranger_levels + prestige_ranger_spell_levels) + bonus_spell(4,wisdom); 
   stringy=""; if (bonus_spell(4,wisdom)>0){stringy=" (" + pspd(4,ranger_levels + prestige_ranger_spell_levels) + " + " + bonus_spell(4,wisdom) + ") "; }
   if (x>0){RangerSpells4="Fourth-level Ranger spells: " + x  + stringy + " per day"; }  


   if (wisdom<11){RangerSpells1="Your wisdom is too low to use ranger magic.";  return; }

   x=pspd(1,ranger_levels + prestige_ranger_spell_levels); 
   if ((wisdom<11)&(x>0)&(wisdom>=10)){RangerSpells1="Use your " + x + " first-level ranger spell " + slottage(x) + " to cast lower-level spells:"; }
   x=pspd(2,ranger_levels + prestige_ranger_spell_levels); 
   if ((wisdom<12)&(x>0)&(wisdom>=10)){RangerSpells2="Use your " + x + " second-level ranger spell " + slottage(x) + " to cast lower-level spells:"; }
   x=pspd(3,ranger_levels + prestige_ranger_spell_levels); 
   if ((wisdom<13)&(x>0)&(wisdom>=10)){RangerSpells3="Use your " + x + " third-level ranger spell " + slottage(x) + " to cast lower-level spells:"; }
   x=pspd(4,ranger_levels + prestige_ranger_spell_levels); 
   if ((wisdom<14)&(x>0)&(wisdom>=10)){RangerSpells4="Use your " + x + " fourth-level ranger spell " + slottage(x) + " to cast lower-level spells:"; }
  }
 }


function SorcerousCharisma(){
//zzzzzzz
 if ((rayce==28)&(has_celestial_bloodline)){return (charisma+2);}
 if ((rayce==33)&(has_abyssal_bloodline)){return (charisma+2);}
 if ((rayce==33)&(has_infernal_bloodline)){return (charisma+2);}
 if ((rayce==29)&(has_elemental_bloodline)){return (charisma+2);}
 if ((rayce==30)&(has_elemental_bloodline)){return (charisma+2);}
 if ((rayce==31)&(has_elemental_bloodline)){return (charisma+2);}
 if ((rayce==32)&(has_elemental_bloodline)){return (charisma+2);}
 return charisma;
 }

function PrepareSorcererSpellArrays(){
 
   SorcererSpells0=""; 
   SorcererSpells1=""; 
   SorcererSpells2=""; 
   SorcererSpells3=""; 
   SorcererSpells4=""; 
   SorcererSpells5=""; 
   SorcererSpells6=""; 
   SorcererSpells7=""; 
   SorcererSpells8=""; 
   SorcererSpells9=""; 
 if (sorcerer_levels + prestige_sorcerer_spell_levels>0)
  {
   
   x=sspd(0) + bonus_spell(0,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(0,SorcerousCharisma())>0){stringy=" (" + sspd(0) + " + " + bonus_spell(0,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells0="<p>Zero-level Sorcerer spells: Cantrips can be used at will"; }
   x=sspd(1) + bonus_spell(1,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(1,SorcerousCharisma())>0){stringy=" (" + sspd(1) + " + " + bonus_spell(1,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells1="First-level Sorcerer spells: " + x  + stringy + " per day"; }
   x=sspd(2) + bonus_spell(2,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(2,SorcerousCharisma())>0){stringy=" (" + sspd(2) + " + " + bonus_spell(2,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells2="Second-level Sorcerer spells: " + x  + stringy + " per day"; }
   x=sspd(3) + bonus_spell(3,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(3,SorcerousCharisma())>0){stringy=" (" + sspd(3) + " + " + bonus_spell(3,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells3="Third-level Sorcerer spells: " + x  + stringy + " per day"; }
   x=sspd(4) + bonus_spell(4,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(4,SorcerousCharisma())>0){stringy=" (" + sspd(4) + " + " + bonus_spell(4,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells4="Fourth-level Sorcerer spells: " + x  + stringy + " per day"; }
   x=sspd(5) + bonus_spell(5,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(5,SorcerousCharisma())>0){stringy=" (" + sspd(5) + " + " + bonus_spell(5,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells5="Fifth-level Sorcerer spells: " + x  + stringy + " per day"; }
   x=sspd(6) + bonus_spell(6,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(6,SorcerousCharisma())>0){stringy=" (" + sspd(6) + " + " + bonus_spell(6,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells6="Sixth-level Sorcerer spells: " + x  + stringy + " per day"; }
   x=sspd(7) + bonus_spell(7,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(7,SorcerousCharisma())>0){stringy=" (" + sspd(7) + " + " + bonus_spell(7,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells7="Seventh-level Sorcerer spells: " + x  + stringy + " per day"; }
   x=sspd(8) + bonus_spell(8,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(8,SorcerousCharisma())>0){stringy=" (" + sspd(8) + " + " + bonus_spell(8,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells8="Eighth-level Sorcerer spells: " + x  + stringy + " per day"; }
   x=sspd(9) + bonus_spell(9,SorcerousCharisma()); 
   stringy=""; if (bonus_spell(9,SorcerousCharisma())>0){stringy=" (" + sspd(9) + " + " + bonus_spell(9,SorcerousCharisma()) + ") "; }
   if (x>0){SorcererSpells9="Ninth-level Sorcerer spells: " + x  + stringy + " per day"; }


   if (SorcerousCharisma()<10){SorcererSpells1="Your charisma is too low to use sorcerer magic.";  return; }


   x=sspd(1); 
   if ((SorcerousCharisma()<11)&(x>0)&(SorcerousCharisma()>=10)){SorcererSpells1="Use your " + x + " first-level sorcerer spell " + slottage(x) + " to cast lower-level spells:"; }
   x=sspd(2); 
   if ((SorcerousCharisma()<12)&(x>0)&(SorcerousCharisma()>=10)){SorcererSpells2="Use your " + x + " second-level sorcerer spell " + slottage(x) + " to cast lower-level spells:"; }
   x=sspd(3); 
   if ((SorcerousCharisma()<13)&(x>0)&(SorcerousCharisma()>=10)){SorcererSpells3="Use your " + x + " third-level sorcerer spell " + slottage(x) + " to cast lower-level spells:"; }
   x=sspd(4); 
   if ((SorcerousCharisma()<14)&(x>0)&(SorcerousCharisma()>=10)){SorcererSpells4="Use your " + x + " fourth-level sorcerer spell " + slottage(x) + " to cast lower-level spells:"; }
   x=sspd(5); 
   if ((SorcerousCharisma()<15)&(x>0)&(SorcerousCharisma()>=10)){SorcererSpells5="Use your " + x + " fifth-level sorcerer spell " + slottage(x) + " to cast lower-level spells:"; }
   x=sspd(6); 
   if ((SorcerousCharisma()<16)&(x>0)&(SorcerousCharisma()>=10)){SorcererSpells6="Use your " + x + " sixth-level sorcerer spell " + slottage(x) + " to cast lower-level spells:"; }
   x=sspd(7); 
   if ((SorcerousCharisma()<17)&(x>0)&(SorcerousCharisma()>=10)){SorcererSpells7="Use your " + x + " seventh-level sorcerer spell " + slottage(x) + " to cast lower-level spells:"; }
   x=sspd(8); 
   if ((SorcerousCharisma()<18)&(x>0)&(SorcerousCharisma()>=10)){SorcererSpells8="Use your " + x + " eighth-level sorcerer spell " + slottage(x) + " to cast lower-level spells:"; }
   x=sspd(9); 
   if ((SorcerousCharisma()<19)&(x>0)&(SorcerousCharisma()>=10)){SorcererSpells9="Use your " + x + " ninth-level sorcerer spell " + slottage(x) + " to cast lower-level spells:"; }

  }

 }


function PrepareWizardSpellArrays(){
   WizardSpells0=""; 
   WizardSpells1=""; 
   WizardSpells2=""; 
   WizardSpells3=""; 
   WizardSpells4=""; 
   WizardSpells5=""; 
   WizardSpells6=""; 
   WizardSpells7=""; 
   WizardSpells8=""; 
   WizardSpells9=""; 
 
 if (wizard_levels + prestige_wizard_spell_levels>0)
  {
   x=wspd(0) + bonus_spell(0,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(0,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(0); 
       if (bonus_spell(0,intelligence)>0)
        {stringy +=" + " + bonus_spell(0,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells0="<p>Zero-level " + wizard_specialty_name + "  spells: " + x  + stringy + " can be chosen per day; unlimited casting"; }



   x=wspd(1) + bonus_spell(1,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(1,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(1); 
       if (bonus_spell(1,intelligence)>0)
        {stringy +=" + " + bonus_spell(1,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells1="First-level " + wizard_specialty_name + "  spells: " + x  + stringy + " per day"; }
   x=wspd(2) + bonus_spell(2,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(2,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(2); 
       if (bonus_spell(2,intelligence)>0)
        {stringy +=" + " + bonus_spell(2,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells2="Second-level " + wizard_specialty_name + "  spells: " + x  + stringy + " per day"; }
   x=wspd(3) + bonus_spell(3,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(3,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(3); 
       if (bonus_spell(3,intelligence)>0)
        {stringy +=" + " + bonus_spell(3,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells3="Third-level " + wizard_specialty_name + "  spells: " + x  + stringy + " per day"; }
   x=wspd(4) + bonus_spell(4,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(4,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(4); 
       if (bonus_spell(4,intelligence)>0)
        {stringy +=" + " + bonus_spell(4,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells4="Fourth-level " + wizard_specialty_name + "  spells: " + x  + stringy + " per day"; }
   x=wspd(5) + bonus_spell(5,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(5,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(5); 
       if (bonus_spell(5,intelligence)>0)
        {stringy +=" + " + bonus_spell(5,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells5="Fifth-level " + wizard_specialty_name + "  spells: " + x  + stringy + " per day"; }
   x=wspd(6) + bonus_spell(6,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(6,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(6); 
       if (bonus_spell(6,intelligence)>0)
        {stringy +=" + " + bonus_spell(6,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells6="Sixth-level " + wizard_specialty_name + "  spells: " + x  + stringy + " per day"; }
   x=wspd(7) + bonus_spell(7,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(7,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(7); 
       if (bonus_spell(7,intelligence)>0)
        {stringy +=" + " + bonus_spell(7,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells7="Seventh-level " + wizard_specialty_name + "  spells: " + x  + stringy + " per day"; }
   x=wspd(8) + bonus_spell(8,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(8,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(8); 
       if (bonus_spell(8,intelligence)>0)
        {stringy +=" + " + bonus_spell(8,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells8="Eighth-level " + wizard_specialty_name + "  spells: " + x  + stringy + " per day"; }
   x=wspd(9) + bonus_spell(9,intelligence); if (no_specialist==false){x++ ; }
   stringy=""; 
     if ((bonus_spell(9,intelligence)>0)|(no_specialist==false))
      {
       stringy=" (" + wspd(9); 
       if (bonus_spell(9,intelligence)>0)
        {stringy +=" + " + bonus_spell(9,intelligence); }
       if (no_specialist==false)
        {stringy +=" + 1"; }
       stringy +=") "
      }
   if (x>0){WizardSpells9="Ninth-level " + wizard_specialty_name + "  spells: " + x  + stringy + " per day"; }


   if (intelligence<10){WizardSpells1="Your intelligence is too low to use wizard magic.";  return; }

   x=wspd(1); if (no_specialist==false){x++ ; }
   if ((intelligence<11)&(wspd(1)>0)&(intelligence>=10)){WizardSpells1="Use your " + x + " first-level wizard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=wspd(2); if (no_specialist==false){x++ ; }
   if ((intelligence<12)&(wspd(2)>0)&(intelligence>=10)){WizardSpells2="Use your " + x + " second-level wizard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=wspd(3); if (no_specialist==false){x++ ; }
   if ((intelligence<13)&(wspd(3)>0)&(intelligence>=10)){WizardSpells3="Use your " + x + " third-level wizard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=wspd(4); if (no_specialist==false){x++ ; }
   if ((intelligence<14)&(wspd(4)>0)&(intelligence>=10)){WizardSpells4="Use your " + x + " fourth-level wizard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=wspd(5); if (no_specialist==false){x++ ; }
   if ((intelligence<15)&(wspd(5)>0)&(intelligence>=10)){WizardSpells5="Use your " + x + " fifth-level wizard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=wspd(6); if (no_specialist==false){x++ ; }
   if ((intelligence<16)&(wspd(6)>0)&(intelligence>=10)){WizardSpells6="Use your " + x + " sixth-level wizard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=wspd(7); if (no_specialist==false){x++ ; }
   if ((intelligence<17)&(wspd(7)>0)&(intelligence>=10)){WizardSpells7="Use your " + x + " seventh-level wizard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=wspd(8); if (no_specialist==false){x++ ; }
   if ((intelligence<18)&(wspd(8)>0)&(intelligence>=10)){WizardSpells8="Use your " + x + " eighth-level wizard spell " + slottage(x) + " to cast lower-level spells:"; }
   x=wspd(9); if (no_specialist==false){x++ ; }
   if ((intelligence<19)&(wspd(9)>0)&(intelligence>=10)){WizardSpells9="Use your " + x + " ninth-level wizard spell " + slottage(x) + " to cast lower-level spells:"; }

  }
 }

function SuggestLooks(){
 if (rayce==1){document.form1.Looks.value="Humans have a great variety of eye, hair, and skin colors."}
 if (rayce==2){document.form1.Looks.value="In Pathfinder,half-elves tend to be tall, and have a great variety of eye, hair, and skin colors."}
 if (rayce==3)
  {
   document.form1.Looks.value="In Pathfinder, elves tend to be taller than humans, not shorter.  They have a great variety of eye, hair, and skin colors."
     if (gender==1){document.form1.Looks.value="  Elven men seldom have much facial / body hair.";}
  }
 if (rayce==4)
   {
     document.form1.Looks.value="Dwarves have a great variety of eye, hair, and skin colors."
     if (gender==1){document.form1.Looks.value+="  Dwarven men usually have thick beards.";}
   }
 if (rayce==5){document.form1.Looks.value="Gnomes have a great variety of eye, hair, and skin colors."}
 if (rayce==6){document.form1.Looks.value="Halflings have a great variety of eye, hair, and skin colors.  Hair tends to be curly."}
 if (rayce==7){document.form1.Looks.value="Half-Orcs tend to have dark or green skin."}
 if (rayce==9){document.form1.Looks.value="Your dhampir can look however you like."}
 if (rayce==22){document.form1.Looks.value="Many orcs have green or gray skin and black hair, but your orc can look however you like."}
 if (rayce==28){document.form1.Looks.value="Your aasimar can look however you like."}
 if (rayce==33){document.form1.Looks.value="Your tiefling can look however you like."}
 if (rayce==12)
  { 
   document.form1.Looks.value="Drow generally have dark skin, white hair, and strangely-colored eyes."
     if (gender==1){document.form1.Looks.value="  Elven men seldom have much facial / body hair.";}
  }
 if (rayce==29){document.form1.Looks.value="Most sylphs are light-complected."}
 if (rayce==30){document.form1.Looks.value="Most oreads have dark skin and black or white hair and eyes."}
 if (rayce==31){document.form1.Looks.value="Most ifrit have red coloration."}
 if (rayce==32){document.form1.Looks.value="Most undines have green / blue coloration."}
//zzzzzzzzzzzz
  document.form1.Looks.value+="  Feel free to hand-edit your final sheet according to your character concept."
 }

function lock_feats(){
 if (Feats()==true){
  document.form1.sixth_comment_box.value="Feats are assigned."
  ClassNeeds(); 
  FeatsAreLocked=true; 
  LightArmsAndArmorStars();
  AnimalCompanion0();
  Languages();
  SuggestLooks();
  AdjustHeight(); AdjustWeight(); 

  }
  else {document.form1.sixth_comment_box.value="Work on your feats"}
   ArrowShow(); 
 }

function pointbuy(numbur){
 if (numbur<7){return 0; } else                  
 if (numbur==7){return -4; } else
 if (numbur==8){return -2; } else
 if (numbur==9){return -1; } else
 if (numbur==10){return 0; } else
 if (numbur==11){return 1; } else
 if (numbur==12){return 2; } else
 if (numbur==13){return 3; } else
 if (numbur==14){return 5; } else
 if (numbur==15){return 7; } else
 if (numbur==16){return 10; } else
 if (numbur==17){return 13; } else
 if (numbur==18){return 17; }
 else return 69; 
 }

function ChangeDiceMethod(){
  RollSomeDice(); 
 }

function TellAboutPointBuy(){
 if ((document.form1.methods_list.selectedIndex!=4)&(document.form1.methods_list.selectedIndex!=7)){return}

  if (AbilitiesAreProperlyAssigned==true)
    {
     document.form1.first_comment_box.value="You can accept these.  "; 
    } else {document.form1.first_comment_box.value="Adjust and assign.  "; }



     if (document.form1.methods_list.selectedIndex==4)
      {
       x=pointbuy(stat1) + pointbuy(stat2) + pointbuy(stat3) + pointbuy(stat4) + pointbuy(stat5) + pointbuy(stat6); 
       document.form1.first_comment_box.value +=x + " points spent.\r  Low fantasy = 10\r  Standard fantasy = 15\r  High fantasy = 20\r  Epic fantasy = 25"
      }
     if (document.form1.methods_list.selectedIndex==7)
      {
       x=stat1 + stat2 + stat3 + stat4 + stat5 + stat6; 
       document.form1.first_comment_box.value +=x + " points total.\r Some campaigns recommend 75 for adventurers."
      }

  }


function WizardSpecialtyA(){
 WizardSpecialty(); 
 ArrowShow(); 
 }

function DomainsA(){
 Domains(); 
 ArrowShow(); 
 }


function PrestigeClassA(){
 PrestigeClass(); 
 ArrowShow(); 
 }

function PrestigeClassAq(){
 document.form1.count_prestige_spell_levels[prestige_levels].checked=true;
 PrestigeClass();
 ArrowShow();
 }

function NaturallyIlliterate(){
 x=0; 
 if (total_levels>barbarian_levels + x){return false; }
 return true; 
 }

function DomainCount(){
 x=0; 
 Domains(); 
 return x; 
 }
          
 