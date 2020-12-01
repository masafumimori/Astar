(function() {var implementors = {};
implementors["lockdrop_oracle"] = [{"text":"impl Freeze for Config","synthetic":true,"types":[]}];
implementors["ovmi"] = [{"text":"impl Freeze for AccountId","synthetic":true,"types":[]},{"text":"impl Freeze for Range","synthetic":true,"types":[]},{"text":"impl Freeze for CompiledPredicate","synthetic":true,"types":[]},{"text":"impl Freeze for ConstantVariable","synthetic":true,"types":[]},{"text":"impl Freeze for IntermediateCompiledPredicate","synthetic":true,"types":[]},{"text":"impl Freeze for AtomicProposition","synthetic":true,"types":[]},{"text":"impl Freeze for AtomicPredicateCall","synthetic":true,"types":[]},{"text":"impl Freeze for InputPredicateCall","synthetic":true,"types":[]},{"text":"impl Freeze for VariablePredicateCall","synthetic":true,"types":[]},{"text":"impl Freeze for CompiledPredicateCall","synthetic":true,"types":[]},{"text":"impl Freeze for ConstantInput","synthetic":true,"types":[]},{"text":"impl Freeze for LabelInput","synthetic":true,"types":[]},{"text":"impl Freeze for NormalInput","synthetic":true,"types":[]},{"text":"impl Freeze for VariableInput","synthetic":true,"types":[]},{"text":"impl Freeze for SelfInput","synthetic":true,"types":[]},{"text":"impl Freeze for PredicateType","synthetic":true,"types":[]},{"text":"impl Freeze for VarType","synthetic":true,"types":[]},{"text":"impl Freeze for AtomicPropositionOrPlaceholder","synthetic":true,"types":[]},{"text":"impl Freeze for PredicateCall","synthetic":true,"types":[]},{"text":"impl Freeze for CompiledInput","synthetic":true,"types":[]},{"text":"impl Freeze for LogicalConnective","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Freeze for AtomicExecutor&lt;P, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Freeze for BaseAtomicExecutor&lt;P, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Freeze for LogicalConnectiveExecutor&lt;P, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Freeze for DecidableExecutor&lt;P, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Freeze for CompiledExecutor&lt;P, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Freeze for ExecError&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for AndPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for CompiledExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ext as ExternalCall&gt;::Address: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for ForAllPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for NotPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for OrPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for ThereExistsPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for EqualPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for IsContainedPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for IsLessThanPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for IsStoredPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for IsValidSignaturePredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for VerifyInclusionPredicate&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Freeze for Property&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for AtomicExecutable&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for LogicalConnectiveExecutable&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for DecidableExecutable&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Freeze for BaseAtomicExecutable&lt;'a, Ext&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Freeze for PredicateCallInputs&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for AtomicPredicateCallInputs","synthetic":true,"types":[]},{"text":"impl Freeze for DecidablePredicateCallInputs","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Freeze for LogicalConnectiveCallInputs&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for BaseAtomicPredicateCallInputs","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Freeze for CompiledPredicateCallInputs&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for CompiledPredicateSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for ConstantVariableSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for IntermediateCompiledPredicateSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for AtomicPropositionSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for AtomicPredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for InputPredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for VariablePredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for CompiledPredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for ConstantInputSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for LabelInputSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for NormalInputSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for VariableInputSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for SelfInputSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for PredicateTypeSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for VarTypeSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for AtomicPropositionOrPlaceholderSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for PredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for CompiledInputSerializable","synthetic":true,"types":[]},{"text":"impl Freeze for LogicalConnectiveSerializable","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Freeze for VarValue&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_contract_operator"] = [{"text":"impl&lt;T&gt; Freeze for OperatorHasContracts&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ContractHasOperator&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ContractParameters&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Parameters: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Parameters&gt; Freeze for RawEvent&lt;AccountId, Parameters&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameters: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultParameters","synthetic":true,"types":[]}];
implementors["pallet_custom_signatures"] = [{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Freeze for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Signature: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for EthereumSignature","synthetic":true,"types":[]}];
implementors["pallet_dapps_staking"] = [{"text":"impl&lt;AccountId, Balance&gt; Freeze for Nominations&lt;AccountId, Balance&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for EraStakingPoints&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Freeze for UnlockChunk&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for StakingLedger&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for VoteCounts","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for UntreatedEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for NominatorsUntreatedEra&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ContractsUntreatedEra&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ContractVotesUntreatedEra&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Bonded&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Ledger&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Payee&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ErasContractsParameters&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ErasStakingPoints&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ErasTotalStake&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for TotalStakes&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for AccountsVote&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ErasVotes&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Vote","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for RawEvent&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Currency: Currency&lt;&lt;T as Trait&gt;::AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Lookup as StaticLookup&gt;::Source: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for StakingParameters","synthetic":true,"types":[]},{"text":"impl Freeze for BasedComputeRewardsForDapps","synthetic":true,"types":[]},{"text":"impl Freeze for VoidableRewardsForDapps","synthetic":true,"types":[]}];
implementors["pallet_operator_trading"] = [{"text":"impl&lt;AccountId, Balance, Moment&gt; Freeze for Offer&lt;AccountId, Balance, Moment&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Offers&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for OfferState","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Freeze for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_ovm"] = [{"text":"impl&lt;CodeHash&gt; Freeze for PredicateContract&lt;CodeHash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CodeHash: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Freeze for Property&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Hash, BlockNumber&gt; Freeze for ChallengeGame&lt;Hash, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Schedule","synthetic":true,"types":[]},{"text":"impl Freeze for Config","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Hash&gt; Freeze for AtomicPredicateIdConfig&lt;AccountId, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for SimpleAddressDeterminer&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for CurrentSchedule","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for PredicateCodes&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for PredicateCache&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Predicates&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Games&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Decision","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Property, Hash, BlockNumber&gt; Freeze for RawEvent&lt;AccountId, Property, Hash, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Property: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for CallContext&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for PrefabOvmModule","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for OvmExecutable&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for PredicateLoader","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ExecutionContext&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for PredicateOvm&lt;T&gt;","synthetic":true,"types":[]}];
implementors["pallet_plasm_lockdrop"] = [{"text":"impl Freeze for BitcoinPrice","synthetic":true,"types":[]},{"text":"impl Freeze for EthereumPrice","synthetic":true,"types":[]},{"text":"impl Freeze for LockCheck","synthetic":true,"types":[]},{"text":"impl Freeze for BitcoinLock","synthetic":true,"types":[]},{"text":"impl Freeze for EthereumLock","synthetic":true,"types":[]},{"text":"impl Freeze for EcdsaSignature","synthetic":true,"types":[]},{"text":"impl Freeze for DustyDurationBonus","synthetic":true,"types":[]},{"text":"impl&lt;AuthorityId&gt; Freeze for Claim&lt;AuthorityId&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ClaimVote","synthetic":true,"types":[]},{"text":"impl&lt;DollarRate&gt; Freeze for TickerRate&lt;DollarRate&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DollarRate: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::DollarRate: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Lockdrop","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, AuthorityId, DollarRate, Balance&gt; Freeze for RawEvent&lt;AccountId, AuthorityId, DollarRate, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;AuthorityId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;DollarRate: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AuthorityId: RuntimeAppPublic,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::DollarRate: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::AuthorityId as RuntimeAppPublic&gt;::Signature: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasm_rewards"] = [{"text":"impl&lt;Moment&gt; Freeze for ActiveEraInfo&lt;Moment&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ForDappsEraReward&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ForSecurityEraReward&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for HistoryDepth","synthetic":true,"types":[]},{"text":"impl Freeze for BondedEras","synthetic":true,"types":[]},{"text":"impl Freeze for CurrentEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ActiveEra&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ErasStartSessionIndex","synthetic":true,"types":[]},{"text":"impl Freeze for ForceEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Releases","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Freeze for RawEvent&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;N&gt; Freeze for FirstPlasmIncentive&lt;N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;N&gt; Freeze for CommunityRewards&lt;N&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SimpleComputeTotalPayout","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Freeze for MaintainRatioComputeTotalPayout&lt;Balance&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for DefaultForDappsStaking&lt;T&gt;","synthetic":true,"types":[]}];
implementors["pallet_plasm_validator"] = [{"text":"impl&lt;T&gt; Freeze for GenesisConfig&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for UntreatedEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ElectedValidators&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Validators&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for RawEvent&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasma"] = [{"text":"impl&lt;T&gt; Freeze for Deserializer&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Freeze for Range&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, BlockNumber&gt; Freeze for StateUpdate&lt;AccountId, Balance, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Freeze for Checkpoint&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, BlockNumber, Balance, Hash&gt; Freeze for Exit&lt;AccountId, BlockNumber, Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, Hash&gt; Freeze for InclusionProof&lt;AccountId, Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance, Hash&gt; Freeze for IntervalInclusionProof&lt;Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, Hash&gt; Freeze for AddressInclusionProof&lt;AccountId, Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance, Hash&gt; Freeze for IntervalTreeNode&lt;Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Hash&gt; Freeze for AddressTreeNode&lt;AccountId, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, BlockNumber&gt; Freeze for ExitDeposit&lt;AccountId, Balance, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for SimpleAddressDeterminer&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Hash, BlockNumber, Range, Checkpoint&gt; Freeze for RawEvent&lt;AccountId, Hash, BlockNumber, Range, Checkpoint&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Checkpoint: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Range: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Currency: Currency&lt;&lt;T as Trait&gt;::AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]}];
implementors["plasm_cli"] = [{"text":"impl Freeze for Cli","synthetic":true,"types":[]},{"text":"impl Freeze for Subcommand","synthetic":true,"types":[]},{"text":"impl Freeze for Extensions","synthetic":true,"types":[]}];
implementors["plasm_primitives"] = [{"text":"impl Freeze for ReporterAppCrypto","synthetic":true,"types":[]}];
implementors["plasm_rpc"] = [{"text":"impl&lt;C, F, P&gt; Freeze for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for GrandpaDeps&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Freeze for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["plasm_runtime"] = [{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for EpochDuration","synthetic":true,"types":[]},{"text":"impl Freeze for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Freeze for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Freeze for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Freeze for BondingDuration","synthetic":true,"types":[]},{"text":"impl Freeze for TombstoneDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for RentByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for RentDepositOffset","synthetic":true,"types":[]},{"text":"impl Freeze for SurchargeReward","synthetic":true,"types":[]},{"text":"impl Freeze for WindowSize","synthetic":true,"types":[]},{"text":"impl Freeze for ReportLatency","synthetic":true,"types":[]},{"text":"impl Freeze for MedianFilterExpire","synthetic":true,"types":[]},{"text":"impl Freeze for LockdropUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Freeze for MaxDepth","synthetic":true,"types":[]},{"text":"impl Freeze for DisputePeriod","synthetic":true,"types":[]},{"text":"impl Freeze for GetAtomicPredicateIdConfig","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumTokenAddress","synthetic":true,"types":[]},{"text":"impl Freeze for NickReservationFee","synthetic":true,"types":[]},{"text":"impl Freeze for MinNickLength","synthetic":true,"types":[]},{"text":"impl Freeze for MaxNickLength","synthetic":true,"types":[]},{"text":"impl Freeze for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Freeze for ChainId","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionConverter","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for EthereumFindAuthor&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for HostFunctions","synthetic":true,"types":[]},{"text":"impl Freeze for HOLDERS","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()