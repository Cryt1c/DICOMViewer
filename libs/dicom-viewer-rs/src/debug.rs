use tracing::info;
use web_time::Instant;

pub fn timeit<F: Fn() -> T, T>(f: F, description: &str) -> T {
    let start = Instant::now();
    let result = f();
    let duration = start.elapsed();
    info!("{} has taken: {} ms", description, duration.as_millis());
    result
}
