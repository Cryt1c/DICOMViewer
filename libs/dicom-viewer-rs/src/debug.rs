use std::future::Future;
use tracing::info;
use web_time::Instant;

pub fn timeit<F: FnOnce() -> T, T>(f: F, description: &str) -> T {
    let start = Instant::now();
    let result = f();
    let duration = start.elapsed();
    info!("{} has taken: {} ms", description, duration.as_millis());
    result
}

pub async fn timeit_future<Fut>(fut: Fut, description: &str) -> Fut::Output
where
    Fut: Future,
{
    let start = Instant::now();
    let result = fut.await;
    let duration = start.elapsed();
    info!("{} has taken: {} ms", description, duration.as_millis());
    result
}
