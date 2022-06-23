class MetaLayer
{
    constructor()
    {
        this.active = true;
        this.layer = new Decimal(0);
        this.resource = new Decimal(1);

        this.multiplierUpgrades = [
            new MetaDynamicLayerUpgrade("Waffle",
                level => Utils.createValueDilation(level.mul(Decimal.pow(1.1, Decimal.max(0, level.sub(15)))), 0.001).floor().add(7),
                level => new Decimal(1),
                level => Decimal.pow(1e40, level.pow(game.restackLayer.upgradeTreeNames.resourceMultipliersLevelScaling.apply())).pow(this.getResourceMultiplierBoost())),
            new MetaDynamicLayerUpgrade("Killing",
                level => Utils.createValueDilation(level.mul(15).mul(Decimal.pow(1.1, Decimal.max(0, level.sub(15)))), 0.001).floor().add(30),
                level => new Decimal(1),
                level => Decimal.pow("1e700", level.pow(game.restackLayer.upgradeTreeNames.resourceMultipliersLevelScaling.apply())).pow(this.getResourceMultiplierBoost())),
            new MetaDynamicLayerUpgrade("Resources",
                level => Utils.createValueDilation(level.mul(480).mul(Decimal.pow(1.1, Decimal.max(0, level.sub(15)))), 0.001).floor().add(521),
                level => new Decimal(1),
                level => Decimal.pow("1e3600", level.pow(game.restackLayer.upgradeTreeNames.resourceMultipliersLevelScaling.apply())).pow(this.getResourceMultiplierBoost())),
            new MetaDynamicLayerUpgrade("Cursor Kind",
                level => Utils.createValueDilation(level.mul(5e4).mul(Decimal.pow(1.1, Decimal.max(0, level.sub(15)))), 0.001).floor().add(1.1e5),
                level => new Decimal(1),
                level => Decimal.pow("1e80000", level.pow(game.restackLayer.upgradeTreeNames.resourceMultipliersLevelScaling.apply())).pow(this.getResourceMultiplierBoost())),
            new MetaDynamicLayerUpgrade("Wheel",
                level => Utils.createValueDilation(level.mul(1e8).mul(Decimal.pow(1.1, Decimal.max(0, level.sub(15)))), 0.001).floor().add(4e8),
                level => new Decimal(1),
                level => Decimal.pow("e4e7", level.pow(game.restackLayer.upgradeTreeNames.resourceMultipliersLevelScaling.apply())).pow(this.getResourceMultiplierBoost())),
            new MetaDynamicLayerUpgrade("Reaction",
                level => Utils.createValueDilation(level.mul(4e12).mul(Decimal.pow(1.1, Decimal.max(0, level.sub(15)))), 0.001).floor().add(1e13),
                level => new Decimal(1),
                level => Decimal.pow("e2e11", level.pow(game.restackLayer.upgradeTreeNames.resourceMultipliersLevelScaling.apply())).pow(this.getResourceMultiplierBoost())),
            new MetaDynamicLayerUpgrade("Cursor Bigger",
                level => Utils.createValueDilation(level.mul(7e18).mul(Decimal.pow(1.1, Decimal.max(0, level.sub(15)))), 0.001).floor().add(2e19),
                level => new Decimal(1),
                level => Decimal.pow("e4e16", level.pow(game.restackLayer.upgradeTreeNames.resourceMultipliersLevelScaling.apply())).pow(this.getResourceMultiplierBoost())),
        ];

        this.powerUpgrades = [
            new MetaDynamicLayerUpgrade("Increase the Resource Power",
                level => Utils.createValueDilation(level.mul(250).mul(Decimal.pow(1.4, Decimal.max(0, level.sub(5)))), 0.001).floor().add(1000),
                level => new Decimal(1),
                level => Decimal.pow(1.2, level).pow(this.getResourcePowererBoost()).mul(game.restackLayer.upgradeTreeNames.resourcePowerersStrength.apply()), {
                    getEffectDisplay: effectDisplayTemplates.numberStandard(2, "^")
                }),
            new MetaDynamicLayerUpgrade("Increase the Resource Power",
                level => Utils.createValueDilation(level.mul(5000).mul(Decimal.pow(2, Decimal.max(0, level.sub(5)))), 0.001).floor().add(10000),
                level => new Decimal(1),
                level => Decimal.pow(1.2, level).pow(this.getResourcePowererBoost()).mul(game.restackLayer.upgradeTreeNames.resourcePowerersStrength.apply()), {
                    getEffectDisplay: effectDisplayTemplates.numberStandard(2, "^")
                }),
            new MetaDynamicLayerUpgrade("Increase the Resource Power",
                level => Utils.createValueDilation(level.mul(1e6).mul(Decimal.pow(5, Decimal.max(0, level.sub(3)))), 0.001).floor().add(1e6),
                level => new Decimal(1),
                level => Decimal.pow(1.1, level).pow(this.getResourcePowererBoost()).mul(game.restackLayer.upgradeTreeNames.resourcePowerersStrength.apply()), {
                    getEffectDisplay: effectDisplayTemplates.numberStandard(2, "^")
                }),
            new MetaDynamicLayerUpgrade("Increase the Resource Power",
                level => Utils.createValueDilation(level.mul(2e12).mul(Decimal.pow(10, Decimal.max(0, level.sub(1)))), 0.001).floor().add(1e12),
                level => new Decimal(1),
                level => Decimal.pow(1.09, level).pow(this.getResourcePowererBoost()).mul(game.restackLayer.upgradeTreeNames.resourcePowerersStrength.apply()), {
                    getEffectDisplay: effectDisplayTemplates.numberStandard(2, "^")
                })
        ];
    }

    getMultiPS()
    {
        let multi = new Decimal(1);
        for(const upg of this.multiplierUpgrades)
        {
            multi = multi.mul(upg.apply());
        }
        for(const upg of this.powerUpgrades)
        {
            multi = multi.pow(upg.apply());
        }
        return new Decimal(game.restackLayer.metaUpgrade.apply()).mul(multi).pow(game.restackLayer.upgradeTreeNames.resourceMultiplier.apply());
    }

    getLayersPS()
    {
        return this.getMultiPS().log10().div(PrestigeLayer.getPrestigeCarryOverForLayer(this.layer));
    }

    getResourceMultiplierBoost()
    {
        return game.restackLayer.upgradeTreeNames.resourceMultiplierUpgrades.apply()
            .mul(game.restackLayer.upgradeTreeNames.resourceMultiplierUpgradesTime.apply())
            .mul(game.restackLayer.upgradeTreeNames.resourceMultiplierUpgrades2.apply());
    }

    getResourcePowererBoost()
    {
        return game.restackLayer.upgradeTreeNames.resourcePowerersUpgrades.apply();
    }

    getApproxAlpha()
    {
        if(this.layer.gt(1e6))
        {
            const carryOver = PrestigeLayer.getPrestigeCarryOverForLayer(this.layer);
            return Decimal.pow(10, Decimal.pow(carryOver, Decimal.max(0, this.layer)));
        }
        let log = new Decimal(1);
        for(let i = 0; i < Math.min(10, this.layer); i++)
        {
            log = log.mul(PrestigeLayer.getPrestigeCarryOverForLayer(i));
        }
        const carryOver = PrestigeLayer.getPrestigeCarryOverForLayer(this.layer);
        const fract = ((carryOver - 1) * this.resource.log10().div(carryOver - 1)) + (1);
        return Decimal.pow(10, Decimal.pow(carryOver, Decimal.max(0, this.layer.sub(10))).mul(log).mul(fract));
    }

    maxAll()
    {
        for(const u of this.powerUpgrades.concat(this.multiplierUpgrades))
        {
            u.buyMax();
        }
    }

    tick(dt)
    {
        if(this.active)
        {
            if(this.getLayersPS().lt(10))
            {
                this.resource = this.resource.mul(Decimal.pow(this.getMultiPS(), dt));
                if(this.resource.log10().gte(PrestigeLayer.getPrestigeCarryOverForLayer(this.layer.toNumber())))
                {
                    const layerAmnt = this.layer.gt(10) ? this.resource.log(Decimal.pow(10, PrestigeLayer.getPrestigeCarryOverForLayer(10))).floor() : 1;
                    this.resource = this.resource.div(Decimal.pow(10, PrestigeLayer.getPrestigeCarryOverForLayer(this.layer.toNumber())).pow(layerAmnt));
                    this.layer = this.layer.add(layerAmnt);
                }
            }
            else
            {
                this.resource = new Decimal(1);
                this.layer = this.layer.add(this.getLayersPS().mul(dt));
            }
        }
    }

    load(obj)
    {
        this.active = obj.active;
        this.layer = obj.layer;
        this.resource = obj.resource;
        for(let i = 0; i < obj.multiplierUpgrades.length; i++)
        {
            this.multiplierUpgrades[i].level = obj.multiplierUpgrades[i].level;
        }
        for(let i = 0; i < obj.powerUpgrades.length; i++)
        {
            this.powerUpgrades[i].level = obj.powerUpgrades[i].level;
        }
    }
}
