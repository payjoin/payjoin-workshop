/// Every failure the demo wallet can produce, flattened to a message the demo page can
/// render verbatim. There is nothing for a caller to branch on beyond the variant.
#[derive(Debug, thiserror::Error, uniffi::Error)]
pub enum DemoWalletError {
    #[error("fixture is invalid: {msg}")]
    Fixture { msg: String },
    #[error("psbt is invalid: {msg}")]
    Psbt { msg: String },
    #[error("coin selection failed: {msg}")]
    CoinSelection { msg: String },
    #[error("signing failed: {msg}")]
    Signing { msg: String },
    #[error("transaction could not be decoded: {msg}")]
    Decode { msg: String },
}

impl DemoWalletError {
    pub(crate) fn fixture(msg: impl std::fmt::Display) -> Self {
        Self::Fixture { msg: msg.to_string() }
    }
    pub(crate) fn psbt(msg: impl std::fmt::Display) -> Self { Self::Psbt { msg: msg.to_string() } }
    pub(crate) fn coin_selection(msg: impl std::fmt::Display) -> Self {
        Self::CoinSelection { msg: msg.to_string() }
    }
    pub(crate) fn signing(msg: impl std::fmt::Display) -> Self {
        Self::Signing { msg: msg.to_string() }
    }
    pub(crate) fn decode(msg: impl std::fmt::Display) -> Self {
        Self::Decode { msg: msg.to_string() }
    }
}

pub type Result<T> = std::result::Result<T, DemoWalletError>;
