var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("heroes", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroRole, Ana, Bastion, Dva, Genji, Hanzo, Junkrat, Lucio, McCree, Mei, Mercy, Pharah, Reaper, Reinhardt, Roadhog, Soldier76, Symmetra, Torbjorn, Tracer, Widowmaker, Winston, Zarya, Zenyatta;
    return {
        setters:[],
        execute: function() {
            (function (HeroRole) {
                HeroRole[HeroRole["Support"] = 0] = "Support";
                HeroRole[HeroRole["Tank"] = 1] = "Tank";
                HeroRole[HeroRole["Defense"] = 2] = "Defense";
                HeroRole[HeroRole["Offense"] = 3] = "Offense";
            })(HeroRole || (HeroRole = {}));
            exports_1("HeroRole", HeroRole);
            exports_1("Ana", Ana = {
                name: "ana",
                displayName: "Ana",
                role: HeroRole.Support,
                counters: {
                    strong: [
                        {
                            name: "lucio",
                        },
                        {
                            name: "mercy",
                        },
                        {
                            name: "zenyatta",
                        },
                    ],
                    weak: [
                        {
                            name: "genji",
                        },
                        {
                            name: "reaper",
                        },
                        {
                            name: "tracer",
                        },
                    ],
                },
            });
            exports_1("Bastion", Bastion = {
                name: "bastion",
                displayName: "Bastion",
                role: HeroRole.Defense,
                counters: {
                    strong: [
                        {
                            name: "mercy",
                        },
                        {
                            name: "reinhardt",
                        },
                        {
                            name: "winston",
                        },
                    ],
                    weak: [
                        {
                            name: "genji",
                        },
                        {
                            name: "tracer",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                },
            });
            exports_1("Dva", Dva = {
                name: "dva",
                displayName: "D.Va",
                role: HeroRole.Tank,
                counters: {
                    strong: [
                        {
                            name: "pharah",
                        },
                        {
                            name: "reinhardt",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                    weak: [
                        {
                            name: "mei",
                        },
                        {
                            name: "zarya",
                        },
                        {
                            name: "winston",
                        },
                    ],
                },
            });
            exports_1("Genji", Genji = {
                name: "genji",
                displayName: "Genji",
                role: HeroRole.Offense,
                counters: {
                    strong: [
                        {
                            name: "bastion",
                        },
                        {
                            name: "mercy",
                        },
                        {
                            name: "torbjorn",
                        },
                    ],
                    weak: [
                        {
                            name: "mei",
                        },
                        {
                            name: "zarya",
                        },
                        {
                            name: "winston",
                        },
                    ],
                },
            });
            exports_1("Hanzo", Hanzo = {
                name: "hanzo",
                displayName: "Hanzo",
                role: HeroRole.Defense,
                counters: {
                    strong: [
                        {
                            name: "bastion",
                        },
                        {
                            name: "torbjorn",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                    weak: [
                        {
                            name: "dva",
                        },
                        {
                            name: "tracer",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                },
            });
            exports_1("Junkrat", Junkrat = {
                name: "junkrat",
                displayName: "Junkrat",
                role: HeroRole.Defense,
                counters: {
                    strong: [
                        {
                            name: "bastion",
                        },
                        {
                            name: "mei",
                        },
                        {
                            name: "torbjorn",
                        },
                    ],
                    weak: [
                        {
                            name: "mccree",
                        },
                        {
                            name: "pharah",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                },
            });
            exports_1("Lucio", Lucio = {
                name: "lucio",
                displayName: "Lúcio",
                role: HeroRole.Support,
                counters: {
                    strong: [
                        {
                            name: "dva",
                        },
                        {
                            name: "reaper",
                        },
                        {
                            name: "winston",
                        },
                    ],
                    weak: [
                        {
                            name: "mei",
                        },
                        {
                            name: "mccree",
                        },
                        {
                            name: "pharah",
                        },
                    ],
                },
            });
            exports_1("McCree", McCree = {
                name: "mccree",
                displayName: "McCree",
                role: HeroRole.Offense,
                counters: {
                    strong: [
                        {
                            name: "reaper",
                        },
                        {
                            name: "tracer",
                        },
                        {
                            name: "winston",
                        },
                    ],
                    weak: [
                        {
                            name: "genji",
                        },
                        {
                            name: "soldier76",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                },
            });
            exports_1("Mei", Mei = {
                name: "mei",
                displayName: "Mei",
                role: HeroRole.Defense,
                counters: {
                    strong: [
                        {
                            name: "genji",
                        },
                        {
                            name: "winston",
                        },
                        {
                            name: "tracer",
                        },
                    ],
                    weak: [
                        {
                            name: "junkrat",
                        },
                        {
                            name: "pharah",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                },
            });
            exports_1("Mercy", Mercy = {
                name: "mercy",
                displayName: "Mercy",
                role: HeroRole.Support,
                counters: {
                    strong: [],
                    weak: [
                        {
                            name: "mccree",
                        },
                        {
                            name: "tracer",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                },
            });
            exports_1("Pharah", Pharah = {
                name: "pharah",
                displayName: "Pharah",
                role: HeroRole.Offense,
                counters: {
                    strong: [
                        {
                            name: "bastion",
                        },
                        {
                            name: "junkrat",
                        },
                        {
                            name: "mei",
                        },
                    ],
                    weak: [
                        {
                            name: "mccree",
                        },
                        {
                            name: "roadhog",
                        },
                        {
                            name: "soldier76",
                        },
                    ],
                },
            });
            exports_1("Reaper", Reaper = {
                name: "reaper",
                displayName: "Reaper",
                role: HeroRole.Offense,
                counters: {
                    strong: [
                        {
                            name: "bastion",
                        },
                        {
                            name: "mei",
                        },
                        {
                            name: "winston",
                        },
                    ],
                    weak: [
                        {
                            name: "junkrat",
                        },
                        {
                            name: "mccree",
                        },
                        {
                            name: "pharah",
                        },
                    ],
                },
            });
            exports_1("Reinhardt", Reinhardt = {
                name: "reinhardt",
                displayName: "Reinhardt",
                role: HeroRole.Tank,
                counters: {
                    strong: [
                        {
                            name: "soldier76",
                        },
                        {
                            name: "torbjorn",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                    weak: [
                        {
                            name: "reaper",
                        },
                        {
                            name: "roadhog",
                        },
                        {
                            name: "symmetra",
                        },
                    ],
                },
            });
            exports_1("Roadhog", Roadhog = {
                name: "roadhog",
                displayName: "Roadhog",
                role: HeroRole.Tank,
                counters: {
                    strong: [
                        {
                            name: "pharah",
                        },
                        {
                            name: "reinhardt",
                        },
                        {
                            name: "tracer",
                        },
                    ],
                    weak: [
                        {
                            name: "dva",
                        },
                        {
                            name: "genji",
                        },
                        {
                            name: "reaper",
                        },
                    ],
                },
            });
            exports_1("Soldier76", Soldier76 = {
                name: "soldier76",
                displayName: "Soldier: 76",
                role: HeroRole.Offense,
                counters: {
                    strong: [
                        {
                            name: "mercy",
                        },
                        {
                            name: "pharah",
                        },
                        {
                            name: "torbjorn",
                        },
                    ],
                    weak: [
                        {
                            name: "genji",
                        },
                        {
                            name: "mei",
                        },
                        {
                            name: "tracer",
                        },
                    ],
                },
            });
            exports_1("Symmetra", Symmetra = {
                name: "symmetra",
                displayName: "Symmetra",
                role: HeroRole.Support,
                counters: {
                    strong: [
                        {
                            name: "bastion",
                        },
                        {
                            name: "dva",
                        },
                        {
                            name: "reinhardt",
                        },
                    ],
                    weak: [
                        {
                            name: "junkrat",
                        },
                        {
                            name: "pharah",
                        },
                        {
                            name: "roadhog",
                        },
                    ],
                },
            });
            exports_1("Torbjorn", Torbjorn = {
                name: "torbjorn",
                displayName: "Torbjörn",
                role: HeroRole.Defense,
                counters: {
                    strong: [
                        {
                            name: "genji",
                        },
                        {
                            name: "lucio",
                        },
                        {
                            name: "tracer",
                        },
                    ],
                    weak: [
                        {
                            name: "junkrat",
                        },
                        {
                            name: "pharah",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                },
            });
            exports_1("Tracer", Tracer = {
                name: "tracer",
                displayName: "Tracer",
                role: HeroRole.Offense,
                counters: {
                    strong: [
                        {
                            name: "bastion",
                        },
                        {
                            name: "mercy",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                    weak: [
                        {
                            name: "mccree",
                        },
                        {
                            name: "mei",
                        },
                        {
                            name: "soldier76",
                        },
                    ],
                },
            });
            exports_1("Widowmaker", Widowmaker = {
                name: "widowmaker",
                displayName: "Widowmaker",
                role: HeroRole.Defense,
                counters: {
                    strong: [
                        {
                            name: "bastion",
                        },
                        {
                            name: "torbjorn",
                        },
                        {
                            name: "pharah",
                        },
                    ],
                    weak: [
                        {
                            name: "dva",
                        },
                        {
                            name: "genji",
                        },
                        {
                            name: "winston",
                        },
                    ],
                },
            });
            exports_1("Winston", Winston = {
                name: "winston",
                displayName: "Winston",
                role: HeroRole.Tank,
                counters: {
                    strong: [
                        {
                            name: "genji",
                        },
                        {
                            name: "hanzo",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                    weak: [
                        {
                            name: "mccree",
                        },
                        {
                            name: "mei",
                        },
                        {
                            name: "reaper",
                        },
                    ],
                },
            });
            exports_1("Zarya", Zarya = {
                name: "zarya",
                displayName: "Zarya",
                role: HeroRole.Tank,
                counters: {
                    strong: [
                        {
                            name: "dva",
                        },
                        {
                            name: "genji",
                        },
                        {
                            name: "winston",
                        },
                    ],
                    weak: [
                        {
                            name: "pharah",
                        },
                        {
                            name: "roadhog",
                        },
                        {
                            name: "reaper",
                        },
                    ],
                },
            });
            exports_1("Zenyatta", Zenyatta = {
                name: "zenyatta",
                displayName: "Zenyatta",
                role: HeroRole.Support,
                counters: {
                    strong: [
                        {
                            name: "dva",
                        },
                        {
                            name: "roadhog",
                        },
                        {
                            name: "winston",
                        },
                    ],
                    weak: [
                        {
                            name: "hanzo",
                        },
                        {
                            name: "tracer",
                        },
                        {
                            name: "widowmaker",
                        },
                    ],
                },
            });
        }
    }
});
System.register("services/heroes.service", ['@angular/core', "heroes"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, heroes, heroes_1;
    var HeroesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heroes_2) {
                heroes = heroes_2;
                heroes_1 = heroes_2;
            }],
        execute: function() {
            exports_2("HeroRole", heroes_1.HeroRole);
            HeroesService = (function () {
                function HeroesService() {
                    this.Ana = heroes.Ana;
                    this.Bastion = heroes.Bastion;
                    this.Dva = heroes.Dva;
                    this.Genji = heroes.Genji;
                    this.Hanzo = heroes.Hanzo;
                    this.Junkrat = heroes.Junkrat;
                    this.Lucio = heroes.Lucio;
                    this.McCree = heroes.McCree;
                    this.Mei = heroes.Mei;
                    this.Mercy = heroes.Mercy;
                    this.Pharah = heroes.Pharah;
                    this.Reaper = heroes.Reaper;
                    this.Reinhardt = heroes.Reinhardt;
                    this.Roadhog = heroes.Roadhog;
                    this.Soldier76 = heroes.Soldier76;
                    this.Symmetra = heroes.Symmetra;
                    this.Torbjorn = heroes.Torbjorn;
                    this.Tracer = heroes.Tracer;
                    this.Widowmaker = heroes.Widowmaker;
                    this.Winston = heroes.Winston;
                    this.Zarya = heroes.Zarya;
                    this.Zenyatta = heroes.Zenyatta;
                    this.HeroesByName = {};
                    this.AllHeroes = [];
                    this.HeroesByName["ana"] = this.Ana;
                    this.HeroesByName["bastion"] = this.Bastion;
                    this.HeroesByName["dva"] = this.Dva;
                    this.HeroesByName["genji"] = this.Genji;
                    this.HeroesByName["hanzo"] = this.Hanzo;
                    this.HeroesByName["junkrat"] = this.Junkrat;
                    this.HeroesByName["lucio"] = this.Lucio;
                    this.HeroesByName["mccree"] = this.McCree;
                    this.HeroesByName["mei"] = this.Mei;
                    this.HeroesByName["mercy"] = this.Mercy;
                    this.HeroesByName["pharah"] = this.Pharah;
                    this.HeroesByName["reaper"] = this.Reaper;
                    this.HeroesByName["reinhardt"] = this.Reinhardt;
                    this.HeroesByName["roadhog"] = this.Roadhog;
                    this.HeroesByName["soldier76"] = this.Soldier76;
                    this.HeroesByName["symmetra"] = this.Symmetra;
                    this.HeroesByName["torbjorn"] = this.Torbjorn;
                    this.HeroesByName["tracer"] = this.Tracer;
                    this.HeroesByName["widowmaker"] = this.Widowmaker;
                    this.HeroesByName["winston"] = this.Winston;
                    this.HeroesByName["zarya"] = this.Zarya;
                    this.HeroesByName["zenyatta"] = this.Zenyatta;
                    for (var heroName in this.HeroesByName) {
                        if (this.HeroesByName.hasOwnProperty(heroName)) {
                            this.AllHeroes.push(this.HeroesByName[heroName]);
                        }
                    }
                }
                HeroesService.prototype.getHero = function (name) {
                    return this.HeroesByName[name];
                };
                HeroesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroesService);
                return HeroesService;
            }());
            exports_2("HeroesService", HeroesService);
        }
    }
});
System.register("services/composition-analyser.service", ['@angular/core', "services/heroes.service"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, heroes_service_1;
    var CompositionAnalyserService;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (heroes_service_1_1) {
                heroes_service_1 = heroes_service_1_1;
            }],
        execute: function() {
            CompositionAnalyserService = (function () {
                function CompositionAnalyserService(heroesService) {
                    this.heroesService = heroesService;
                }
                CompositionAnalyserService.prototype.analyse = function (enemyRoster, allyRoster) {
                    var _this = this;
                    var enemyHeroes = enemyRoster.map(function (name) { return _this.heroesService.getHero(name); });
                    var allyHeroes = allyRoster.map(function (name) { return _this.heroesService.getHero(name); });
                    var analysis = allyHeroes.map(function (allyHero) {
                        var strong = enemyHeroes.filter(function (enemyHero) { return _this.isCounter(allyHero, enemyHero); });
                        var weak = enemyHeroes.filter(function (enemyHero) { return _this.isCounteredBy(allyHero, enemyHero); });
                        var heroAnalysis = {
                            hero: allyHero,
                            counters: {
                                strong: strong,
                                weak: weak,
                            },
                        };
                        return heroAnalysis;
                    });
                    return analysis;
                };
                CompositionAnalyserService.prototype.isCounter = function (subject, target) {
                    return target.counters.weak.some(function (targetWeakness) { return targetWeakness.name === subject.name; })
                        || subject.counters.strong.some(function (subjectStrength) { return subjectStrength.name === target.name; });
                };
                CompositionAnalyserService.prototype.isCounteredBy = function (subject, target) {
                    return target.counters.strong.some(function (targetStrengths) { return targetStrengths.name === subject.name; })
                        || subject.counters.weak.some(function (subjectWeakness) { return subjectWeakness.name === target.name; });
                };
                CompositionAnalyserService = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [heroes_service_1.HeroesService])
                ], CompositionAnalyserService);
                return CompositionAnalyserService;
            }());
            exports_3("CompositionAnalyserService", CompositionAnalyserService);
        }
    }
});
System.register("directives/is-clipped-toggler.directive", ['@angular/core'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3;
    var IsClippedTogglerDirective;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            IsClippedTogglerDirective = (function () {
                function IsClippedTogglerDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                Object.defineProperty(IsClippedTogglerDirective.prototype, "isClipped", {
                    // tslint:disable-next-line:no-unused-variable
                    set: function (clipped) {
                        this.renderer.setElementClass(this.el.nativeElement.ownerDocument.body.parentElement, 'is-clipped', clipped);
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_3.Input('isClippedToggler'), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], IsClippedTogglerDirective.prototype, "isClipped", null);
                IsClippedTogglerDirective = __decorate([
                    core_3.Directive({
                        selector: '[isClippedToggler]',
                    }), 
                    __metadata('design:paramtypes', [core_3.ElementRef, core_3.Renderer])
                ], IsClippedTogglerDirective);
                return IsClippedTogglerDirective;
            }());
            exports_4("IsClippedTogglerDirective", IsClippedTogglerDirective);
        }
    }
});
System.register("components/team-roster.component", ['@angular/core', "services/heroes.service", "directives/is-clipped-toggler.directive"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, heroes_service_2, is_clipped_toggler_directive_1;
    var TeamRosterComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (heroes_service_2_1) {
                heroes_service_2 = heroes_service_2_1;
            },
            function (is_clipped_toggler_directive_1_1) {
                is_clipped_toggler_directive_1 = is_clipped_toggler_directive_1_1;
            }],
        execute: function() {
            TeamRosterComponent = (function () {
                function TeamRosterComponent(heroesService) {
                    this.heroesService = heroesService;
                    this.rosterChange = new core_4.EventEmitter();
                    this.clipBody = new core_4.EventEmitter();
                }
                Object.defineProperty(TeamRosterComponent.prototype, "roster", {
                    set: function (heroes) {
                        var _this = this;
                        this._roster = heroes.map(function (name) {
                            var hero = _this.heroesService.getHero(name);
                            var teamMember = { hero: hero };
                            return teamMember;
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TeamRosterComponent.prototype, "weaknesses", {
                    // tslint:disable-next-line:no-unused-variable
                    set: function (data) {
                        this._roster.forEach(function (member) {
                            member.weaknesses = data[member.hero.name] || [];
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                TeamRosterComponent.prototype.selectHero = function (teamMember) {
                    this.unselectTeamMember(this.selectedTeamMember);
                    this.selectedTeamMember = teamMember;
                    this.clipBody.emit(true);
                    teamMember.selecting = true;
                };
                TeamRosterComponent.prototype.heroSelected = function (hero) {
                    this.unselectTeamMember(this.selectedTeamMember);
                    this.selectedTeamMember.hero = hero;
                    this.selectedTeamMember = undefined;
                    this.clipBody.emit(false);
                    this.emitRosterChanged();
                };
                TeamRosterComponent.prototype.emitRosterChanged = function () {
                    this.rosterChange.emit(this._roster.map(function (member) { return member.hero.name; }));
                };
                TeamRosterComponent.prototype.unselectTeamMember = function (teamMember) {
                    if (teamMember) {
                        teamMember.selecting = false;
                    }
                };
                // tslint:disable-next-line:no-unused-variable
                TeamRosterComponent.prototype.getHero = function (name) {
                    return this.heroesService.getHero(name);
                };
                // tslint:disable-next-line:no-unused-variable
                TeamRosterComponent.prototype.closeClicked = function () {
                    this.selectedTeamMember = undefined;
                    this.clipBody.emit(false);
                };
                __decorate([
                    core_4.Output(), 
                    __metadata('design:type', Object)
                ], TeamRosterComponent.prototype, "rosterChange", void 0);
                __decorate([
                    core_4.Output(), 
                    __metadata('design:type', Object)
                ], TeamRosterComponent.prototype, "clipBody", void 0);
                __decorate([
                    core_4.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], TeamRosterComponent.prototype, "roster", null);
                __decorate([
                    core_4.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], TeamRosterComponent.prototype, "weaknesses", null);
                TeamRosterComponent = __decorate([
                    core_4.Component({
                        selector: 'team-roster',
                        template: "\n    <div class=\"team\">\n      <div class=\"team-member\" *ngFor=\"let teamMember of _roster\">\n        <hero-portrait [hero]=\"teamMember.hero\"\n                       (click)=\"selectHero(teamMember)\"\n                       [class.selecting]=\"teamMember.selecting\"\n                       [class.weak]=\"!!weaknesses && weaknesses.indexOf('teamMember.hero.name') > -1\">\n        </hero-portrait>\n        <div class=\"advice\">\n          <span *ngFor=\"let strength of teamMember.strengths\"\n                class=\"icon is-large strength\"\n                title=\"{{getHero(strength).displayName}}\">\n            <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n          </span>\n          <ul>\n            <li *ngFor=\"let weakness of teamMember.weaknesses\">\n              <span class=\"icon weakness\"\n                  title=\"{{getHero(weakness).displayName}}\">\n                <i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i>\n              </span>\n              {{getHero(weakness).displayName}}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <hero-selector [active]=\"!!selectedTeamMember\"\n                   [isClippedToggler]=\"!!selectedTeamMember\"\n                   (heroSelected)=\"heroSelected($event)\"\n                   (closeClicked)=\"closeClicked()\">\n    </hero-selector>\n  ",
                        styles: ["\n    .team {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n\n    .icon.weakness {\n      color: #e00;\n      text-shadow: 1px 1px 1px #222;\n    }\n\n    .icon.strength {\n      color: #0e0;\n      text-shadow: 1px 1px 1px #222;\n    }\n\n    .selecting {\n      opacity: 0.4;\n      filter: alpha(opacity=40);\n\n      cursor: default;\n    }\n\n    .advice {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: left;\n      max-width: 138px;\n    }\n\n    ul {\n      list-style: none;\n      padding: 0;\n    }\n\n    li {\n      padding-left: 1.3em;\n    }\n  "],
                        providers: [heroes_service_2.HeroesService],
                        directives: [is_clipped_toggler_directive_1.IsClippedTogglerDirective],
                    }), 
                    __metadata('design:paramtypes', [heroes_service_2.HeroesService])
                ], TeamRosterComponent);
                return TeamRosterComponent;
            }());
            exports_5("TeamRosterComponent", TeamRosterComponent);
        }
    }
});
System.register("components/app.component", ['@angular/core', "services/composition-analyser.service"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_5, composition_analyser_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (composition_analyser_service_1_1) {
                composition_analyser_service_1 = composition_analyser_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(analyserService, elementRef, renderer) {
                    this.analyserService = analyserService;
                    this.elementRef = elementRef;
                    this.renderer = renderer;
                    this.enemyRoster = ['mccree', 'roadhog', 'lucio', 'genji', 'reinhardt', 'zenyatta'];
                    this.allyRoster = ['mccree', 'roadhog', 'lucio', 'genji', 'reinhardt', 'zenyatta'];
                    this.weaknesses = {};
                }
                AppComponent.prototype.ngOnInit = function () {
                    var e = this.elementRef.nativeElement;
                    this.renderer.setElementClass(e, 'is-loading', false);
                    this.renderer.setElementClass(e, 'is-primary', false);
                    this.renderer.setElementClass(e, 'button', false);
                    this.analyseRoster();
                };
                // tslint:disable-next-line:no-unused-variable
                AppComponent.prototype.enemyRosterChanged = function (roster) {
                    this.enemyRoster = roster;
                    this.analyseRoster();
                };
                // tslint:disable-next-line:no-unused-variable
                AppComponent.prototype.allyRosterChanged = function (roster) {
                    this.allyRoster = roster;
                    this.analyseRoster();
                };
                AppComponent.prototype.analyseRoster = function () {
                    var _this = this;
                    var analysis = this.analyserService.analyse(this.enemyRoster, this.allyRoster);
                    this.weaknesses = {};
                    analysis.forEach(function (heroAnalysis) {
                        _this.weaknesses[heroAnalysis.hero.name] = heroAnalysis.counters.weak.map(function (e) { return e.name; });
                    });
                };
                AppComponent = __decorate([
                    core_5.Component({
                        selector: 'overcomplicated-app',
                        template: "\n    <head-nav></head-nav>\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"heading has-text-centered\">\n          <h1 class=\"title\">Enemy Team</h1>\n        </div>\n        <team-roster [roster]=\"enemyRoster\"\n                     (rosterChange)=\"enemyRosterChanged($event)\"\n                     #enemyTeam>\n        </team-roster>\n      </div>\n    </section>\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"heading has-text-centered\">\n          <h1 class=\"title\">Ally Team</h1>\n        </div>\n        <team-roster [roster]=\"allyRoster\" \n                     (rosterChange)=\"allyRosterChanged($event)\"\n                     [weaknesses]=\"weaknesses\"\n                     #allyTeam>\n        </team-roster>\n      </div>\n    </section>\n    <app-footer></app-footer>",
                        providers: [composition_analyser_service_1.CompositionAnalyserService],
                    }), 
                    __metadata('design:paramtypes', [composition_analyser_service_1.CompositionAnalyserService, core_5.ElementRef, core_5.Renderer])
                ], AppComponent);
                return AppComponent;
            }());
            exports_6("AppComponent", AppComponent);
        }
    }
});
System.register("components/app-footer.component", ['@angular/core'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_6;
    var AppFooterComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            AppFooterComponent = (function () {
                function AppFooterComponent() {
                }
                AppFooterComponent = __decorate([
                    core_6.Component({
                        selector: 'app-footer',
                        template: "\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <div class=\"content has-text-centered\">\n          <p>\n            <strong>Overcomplicated</strong> by <a href=\"http://www.codesleuth.co.uk\">David Wood</a>. The source code is licensed\n            <a href=\"http://opensource.org/licenses/mit-license\">MIT</a>.\n          </p>\n          <p>\n            <a class=\"icon\" href=\"https://github.com/Overcomplicated/website\">\n              <i class=\"fa fa-github\"></i>\n            </a>\n          </p>\n        </div>\n      </div>\n    </footer>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppFooterComponent);
                return AppFooterComponent;
            }());
            exports_7("AppFooterComponent", AppFooterComponent);
        }
    }
});
System.register("components/hero-portrait.component", ['@angular/core', "services/heroes.service"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_7, heroes_service_3;
    var HeroPortraitComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (heroes_service_3_1) {
                heroes_service_3 = heroes_service_3_1;
            }],
        execute: function() {
            HeroPortraitComponent = (function () {
                function HeroPortraitComponent() {
                }
                HeroPortraitComponent.prototype.isSupport = function (role) {
                    return role === heroes_service_3.HeroRole.Support;
                };
                HeroPortraitComponent.prototype.isOffense = function (role) {
                    return role === heroes_service_3.HeroRole.Offense;
                };
                HeroPortraitComponent.prototype.isDefense = function (role) {
                    return role === heroes_service_3.HeroRole.Defense;
                };
                HeroPortraitComponent.prototype.isTank = function (role) {
                    return role === heroes_service_3.HeroRole.Tank;
                };
                HeroPortraitComponent.prototype.isHero = function (name) {
                    return this.hero.name === name;
                };
                __decorate([
                    core_7.Input(), 
                    __metadata('design:type', Object)
                ], HeroPortraitComponent.prototype, "hero", void 0);
                __decorate([
                    core_7.Input(), 
                    __metadata('design:type', Boolean)
                ], HeroPortraitComponent.prototype, "small", void 0);
                HeroPortraitComponent = __decorate([
                    core_7.Component({
                        selector: 'hero-portrait',
                        template: "\n    <div class=\"hero-portrait\"\n         [class.small]=\"small\"\n         [class.support]=\"isSupport(hero.role)\"\n         [class.offense]=\"isOffense(hero.role)\"\n         [class.defense]=\"isDefense(hero.role)\"\n         [class.tank]=\"isTank(hero.role)\"\n         [class.ana]=\"isHero('ana')\"\n         [class.bastion]=\"isHero('bastion')\"\n         [class.dva]=\"isHero('dva')\"\n         [class.genji]=\"isHero('genji')\"\n         [class.hanzo]=\"isHero('hanzo')\"\n         [class.junkrat]=\"isHero('junkrat')\"\n         [class.lucio]=\"isHero('lucio')\"\n         [class.mccree]=\"isHero('mccree')\"\n         [class.mei]=\"isHero('mei')\"\n         [class.mercy]=\"isHero('mercy')\"\n         [class.pharah]=\"isHero('pharah')\"\n         [class.reaper]=\"isHero('reaper')\"\n         [class.reinhardt]=\"isHero('reinhardt')\"\n         [class.roadhog]=\"isHero('roadhog')\"\n         [class.soldier76]=\"isHero('soldier76')\"\n         [class.symmetra]=\"isHero('symmetra')\"\n         [class.torbjorn]=\"isHero('torbjorn')\"\n         [class.tracer]=\"isHero('tracer')\"\n         [class.widowmaker]=\"isHero('widowmaker')\"\n         [class.winston]=\"isHero('winston')\"\n         [class.zarya]=\"isHero('zarya')\"\n         [class.zenyatta]=\"isHero('zenyatta')\">\n      <span>{{hero.displayName}}</span>\n    </div>",
                        styleUrls: ['css/hero-portrait.component.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroPortraitComponent);
                return HeroPortraitComponent;
            }());
            exports_8("HeroPortraitComponent", HeroPortraitComponent);
        }
    }
});
System.register("components/hero-selector.component", ['@angular/core', "services/heroes.service"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_8, heroes_service_4;
    var HeroSelectorComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (heroes_service_4_1) {
                heroes_service_4 = heroes_service_4_1;
            }],
        execute: function() {
            HeroSelectorComponent = (function () {
                function HeroSelectorComponent(heroesService) {
                    this.heroesService = heroesService;
                    this.heroSelected = new core_8.EventEmitter();
                    this.closeClicked = new core_8.EventEmitter();
                    this.heroes = heroesService.AllHeroes;
                }
                HeroSelectorComponent.prototype.heroClicked = function (hero) {
                    this.heroSelected.emit(hero);
                };
                HeroSelectorComponent.prototype.close = function () {
                    this.closeClicked.emit();
                };
                __decorate([
                    core_8.Input(), 
                    __metadata('design:type', Boolean)
                ], HeroSelectorComponent.prototype, "active", void 0);
                __decorate([
                    core_8.Output(), 
                    __metadata('design:type', Object)
                ], HeroSelectorComponent.prototype, "heroSelected", void 0);
                __decorate([
                    core_8.Output(), 
                    __metadata('design:type', Object)
                ], HeroSelectorComponent.prototype, "closeClicked", void 0);
                HeroSelectorComponent = __decorate([
                    core_8.Component({
                        selector: 'hero-selector',
                        template: "\n    <div class=\"modal\" [class.is-active]=\"active\">\n      <div class=\"modal-background\"></div>\n      <div class=\"modal-container\">\n        <div class=\"modal-content\">\n\n          <div class=\"hero-selector\">\n            <hero-portrait \n              *ngFor=\"let hero of heroes\" \n              (click)=\"heroClicked(hero)\"\n              class=\"hero\"\n              [hero]=\"hero\"\n              [small]=\"true\">\n            </hero-portrait>\n          </div>\n\n        </div>\n      </div>\n      <button class=\"modal-close\" (click)=\"close()\"></button>\n    </div>\n",
                        styles: ["\n    .hero-selector {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n\n    .modal-content {\n      margin: 0;\n    }\n  "],
                        providers: [heroes_service_4.HeroesService],
                    }), 
                    __metadata('design:paramtypes', [heroes_service_4.HeroesService])
                ], HeroSelectorComponent);
                return HeroSelectorComponent;
            }());
            exports_9("HeroSelectorComponent", HeroSelectorComponent);
        }
    }
});
System.register("components/head-nav.component", ['@angular/core'], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_9;
    var HeadNavComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            }],
        execute: function() {
            HeadNavComponent = (function () {
                function HeadNavComponent() {
                    // tslint:disable-next-line:no-unused-variable
                    this.hamburgerActive = false;
                }
                HeadNavComponent = __decorate([
                    core_9.Component({
                        selector: 'head-nav',
                        template: "\n    <nav class=\"nav\">\n      <div class=\"nav-left\">\n        <a class=\"nav-item is-brand\" href=\"http://overcomplicated.gg\">\n          <h1 class=\"title is-4\">Overcomplicated</h1>\n        </a>\n      </div>\n\n      <div class=\"nav-center\">\n        <a class=\"nav-item\" href=\"https://github.com/Overcomplicated/website\">\n          <span class=\"icon\">\n            <i class=\"fa fa-github\"></i>\n          </span>\n        </a>\n      </div>\n\n      <span class=\"nav-toggle\" [class.is-active]=\"hamburgerActive\" (click)=\"hamburgerActive = !hamburgerActive\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </span>\n\n      <div class=\"nav-right nav-menu\" [class.is-active]=\"hamburgerActive\">\n        <a class=\"nav-item\" href=\"//overcomplicated.gg\">Home</a>\n      </div>\n    </nav>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeadNavComponent);
                return HeadNavComponent;
            }());
            exports_10("HeadNavComponent", HeadNavComponent);
        }
    }
});
System.register("app.module", ['@angular/core', '@angular/platform-browser', "components/app.component", "components/app-footer.component", "components/team-roster.component", "components/hero-portrait.component", "components/hero-selector.component", "services/heroes.service", "components/head-nav.component", "directives/is-clipped-toggler.directive"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_10, platform_browser_1, app_component_1, app_footer_component_1, team_roster_component_1, hero_portrait_component_1, hero_selector_component_1, heroes_service_5, head_nav_component_1, is_clipped_toggler_directive_2;
    var AppModule;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_footer_component_1_1) {
                app_footer_component_1 = app_footer_component_1_1;
            },
            function (team_roster_component_1_1) {
                team_roster_component_1 = team_roster_component_1_1;
            },
            function (hero_portrait_component_1_1) {
                hero_portrait_component_1 = hero_portrait_component_1_1;
            },
            function (hero_selector_component_1_1) {
                hero_selector_component_1 = hero_selector_component_1_1;
            },
            function (heroes_service_5_1) {
                heroes_service_5 = heroes_service_5_1;
            },
            function (head_nav_component_1_1) {
                head_nav_component_1 = head_nav_component_1_1;
            },
            function (is_clipped_toggler_directive_2_1) {
                is_clipped_toggler_directive_2 = is_clipped_toggler_directive_2_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_10.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        declarations: [
                            team_roster_component_1.TeamRosterComponent,
                            hero_portrait_component_1.HeroPortraitComponent,
                            hero_selector_component_1.HeroSelectorComponent,
                            head_nav_component_1.HeadNavComponent,
                            is_clipped_toggler_directive_2.IsClippedTogglerDirective,
                            app_footer_component_1.AppFooterComponent,
                            app_component_1.AppComponent,
                        ],
                        bootstrap: [app_component_1.AppComponent],
                        providers: [heroes_service_5.HeroesService],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_11("AppModule", AppModule);
        }
    }
});
System.register("main", ['@angular/platform-browser-dynamic', "app.module"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    }
});
//# sourceMappingURL=app.js.map