const data = [
  "NLBLfrNNLvqwbMfDqSjSzzSJjjggcdVs",
  "lTRGPPZnRRHszcsZdSsccZ",
  "CFTTFtFHTtCtDDzrmBtrBD",
  "BJldgBWnRgWNWtllSlWShMcLcVSvVjbVVVvDVVVL",
  "HFGFwqQPQGwHrTFpwmThMbDDVcVmLvvshj",
  "HrpHrGPZZCQrfqlNdtMlzfMltlgn",
  "hQLhBtBtQNQjBjNLvtLjzLJpWbjJdppSwjpCCplllJdj",
  "FGFsmccSPTVPfVVHpJJgwlJwwWJWpCmR",
  "sFPfPFHZTHScnzBttqzvQzqZ",
  "MNTGMTnGWvTwwwnZhNZnWDPPdSjqsSPWjmBCSBWS",
  "RJrtVfRlLrfHgblHJVBjqqFmjCdBJjDmJdSD",
  "tgRftftRcRLftrpHpflHlctVwNNvZNcTwZnznQzwTzmhQwQh",
  "sQPpQpQhnlNsJpJSQphHcZffLfgLHSfHVHHFZZ",
  "zBCvrrWzTwqzcbtbqCbrCCwWLMfVVmmHVfqHFHFgGHLZGmVG",
  "rvvjBzTjrwQRcpjNsRss",
  "RrnNWJJNrplbLJBBWWZstVpmtZftptfmfsMM",
  "GHjnwndzGcqjGgqtfMsvfsMmMvZZ",
  "cQgwHTPjPwGwjdHHTjwccQBDLlWNrLJLNrnWrBRBlS",
  "BBBQJGQslJtcGqfgHpPnfftwqw",
  "RDMLDWLNTLTTNjNgvdqbqRnwqbfwPRzbVHHV",
  "mgdNgdTSMWmSQsQsBQcFSQJr",
  "RqQhRpsdqnvdlPBfzdVlVJPM",
  "SSZsDmSmssGZbJVwPBSzBBMfCf",
  "LFFNGLgLHFWrWHFmLWrLWLrsQshqQnspNcRTjnpTtjRRjh",
  "DshNcgmDVClpCfRs",
  "TnZjTWrtrqtWnGTrbqqTTZZwMpSVRSflRMflMjRCSfpJMSJl",
  "wHbGHrWHWrbnbFtTZcLzLgHzzgcmpNzzzz",
  "hfWQdhQHmPWhqdhQqpdQqWtzvwtCMCRvNCwNzMtNsHsz",
  "lBLnJZLlFBlZjGFbVjjlJRSMzzSszzpGpstSpvMNtN",
  "rVZVgZVgLnjFVlVQDDfhcfmWrQdTfp",
  "zqTrVZvDLGdMMLtcpR",
  "bClsCmQbjFtjljllntsGjGWPdcRWhMppPcpddR",
  "mbggmBtQtlVqVzgrzDzv",
  "LtpnGnGNFtbGntbbQPhTlRpRTzDlcClPCl",
  "mSZHgZMhZVmWPHccllzPzcCP",
  "sZhWvSsBqmBSqmgMqWZjQjfjrLbvGbtNFjvLtb",
  "TvMZMTTzWHNNFPsNbvDG",
  "dhVmwfhcnhRnRfdlGsDNNGqNLFNNTGdq",
  "JTcVVTlThmfmrrWQZHMrpZtJ",
  "zGMBMzPNDNcNZLBzcmLvbHltDbWjbthhqvvHtg",
  "rdJSQSTfQrRnsRfJJQHhWgbhtQblgHWgWH",
  "nTrlpVfSpswsrsTSdnRsfnJJPBZmMBcBZZGmZBmBMmcCNzpC",
  "nfzcnSlRJJScTZTzJZnsNjNrHQqrWBjsBRdWBr",
  "LgHwDLwmMDCphttsqDjNNssBGNsGQB",
  "hvwgwvghPbpggLtmmbCmSfzFfVSlZnncJTPZHSnF",
  "DbsnzDCsBPHDQHFD",
  "GGcWWnrGSjBMrMlhfr",
  "GNpqddqWLqdScWqcVnCswmzJRVzVVbJp",
  "NzPpPBppzjbpCrrQhggqvwwqRwrwQl",
  "SDddnLcDLncghQBWvvgR",
  "tfSLLBmmmDJGFDLJmMMsZZssZzPTzjTpzZzP",
  "RRCrJbSfNrRQjvvHppmpbZvv",
  "llhVGGGMPVTMlTdVzcPVHZmvqpvqZFhHFqmjFrHF",
  "ccGlzPMVwBGfBrLCDJrDLf",
  "VcVGZZVMlncjTqcjsWWf",
  "hzJRtRphQJtBRhzFpdrfrqrFsqswWrmsTmFr",
  "LJHzBQJRhPHpzQWBRzphHRQSMZlnbGMVMVnLMGbDvvbMVl",
  "sVdHFFmhPGVTdFmVFsgPdBBtBZjSpGSvtpBztpGjzt",
  "HCHwlncHfpnjSSpBzz",
  "wWQwlWWlfWcQMfCrfwTRDrHsDmPDgFVTRVsV",
  "qllqNlmglNNdzLDddGGNSHScMHMWPcPSqptQSSHJ",
  "bhhbChVsRjwGRCbZCcSZPpPMMWJSPMtPpW",
  "BhTVBsbrhCTrhfbrCTTTRRfngzrnnLvdzgGvNzdzLNvrLm",
  "nNwNPnjzPsNRHpFDHLLsLVHF",
  "MSBMgMZmWqScCFGWWDFGVvwW",
  "JBghBwTrgchrTbQRjztQPQbfhQ",
  "PPBpBHGfBHGpRRPDLMmnscRLdnzmdw",
  "bMFVTNVTVjbbrCWCsndsDwjDzwmwsnms",
  "QQbJrCCMWCVCVMShHGPQlHhghGlt",
  "dBQMdJQHbWMWHZLRRsmPVJmppJqG",
  "FSrzFnPnGNrlsGps",
  "FvwTnCzDznTwzhtHjZvbdbjQfZgPMv",
  "gJjVQzLgLvPJdMrsDsQtdQrw",
  "hBpmWfSfHCWNfmSppMrDDMwwMbDMlMcbcB",
  "fhphGpfNCpNSNRhGhqPVvjvjjjTzVRPzLr",
  "TsnznnrZsNwGNrbWbSvVgWzVSbgv",
  "mBBFBFQFBhSHggVnmvfW",
  "BJFcRLFFBhLpMNcdNCscZNnqld",
  "vqwQGZNSwNQHQQZNSwvpwMdlnMfBClZBTzBnTfTJCB",
  "sbcrjscccmPmrtFRrtcsPssmVJBfTCldnJJdVzMlBnBJTBlR",
  "tbDmhtdDrPjbDcrDWSHGqQqvHpWSgNHh",
  "VVWSwCpWTVWWwVbbvPJDwvDtwtMttLtH",
  "nfNLcNsfZNnGggZNNqGlMPPDDrlvGHHrtPJMHP",
  "fhgqfznczcjpVRjFLSLz",
  "pvcBCrPrcPBpTccGjrQhQdwMsqdGQddswqhS",
  "FggLnnFzzNFNmstlShMVwQtsgq",
  "RnbzHmNfRHmmnLzRnLDRZHRrCPJBvCWWpcjvJpwWfjwvrc",
  "HfdzzrGfRrQqrGVnznQvgjcjhhlMTlFjchFMVL",
  "swwWWBPNwPwZbvPMFTLjTlgP",
  "BJBJJDZtSrJqnFFfFJ",
  "lqqMSMBMttLMjtHjqjrdBnSfcpfwCTGbCffwCcwbSfTcJf",
  "gVFhVRZgVzJshFZVTbbFfvpcwCTCfbcG",
  "hRWZzRVVZmsWJVRQsQmqqndQrnqnQLqnQqtBlr",
  "SgPhCGGzczlCDVDWrlTL",
  "jvdvFvjqwfdrNfNDlzLzRW",
  "jzjFHnvdtdnmHZttqmbFdFqFsSBJspcgcSPQpsQPBPgpgmSG",
  "qqmQFmrbbWWrtqTVVrgLJTzzNzrJ",
  "nCjMGncHMJvzmmHmVV",
  "DpjPDGwnmDhbwQqZtqqW",
  "JlTTLLMRqlMlJMJgBLLnnCZCFrrrdTGrjPjGFr",
  "vwVpHVHVwvHmQVsFFPZQrjrrrZPNdn",
  "wtvmtwvpmbwVvssPflSBlRBqLMlLJBzSLb",
  "rtrTtBwTsfjZrnqJQplNTcqqlvQT",
  "sHzdWFzSzmGDDRVGVDGHWVhvcLLpNpqJCQqLhClhlcvqpC",
  "VRbmRmRHGdsnggbPMMftZB",
  "LMhtCSSftfTzdCdMhSCdMsQGQbGnbGQQMQggDNgR",
  "FjFHWJwJjRNvQggwnDsm",
  "plBVRRqWRHVHWFTdTthTLCfzflzh",
  "VjVdrHFWPmTjRGSRGq",
  "DMWMZDncQDcfpQzmTQTSQRGTGqNz",
  "WMnsCZJCffDnfCfvnZCPhwVrHBVrBlVHrhswLh",
  "TCZltglCZWQsMhqRHhsrHC",
  "vbbNBbGBmNLzczNmNjrRVbhqHMsVqwHVRwqH",
  "mzBSmzDLvPDPzcLPvGzWWSnsJstWlSsSlddWZJ",
  "nlFJZTlBbFBVZldFnlZlCQvQrsMQzzsCdCLszvLD",
  "hPwgVqSwmRcgSRmWgSwmsfrLPssLvQQfDPDvfMfD",
  "htSwtWHWVRNtWmwgtnJplnbFpBbNTnBTFN",
  "vnhBfSSvRttPJnlctl",
  "frHVDHFwfDLVzVlJMNTHllJHMNlZ",
  "bGGFFbqVLVVbzrFwGfdgFdwvhpCqmBpRqWpBpQpSSpSQSm",
  "RMBMMZBBmmmhZmPjTZhZRPnNQvwWfcSvDfQWBSfdQSNdDc",
  "LHzlVGHqVGzHGzsbCbqglbJddCcvJNDDvdDCJSQvWfwf",
  "HlzrHHgsqbHsVGHqbsGsbbsqFmmjnTTFmnjmRQRPFTFPZtrj",
  "LSLWRMLrLHqqwCBJqCstsG",
  "vbQfPjndQnbcQfmndRwttBNZRsGdsCBJ",
  "bmcnTfbvvPRRRFcmfhjHgzMrSrSMSLzSWgVhML",
  "cqWNtsdsWdlsnBsDJwZJSzFFBZ",
  "RhfvggPfffbVbfPmpMvRRFrZDFFbzDDZZrHwJDbwzb",
  "QhRgvpTVpPgJVGTWWNcTtqNLtG",
  "nppPsSPtPZtFdSWdvFvSnnPscRjjHRTLLjCmRLTmCCscrRcc",
  "wwGqDqfMrGqlhllqhhNwzGNTjCRTmRLTHzJjzBmmRmjCLc",
  "qrblfrVwGwbhwqghfqVhNMhtWSvFdPdQtQdgtWpvWPQWQv",
  "cLJvcccHNcLDwCdRDvjdDR",
  "ttPChbqhZmtWGCtZQwBdsQPQdwwsddQF",
  "WnqbbgGVZCZnnlWhCVtbtVgMMrJLLJNrNcHMJNJTJNMp",
  "vLvWghFhBWqGsVTV",
  "JdpdmbrBmsQGGlVqdw",
  "CJZMHPMZJHmzCnZHHrMjSvcDLDccNSBCDDFDjj",
  "mDgnmRVmqgCSScsVllCj",
  "HLTTMTHZQjZzTzprTGPwtcdlLcllWllWtCSwld",
  "QMHHPzNrQBQGNHzQqbjnBbBbmbfjbqjb",
  "tgPNgzzsSPhjSgbPztSbpDJZRJDTRLTTpRHpNRHZ",
  "crlfGGFlBGBrBcrnFlrFFFCrLpHHJTcLRJJVJvDHtHZRDDRR",
  "tFFtrdmGffnndmzhbWPgzPdsWQPW",
  "JHhvgvzJhBGSLHhgBBSBHzdBflDfllTqLlwLqflfMcctCcfl",
  "RjWQWrnjpjjdNQmmNNWZWpCZtqtDtMwwwcwtcDqcTDqC",
  "PpNPjQspmWpPWRWnVQQpQsWVvvggJBvBSGGdJVhJSJBFdb",
  "FrPTcrCGbcTCChrwNMRDMRvWRdHvzVRVTR",
  "LJmQSmQfJnssmjsHSRFHSHzdVzSFHV",
  "nQtgssgfstjLnmplttgFLLPPpGBrcrchBhCbhhqwPPCC",
  "qFtZtFzstvvPvqttNrCJFWJRFCJFRRWR",
  "ffBBfjQdmdQBfQfmLVQRPRpNNCgPNNRThdWPrr",
  "fQVQlHnBQjBLjlvDqsvPqHMsctSb",
  "rqhJnTTJqTchnTdhncmmgMVqtSBsBspgBtHLLWsBBWpWBHSH",
  "bPldNljGZjNCbFCbwwGDWtBDDtsDtLwt",
  "NjvlvvzQFFQhQqdQnMTM",
  "DJHGghhFhHgsGgThrtrQWBPPJWWCzzzP",
  "lTpffNTdZfrcwlCwCrWz",
  "dmvdvffSSpjTLjFhFMRRbnRbjj",
  "LfSqfmvfWPBPdljNNFVFzVJLNjJz",
  "QZQnQcpMhwhZchQnwbvCCDNDCNpzpFsJpsRsRj",
  "rchgQnvHHhQgvnwHGTffdmdTddTGfWHW",
  "SzZGtmTjgzQCpJwpVqrVzz",
  "NWddPllPDvdbccgcHJLCpClFLLVpFLLVLV",
  "bbdRRWDNdPfgfWPWhdccNddRmBQTSGTTTZnmBQZjmsmnhGst",
  "LgvFffmfVFczCWWmWCSh",
  "MbwbTBDwbZtwBDMhSCGhscWSwVCsSw",
  "QMtdQbqtbZTjVbMtZDMgffnFnJpFvrvFprgvgq",
  "pztdqqzCrpvFqpJQwCvWBRGRWLWcWNBsNNQcNR",
  "HdbjSbVhfhcRscRmNm",
  "MDPffbjbjgFgzCZdFdgt",
  "BmDQZbmmfbmbvhvhbgCsCl",
  "GqVqMHwpGTLHLzwqJlCgsgShhvGvJgGS",
  "LTpzpLFprpfmNrBBlfQP",
  "RjRhBqZbwBbjcwgjPmRtZjZfWFfFznWQNVzQFQQnFzWmMN",
  "vpTPDCdpPSpTSSMzNHzMvFQNNWNM",
  "PDCpLGlGPdrlqRqbqbBhRLqR",
  "PmHZWmJzzzppHfHdHfddDMDLhRbMRgRMNNnPgNMM",
  "TCwBCSSjwqwVqQldTSQTtjVhtbbhbgLLbLLbMggMbDRttc",
  "QBrwFlqCfdzHdvzF",
  "GvgGvgfvlzlHGQWRjGMpjZLjZpGW",
  "DVsqJtnDsJTsTqjpLTdcmWWLpTMp",
  "NNqVhsPrrhqnJNnJNzgBvvjHCCPSjCvQQQ",
  "pqnswpqrrtqrnMsMPMqzVfgGzHBVGVftfBGzGG",
  "QWFQhhmDhJDmJJhhJLcTcfHVvTlTFTfVvgzG",
  "ZDZLddWWSgDCggChRSMPspMjpnqjMPjj",
  "MGwMFLFfssfffcGcDrnCllZtnHQCnDCZWD",
  "dbTvTThtvVVVNWVHClWQzzlQ",
  "TjbgBqTBvBvjRvbqvRmPGMcwSPJPfstSsfMBMf",
  "VtCjjqgwvhCCQdSPJJdGnwwLTT",
  "brrBsmNWlzBpSDcpSWLcWD",
  "SSFsrrrBrCqHVVQFjj",
  "LQQNLgvNDnNPHPDQjtGjnmjttBjVhSmJ",
  "sbWfsMFwdCpdCdwWJVVSltVJlLSlLSft",
  "TFcdMTbpdbwdwgTDQLgDNNrTNz",
  "gfgSsnmnWnhhctcJ",
  "ljjMfwwRTNbRqNlzVzjbtDvPvchvPCccChtJtPVW",
  "GjwpwMpbjMbRMNwqzwpQgQQBfdHfSFrBmQBg",
  "FmcmmTTMdPTGHjtGGnctcN",
  "DgqzTqCgDgpZTrqhSbSpzZfpnHjHlnbtbHBGnGjtQHnlNGWt",
  "zppLhfZTfDqsLMPdMVRwwM",
  "RtsMZJSFRWbRsJbFnFzVBpBqgdRdGzGBpDDj",
  "cTmvrlMQLHLllrhwlmfdQqBpdVpDqGdVpjVzBq",
  "wvTfcHhhmHlhTNLFCnFnNnFnFnMFZJ",
  "grjsjJhhNscgJFgPBnbHwLsRHzHfRLbH",
  "ldMMSSvqtSMGmSSMqLRnlRwbrLlRLRRWwL",
  "VtvDdTGGGCvMDMDTvdjhQjZppPNrJVpZPVFg",
  "wctlscwwBTDnJcLNLHDN",
  "bhhMnhqjzFRjjjPdNDDSvLdJ",
  "MWzMzbrZZZmWQzhWbMhwlspstmnswswllBCgpG",
  "rzmddBcmgFjRzSHHDR",
  "vqpgbnGpqwgbpHtbtRjHTjTfFH",
  "WWqCwvCqCJvCJvwpqvMvnvJMdPgZQQdZcWhBBBrPlLlmdQdm",
  "ZdHTtNPNPSRBbFjjTTsr",
  "WmDhGggmgWWJcZmMhVllzjJCrbjFzbsFFRCj",
  "MMGDmMGGgDGgnWGWpNnvSHStLnwffZtHnw",
  "ddZqRdqjvjZdndlfjwZQQCzmqcHLzzTTHTHzchHTmT",
  "BPVPBBWVLbFFrWgJLpNHcPSHCPSCSCChcCPHTH",
  "VFNbBJrGGJVZGGLwQGnjQL",
  "NllFnzNNnNnNzmrHmDFGLGcccRGjGwHChGwwGh",
  "StMZgPdBgbbBLLvCwCvgGwwj",
  "PsfPtBJMtPZMJPbZVVPPMMDnjDlNlmrnmWnmqzpqmVFm",
  "mGGCppgGWWgmGBzMVzBBBbBS",
  "HnrRdvZvTMtSBtbZ",
  "rHwRrjlrRwrnJrCsCDlLWCqcmCMM",
  "zHhDNmDMNNJHfMNJzjsdvvsvbvjGdCGW",
  "tVwttwwVVFBSFSZqSLjsqLdLCWCvGWcdLs",
  "ZwZgwgpBFGlHgNQmGM",
  "TNqhqvqFNWFrlqFqtDTrhTSTbLfjmjzbwMmMbjzLPDwGLPPP",
  "scVRRQHVQVVHcRHpVgJJCRHMMZGMzCwwLZPZGMMCzLGwZw",
  "dHsnQdHHdnBHspJRsVppFlNTSGGNBWBtTShNTFvG",
  "hdZthMghfbbHCgQgBp",
  "mLjTTjWrTrSCbZsLSbCS",
  "VVPJrjqcWVmrjcmWRWTZTPcWldMNqvhnhMFdvdMhfNdldGNM",
  "sFlsgtZFLFZzSZzpnQrJ",
  "DjRbcjRdBrpRQpMJMJ",
  "jNcfDqqfcDBbmqDFggpFCTpgCNhWWG",
  "LMGGbbpLcpVVbfcpcpdvPVQPmZzJZjqSjSjgZgzqZgzTmm",
  "BrRnBWrtRlhBjmqZCnqJgCSM",
  "FDWWrBHHBBDHhFHttrWFttNpfLppbfcGGsfcGsFfccpcMd",
  "jzHqjHLVqQQlHfzqlbbzqHQscvNsVrvnNZTtvNvvvcrGtv",
  "gJCSRwRpJRtNNSTstnTT",
  "wCMnFgnpCMPnJgpDQbqdQdQQLbzqDHfH",
  "MpqJWmqlNNHmmwwBLLvL",
  "QzFDFfdfQTtSGzTDVMdSFQDwHLBhHLjHjbTbHvLggccwHb",
  "VQfsSDfGftfsdGSDSSQSFssZJCCMlMWWZPWPJMZlRp",
  "lcqqhSsgTMgcqBBZnqZTBJJpdGpGVdRNMJHNGjRJdd",
  "VbfCmPbtttfwwWHdGGrjHPdrRrHN",
  "CffFFmwmDWmtCtvQbSVnTlBSDsqZhVBBSc",
  "gPZTgmwvcnqPzhnW",
  "GJVbDhpjsbWzjfNNNNMj",
  "DFCbrBJsFJpBhbVFJCtvTgmtRTtQQltmwm",
  "BLZgTJPqZzFgCGgCFlFF",
  "ljfcDvNDtHcftNdMCQnCRnhnGjCChG",
  "mVvSdDNDHlmHfNVlSWcSDmtpbpTzppwLPPLPPJLwTwBLPS",
  "FHRzMqvQHvndJnFlNdhZ",
  "fcjWWsjsSmmrgsGgjGcGWsPsnhZddffRdTtNDnZlnDnDThhT",
  "WSPcPsGPSRGCmLcGgpHCzBVqzbQBVpqwwQ",
  "PJzwjrVHzLPrZJHgSsNWbNbmNQtnLSSs",
  "hGhqpTBRRGFFpMpBqGpSNlQQmWlntDbmTQSsml",
  "MpcvMqBRhpFRNCcjwZwPZwJfwjHz",
  "QWJsVCQDbVWbprrWSZWFcmrS",
  "wMwvjRftMLhHfjhdMhRhjtMZrmrmZqBSpBSprvSpTzBTSF",
  "dLNNjhhhVDlNDspN",
  "MNmmtzlQPQmlttlQlHBGFFsHsPnGnFGWgs",
  "CwhhwVZcRVRcCRDWLDFHWWFGss",
  "hwdwdCwCZVSwZcrvhVwCJtbtQtpzmzQHvtpzQmmmpp",
  "CccMdVLJcnCVhCfmjGjlfwwwMwWG",
  "HDSbggDTNbRDHtTgrDpwmnGFfpGgfWfBFmlm",
  "HbDzvQNzHbQLnQddZCcn",
  "jWlqRjWwsqjHHqRDDPMPgpMLpgSMnggC",
  "VQvFfFbdTcfhbcvCpvPrnZgLLpSgLp",
  "PNQVbNTTcbdbfQdbmdVVGfbhBJlHWqGljJqBlqJJlsJJwqqR",
  "WFGnWBTrvtgnjBWsFWggTPlhSfmRSRhZMcSfhZZpRmtZ",
  "CdswHJHNsCbHLVVcZclphwcchfphZZ",
  "LdDCLHsHzbNNNQDsJLNGgPPBvFzjggPrPTrrFB",
  "pGFwwLTPjDcSCPpSdsqtMRMDdVQdVVQz",
  "JBJjZgWgJHvHJgJJbBhNJvgZzsQVRqzdfQQQMMBszRzRzRfV",
  "nlNZWZlJngbvNjgZhNvHhJvprcTclFCcTPSlTCcSpFcLrG",
  "PdHJVCbSJmSVHdLdHbsbsqRwnlDWhZnZccWqDwqDVw",
  "NvMFlGrQTvgpggFNwZhwWWhhqRWRhTqz",
  "gMjvtMpNMrfFrvlffgmdjLLjCmmLHBddLJBS",
  "zNrlzhJGdlHGHplCJQQVbLhRFRbccDSbVDLqRb",
  "WwmwnWjvjmjZPPFFFRDZqVbqqJBS",
  "tmjMJstnWnjvnsTnQMfrQMldrGlCrGfl",
  "MqWfZlpjMPBgffgPNNQnVnnqRsNVLVmR",
  "TcwGCTSvthpzCCTNVnsQVSnRnRQnNn",
  "TbrpDvvCvCwTGDzvzhpzDzljHBZbHWZgHPZJZjJJHfPf",
  "DWNNQQHRpsRWDQPQqHqqgJBCsjjsFFFngBzgjJzl",
  "tMhMwTrTDLMdmMLtMMrbmVbZhJJnnFCCjnlJjjjjBzFBgZ",
  "ttTtDmbfqWcWfqPp",
  "QhvTQqggFsmvjsFTmqZrzzwZrHnwpnplpZ",
  "WCJVGCSLtDPPtHDbHDbdpnrMnMrrpwlZrwpznLpl",
  "VVJbbVfStVHJJVtGmvsfjvssFFTvvsQj",
  "pBCqCqhWjpnWCnffJDjfWzJBZdcvwcPdvJvJcgcrdGdvggrv",
  "tlhbHbmNTbQgbGRvbZGrcg",
  "tVFLQNVlmTmQLQhpzMCBzCpzjjFMnz",
  "qhWHwNqLHrLJjqgHddFchMdnnGnRhMcR",
  "pTzTPVfZQPffNVtVVZfptRGsRbbbbcDsMMZsMZMdRn",
  "CfzPVzCfPBzPBqvWqgBwjNLjjS",
];

const pointMapping = {};
pointMapping["a"] = 1;
pointMapping["b"] = 2;
pointMapping["c"] = 3;
pointMapping["d"] = 4;
pointMapping["e"] = 5;
pointMapping["f"] = 6;
pointMapping["g"] = 7;
pointMapping["h"] = 8;
pointMapping["i"] = 9;
pointMapping["j"] = 10;
pointMapping["k"] = 11;
pointMapping["l"] = 12;
pointMapping["m"] = 13;
pointMapping["n"] = 14;
pointMapping["o"] = 15;
pointMapping["p"] = 16;
pointMapping["q"] = 17;
pointMapping["r"] = 18;
pointMapping["s"] = 19;
pointMapping["t"] = 20;
pointMapping["u"] = 21;
pointMapping["v"] = 22;
pointMapping["w"] = 23;
pointMapping["x"] = 24;
pointMapping["y"] = 25;
pointMapping["z"] = 26;
pointMapping["A"] = 27;
pointMapping["B"] = 28;
pointMapping["C"] = 29;
pointMapping["D"] = 30;
pointMapping["E"] = 31;
pointMapping["F"] = 32;
pointMapping["G"] = 33;
pointMapping["H"] = 34;
pointMapping["I"] = 35;
pointMapping["J"] = 36;
pointMapping["K"] = 37;
pointMapping["L"] = 38;
pointMapping["M"] = 39;
pointMapping["N"] = 40;
pointMapping["O"] = 41;
pointMapping["P"] = 42;
pointMapping["Q"] = 43;
pointMapping["R"] = 44;
pointMapping["S"] = 45;
pointMapping["T"] = 46;
pointMapping["U"] = 47;
pointMapping["V"] = 48;
pointMapping["W"] = 49;
pointMapping["X"] = 50;
pointMapping["Y"] = 51;
pointMapping["Z"] = 52;

const splitString = (strToSplit) => {
  const firstHalf = strToSplit.substr(0, strToSplit.length / 2);
  const secondHalf = strToSplit.substr(
    strToSplit.length / 2,
    strToSplit.length
  );

  return [firstHalf, secondHalf];
};

const findMatchingChar = (str1, str2) => {
  for (let i = 0; i < str1.length; ++i) {
    if (str2.includes(str1[i])) {
      return str1[i];
    }
  }
};

let pointCounter = 0;

data.forEach((str) => {
  const [fh, sh] = splitString(str);
  const matchingChar = findMatchingChar(fh, sh);
  const point = pointMapping[matchingChar];
  pointCounter += point;
});

console.log(pointCounter);
